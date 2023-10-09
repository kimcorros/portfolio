<script setup lang="ts">
const props = defineProps({
  to: String,
  secondary: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  box: {
    type: Boolean,
    default: false,
  },
  flatLeft: {
    type: Boolean,
    default: false,
  },
})

const buttonClasses = computed(() => {
  return [
    props.secondary
      ? 'bg-black text-white border-black border-2 hover:bg-accent hover:text-black'
      : 'border-2 border-black bg-white text-black hover:bg-accent',
    props.box ? 'rounded-md' : 'rounded-full',
    { 'rounded-l-none': props.flatLeft },
    { 'hover:text-[initial]': props.to && !props.secondary },
  ]
})

const componentToShow = computed(() => {
  if (props.to)
    return resolveComponent('NuxtLink')

  return 'button'
})
</script>

<template>
  <component :is="componentToShow" :to="to" class="relative flex items-center justify-center w-full py-4 px-8 overflow-hidden font-bold transition-all ease-out cursor-pointer hover:transform hover:-translate-x-1 hover:-translate-y-1 disabled:bg-opacity-80 hover:shadow-main active:shadow-none active:translate-x-0 active:translate-y-0 hover:before:hidden text-xl leading-none" :class="buttonClasses" :disabled="disabled">
    <slot />
  </component>
</template>
