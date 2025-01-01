<script setup lang="ts">

import CardService from "~/components/Service/CardService.vue";

const firstService = [
  {
    "title": "Identité Visuelle",
    "description": "Nous concevons des logos uniques et des chartes graphiques sur mesure pour une identité forte et mémorable.",
    "icon": "i-lucide-paintbrush-vertical"
  },
  {
    "title": "Audit Marketing",
    "description": "Nous analysons vos actions marketing pour maximiser votre impact et stimuler votre croissance.",
    "icon": "i-lucide-chart-line"
  },
  {
    "title": "Positionnement",
    "description": "Nous clarifions votre message et vous aidons à vous démarquer avec un positionnement clair et stratégique.",
    "icon": "i-lucide-target"
  }
];

const secondService = [
  {
    "title": "Plateforme de marque",
    "description": "Nous structurons vos valeurs et votre vision pour raconter une histoire forte et inspirante.",
    "icon": "i-lucide-compass"
  },
  {
    "title": "Motion Design",
    "description": "Nous créons des animations captivantes pour dynamiser votre communication et marquer les esprits.",
    "icon": "i-lucide-video"
  },
  {
    "title": "Webdesign",
    "description": "De votre site internet à la création de vos contenus pour les réseaux sociaux, Nous vous accompagnons pour développer votre attractivité sur le web.",
    "icon": "i-lucide-screen-share"
  }
];

</script>

<template>

  <div class="xl:mx-0 mx-10 mt-32">

    <h2 class="font-semibold ">Services</h2>
    <h3 class="md:text-3xl text-2xl font-bold mt-2 text-purple">Des solutions sur mesure pour faire briller votre marque.</h3>

    <section class="flex flex-col gap-5 my-10">

      <div class="flex lg:flex-row gap-5 flex-col">
        <div v-for="service in firstService">
          <CardService :title="service.title" :description="service.description" :icon="service.icon" />
        </div>
      </div>

      <div class="flex lg:flex-row gap-5 flex-col">
        <div v-for="service in secondService">
          <CardService :title="service.title" :description="service.description" :icon="service.icon" />
        </div>
      </div>

    </section>
  </div>


</template>

<style scoped>

</style>