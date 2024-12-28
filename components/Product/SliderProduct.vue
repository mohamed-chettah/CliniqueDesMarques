<script setup lang="ts">

const listProduct = [
  {
    image: "./images/240910-Mock-up-Social-Media-Ail-Miel-scaled.jpg",
    alt: "image1",
    smallTitle: "Ail & Miel",
    title: "title1",
    description: "description1",
    smallDescription: "smallDescription1"
  },
  {
    image: "./images/aerodynamic-identite-visuelle.jpg",
    alt: "image2",
    smallTitle: "Aero Dynamic'",
    title: "title2",
    description: "description2",
    smallDescription: "smallDescription2"
  },
  {
    image: "./images/conception-brochure-commerciale-continuum.jpg",
    alt: "image3",
    smallTitle: "Continuum",
    title: "title3",
    description: "description3",
    smallDescription: "smallDescription3"
  },
  {
    image: "./images/declinaison-logo-sur-ticket-de-cinema.jpg",
    alt: "image4",
    smallTitle: "Seven Scars Production",
    title: "title4",
    description: "description4",
    smallDescription: "smallDescription4"
  },
  {
    image: "./images/identite-graphique-mabellashop-social-media.jpg",
    alt: "image5",
    smallTitle: "Mabella Shop",
    title: "title5",
    description: "description5",
    smallDescription: "smallDescription5"
  },
  {
    image: "./images/tags-scaled.jpg",
    alt: "image5",
    smallTitle: "Pepit",
    title: "title5",
    description: "description5",
    smallDescription: "smallDescription5"
  },
  {
    image: "./images/wivzem-identite-graphique.jpg",
    alt: "image5",
    smallTitle: "Wivzem",
    title: "title5",
    description: "description5",
    smallDescription: "smallDescription5"
  }
]

</script>

<template>
  <div class="flex my-16 rounded-2xl mx-auto">
    <div class=" bg-white blur-lg text-transparent ">ll</div>
    <NuxtMarquee
        direction="right"
        gradientColor="var(--color-dark-50)"
    >
      <div class="flex h-1/2">

        <div v-for="product in listProduct">
          <Product :image="product.image" :alt="product.alt" :smallTitle="product.smallTitle" :title="product.title" :description="product.description" :smallDescription="product.smallDescription" />
        </div>

      </div>
    </NuxtMarquee>
  </div>
</template>

<style scoped>

</style>