<script setup lang="ts">

import CardService from "~/components/Service/CardService.vue";

const firstService = [
  {
    "title": "Identité Visuelle",
    "subtitle": "Nous donnons vie à votre marque.",
    "description": "Création de logos et chartes graphiques uniques pour une identité forte.",
    "icon": "i-lucide-paintbrush-vertical"
  },
  {
    "title": "Audit Marketing",
    "subtitle": "Nous analysons et optimisons vos stratégies.",
    "description": "Évaluons vos actions marketing pour maximiser votre impact et votre croissance.",
    "icon": "i-lucide-chart-line"
  },
  {
    "title": "Positionnement",
    "subtitle": "Nous définissons votre place sur le marché.",
    "description": "Clarifiez votre message et démarquez-vous avec un positionnement stratégique.",
    "icon": "i-lucide-target"
  }
];

const secondService = [
  {
    "title": "Plateforme de marque",
    "subtitle": "Nous donnons du sens à votre identité.",
    "description": "Structurez vos valeurs et votre vision pour raconter une histoire forte et inspirante.",
    "icon": "i-lucide-compass"
  },
  {
    "title": "Motion Design",
    "subtitle": "Nous donnons vie à vos idées.",
    "description": "Créez des animations captivantes pour renforcer votre communication visuelle.",
    "icon": "i-lucide-video"
  },
  {
    "title": "Création de site internet",
    "subtitle": "Nous développons votre présence en ligne.",
    "description": "Conception de sites modernes et performants pour valoriser votre marque.",
    "icon": "i-lucide-screen-share"
  }
];

</script>

<template>

  <div class="xl:mx-0 mx-10 mt-32">

    <h2 class="font-semibold ">Service</h2>
    <h3 class="text-3xl font-bold mt-2 text-purple">Des solutions sur mesure pour faire briller votre marque.</h3>

    <section class="flex flex-col gap-5 my-10">

      <div class="flex xl:flex-row gap-5 flex-col">
        <div v-for="service in firstService">
          <CardService :title="service.title" :subtitle="service.subtitle" :description="service.description" :icon="service.icon" />
        </div>
      </div>

      <div class="flex xl:flex-row gap-5 flex-col">
        <div v-for="service in secondService">
          <CardService :title="service.title" :subtitle="service.subtitle" :description="service.description" :icon="service.icon" />
        </div>
      </div>

    </section>
  </div>


</template>

<style scoped>

</style>