<script setup lang="ts">

import Clients from "~/components/Hero/Clients.vue";
</script>

<template>
  <div class="text-center flex flex-col gap-6">
    <h1 class="text-6xl antialiased tracking-wide font-semibold leading-tight">L’Agence de <span class="text-purple-500">Branding</span>  et <br> de <span class="text-purple-500">Communication</span> à Lyon.</h1>

    <p>
      Nous de la personnalité aux entreprises. Elles performent. Leurs clients adorent.
    </p>

    <div class="flex gap-5 justify-center mt-5">
      <UButton to="/contact" size="xl" class="rounded-xl bg-purple-500 text-white">Contactez-nous</UButton>
      <UButton to="/contact" size="xl" class="rounded-xl bg-white border text-black">Nos Réalisations</UButton>
    </div>
    <Clients />
  </div>
</template>

<style scoped>

</style>