<script setup lang="ts">
const items = [
  '/images/manufacutre-blouse/carte-de-visite-industrie-textile.jpg',
  '/images/manufacutre-blouse/charte_graphique_mb_Page_4-1024x768.jpg',
  '/images/manufacutre-blouse/charte_graphique_mb_Page_5-1024x768.jpg',
  '/images/manufacutre-blouse/embroidery.jpg',
  '/images/manufacutre-blouse/identite-visuelle-industrie-textile-1024x683.jpg',
  '/images/manufacutre-blouse/logo-brode-industrie-textile.jpg'
]
</script>

<template>
    <UCarousel
        v-slot="{ item }"
        loop
        auto-scroll
        :items="items"
        :ui="{
          container: 'transition-[height]',
          controls: 'absolute -bottom-8 inset-x-12',
          dots: '-top-7',
          dot: 'w-6 h-1'
          }"
        class="w-full max-w-xs mx-auto"
    >
      <NuxtImg :src="item"  class="h-[300px] w-[350px] rounded-lg" />
    </UCarousel>
</template>

<style scoped>

</style>