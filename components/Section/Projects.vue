<template>
  <div class="flex flex-col items-center py-20">
    <div class="text-center w-full max-w-3xl">
      <p class="text-primary uppercase leading-[2px] text-xl font-semibold mb-4">
        Selected Works
      </p>
      <h4 class="mb-10">
        Featured Works & Projects
      </h4>
      <p class="text-lg text-charcoal mb-20">
        Here are some of the projects I have worked on in the past. I always do my best to build pixel-perfect, fully functional applications.
      </p>
    </div>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
      <a target="_blank" :href="project.link" v-for="(project, index) in projects" :key="`project-${index}`" class="before:hidden group">
        <div class="bg-accent bg-opacity-10 rounded-2xl overflow-hidden border-2 border-charcoal cursor-pointer">
          <img :src="project.image" class="w-full h-full max-h-80 rounded-2xl hover:rounded-none opacity-80 hover:opacity-100 transition-all scale-95 hover:scale-100">
        </div>
        <p class="font-bold mt-6 text-2xl font-serif mb-1 text-charcoal group-hover:text-primary">
          {{ project.name }}
        </p>
        <p class="text-charcoal leading-tight mb-4">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap mt-1">
          <span v-for="(tag, index) in project.stack" :key="`stack-${project.name}-${index}`" class="px-3 mb-2 py-1.5 bg-black rounded-lg text-xs font-bold text-white mr-2"> {{ tag }} </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import lemonswanImage from '~/assets/images/projects/lemonswan.png'
import sellerpointImage from '~/assets/images/projects/sellerpoint.png'
import strikexImage from '~/assets/images/projects/strikex.png'
import intokiaImage from '~/assets/images/projects/intokia.png'
import athleticFactoryImage from '~/assets/images/projects/athletic-factory.png'

const projects = [
  {
    name: 'LemonSwan',
    description: 'A German dating site allowing users to be meet new people.',
    image: lemonswanImage,
    stack: ['Vue', 'Laravel', 'Inertia', 'TailwindCSS'],
    link: 'https://lemonswan.com'
  },
  {
    name: 'SellerPoint',
    description: 'Sellerpoint is an easy to use platform that allows you to create new products, start an online store and sell products through Amazon or Ebay at the same time.',
    image: sellerpointImage,
    stack: ['Nuxt', 'Laravel', 'Vuex', 'TailwindCSS'],
    link: 'https://sellerpoint.com'
  },
  {
    name: 'StrikeX Trading Platform',
    description: 'Buy, Sell, & Swap Tokens',
    image: strikexImage,
    stack: ['React', 'Next', 'GraphQL', 'TailwindCSS', 'Typescript'],
    link: 'https://launch.dex.tradestrike.io/'
  },
  {
    name: 'Intokia',
    description: 'Intokia is an STO platform',
    image: intokiaImage,
    stack: ['Nuxt', 'Laravel', 'Vuex', 'TailwindCSS'],
    link: 'https://intokia.com'
  },
  {
    name: 'Athletic Factory',
    description: 'Digital Fitness & Lifestyle Guide',
    image: athleticFactoryImage,
    stack: ['Nuxt', 'Laravel'],
    link: 'https://athletic-factory.com'
  },
]
</script>