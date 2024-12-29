<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]

const props = defineProps ({

})

</script>

<template>
  <hr class="border-black/10 border-[0.5px] mx-auto my-5" />

  <p>01</p>

  <div class="grid lg:grid-cols-10 grid-cols-5 items-start xl:gap-4 gap-6 mt-5">
    <div class="col-span-5">
      <div class="flex flex-col gap-3">
        <div class="flex gap-1">
          <UBadge color="neutral">Badge</UBadge>
          <UBadge color="neutral">Badge</UBadge>
          <UBadge color="neutral">Badge</UBadge>
        </div>

        <h3 class="text-2xl font-bold mt-2 absans">La manufacture des blouses</h3>

        <p>
          La mission confiée à La Clinique des Marques était claire : Afficher clairement qu’avec les accessoires Ail & Miel, la cuisine devient un jeu d’enfant
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

    <div class="lg:col-span-5 col-span-3">
      <UCarousel
          v-slot="{ item }"
          loop
          dots
          auto-scroll
          :items="items"
          :ui="{
          container: 'transition-[height]',
          controls: 'absolute -bottom-8 inset-x-12',
          dots: '-top-7',
          dot: 'w-6 h-1'
          }"
          class="w-full max-w-xs mx-auto lg:block hidden"
      >
        <NuxtImg :src="item" width="320" height="320" class="rounded-lg" />
      </UCarousel>

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
          class="w-full max-w-xs mx-auto lg:hidden block"
      >
        <NuxtImg :src="item" width="320" height="320" class="rounded-lg" />
      </UCarousel>
    </div>
  </div>
</template>

<style scoped>

</style>