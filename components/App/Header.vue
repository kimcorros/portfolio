<script setup lang="ts">
const showMenu = ref(false)
const scrolled = ref(false)
const lastScrollY = ref(0)
const hidden = ref(false)

const navLinks = [
  { label: 'About', hash: '#about' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Contact', hash: '#contact' },
]

const handleScroll = () => {
  const currentY = window.scrollY
  scrolled.value = currentY > 50
  hidden.value = currentY > lastScrollY.value && currentY > 200
  lastScrollY.value = currentY
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const closeMenu = () => {
  showMenu.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(showMenu, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''

  if (val) {
    nextTick(() => {
      const { gsap } = useGsapAnimations()
      gsap.fromTo('.menu-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.15 },
      )
      gsap.fromTo('.menu-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.45 },
      )
      gsap.fromTo('.menu-socials',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.55 },
      )
    })
  }
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
    :class="{
      'bg-dark/80 backdrop-blur-xl': scrolled,
      'bg-transparent': !scrolled,
      '-translate-y-full': hidden && !showMenu,
    }"
  >
    <div class="container flex items-center justify-between h-16 lg:h-20">
      <NuxtLink to="/" class="flex items-center before:hidden group">
        <span class="text-lg font-heading font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
          Kim Francis Corros
        </span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center space-x-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.hash"
          :to="{ path: '/', hash: link.hash }"
          class="text-sm text-text-primary hover:text-accent transition-colors before:hidden"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          :to="{ path: '/', hash: '#contact' }"
          class="px-5 py-2 text-sm font-medium rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all before:hidden"
        >
          Get in Touch
        </NuxtLink>
      </nav>

      <!-- Hamburger / Close toggle -->
      <button
        class="lg:hidden relative z-[70] text-text-primary hover:text-accent transition-colors"
        @click="toggleMenu"
      >
        <Icon :name="showMenu ? 'ic:sharp-close' : 'fa6-solid:bars-staggered'" class="h-5 w-5" />
      </button>
    </div>
  </header>

  <!-- Mobile menu - full screen overlay -->
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div
        v-if="showMenu"
        class="fixed inset-0 z-[60] lg:hidden"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-dark/95 backdrop-blur-xl" @click="closeMenu" />

        <!-- Blueprint grid background -->
        <div class="absolute inset-0 pointer-events-none">
          <div
            class="absolute inset-0 opacity-[0.04]"
            style="
              background-image:
                linear-gradient(rgba(110,231,183,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(110,231,183,0.4) 1px, transparent 1px);
              background-size: 50px 50px;
            "
          />
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0B0D17_80%)]" />
        </div>

        <!-- Close button -->
        <button
          class="absolute top-5 right-6 z-20 text-text-secondary hover:text-accent transition-colors"
          @click="closeMenu"
        >
          <Icon name="ic:sharp-close" class="h-7 w-7" />
        </button>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full px-8">
          <!-- Nav number labels + links -->
          <nav class="flex flex-col items-center space-y-10">
            <NuxtLink
              v-for="(link, i) in navLinks"
              :key="link.hash"
              :to="{ path: '/', hash: link.hash }"
              class="menu-item group flex flex-col items-center before:hidden opacity-0"
              @click="closeMenu"
            >
              <span class="text-xs text-accent/40 mb-2">0{{ i + 1 }}</span>
              <span class="text-3xl font-heading font-bold text-text-primary group-hover:text-accent transition-colors">
                {{ link.label }}
              </span>
            </NuxtLink>
          </nav>

          <!-- CTA -->
          <div class="menu-cta mt-12 opacity-0">
            <NuxtLink
              :to="{ path: '/', hash: '#contact' }"
              class="px-8 py-3 text-sm font-medium rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all before:hidden"
              @click="closeMenu"
            >
              Get in Touch
            </NuxtLink>
          </div>

          <!-- Social icons at bottom -->
          <div class="menu-socials absolute bottom-10 flex items-center gap-5 opacity-0">
            <a href="https://github.com/kimcorros" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-all">
              <Icon name="mdi:github" class="h-6 w-6" />
            </a>
            <a href="mailto:hello@kimcorros.com" class="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-all">
              <Icon name="mdi:email-outline" class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
