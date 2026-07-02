<script setup lang="ts">
defineProps<{
  variant?: 'accent' | 'indigo' | 'outline'
}>()
</script>

<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors"
    :class="{
      'bg-accent/10 text-accent border border-accent/20': variant === 'accent' || !variant,
      'bg-indigo/10 text-indigo border border-indigo/20': variant === 'indigo',
      'border border-border text-text-secondary hover:border-accent/40 hover:text-text-primary': variant === 'outline',
    }"
  >
    <slot />
  </span>
</template>
