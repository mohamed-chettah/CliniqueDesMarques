<script setup lang="ts">

import IndicatorNumbers from "~/components/WhoWeAre/IndicatorNumbers.vue";
</script>

<template>

  <UCard class="bg-beige xl:mx-0 mx-10 sm:p-4 p-0 mt-32">
    <UContainer>
      <div class="flex flex-col">
        <h2 class="font-semibold ">A propos</h2>
        <h3 class="md:text-3xl text-2xl font-bold mt-2 text-purple">
          Qui ce cache derrière la Clinique des marques
        </h3>

        <div class="flex xl:flex-row flex-col gap-10 mt-10">
          <div class="sm:text-sm text-xs flex flex-col gap-5">
            <p >
              Notre aventure a commencé avec le branding, mais notre ambition allait bien au-delà de la simple création de marques. Aujourd’hui, nous sommes une agence créative spécialisée dans l’accompagnement des TPE/PME et ETI, les aidant à se faire connaître et à renforcer leur attractivité grâce à une communication efficace.
              <br>
            </p>
            <p>
              Notre ADN, influencé par le branding, nous permet de créer des stratégies efficientes, créant de la valeur pour nos clients et leurs parties prenantes.

            </p>

            <IndicatorNumbers />
          </div>

        <NuxtImg src="./images/Grayscale Workspace Collaboration.jpeg" class="rounded-xl xl:h-1/2 xl:w-1/2 w-full h-full" />
        </div>
      </div>
    </UContainer>
  </UCard>

</template>

<style scoped>

</style>