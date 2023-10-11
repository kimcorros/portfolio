<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const menu = ref(null)
const showMenu = ref<boolean>(false)

onClickOutside(menu, () => showMenu.value = false)
</script>

<template>
  <div class="z-10 backdrop-blur-3xl">
    <div class="container flex items-center justify-between h-16 lg:h-[80px]">
      <NuxtLink to="/" class="flex items-center">
        <Icon name="solar:code-circle-broken" class="h-8 w-8 lg:h-12 lg:w-12 text-charcoal"/>
      </NuxtLink>
      <div class="items-center space-x-10 text-lg font-bold hidden lg:flex">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#about' }">
          About Me
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#services' }">
          Services
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#works' }">
          Works
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#contact' }">
          Contact Me
        </NuxtLink>
      </div>
      <div class="hidden lg:flex items-center space-x-2">
        <Button to="/" class="max-w-fit" secondary>
          Let's talk
        </Button>
      </div>
      <button @click="showMenu = true" class="max-w-fit block lg:hidden hover:text-primary">
        <Icon name="fa6-solid:bars-staggered"  class="h-6 w-6"/>
      </button>
    </div>
    <div v-if="showMenu" class="block lg:hidden fixed z-40 right-0 top-0 h-screen w-screen bg-black opacity-40"/>
    <div v-if="showMenu" ref="menu" class="flex flex-col lg:hidden fixed right-0 top-0 h-screen max-w-lg w-full py-20 px-20 bg-white text-charcoal z-50 shadow-2xl shadow-charcoal">
      <button @click="showMenu = false" class="self-end -mr-10 -mt-10">
        <Icon name="ic:sharp-close" class="h-8 w-8"/>
      </button>
      <div class="items-center my-auto text-lg font-bold flex flex-col space-y-8">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#about' }" @click.prevent="showMenu = false">
          About Me
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#services' }" @click.prevent="showMenu = false">
          Services
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#works' }" @click.prevent="showMenu = false">
          Works
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#contact' }" @click.prevent="showMenu = false">
          Contact Me
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
