<script setup>
const props = defineProps({
  modelValue: {
    type: null,
  },
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  flatRight: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['update:modelValue'])

const slots = useSlots()
const hasSlot = name => !!slots[name]

const inputClasses = computed(() => {
  return [
    { 'rounded-r-none focus:rounded-r-none': props.flatRight },
    { 'pl-12': hasSlot('prepend') },
    { 'pr-12': hasSlot('append') },
    { 'border-danger': props.error },
  ]
})
</script>

<template>
  <div class="flex flex-col mb-4">
    <label v-if="label" class="mb-1 text-sm font-bold text-black">
      {{ label }} <span v-if="required" class="text-danger"> *</span>
    </label>
    <div class="relative flex flex-col w-full">
      <span v-if="hasSlot('prepend')" class="absolute flex items-center h-12 transform -translate-y-1/2 left-4 top-1/2">
        <slot name="prepend" />
      </span>
      <input
        :disabled="disabled"
        :value="modelValue"
        :placeholder="placeholder"
        :type="type"
        class="h-12 px-4 text-sm font-bold text-black border-2 border-black rounded-md focus:outline-2 focus:outline-accent focus:outline-offset-2 disabled:bg-opacity-80"
        :class="inputClasses"
        :required="required"
        :name="name"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <span v-if="hasSlot('append')" class="absolute flex items-center h-12 transform -translate-y-1/2 right-4 top-1/2">
        <slot name="append" />
      </span>
    </div>
  </div>
</template>
