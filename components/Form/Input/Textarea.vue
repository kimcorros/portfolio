<script setup lang="ts">
defineProps<{
  modelValue?: string
  name?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  rows?: string
  required?: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" class="mb-1.5 text-sm font-medium text-text-secondary">
      {{ label }} <span v-if="required" class="text-accent">*</span>
    </label>
    <textarea
      :disabled="disabled"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :name="name"
      :rows="rows || '6'"
      class="px-4 py-3 text-sm text-text-primary bg-dark-secondary border border-border rounded-lg placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors disabled:opacity-50 resize-none"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </div>
</template>
