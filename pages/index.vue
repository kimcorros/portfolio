<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Kim Francis Corros',
        jobTitle: 'Full Stack Developer',
        url: 'https://kimcorros.com',
        email: 'hello@kimcorros.com',
        telephone: '+639066718046',
        image: 'https://kimcorros.com/og-image.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Davao City',
          addressCountry: 'PH',
        },
        sameAs: [
          'https://github.com/kimcorros',
        ],
        description: 'Full Stack Developer with 7+ years building production web applications across fintech, e-commerce, and SaaS. Vue.js Certified Developer specializing in Vue 3, Nuxt, Laravel, and TypeScript with hands-on Web3, KYC, Keycloak SSO, and Stripe experience.',
        knowsAbout: [
          'Vue.js', 'Vue 3', 'Nuxt', 'Nuxt 3', 'React', 'Next.js', 'TypeScript', 'JavaScript',
          'PHP', 'Laravel', 'Filament', 'Node.js', 'Python', 'Django',
          'REST API', 'GraphQL', 'WebSockets',
          'MySQL', 'PostgreSQL', 'Redis',
          'Tailwind CSS', 'Storybook',
          'Keycloak SSO', 'Stripe', 'PayPal', 'KYC integration', 'AML', 'Shufti Pro', 'Sumsub', 'Muinmos',
          'Web3', 'Blockchain integration', 'Security Token Offering',
          'Docker', 'AWS S3', 'GitHub Actions', 'Git', 'Linux',
          'Technical SEO', 'On-page SEO', 'Open Graph', 'Schema.org', 'Structured data',
          'Fintech', 'E-commerce',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionFrameworks />
    <SectionAbout id="about" />
    <SectionProjects id="projects" />
    <SectionContact id="contact" />
  </div>
</template>
