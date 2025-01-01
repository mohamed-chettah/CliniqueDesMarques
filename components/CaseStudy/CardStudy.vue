<script setup lang="ts">


import CarouselResponsive from "~/components/Ui/CarouselResponsive.vue";
import AvisClient from "~/components/Ui/AvisClient.vue";
import GroupBadge from "~/components/Ui/GroupBadge.vue";

const props = defineProps ({
  number: String,
  listBadge: Array,
  title: String,
  description1: String,
  description2: String,
  listTache: Array,
  avisClient: Object,
  listImage: Array
})

</script>

<template>
  <hr class="border-black/10 border-[1px] mx-auto my-5" />

  <p>{{ number }}</p>

  <div class="grid lg:grid-cols-12 grid-cols-5 items-start xl:gap-4 gap-6 mt-5">
    <div class="col-span-5">
      <div class="flex flex-col gap-3">

        <GroupBadge :listBadge="listBadge"/>

        <h3 class="md:text-2xl text-xl font-bold mt-2 absans">{{ title }}</h3>

        <p class="tracking-wider text-md sm:text-sm text-xs">
          {{ description1 }}
        </p>

        <p class="tracking-wider text-md sm:text-sm text-xs">
          {{ description2 }}
        </p>

        <div class="flex flex-col gap-4 mt-5">
          <div class="flex gap-4 items-center" v-for="tache in listTache">
            <div class="rounded-full bg-white border-[2px] border-beige flex items-center p-1">
              <UIcon class="text-purple text-md" name="i-lucide-arrow-up-right" />
            </div>
            <p class="xl:text-sm text-xs">{{ tache }}</p>
          </div>
        </div>

        <UButton to="#contact" class="mt-5 bg-black cursor-pointer rounded-xl w-40 hover:bg-white hover:text-black xl:text-md text-xs" trailing-icon="i-lucide-arrow-right" >Réserver un appel</UButton>
      </div>
    </div>

    <div class="lg:col-span-7 col-span-5">
      <div class="flex flex-col gap-4 items-center">

        <AvisClient :avisClient="avisClient" />
        <CarouselResponsive :items="listImage" />

      </div>
    </div>


  </div>
</template>

<style scoped>

</style>