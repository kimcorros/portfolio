<script setup lang="ts">
useHead({
  title: 'Meet Kim!',
})
</script>

<template>
  <div class="flex flex-col lg:min-h-[calc(100vh-80px)] mb-20">
    <SectionHero class="container flex-1" />
    <SectionFrameworks class="mt-24" />
  </div>
  <SectionAbout id="about" class="container flex-1" />
  <SectionProjects id="works" class="container flex-1" />
  <SectionContact id="contact" />
</template>
