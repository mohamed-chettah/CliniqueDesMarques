<script setup lang="ts">

import MainHero from "~/components/Hero/MainHero.vue";
import SliderProduct from "~/components/Product/SliderProduct.vue";
import GroupService from "~/components/Service/GroupService.vue";
import GroupCaseStudy from "~/components/CaseStudy/GroupCaseStudy.vue";
import Cta from "~/components/Ui/Cta.vue";


</script>

<template>
  <div class="container mx-auto ">

    <MainHero />

    <SliderProduct />

    <GroupService />

  </div>

  <GroupCaseStudy />

  <div class="container mx-auto">
    <Cta />

    <GroupService class="mt-96" />
  </div>

</template>

<style scoped>

</style>