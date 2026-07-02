<script setup lang="ts">
import lemonswanImage from '~/assets/images/projects/lemonswan.webp'
import sellerpointImage from '~/assets/images/projects/sellerpoint.webp'
import strikexImage from '~/assets/images/projects/strikex.webp'
import intokiaImage from '~/assets/images/projects/intokia.webp'
import athleticFactoryImage from '~/assets/images/projects/athletic-factory.webp'
import bfgImage from '~/assets/images/projects/business-finance-group.webp'

const sectionRef = ref<HTMLElement>()
const NuxtLink = resolveComponent('NuxtLink')

const projects = [
  {
    name: 'SellerPoint',
    description: 'An e-commerce platform enabling sellers to create and manage product listings across Amazon and eBay from a single dashboard. Contributed to the Nuxt 2 → Nuxt 3 migration and built the multi-step product-creation flow.',
    image: sellerpointImage,
    stack: ['Nuxt 3', 'Laravel', 'Stripe', 'Tailwind CSS'],
    link: 'https://sellerpoint.com',
  },
  {
    name: 'Intokia',
    description: 'A live, MFSA-regulated Security Token Offering (STO) platform for tokenized real-world assets — built end-to-end with KYC/AML onboarding (Sumsub, Shufti Pro, Muinmos), Keycloak SSO, and a drag-and-drop asset-page builder.',
    image: intokiaImage,
    stack: ['Nuxt 3', 'Laravel', 'Filament', 'Keycloak'],
    link: 'https://intokia.com',
    caseStudy: '/projects/intokia',
  },
  {
    name: 'LemonSwan',
    description: 'A German dating platform connecting users for meaningful relationships. Built the frontend from scratch — a reusable component library and pixel-perfect Figma-to-code interfaces.',
    image: lemonswanImage,
    stack: ['Vue 3', 'Laravel', 'Inertia', 'Tailwind CSS'],
    link: 'https://lemonswan.com',
  },
  {
    name: 'Business Finance Group',
    description: 'An Australian commercial finance broker platform offering non-bank lending solutions, no-doc loans, and asset financing for business owners.',
    image: bfgImage,
    stack: ['Nuxt 3', 'Tailwind CSS'],
    link: 'https://businessfinancegroup.com.au',
  },
  {
    name: 'StrikeX Trading Platform',
    description: 'A crypto token exchange for buying, selling, and swapping tokens with real-time trading data and wallet connectivity. Built the Swap & Buy widget and optimized the live market table for performance.',
    image: strikexImage,
    stack: ['React', 'Next.js', 'GraphQL', 'TypeScript'],
  },
  {
    name: 'Athletic Factory',
    description: 'A digital fitness and lifestyle platform providing personalized training programs and wellness content, with HubSpot integration.',
    image: athleticFactoryImage,
    stack: ['Nuxt', 'Laravel', 'HubSpot'],
  },
]

onMounted(() => {
  const { gsap } = useGsapAnimations()

  // Heading
  gsap.from('.projects-heading', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  // Cards: 3D reveal — rise and rotate into place, alternating tilt direction
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
    gsap.from(card, {
      y: 70,
      z: -120,
      rotateY: i % 2 === 0 ? -14 : 14,
      rotateX: 8,
      opacity: 0,
      transformPerspective: 1400,
      transformOrigin: 'center center',
      duration: 0.9,
      ease: 'power3.out',
      // Drop GSAP's inline transform once revealed so the hover tilt starts clean (no first-hover snap)
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    })
  })
})
</script>

<template>
  <section id="projects" ref="sectionRef" class="section-padding">
    <div class="container">
      <div class="projects-heading">
        <UISectionHeading
          label="Projects"
          title="Featured Work"
          description="A selection of projects I've built — from trading platforms to e-commerce solutions."
          align="center"
        />
      </div>

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8 perspective-1400">
        <component
          :is="project.caseStudy ? NuxtLink : (project.link ? 'a' : 'div')"
          v-for="project in projects"
          :key="project.name"
          v-tilt="{ max: 6 }"
          :to="project.caseStudy || undefined"
          :href="(!project.caseStudy && project.link) ? project.link : undefined"
          :target="(!project.caseStudy && project.link) ? '_blank' : undefined"
          :rel="(!project.caseStudy && project.link) ? 'noopener noreferrer' : undefined"
          class="project-card group block rounded-xl border border-border bg-dark-secondary/30 overflow-hidden hover:border-border-hover hover:shadow-[0_20px_50px_-20px_rgba(110,231,183,0.25)] transition-[border-color,box-shadow] duration-300 before:hidden preserve-3d"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.name"
              width="1200"
              height="898"
              loading="lazy"
              decoding="async"
              class="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-dark-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <!-- Case study badge -->
            <span
              v-if="project.caseStudy"
              class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-dark/70 backdrop-blur-sm border border-accent/30 text-accent text-[10px] uppercase tracking-wider"
            >
              Case Study
            </span>
          </div>

          <div class="p-6 project-inner">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-text-primary font-semibold group-hover:text-accent transition-colors">
                {{ project.name }}
              </h3>
              <Icon
                v-if="project.caseStudy || project.link"
                :name="project.caseStudy ? 'ph:arrow-right-bold' : 'ph:arrow-up-right-bold'"
                class="h-4 w-4 text-text-tertiary group-hover:text-accent transition-all group-hover:translate-x-0.5"
                :class="{ 'group-hover:-translate-y-0.5': !project.caseStudy }"
              />
            </div>

            <p class="text-text-secondary text-sm leading-relaxed mb-4">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <UITag v-for="tech in project.stack" :key="tech" variant="outline">
                {{ tech }}
              </UITag>
            </div>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>
