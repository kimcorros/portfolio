<script setup lang="ts">
const props = defineProps<{
  to?: string | Record<string, any>
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  type?: string
  target?: string
}>()

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center px-6 py-3 font-medium text-sm rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed before:hidden'
  const variants: Record<string, string> = {
    primary: 'bg-accent text-dark font-semibold hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]',
    secondary: 'border border-border text-text-primary bg-dark/40 backdrop-blur-sm hover:border-accent/50 hover:bg-dark/70 active:scale-[0.98]',
    ghost: 'text-text-secondary hover:text-accent hover:bg-accent/5',
  }
  return [base, variants[props.variant || 'primary']]
})

const componentToShow = computed(() => {
  return props.to ? resolveComponent('NuxtLink') : 'button'
})
</script>

<template>
  <component
    :is="componentToShow"
    :to="to"
    :target="target"
    class="leading-none"
    :class="classes"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </component>
</template>
