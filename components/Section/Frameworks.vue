<script setup lang="ts">
const sectionRef = ref<HTMLElement>()

const technologies = [
  { icon: 'simple-icons:claude', name: 'Claude' },
  { icon: 'simple-icons:openai', name: 'OpenAI' },
  { icon: 'logos:vue', name: 'Vue.js' },
  { icon: 'logos:nuxt-icon', name: 'Nuxt' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:nextjs-icon', name: 'Next.js' },
  { icon: 'logos:javascript', name: 'JavaScript' },
  { icon: 'logos:typescript-icon', name: 'TypeScript' },
  { icon: 'logos:laravel', name: 'Laravel' },
  { icon: 'logos:php', name: 'PHP' },
  { icon: 'logos:nodejs-icon', name: 'Node.js' },
  { icon: 'logos:tailwindcss-icon', name: 'Tailwind' },
  { icon: 'logos:mysql', name: 'MySQL' },
  { icon: 'logos:docker-icon', name: 'Docker' },
  { icon: 'logos:linux-tux', name: 'Linux' },
  { icon: 'logos:bootstrap', name: 'Bootstrap' },
]

onMounted(() => {
  const { fadeIn } = useGsapAnimations()
  fadeIn('.tech-slider', sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="py-12 border-y border-border overflow-hidden">
    <div class="tech-slider relative">
      <!-- Fade edges -->
      <div class="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div class="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

      <div class="marquee-track flex w-max animate-marquee">
        <ul
          v-for="copy in 2"
          :key="`marquee-copy-${copy}`"
          class="flex shrink-0 list-none m-0 p-0"
          :aria-hidden="copy === 2 ? 'true' : 'false'"
        >
          <li
            v-for="tech in technologies"
            :key="`${copy}-${tech.name}`"
            class="flex items-center space-x-3 px-6 md:px-10 shrink-0 group"
          >
            <Icon
              :name="tech.icon"
              class="h-6 w-6 md:h-8 md:w-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span class="text-sm text-text-tertiary group-hover:text-text-secondary transition-colors whitespace-nowrap">
              {{ tech.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  /* GPU-compositing hints prevent sub-pixel snap on loop boundary */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
@keyframes marquee {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; }
}
</style>
