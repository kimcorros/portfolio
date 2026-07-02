<script setup lang="ts">
/**
 * Custom WebGL background — domain-warped fbm "liquid gradient" in the brand palette.
 * Dependency-free, mouse-reactive, dark, and respects prefers-reduced-motion.
 */
const canvas = ref<HTMLCanvasElement>()
let cleanup = () => {}

onMounted(() => {
  const cv = canvas.value
  if (!cv)
    return
  const gl = cv.getContext('webgl', { antialias: true, alpha: true, premultipliedAlpha: false })
  if (!gl) {
    // Fallback: let the global aurora / CSS show through if WebGL is unavailable.
    cv.style.display = 'none'
    return
  }

  const vert = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`
  const frag = `
    precision highp float;
    uniform vec2 u_res;
    uniform float u_time;
    uniform vec2 u_mouse;

    float hash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }
    float noise(vec2 p){
      vec2 i = floor(p); vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    float fbm(vec2 p){
      float v = 0.0; float amp = 0.5;
      for (int i = 0; i < 6; i++){ v += amp * noise(p); p *= 2.0; amp *= 0.5; }
      return v;
    }
    // Soft metaball-style falloff — the building block for the floating gradient shapes.
    float blob(vec2 pos, vec2 c, float r){
      float d = dot(pos - c, pos - c);
      return r / (r + d * 2.6);
    }
    void main(){
      vec2 uv = gl_FragCoord.xy / u_res.xy;
      vec2 p = (gl_FragCoord.xy - 0.5 * u_res.xy) / u_res.y;
      float t = u_time * 0.06;

      // Domain warping — makes the gradient feel like flowing 3D liquid.
      vec2 q = vec2(fbm(p * 1.4 + vec2(0.0, t)), fbm(p * 1.4 + vec2(5.2, -t)));
      vec2 r = vec2(
        fbm(p * 1.4 + 3.0 * q + vec2(1.7 - t * 0.4, 9.2)),
        fbm(p * 1.4 + 3.0 * q + vec2(8.3, 2.8 + t * 0.4))
      );
      // Warp field gives the shapes organic, liquid edges.
      float w = fbm(p * 1.6 + 4.0 * r);

      vec3 base = vec3(0.031, 0.039, 0.074);
      vec3 mint = vec3(0.431, 0.906, 0.718); // #6EE7B7
      vec3 indi = vec3(0.506, 0.549, 0.972); // #818CF8
      vec3 violet = vec3(0.690, 0.470, 0.990);

      // Three large, slow-orbiting gradient shapes float through the field.
      vec2 c1 = vec2(sin(t * 0.70) * 0.62, cos(t * 0.60) * 0.40);
      vec2 c2 = vec2(cos(t * 0.50) * 0.72 + 0.18, sin(t * 0.80) * 0.48 - 0.10);
      vec2 c3 = vec2(sin(t * 0.90) * 0.52 - 0.28, cos(t * 0.45) * 0.44 + 0.18);

      float wobble = 0.70 + 0.7 * w;
      float b1 = blob(p, c1, 0.40) * wobble;
      float b2 = blob(p, c2, 0.36) * wobble;
      float b3 = blob(p, c3, 0.30) * wobble;

      vec3 col = base;
      col += mint * b1 * 0.55;
      col += indi * b2 * 0.58;
      col += violet * b3 * 0.42;

      // Cursor becomes a fourth luminous shape.
      col += mint * blob(p, u_mouse * 0.6, 0.12) * 0.28;

      // Hot cores where shapes overlap → subtle bloom.
      float bloom = smoothstep(0.9, 1.6, b1 + b2 + b3);
      col += vec3(0.9, 1.0, 0.97) * bloom * 0.07;

      // Vignette keeps edges deep and content readable.
      float vig = smoothstep(1.35, 0.05, length(uv - 0.5) * 1.35);
      col *= mix(0.78, 1.0, vig);

      // Fine grain to kill banding.
      col += (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.02;

      gl_FragColor = vec4(col, 1.0);
    }`

  const compile = (type: number, src: string) => {
    const s = gl.createShader(type)!
    gl.shaderSource(s, src)
    gl.compileShader(s)
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      console.warn('[HeroCanvas] shader error:', gl.getShaderInfoLog(s))
    return s
  }

  const prog = gl.createProgram()!
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert))
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag))
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    cv.style.display = 'none'
    return
  }
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, 'p')
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, 'u_res')
  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uMouse = gl.getUniformLocation(prog, 'u_mouse')

  const mouse = { x: 0, y: 0 }
  const target = { x: 0, y: 0 }
  const onMove = (e: MouseEvent) => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 2
    target.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }
  window.addEventListener('mousemove', onMove, { passive: true })

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  const resize = () => {
    const w = cv.clientWidth || window.innerWidth
    const h = cv.clientHeight || window.innerHeight
    cv.width = Math.floor(w * dpr)
    cv.height = Math.floor(h * dpr)
    gl.viewport(0, 0, cv.width, cv.height)
  }
  resize()
  window.addEventListener('resize', resize)

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const start = performance.now()
  let raf = 0
  let running = false
  const render = (now: number) => {
    mouse.x += (target.x - mouse.x) * 0.04
    mouse.y += (target.y - mouse.y) * 0.04
    gl.uniform2f(uRes, cv.width, cv.height)
    gl.uniform1f(uTime, reduce ? 8.0 : (now - start) / 1000)
    gl.uniform2f(uMouse, mouse.x, mouse.y)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    if (running && !reduce)
      raf = requestAnimationFrame(render)
  }
  const play = () => {
    if (running || reduce)
      return
    running = true
    raf = requestAnimationFrame(render)
  }
  const pause = () => {
    running = false
    cancelAnimationFrame(raf)
  }

  let io: IntersectionObserver | null = null
  if (reduce) {
    render(start) // single static frame
  }
  else {
    // Only run the shader while the hero is on screen
    io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : pause()), { threshold: 0 })
    io.observe(cv)
  }

  cleanup = () => {
    pause()
    io?.disconnect()
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('resize', resize)
  }
})

onUnmounted(() => cleanup())
</script>

<template>
  <canvas ref="canvas" class="block w-full h-full" />
</template>
