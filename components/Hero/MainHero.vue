<script setup lang="ts">

import Clients from "~/components/Hero/Clients.vue";
import ButtonCta from "~/components/Ui/ButtonCta.vue";
</script>

<template>

  <div  class="hero text-center flex flex-col gap-5 sm:mx-0 mx-5">
    <h1 class="xl:text-7xl md:text-5xl sm:text-3xl text-[25px] antialiased tracking-wide font-semibold md:leading-tight">L’Agence de <span class="text-purple">Branding</span>  et <br> de <span class="text-purple">Communication </span>  à Lyon.</h1>

    <p class="xl:text-lg text-sm text-purples-200">
      Nous donnons de la personnalité aux entreprises. Elles performent. Leurs clients adorent.
    </p>

    <div class="flex gap-5 justify-center mt-5  bg-titan-white-500">
      <ButtonCta class="" size="" to="#contact" label="Contactez nous" />
      <UButton to="#casestudy" size="xl" class="xl:text-[14px] text-[12px] rounded-xl bg-white border text-black hover:bg-[#FCF2F2] hover:text-black">Nos Réalisations</UButton>
    </div>
    <Clients />
  </div>
</template>

<style scoped>

</style>