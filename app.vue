<script setup>
import { scalejs } from '@/composables/scale'

const animation = ref(null),
      nuxtApp = useNuxtApp()

const { animationinit, cleanup } = scalejs()

nuxtApp.hook('page:finish', () => {
  animation.value = setTimeout(() => {
    animationinit()
  }, 600)
})

onUnmounted(() => {
  cleanup()
  clearTimeout(animation.value)
})
</script>

<template>
  <div class="relative">
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p>{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
    <nav class="absolute top-0 left-0 right-0 z-[1] px-4 sm:px-8 md:px-[192px] pt-4 sm:pt-6 md:pt-[20px] max-h-[138px] flex flex-col gap-4 sm:gap-6 md:gap-[20px] border-b-[#f7f6f1] border-b-[1px] text-white">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <img src="/assets/img/logo-desktop.svg" alt="Logo" class="h-[50px] w-[200px] sm:h-[70px] sm:w-[290px]" />
        <div class="flex flex-row gap-4 sm:gap-[30px] items-center mt-4 sm:mt-0">
          <div>
            EN | ES
          </div>
          <div>
            800-262-0008
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-[40px]">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/destination">Our Destinations</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/legal">Legal</NuxtLink>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>
