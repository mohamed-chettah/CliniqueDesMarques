<script setup lang="ts">

const listProduct = [
  {
    image: "./images/240910-Mock-up-Social-Media-Ail-Miel-scaled.jpg",
    alt: "image1",
    smallTitle: "smallTitle1",
    title: "title1",
    description: "description1",
    smallDescription: "smallDescription1"
  },
  {
    image: "./images/aerodynamic-identite-visuelle.jpg",
    alt: "image2",
    smallTitle: "smallTitle2",
    title: "title2",
    description: "description2",
    smallDescription: "smallDescription2"
  },
  {
    image: "./images/conception-brochure-commerciale-continuum.jpg",
    alt: "image3",
    smallTitle: "smallTitle3",
    title: "title3",
    description: "description3",
    smallDescription: "smallDescription3"
  },
  {
    image: "./images/declinaison-logo-sur-ticket-de-cinema.jpg",
    alt: "image4",
    smallTitle: "smallTitle4",
    title: "title4",
    description: "description4",
    smallDescription: "smallDescription4"
  },
  {
    image: "./images/identite-graphique-mabellashop-social-media.jpg",
    alt: "image5",
    smallTitle: "smallTitle5",
    title: "title5",
    description: "description5",
    smallDescription: "smallDescription5"
  }

]

</script>

<template>
  <div class="mt-12 rounded-2xl mx-auto">
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