<script setup lang="ts">


import CarouselResponsive from "~/components/Ui/CarouselResponsive.vue";
import AvisClient from "~/components/Ui/AvisClient.vue";
import GroupBadge from "~/components/Ui/GroupBadge.vue";

const props = defineProps ({

})

</script>

<template>
  <hr class="border-black/10 border-[0.5px] mx-auto my-5" />

  <p>01</p>

  <div class="grid lg:grid-cols-12 grid-cols-5 items-start xl:gap-4 gap-6 mt-5">
    <div class="col-span-5">
      <div class="flex flex-col gap-3">

        <GroupBadge />

        <h3 class="md:text-2xl text-xl font-bold mt-2 absans">La manufacture des blouses</h3>

        <p class="tracking-wider xl:text-lg md:text-md text-sm">
          Notre analyse a révélé deux axes stratégiques essentiels pour le repositionnement de la marque : la signification du vêtement de travail pour les collaborateurs et le manque de stylisme dans l’univers des vêtements professionnels.
        </p>

        <p class="tracking-wider xl:text-lg md:text-md text-sm">
          D’une part, le vêtement professionnel n’est pas seulement fonctionnel, il incarne aussi un sentiment d’appartenance.
        </p>

        <div class="flex flex-col gap-4 mt-5">
          <div class="flex gap-4">
            <div class="rounded-full bg-white border-[2px] border-beige flex items-center p-1">
              <UIcon class="text-purple text-md" name="i-lucide-arrow-up-right" />
            </div>
            <p>Typographie</p>
          </div>
          <div class="flex gap-4">
            <div class="rounded-full bg-white border-[2px] border-beige flex items-center p-1">
              <UIcon class="text-purple text-md" name="i-lucide-arrow-up-right" />
            </div>
            <p>Typographie</p>
          </div>
          <div class="flex gap-4">
            <div class="rounded-full bg-white border-[2px] border-beige flex items-center p-1">
              <UIcon class="text-purple text-md" name="i-lucide-arrow-up-right" />
            </div>
            <p>Typographie</p>
          </div>
        </div>

        <UButton class="mt-5 bg-black rounded-xl w-40 hover:bg-white hover:text-black xl:text-md text-xs" trailing-icon="i-lucide-arrow-right" >Réserver un appel</UButton>
      </div>
    </div>

    <div class="lg:col-span-7 col-span-5">
      <div class="flex flex-col gap-4 items-center">

        <AvisClient />
        <CarouselResponsive />

      </div>
    </div>


  </div>
</template>

<style scoped>

</style>