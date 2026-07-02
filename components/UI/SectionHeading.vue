<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div :class="align === 'center' ? 'text-center' : 'text-left'" class="mb-12 md:mb-16">
    <p class="text-sm text-accent tracking-widest uppercase mb-3">
      {{ label }}
    </p>
    <h2 class="text-text-primary mb-4">
      {{ title }}
    </h2>
    <p v-if="description" class="text-text-secondary text-lg max-w-2xl" :class="{ 'mx-auto': align === 'center' }">
      {{ description }}
    </p>
  </div>
</template>
