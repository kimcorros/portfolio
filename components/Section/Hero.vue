<script setup lang="ts">
const tags = ['Rare Books', 'Posters', 'Prints', 'Toys', 'LPs', 'Comics', 'Wine', 'Whiskey', 'Letters', 'Signatures', 'Handbags', 'Watches']
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center justify-between lg:space-x-[100px] mb-20 lg:mb-0">
    <div class="order-2 flex-1 text-gray max-w-xl text-center lg:text-left">
      <h2 class="mb-1">
        Hello world.
      </h2>
      <h2 class="mb-12">
        I’m <span class="text-charcoal underline-pretty">Kim Francis</span>.
      </h2>
      <p class="text-lg lg:text-2xl text-charcoal mb-16">
        <strong>Kim</strong> is a software engineer who fell in love with web development. He has helped <i class="text-gray">businesses</i> and <i class="text-gray">individuals</i> in building their <strong>ideas</strong> on the internet.
      </p>
      <div class="flex flex-col lg:flex-row lg:space-x-4 w-full justify-center lg:w-max">
        <Button to="/" class="w-full lg:max-w-fit mb-4 lg:mb-0" secondary>
          Hire Me!
        </Button>
        <Button to="/resume.pdf" target="_blank" class="w-full lg:max-w-fit">
          Download CV <Icon name="ph:download-simple-bold" class="ml-2" />
        </Button>
      </div>
    </div>
    <div class="order-1 lg:order-2 lg:flex-1 rounded-full overflow-hidden aspect-square border border-[#c0c0c0] max-w-xs lg:max-w-2xl mb-10 lg:mb-0">
      <img src="~/assets/images/face.png" class="w-full h-full aspect-square">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider::before,
.slider::after {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 200px;
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
