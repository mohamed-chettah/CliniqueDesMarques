<script setup lang="ts">
// Données pour la boucle
const stats = [
  { value: "+20", label: "Marques créées" },
  { value: "+50", label: "Clients accompagnés" },
  { value: "1", label: "Équipe dédiée à votre projet" },
];
</script>

<template>
  <section class="flex md:flex-row flex-col gap-4 sm:mt-12 mt-5">
    <!-- Boucle sur les statistiques -->
    <div v-for="(stat, index) in stats" :key="index" class="flex items-center gap-4">
      <div class="flex flex-col gap-2">
        <h4 class="xl:text-3xl lg:text-xl text-lg font-semibold text-purple">{{ stat.value }}</h4>
        <p class="lg:text-xs text-[10px]">{{ stat.label }}</p>
      </div>
      <!-- Ajout de la ligne séparatrice sauf pour le dernier élément -->
      <hr
          v-if="index < stats.length - 1"
          class="border-r-1 border-purple h-full"
      >
    </div>
  </section>
</template>

<style scoped>
</style>
