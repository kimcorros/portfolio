export default defineNuxtConfig({
  compatibilityDate: '2026-05-20',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Kim Francis Corros — Full Stack Developer | 7+ Years',
      meta: [
        { name: 'description', content: 'Full Stack Developer with 7+ years building production web applications across fintech, e-commerce, and SaaS. Specialist in Vue 3, Nuxt, Laravel, and TypeScript with hands-on Web3, KYC, and Stripe integrations.' },
        { name: 'author', content: 'Kim Francis Corros' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0B0D17' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Kim Francis Corros' },
        { property: 'og:title', content: 'Kim Francis Corros — Full Stack Developer | 7+ Years' },
        { property: 'og:description', content: 'Full Stack Developer with 7+ years building production web applications across fintech, e-commerce, and SaaS. Specialist in Vue 3, Nuxt, Laravel, and TypeScript with hands-on Web3, KYC, and Stripe integrations.' },
        { property: 'og:image', content: 'https://kimcorros.com/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://kimcorros.com' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kim Francis Corros — Full Stack Developer | 7+ Years' },
        { name: 'twitter:description', content: 'Full Stack Developer with 7+ years across fintech, e-commerce, and SaaS. Vue 3, Nuxt, Laravel, TypeScript, Web3, KYC.' },
        { name: 'twitter:image', content: 'https://kimcorros.com/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://kimcorros.com' },
      ],
    },
  },
  devtools: { enabled: false },
  // Ship precompressed assets so hosts can serve gzip/brotli
  nitro: {
    compressPublicAssets: { gzip: true, brotli: true },
  },
  typescript: {
    strict: true,
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [400, 500, 600, 700],
      Outfit: [400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },
})
