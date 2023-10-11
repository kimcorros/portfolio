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
  rows: {
    type: String,
    default: '6',
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
      <textarea
        :disabled="disabled"
        :value="modelValue"
        :placeholder="placeholder"
        class="px-4 text-sm font-bold text-black border-2 border-black rounded-md focus:outline-2 focus:outline-accent focus:outline-offset-2 disabled:bg-opacity-80 py-3 resize-none"
        :class="inputClasses"
        :required="required"
        :name="name"
        :rows="rows"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
