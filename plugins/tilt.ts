/**
 * v-tilt — interactive 3D tilt on pointer move, with an accent "glare" highlight.
 * Usage: v-tilt or v-tilt="{ max: 6, glare: true }"
 * Registered universally (SSR stub + client-only mounted) and respects prefers-reduced-motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tilt', {
    // Directive is client-behavioural only; provide an SSR no-op so it resolves on the server.
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        return

      const max: number = binding.value?.max ?? 8
      const withGlare: boolean = binding.value?.glare !== false

      el.style.transformStyle = 'preserve-3d'
      el.style.willChange = 'transform'
      if (getComputedStyle(el).position === 'static')
        el.style.position = 'relative'

      let glare: HTMLElement | null = null
      if (withGlare) {
        glare = document.createElement('div')
        glare.className = 'tilt-glare'
        el.appendChild(glare)
      }

      let raf = 0
      let entering = false
      let enterTimer: ReturnType<typeof setTimeout> | undefined
      const onEnter = () => {
        // Ease into the first tilt so entering near a card edge doesn't snap
        entering = true
        el.style.transition = 'transform 0.3s ease-out'
        clearTimeout(enterTimer)
        enterTimer = setTimeout(() => {
          entering = false
        }, 300)
      }
      const onMove = (e: MouseEvent) => {
        if (!entering)
          el.style.transition = 'none'
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect()
          const px = (e.clientX - rect.left) / rect.width
          const py = (e.clientY - rect.top) / rect.height
          const rx = (py - 0.5) * -2 * max
          const ry = (px - 0.5) * 2 * max
          el.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`
          if (glare) {
            glare.style.opacity = '1'
            glare.style.background = `radial-gradient(circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(110,231,183,0.16), rgba(129,140,248,0.06) 35%, transparent 60%)`
          }
        })
      }
      const onLeave = () => {
        cancelAnimationFrame(raf)
        clearTimeout(enterTimer)
        entering = false
        el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
        if (glare)
          glare.style.opacity = '0'
      }

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      ;(el as any).__tiltCleanup = () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
        clearTimeout(enterTimer)
      }
    },
    unmounted(el: any) {
      el.__tiltCleanup?.()
    },
  })
})
