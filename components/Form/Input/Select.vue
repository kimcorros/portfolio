<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const props = defineProps({
  modelValue: {
    type: null,
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
  options: {
    type: Array,
    default: () => [],
  },
  id: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const slots = useSlots()
const hasSlot = name => !!slots[name]

const inputClasses = computed(() => {
  return [
    { 'rounded-r-none focus:rounded-r-none': props.flatRight },
    { 'pl-12': hasSlot('prepend') },
    { 'pr-12': hasSlot('append') },
  ]
})
</script>

<template>
  <div class="flex flex-col mb-4">
    <label v-if="label" class="text-black font-bold text-sm mb-1">
      {{ label }} <span v-if="required" class="text-danger"> *</span>
    </label>
    <div class="w-full flex flex-col relative">
      <Listbox
        v-slot="{ open }"
        :model-value="modelValue"
        @update:model-value="value => emit('update:modelValue', value)"
      >
        <div class="relative">
          <ListboxButton
            class="relative border-2 border-black h-12 px-4 rounded-md text-sm font-bold text-black disabled:bg-opacity-80 w-full text-left"
            :class="{ 'outline-2 outline-primary outline-offset-2': open }"
          >
            <span v-if="modelValue" class="block truncate">{{ modelValue.title || modelValue.label || modelValue }}</span>
            <span v-else class="text-black text-opacity-40">{{ placeholder }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <IconDirectionChevron
                :direction="open ? 'up' : 'down'"
                class="h-5 w-5 text-gray-400 transition ease-in-out"
              />
            </span>
          </ListboxButton>

          <transition
            enter-active-class="transition duration-100 ease-out transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in transform"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <ListboxOptions
              class="absolute mt-2 border-2 border-black max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm "
            >
              <ListboxOption
                v-for="(option, index) in options"
                v-slot="{ active, selected }"
                :key="`${id}-${index}`"
                :value="option"
                as="template"
              >
                <li
                  class="relative cursor-pointer select-none py-2 pr-10 pl-4" :class="[
                    active ? 'bg-primary ' : '',
                  ]"
                >
                  <span
                    class="block truncate" :class="[
                      selected ? 'font-bold' : 'font-normal',
                    ]"
                  >
                    {{ option.title || option.label || option }}
                  </span>
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 right-0 flex items-center pr-3 text-black"
                  >
                    <IconGeneralCheck class="h-4 w-4" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
  </div>
</template>
