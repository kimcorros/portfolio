<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader class="sticky top-0" />
    <div class="relative flex flex-col flex-1 h-full">
      <slot />
    </div>
  </div>
</template>
