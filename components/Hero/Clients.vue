<script setup lang="ts">

</script>

<template>
  <div class="bg-dark-50 relative w-full px-4 py-12">
    <UContainer>
      <h2 class="text-dark-900 text-center text-xl font-semibold">
        Ils nous ont fait confiance
      </h2>
      <div class="mt-12 bg-purple-500">
        <NuxtMarquee
            direction="right"
            gradientColor="var(--color-dark-50)"
        >
          <div class="flex items-center gap-20">
            <div class="flex h-24 w-full items-center justify-center">
              <NuxtImg src="./images/INSEP_Logotype_MONO_WHITE_RGB-768x578.png" class="h-24 w-24" />
            </div>
            <div class="flex h-24 w-full items-center justify-center">
              <NuxtImg src="./images/eclohesion_blanc-768x112.png" class="h-24 w-24" />
            </div>
            <div class="flex h-24 w-full items-center justify-center">
              <NuxtImg src="./images/Logo_mb_blanc-768x171.png" class="h-24 w-24" />
            </div>
            <div class="flex h-24 w-full items-center justify-center">
              <NuxtImg src="./images/klubb-logo-768x768.png" class="h-24 w-24" />
            </div>
            <div class="flex h-24 w-full items-center justify-center">
              <NuxtImg src="./images/2022_Logo_ESDES_Blanc_Sans_Fond-768x372.webp" class="h-24 w-24" />
            </div>
          </div>
        </NuxtMarquee>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>