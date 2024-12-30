<script setup lang="ts">

import Clients from "~/components/Hero/Clients.vue";
</script>

<template>

  <div class="text-center flex flex-col gap-5">
    <h1 class="xl:text-7xl md:text-5xl text-4xl antialiased tracking-wide font-semibold leading-tight">L’Agence de <span class="text-purple">Branding</span>  et <br> de <span class="text-purple">Communication </span>  à Lyon.</h1>

    <p>
      Nous donnons de la personnalité aux entreprises. Elles performent. Leurs clients adorent.
    </p>

    <div class="flex gap-5 justify-center mt-5  bg-titan-white-500">
      <UButton to="/contact" size="xl" class="rounded-xl bg-purple text-white">Contactez-nous</UButton>
      <UButton to="/contact" size="xl" class="rounded-xl bg-white border text-black">Nos Réalisations</UButton>
    </div>
    <Clients />
  </div>
</template>

<style scoped>

</style>