<script setup lang="ts">
const aboutRef = ref<HTMLElement>()

const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 7, suffix: '', label: 'Companies' },
]

onMounted(() => {
  const { gsap } = useGsapAnimations()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion)
    return

  gsap.from('.about-heading', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: aboutRef.value, start: 'top 80%', once: true },
  })

  gsap.from('.about-visual', {
    x: -80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.about-visual', start: 'top 85%', once: true },
  })

  gsap.from('.about-chip', {
    scale: 0,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    delay: 0.4,
    ease: 'back.out(2)',
    scrollTrigger: { trigger: '.about-visual', start: 'top 85%', once: true },
  })

  gsap.from('.about-text', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.about-content', start: 'top 80%', once: true },
  })

  // Stats: cards rise in, then numbers count up from 0
  gsap.from('.about-stat', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.about-stats', start: 'top 85%', once: true },
  })
  gsap.utils.toArray<HTMLElement>('.about-stat-num').forEach((el) => {
    const target = Number(el.dataset.value || '0')
    const counter = { n: 0 }
    gsap.to(counter, {
      n: target,
      duration: 1.6,
      ease: 'power2.out',
      snap: { n: 1 },
      scrollTrigger: { trigger: '.about-stats', start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.n)}${el.dataset.suffix || ''}`
      },
    })
  })

  gsap.from('.about-cert', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.about-cert', start: 'top 90%', once: true },
  })

  // Parallax: photo drifts slower than the sphere behind it
  gsap.to('.about-photo img', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: { trigger: aboutRef.value, start: 'top bottom', end: 'bottom top', scrub: 1 },
  })

  // Floating chips drift gently
  gsap.to('.about-chip-exp', { y: -8, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  gsap.to('.about-chip-cert', { y: 8, duration: 3.1, ease: 'sine.inOut', yoyo: true, repeat: -1 })
})
</script>

<template>
  <section ref="aboutRef" class="section-padding relative overflow-hidden">
    <div class="container relative z-10">
      <div class="about-heading">
        <UISectionHeading
          label="About Me"
          title="Building the Web, One Pixel at a Time"
        />
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Visual: portrait with animated gradient frame + credential chips -->
        <div class="about-visual relative">
          <div class="about-photo conic-frame relative rounded-2xl max-w-md mx-auto lg:mx-0">
            <div class="relative rounded-2xl overflow-hidden bg-dark-secondary">
              <img
                src="~/assets/images/about.webp"
                alt="Kim Francis Corros"
                width="900"
                height="900"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover aspect-square scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>

            <!-- Floating chips -->
            <div class="about-chip about-chip-exp absolute -top-4 -left-4 md:-left-8 px-4 py-2 rounded-xl bg-dark/90 backdrop-blur-md border border-accent/30 shadow-lg shadow-accent/10">
              <p class="text-accent font-heading font-bold text-lg leading-none">7+</p>
              <p class="text-text-tertiary text-[10px] mt-0.5 tracking-wide">YEARS EXP.</p>
            </div>
            <div class="about-chip about-chip-cert absolute -bottom-4 -right-4 md:-right-8 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark/90 backdrop-blur-md border border-indigo/30 shadow-lg shadow-indigo/10">
              <Icon name="ph:seal-check-fill" class="h-5 w-5 text-indigo" />
              <div>
                <p class="text-text-primary text-xs font-semibold leading-none">Vue.js Certified</p>
                <p class="text-text-tertiary text-[10px] mt-0.5">certificates.dev · 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-content">
          <p class="about-text text-text-secondary text-lg leading-relaxed mb-6">
            I'm <span class="text-text-primary font-semibold">Kim Francis</span>, an ethical and detail-oriented
            Full Stack Developer with a strong work ethic and
            <span class="text-accent font-semibold">7+ years of experience</span>. I specialize in
            Vue.js, Nuxt, and Laravel — building robust applications across fintech, Web3, and SaaS
            that optimize performance and contribute to real business success.
          </p>
          <p class="about-text text-text-secondary text-lg leading-relaxed mb-8">
            I passed the official Vue.js Certification in September 2023, making me a
            <span class="text-accent font-semibold">Certified Vue.js Developer</span>. Whether it's
            crafting pixel-perfect interfaces or architecting scalable backend APIs, I bring
            dependability and passion to every project.
          </p>

          <!-- Stats with count-up -->
          <div class="about-stats grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
            <div v-for="stat in stats" :key="stat.label" class="about-stat text-center">
              <p
                class="about-stat-num text-2xl md:text-3xl font-heading font-bold text-accent"
                :data-value="stat.value"
                :data-suffix="stat.suffix"
              >
                {{ stat.value }}{{ stat.suffix }}
              </p>
              <p class="text-xs text-text-tertiary mt-1">{{ stat.label }}</p>
            </div>
          </div>

          <div class="about-cert flex flex-wrap gap-3">
            <Button
              to="https://certificates.dev/c/9a39c8dd-a82d-47cb-8562-a728b349f91e"
              variant="secondary"
              target="_blank"
            >
              <Icon name="ph:certificate-bold" class="mr-2 h-4 w-4" />
              View Vue.js Certification
            </Button>
            <Button to="/resume.pdf" target="_blank" variant="ghost">
              <Icon name="ph:file-text-bold" class="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
