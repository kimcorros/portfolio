<script setup lang="ts">
defineProps<{
  modelValue?: string
  name?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  type?: string
  required?: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" class="mb-1.5 text-sm font-medium text-text-secondary">
      {{ label }} <span v-if="required" class="text-accent">*</span>
    </label>
    <input
      :disabled="disabled"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type || 'text'"
      :required="required"
      :name="name"
      class="h-12 px-4 text-sm text-text-primary bg-dark-secondary border border-border rounded-lg placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors disabled:opacity-50"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>
