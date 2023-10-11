<script setup lang="ts">
defineProps({
  modelValue: Boolean,
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])

const slots = useSlots()
const hasDefaultSlot = computed(() => {
  return !!slots.default
})

const handleInputChange = (event: Event) => ((event.target as HTMLInputElement).checked)
</script>

<template>
  <div class="flex cursor-pointer">
    <input
      :id="`checkbox-${id}`"
      type="checkbox"
      :disabled="disabled"
      :value="modelValue"
      :checked="modelValue"
      class="relative aspect-square mr-4 h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-black checked:bg-black checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-primary checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer focus:shadow-none focus:transition-[border-color_0.2s] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-primary checked:focus:after:bg-transparent mt-1"
      @input="$emit('update:modelValue', handleInputChange($event))"
    >
    <label v-if="label || hasDefaultSlot" class="w-full text-black cursor-pointer" :for="`checkbox-${id}`">
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>
