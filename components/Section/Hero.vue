<script setup lang="ts">
const roles = ['Full Stack Developer', 'Vue.js Certified', 'Problem Solver', 'Laravel Expert']

onMounted(async () => {
  const { gsap } = useGsapAnimations()

  // Reduced-motion or small screens: leave content in its natural, fully-visible
  // state — skipping the entrance animation lets the hero headline (the LCP
  // element) paint immediately instead of fading in from opacity 0.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isSmall = window.matchMedia('(max-width: 767px)').matches
  if (reducedMotion || isSmall)
    return

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  tl.from('.hero-canvas', { opacity: 0, duration: 2, ease: 'power1.out' }, 0)
    .from('.hero-image-wrapper', { scale: 0.6, opacity: 0, duration: 1.2, delay: 0.2, ease: 'back.out(1.4)' }, 0)
    .from('.hero-glow', { scale: 0, opacity: 0, duration: 1.5, ease: 'power2.out' }, '-=1')
    .from('.hero-greeting', { y: 40, opacity: 0, duration: 0.8 }, '-=0.8')
    .from('.hero-name', { y: 60, opacity: 0, duration: 1 }, '-=0.4')
    .from('.hero-accent', { y: 60, opacity: 0, duration: 1 }, '-=0.7')
    .from('.hero-description', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero-roles .role-tag', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.4')
    .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')

  // Floating animation for the image
  gsap.to('.hero-image-wrapper', {
    y: -12,
    duration: 3,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })

  // Slow rotation for the glow ring
  gsap.to('.hero-ring', {
    rotation: 360,
    duration: 20,
    ease: 'none',
    repeat: -1,
  })

  // Pointer-driven parallax depth — layers respond to the cursor
  const section = document.querySelector<HTMLElement>('.hero-section')
  if (section) {
    const layers: Array<{ sel: string, depth: number }> = [
      { sel: '.hero-canvas', depth: 14 },
    ]
    let raf = 0
    section.addEventListener('mousemove', (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = section.getBoundingClientRect()
        const cx = (e.clientX - r.left) / r.width - 0.5
        const cy = (e.clientY - r.top) / r.height - 0.5
        layers.forEach(({ sel, depth }) => {
          gsap.to(sel, { x: cx * depth, y: cy * depth, duration: 0.7, ease: 'power2.out', overwrite: 'auto' })
        })
      })
    })
  }

  // Scroll-driven depth — the hero recedes in 3D as you scroll past it
  gsap.to('.hero-canvas', {
    scale: 1.12,
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
  })
})
</script>

<template>
  <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Custom WebGL flowing-gradient background.
         Overscanned beyond the section so the cursor parallax never exposes its edges. -->
    <div class="hero-canvas absolute -inset-[12%] pointer-events-none">
      <UIHeroCanvas class="w-full h-full" />
    </div>
    <!-- Fixed scrims (not parallaxed): keep text readable and fade into the next section -->
    <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_65%_60%_at_50%_52%,rgba(11,13,23,0.62),transparent_72%)]" />
    <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(11,13,23,0.35)_95%)]" />
    <div class="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-dark to-transparent" />

    <div class="container relative z-10 pt-24 pb-20">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Left: Image -->
        <div class="hero-image-wrapper relative shrink-0">
          <!-- Glowing backdrop -->
          <div class="hero-glow absolute -inset-6 bg-gradient-to-br from-accent/20 via-indigo/10 to-transparent rounded-full blur-2xl" />

          <!-- Dashed rotating ring -->
          <svg class="hero-ring absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]" viewBox="0 0 200 200">
            <circle
              cx="100" cy="100" r="96"
              fill="none"
              stroke="url(#ringGradient)"
              stroke-width="1"
              stroke-dasharray="8 6"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#6EE7B7" />
                <stop offset="100%" stop-color="#818CF8" />
              </linearGradient>
            </defs>
          </svg>

          <!-- Image -->
          <div class="hero-image-inner relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-accent/30">
            <img
              src="~/assets/images/face.webp"
              alt="Kim Francis Corros"
              width="640"
              height="640"
              fetchpriority="high"
              decoding="async"
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
          </div>

          <!-- Status badge -->
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/85 backdrop-blur-md border border-white/10 text-xs whitespace-nowrap">
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span class="text-text-secondary">Open to opportunities</span>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="hero-content text-center lg:text-left">
          <p class="hero-greeting text-accent text-xs md:text-base mb-3 md:mb-4 tracking-wider">
            Hello world, I'm
          </p>

          <h1 class="hero-name text-text-primary mb-1 leading-[1.1] text-3xl md:text-5xl lg:text-6xl">
            Kim Francis
          </h1>
          <h1 class="hero-accent gradient-text mb-4 md:mb-6 leading-[1.1] text-3xl md:text-5xl lg:text-6xl">
            Corros
          </h1>

          <p class="hero-description text-text-primary text-sm md:text-lg lg:text-xl max-w-xl mb-6 md:mb-8 leading-relaxed">
            A full stack developer with <span class="text-accent font-medium">7+ years</span> of experience
            shipping production apps across fintech, Web3, and SaaS. Specializing in Vue 3, Nuxt,
            and Laravel — turning ideas into performant, scalable products.
          </p>

          <div class="hero-roles flex flex-wrap justify-center lg:justify-start gap-1.5 md:gap-2 mb-6 md:mb-8">
            <UITag v-for="role in roles" :key="role" class="role-tag text-[10px] md:text-xs">
              {{ role }}
            </UITag>
          </div>

          <div class="hero-buttons flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
            <Button to="/#contact">
              <Icon name="mdi:email-outline" class="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button to="/resume.pdf" target="_blank" variant="secondary">
              <Icon name="ph:download-simple-bold" class="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator - hidden on short screens -->
    <div class="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10">
      <span class="text-[10px] text-text-tertiary tracking-[0.2em]">SCROLL</span>
      <div class="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent animate-pulse" />
    </div>
  </section>
</template>
