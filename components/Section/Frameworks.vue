<template>
  <div class="bg-[#F8F8F8] py-8 px-12 lg:py-14 lg:px-20 relative max-w-screen overflow-hidden slider container">
    <div class="flex space-x-12 lg:space-x-20 animate-scroll-left">
      <Icon name="logos:vue" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:nuxtjs-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="logos:javascript" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:laravel-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:tailwindcss-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:react-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:php-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:linux-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="logos:mysql" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="devicon:typescript" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="logos:vue" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:nuxtjs-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="logos:javascript" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:laravel-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:tailwindcss-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:react-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:php-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="skill-icons:linux-dark" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="logos:mysql" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
      <Icon name="devicon:typescript" class="min-h-[40px] lg:min-h-[80px]  lg:grayscale opacity-40 hover:opacity-100 hover:grayscale-0 min-w-[40px] lg:min-w-[80px]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider::before,
.slider::after {
  @apply w-[100px] lg:w-[200px];
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: '';
  height: 100%;
  position: absolute;
  z-index: 2;
}

.slider::before {
    left: 0;
    top: 0;
}

.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}

.fade-cover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%);
}
</style>