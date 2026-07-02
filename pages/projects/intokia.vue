<script setup lang="ts">
import intokiaImage from '~/assets/images/projects/intokia.webp'

useHead({
  title: 'Intokia STO Platform — Case Study | Kim Francis Corros',
  meta: [
    { name: 'description', content: 'Case study: building a live, MFSA-regulated Security Token Offering (STO) platform with Nuxt 3, Laravel, Filament admin dashboards, Keycloak SSO, and KYC/AML integrations (Sumsub, Shufti Pro, Muinmos) for regulated investor onboarding.' },
    { property: 'og:title', content: 'Intokia STO Platform — Case Study | Kim Francis Corros' },
    { property: 'og:description', content: 'How I built a live STO platform with KYC integrations, Filament admin dashboards, and Keycloak SSO.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://kimcorros.com/projects/intokia' },
    { property: 'og:image', content: 'https://kimcorros.com/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Intokia STO Platform — Case Study' },
    { name: 'twitter:description', content: 'Building a live STO platform with KYC, Filament admin, and Keycloak SSO.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://kimcorros.com/projects/intokia' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: 'Intokia STO Platform — Case Study',
        author: {
          '@type': 'Person',
          name: 'Kim Francis Corros',
          url: 'https://kimcorros.com',
        },
        about: {
          '@type': 'SoftwareApplication',
          name: 'Intokia',
          applicationCategory: 'FinanceApplication',
          description: 'Security Token Offering (STO) platform for tokenized real-world assets.',
          url: 'https://intokia.com',
        },
        keywords: ['Security Token Offering', 'STO', 'Tokenization', 'KYC', 'AML', 'MFSA', 'Fintech', 'Nuxt 3', 'Laravel', 'Filament', 'Keycloak', 'Sumsub', 'Shufti Pro', 'Muinmos'],
      }),
    },
  ],
})

const techStack = [
  { name: 'Nuxt 3', icon: 'logos:nuxt-icon' },
  { name: 'Vue 3', icon: 'logos:vue' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Filament', icon: 'logos:php' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'Keycloak', icon: 'simple-icons:keycloak' },
]

const contributions = [
  {
    icon: 'ph:layout-bold',
    title: 'End-to-end product features',
    description: 'Shipped features from API design through Vue/Nuxt UI — REST endpoints, validation, business logic, and admin tooling spanning frontend and backend.',
  },
  {
    icon: 'ph:cube-bold',
    title: 'Laravel Filament admin dashboard',
    description: 'Built issuer and investor workflows, data visualizations, tables, and forms powering daily platform operations.',
  },
  {
    icon: 'ph:shield-check-bold',
    title: 'KYC / AML verification pipeline',
    description: 'Integrated Sumsub, Shufti Pro, and Muinmos for regulated investor onboarding — identity verification, document checks, and compliance status tracking.',
  },
  {
    icon: 'ph:key-bold',
    title: 'Keycloak SSO integration',
    description: 'Centralized authentication and single sign-on across the platform — role-based access, token lifecycle, and session management.',
  },
  {
    icon: 'ph:chart-line-up-bold',
    title: 'Data visualizations & reporting',
    description: 'Built dashboard components for tracking investor activity, asset performance, and compliance metrics across the platform.',
  },
  {
    icon: 'ph:database-bold',
    title: 'REST API design',
    description: 'Designed and implemented endpoints powering the investor portal, admin dashboard, and KYC workflows with consistent validation and error handling.',
  },
]

onMounted(() => {
  const { gsap } = useGsapAnimations()

  gsap.from('.case-hero > *', {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
  })

  gsap.from('.case-section', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.case-content',
      start: 'top 75%',
      once: true,
    },
  })
})
</script>

<template>
  <article class="relative">
    <!-- Background orbs (matches Hero) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[100px]" />
      <div class="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo/[0.04] rounded-full blur-[100px]" />
    </div>

    <!-- Hero -->
    <section class="pt-32 md:pt-40 pb-12 md:pb-16">
      <div class="container max-w-5xl">
        <div class="case-hero">
          <NuxtLink
            to="/#projects"
            class="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-accent transition-colors mb-8 before:hidden"
          >
            <Icon name="ph:arrow-left-bold" class="h-4 w-4" />
            Back to projects
          </NuxtLink>

          <p class="text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
            Case Study · Fintech
          </p>

          <h1 class="text-text-primary mb-4 leading-tight">
            <span class="gradient-text">Intokia</span> — Security Token Offering Platform
          </h1>

          <p class="text-text-secondary text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            A live, MFSA-regulated STO platform serving real investors trading tokenized real-world assets — built end-to-end with Nuxt 3, Laravel, Keycloak SSO, and compliant KYC/AML verification (Sumsub, Shufti Pro, Muinmos).
          </p>

          <div class="flex flex-wrap gap-x-8 gap-y-3 text-sm text-text-tertiary mb-8">
            <div>
              <span class="text-text-tertiary/70 mr-2">Role</span>
              <span class="text-text-secondary">Full-Stack Developer</span>
            </div>
            <div>
              <span class="text-text-tertiary/70 mr-2">Duration</span>
              <span class="text-text-secondary">2022 – Present</span>
            </div>
            <div>
              <span class="text-text-tertiary/70 mr-2">Industry</span>
              <span class="text-text-secondary">Fintech / Tokenization</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <Button to="https://intokia.com" target="_blank" variant="primary">
              <Icon name="ph:arrow-up-right-bold" class="mr-2 h-4 w-4" />
              View Live Platform
            </Button>
            <Button to="/#contact" variant="secondary">
              <Icon name="mdi:email-outline" class="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero image -->
    <section class="pb-16 md:pb-24">
      <div class="container max-w-6xl">
        <div class="case-hero rounded-2xl overflow-hidden border border-border bg-dark-secondary">
          <img
            :src="intokiaImage"
            alt="Intokia STO platform — investor dashboard and tokenized asset listings"
            width="1200"
            height="898"
            decoding="async"
            class="w-full h-auto object-cover"
          >
        </div>
      </div>
    </section>

    <div class="case-content container max-w-5xl pb-20 md:pb-28">
      <!-- Overview -->
      <section class="case-section mb-16 md:mb-20">
        <p class="text-xs text-accent tracking-widest uppercase mb-3">Overview</p>
        <h2 class="text-text-primary mb-6">What Intokia does</h2>
        <div class="text-text-secondary text-lg leading-relaxed space-y-4 max-w-3xl">
          <p>
            Intokia is a <span class="text-text-primary font-semibold">Security Token Offering (STO) platform</span> that lets issuers tokenize real-world assets and offer them to investors under regulatory compliance. Real investors. Real assets. Real money flowing through a verified onboarding pipeline.
          </p>
          <p>
            Working in regulated fintech means every form, every API endpoint, and every admin action carries compliance weight. That shaped how I built the platform: tight integration with KYC providers, careful state machines for investor onboarding, and an admin dashboard that gives operators visibility into every step of the verification flow.
          </p>
        </div>
      </section>

      <!-- Tech stack -->
      <section class="case-section mb-16 md:mb-20">
        <p class="text-xs text-accent tracking-widest uppercase mb-3">Tech Stack</p>
        <h2 class="text-text-primary mb-8">Built with</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="flex items-center gap-3 p-4 rounded-xl border border-border bg-dark-secondary/40 hover:border-border-hover transition-colors"
          >
            <Icon :name="tech.icon" class="h-6 w-6 shrink-0" />
            <span class="text-sm text-text-secondary">{{ tech.name }}</span>
          </div>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <UITag variant="outline">Sumsub (KYC)</UITag>
          <UITag variant="outline">Shufti Pro (KYC)</UITag>
          <UITag variant="outline">Muinmos (KYC)</UITag>
          <UITag variant="outline">REST API</UITag>
          <UITag variant="outline">Schema.org</UITag>
        </div>
      </section>

      <!-- Contributions -->
      <section class="case-section mb-16 md:mb-20">
        <p class="text-xs text-accent tracking-widest uppercase mb-3">What I Built</p>
        <h2 class="text-text-primary mb-8">Key contributions</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="item in contributions"
            :key="item.title"
            class="p-6 rounded-xl border border-border bg-dark-secondary/40 hover:border-border-hover transition-colors"
          >
            <div class="flex items-start gap-4">
              <div class="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                <Icon :name="item.icon" class="h-5 w-5" />
              </div>
              <div>
                <h3 class="text-text-primary font-semibold text-base mb-2">{{ item.title }}</h3>
                <p class="text-text-secondary text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Compliance callout -->
      <section class="case-section mb-16 md:mb-20">
        <div class="p-6 md:p-8 rounded-2xl border border-accent/20 bg-accent/[0.03]">
          <div class="flex items-start gap-4">
            <div class="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
              <Icon name="ph:certificate-bold" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-text-primary font-semibold text-base mb-2">Regulated fintech, real money</h3>
              <p class="text-text-secondary text-sm md:text-base leading-relaxed">
                This wasn't a side project or a demo — Intokia is a live platform with real investors moving real capital into tokenized assets. Every KYC integration, every admin workflow, every authentication boundary was built with regulatory compliance in mind. Working at this level meant treating production reliability and audit-readiness as defaults, not afterthoughts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="case-section text-center">
        <h2 class="text-text-primary mb-4">Want to see more?</h2>
        <p class="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          The live platform is the best demonstration. Or get in touch and let's talk about your next project.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button to="https://intokia.com" target="_blank" variant="primary">
            <Icon name="ph:arrow-up-right-bold" class="mr-2 h-4 w-4" />
            View Live Platform
          </Button>
          <Button to="/#projects" variant="secondary">
            <Icon name="ph:arrow-left-bold" class="mr-2 h-4 w-4" />
            Back to all projects
          </Button>
        </div>
      </section>
    </div>
  </article>
</template>
