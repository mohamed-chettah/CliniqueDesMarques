<script setup lang="ts">



import ButtonCta from "~/components/Ui/ButtonCta.vue";
</script>

<template>
  <div class="z-20 fixed right-0 top-5 left-0 rounded-xl bg-white sm:mx-auto mx-2 lg:w-[80%] sm:w-[90%]  border">
    <div class="flex justify-center xl:gap-52 md:gap-24 gap-6 items-center py-3">
      <NuxtImg class="lg:w-36 sm:w-24 w-20" src="./images/Logo-la-clinique-dm.svg" />
      <div class="flex xl:gap-10 gap-6 items-center">
        <div class="md:flex hidden xl:gap-6 gap-2 xl:text-sm text-xs text-black/90 justify-center text-md">
          <NuxtLink class="hover:font-bold" to="#services">Services</NuxtLink>
          |
          <NuxtLink class="hover:font-bold" to="#casestudy" >Etudes de cas</NuxtLink>
          |
          <NuxtLink class="hover:font-bold" to="#testimonials">Avis Clients</NuxtLink>
          |
          <NuxtLink class="hover:font-bold" to="#faq" >FAQ</NuxtLink>
        </div>

        <ButtonCta class="xl:text-[14px] sm:text-[10px] " size="" to="#contact" label="Travailler avec nous" trailing-icon="i-lucide-arrow-right"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>