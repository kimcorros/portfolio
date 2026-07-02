<template>
  <div class="relative flex flex-col min-h-screen">
    <UIAuroraBackground />
    <UIScrollProgress />
    <AppHeader />
    <main class="relative z-10 flex flex-col flex-1">
      <slot />
    </main>
    <AppFooter class="relative z-10" />
  </div>
</template>
