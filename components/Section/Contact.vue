<script setup lang="ts">
import emailjs from '@emailjs/browser'

const sectionRef = ref<HTMLElement>()
const formRef = ref<HTMLFormElement | null>(null)
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})
const loading = ref(false)
const showMessage = ref(false)

// reCAPTCHA v3 is loaded on-demand (form focus / submit) instead of on every
// page load — that Google script is ~1.8MB and isn't needed until someone sends.
const RECAPTCHA_SITE_KEY = '6LebRegoAAAAACMu6PjT0nLgCPczdGBfxElNJ5MP'
let recaptchaPromise: Promise<void> | null = null
function loadRecaptcha() {
  if (recaptchaPromise)
    return recaptchaPromise
  recaptchaPromise = new Promise((resolve, reject) => {
    if ((window as any).grecaptcha) {
      resolve()
      return
    }
    const s = document.createElement('script')
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('reCAPTCHA failed to load'))
    document.head.appendChild(s)
  })
  return recaptchaPromise
}
async function getRecaptchaToken(): Promise<string> {
  await loadRecaptcha()
  await new Promise<void>(resolve => (window as any).grecaptcha.ready(() => resolve()))
  return (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
}

const sendMail = async () => {
  loading.value = true
  try {
    const token = await getRecaptchaToken()
    if (!token) {
      loading.value = false
      return
    }
    await emailjs.sendForm('service_edek6x4', 'template_7zw6pfs', formRef.value as any, '6hBuRz84m27eTckvb')
    loading.value = false
    showMessage.value = true
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
    setTimeout(() => { showMessage.value = false }, 3000)
  }
  catch (error) {
    loading.value = false
    console.error('Email send failed:', error)
  }
}

const contactInfo = [
  { icon: 'mdi:email-outline', label: 'Email', value: 'hello@kimcorros.com', href: 'mailto:hello@kimcorros.com' },
  { icon: 'mdi:phone-outline', label: 'Phone', value: '(+63) 906 671 8046', href: 'tel:+639066718046' },
  { icon: 'mdi:map-marker-outline', label: 'Location', value: 'Davao City, Philippines' },
  { icon: 'mdi:clock-outline', label: 'Hours', value: 'Mon — Fri: 9:00 — 18:00 (GMT+8)' },
]

const socials = [
  { icon: 'mdi:github', label: 'GitHub', href: 'https://github.com/kimcorros' },
  { icon: 'mdi:linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kimfranciscorros/' },
]

onMounted(() => {
  const { gsap } = useGsapAnimations()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion)
    return

  gsap.from('.contact-panel', {
    y: 60,
    opacity: 0,
    scale: 0.98,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%', once: true },
  })
  gsap.from('.contact-item', {
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.25,
    ease: 'power2.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%', once: true },
  })
  gsap.from('.contact-field', {
    y: 24,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    delay: 0.35,
    ease: 'power2.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%', once: true },
  })
})
</script>

<template>
  <section ref="sectionRef" class="section-padding relative overflow-hidden bg-[#050608]">
    <!-- Animated spotlight background -->
    <UISpotlight />

    <div class="container relative z-10">
      <div>
        <UISectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it. Send me a message and let's create something great."
          align="center"
        />
      </div>

      <div class="contact-panel max-w-5xl mx-auto rounded-3xl border border-white/[0.06] bg-dark-secondary/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
        <div class="grid lg:grid-cols-5">
          <!-- Info side -->
          <div class="lg:col-span-2 p-8 md:p-10 bg-gradient-to-br from-accent/[0.05] via-transparent to-indigo/[0.05] border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 mb-8">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span class="text-accent text-xs font-medium">Available for new opportunities</span>
            </div>

            <div class="space-y-6 mb-10">
              <div
                v-for="info in contactInfo"
                :key="info.label"
                class="contact-item group flex items-start gap-4"
              >
                <div class="p-2.5 rounded-xl bg-gradient-to-br from-accent/15 to-indigo/10 border border-accent/20 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon :name="info.icon" class="h-5 w-5" />
                </div>
                <div>
                  <p class="text-[11px] text-text-tertiary uppercase tracking-wider mb-0.5">{{ info.label }}</p>
                  <component
                    :is="info.href ? 'a' : 'p'"
                    :href="info.href"
                    class="text-text-primary text-sm font-medium"
                    :class="{ 'hover:text-accent transition-colors before:hidden': info.href }"
                  >
                    {{ info.value }}
                  </component>
                </div>
              </div>
            </div>

            <div class="contact-item flex items-center gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
                class="p-2.5 rounded-xl border border-border text-text-secondary hover:text-accent hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 before:hidden"
              >
                <Icon :name="social.icon" class="h-5 w-5" />
              </a>
            </div>
          </div>

          <!-- Form side -->
          <form ref="formRef" class="lg:col-span-3 p-8 md:p-10 space-y-4" @focusin="loadRecaptcha" @submit.prevent="sendMail">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="contact-field">
                <FormInputText v-model="formData.name" placeholder="Your name" name="from_name" />
              </div>
              <div class="contact-field">
                <FormInputText v-model="formData.email" placeholder="Your email" name="reply_to" type="email" />
              </div>
            </div>
            <div class="contact-field">
              <FormInputText v-model="formData.subject" placeholder="Subject" name="subject" />
            </div>
            <div class="contact-field">
              <FormInputTextarea v-model="formData.message" placeholder="Tell me about your project..." name="message" rows="5" />
            </div>

            <Transition name="fade">
              <p v-if="showMessage" class="text-accent text-sm flex items-center gap-1.5">
                <Icon name="ph:check-circle-fill" class="h-4 w-4" />
                Message sent successfully!
              </p>
            </Transition>

            <div class="contact-field pt-1">
              <Button type="submit" :disabled="loading" class="w-full group">
                <Icon v-if="loading" name="mdi:loading" class="mr-2 h-4 w-4 animate-spin" />
                {{ loading ? 'Sending...' : 'Send Message' }}
                <Icon v-if="!loading" name="ph:paper-plane-tilt-bold" class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
