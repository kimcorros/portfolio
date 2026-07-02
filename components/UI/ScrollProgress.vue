<script setup lang="ts">
const progress = ref(0)

function onScroll() {
  const doc = document.documentElement
  const height = doc.scrollHeight - doc.clientHeight
  progress.value = height > 0 ? Math.min(100, (doc.scrollTop / height) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-[70] h-[3px] pointer-events-none">
    <div
      class="h-full bg-gradient-to-r from-accent via-accent to-indigo shadow-[0_0_12px_rgba(110,231,183,0.6)]"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>
