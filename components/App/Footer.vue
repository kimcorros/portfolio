<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/kimcorros' },
  { name: 'Email', icon: 'mdi:email-outline', url: 'mailto:hello@kimcorros.com' },
]
</script>

<template>
  <footer class="border-t border-border">
    <div class="container py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-sm text-text-tertiary">
          &copy; {{ currentYear }} Kim Francis Corros. All rights reserved.
        </p>
        <div class="flex items-center space-x-4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-all"
            :aria-label="link.name"
          >
            <Icon :name="link.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
