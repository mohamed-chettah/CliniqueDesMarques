<script setup lang="ts">

</script>

<template>
  <div class="z-10 fixed right-0 top-5 left-0 rounded-xl bg-white 2xl:mx-96 xl:mx-40 md:mx-5 mx-10 border">
    <div class="flex justify-center xl:gap-52 gap-24 items-center py-3">
      <NuxtImg class="w-36 " src="./images/Logo-la-clinique-dm.svg" />
      <div class="flex xl:gap-10 gap-6 items-center">
        <div class="md:flex hidden xl:gap-6 gap-2 xl:text-sm text-xs text-black/70 justify-center text-md">
          <NuxtLink to="#services">Services</NuxtLink>
          |
          <NuxtLink to="#services" >Etudes de cas</NuxtLink>
          |
          <NuxtLink to="#contact" >Avis Clients</NuxtLink>
          |
          <NuxtLink to="#contact" >Blog</NuxtLink>
        </div>
        <UButton class="bg-purple rounded-xl xl:text-md text-xs" trailing-icon="i-lucide-arrow-right" >Travailler avec nous</UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>