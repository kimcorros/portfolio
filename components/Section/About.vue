<template>
  <div class="flex flex-col lg:flex-row items-center justify-between lg:space-x-[100px] py-20">
    <div class="flex-1 rounded-full overflow-hidden aspect-square bg-accent bg-opacity-10 max-w-xs lg:max-w-2xl mb-10 lg:mb-0">
      <img src="~/assets/images/face-2.png" class="w-full h-full aspect-square">
    </div>
    <div class="order-2 flex-1 text-charcoal max-w-xl text-center lg:text-left">
      <p class="text-primary uppercase leading-[2px] text-xl font-semibold mb-4">
        ABOUT ME
      </p>
      <h4 class="mb-1">
        Frontend Expert.
      </h4>
      <h4 class="mb-10">
        Certified <span class="underline-pretty">Vue.js</span> Dev.
      </h4>
      <p class="text-lg text-charcoal mb-20">
        Hello there! I'm <strong>Kim Francis</strong>. I specialize in web development, and I'm deeply passionate and committed to my craft. With 4+ years of experience in building high-quality web-based applications, I have helped multiple businesses and individual clients build their ideas on the internet. I passed the official <a href="https://certificates.dev/vuejs"><strong>Vue.js Certification</strong></a> and I am now a Certified Vue.js Developer.
      </p>
      <Button to="https://certificates.dev/vuejs/certificates/9a39c8dd-a82d-47cb-8562-a728b349f91e" secondary target="_blank" class="flex items-center mb-10">
        See Vue.js Certification
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>