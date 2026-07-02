<script setup lang="ts">
// Subtle pointer-reactive drift for extra depth (disabled for reduced-motion).
const root = ref<HTMLElement>()

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return
  let raf = 0
  const onMove = (e: MouseEvent) => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      root.value?.style.setProperty('--px', `${x}px`)
      root.value?.style.setProperty('--py', `${y}px`)
    })
  }
  window.addEventListener('mousemove', onMove, { passive: true })
  ;(root.value as any).__cleanup = () => window.removeEventListener('mousemove', onMove)
})

onUnmounted(() => (root.value as any)?.__cleanup?.())
</script>

<template>
  <div ref="root" class="aurora-bg" aria-hidden="true">
    <div class="aurora aurora-1" />
    <div class="aurora aurora-2" />
    <div class="aurora aurora-3" />
    <div class="aurora-vignette" />
  </div>
</template>

<style scoped>
.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  --px: 0px;
  --py: 0px;
}
.aurora {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.55;
  will-change: transform;
}
.aurora-1 {
  width: 55vw;
  height: 55vw;
  left: -12vw;
  top: -12vw;
  background: radial-gradient(circle, rgba(110, 231, 183, 0.20), transparent 60%);
  animation: drift1 24s ease-in-out infinite;
}
.aurora-2 {
  width: 50vw;
  height: 50vw;
  right: -14vw;
  top: 18vh;
  background: radial-gradient(circle, rgba(129, 140, 248, 0.18), transparent 60%);
  animation: drift2 28s ease-in-out infinite;
}
.aurora-3 {
  width: 46vw;
  height: 46vw;
  left: 26vw;
  bottom: -18vh;
  background: radial-gradient(circle, rgba(110, 231, 183, 0.12), transparent 60%);
  animation: drift3 32s ease-in-out infinite;
}
.aurora-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(11, 13, 23, 0.55) 100%);
}
@keyframes drift1 {
  0%, 100% { transform: translate(var(--px), var(--py)); }
  50% { transform: translate(calc(8vw + var(--px)), calc(6vh + var(--py))); }
}
@keyframes drift2 {
  0%, 100% { transform: translate(var(--px), var(--py)); }
  50% { transform: translate(calc(-7vw + var(--px)), calc(5vh + var(--py))); }
}
@keyframes drift3 {
  0%, 100% { transform: translate(var(--px), var(--py)); }
  50% { transform: translate(calc(6vw + var(--px)), calc(-6vh + var(--py))); }
}
@media (prefers-reduced-motion: reduce) {
  .aurora { animation: none; }
}
</style>
