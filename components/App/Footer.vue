<template>
  <div class="bg-black text-white py-24">
    <form class="container mx-auto flex flex-col items-center">
      <p class="text-accent uppercase leading-[2px] text-xl font-semibold mb-4">
        CONTACT ME
      </p>
      <h4 class="mb-10">
        Let's Talk About Your Project
      </h4>
      <div class="grid grid-cosl-1 lg:grid-cols-2 gap-8 w-full">
        <div class="bg-white p-7 rounded-xl text-charcoal flex flex-col justify-between">
          <div class="mb-4">
            <p class="text-2xl font-bold leading-tight">
              Phone 24/7
            </p>
            <p class="text-2xl font-bold leading-tight">
              (+63) 906 671 8046
            </p>
          </div>

          <div>
            <p>
              <strong>Address: </strong> Davao City, Philippines
            </p>
            <p>
              <strong>Email: </strong> hello@kimcorros.com
            </p>
            <p>
              <strong>Work Hours: </strong> Mon - Fri: 9:00 - 18:00 (GMT+8)
            </p>
          </div>
        </div>
        <div class="flex flex-col space-4">
          <div class="grid grid-cols-2 gap-x-6">
            <FormInputText v-model="formData.name" placeholder="Name" class="w-full" />
            <FormInputText v-model="formData.email" placeholder="Email" class="w-full" />
          </div>
          <FormInputText v-model="formData.subject" placeholder="Subject" class="w-full" />
          <FormInputTextarea v-model="formData.message" placeholder="Message" class="w-full mb-0" />
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-x-8 w-full mt-8">
        <div></div>
        <Button to="/" class="w-full lg:max-w-fit mb-4 lg:mb-0">
          Submit
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const agreeTerms = ref<boolean>(true)
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})
</script>