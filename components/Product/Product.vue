<script setup lang="ts">

const props = defineProps({
  image : String,
  alt : String,
  smallTitle : String,
  title : String,
  description: String,
  smallDescription: String

})

</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <NuxtImg :src="image" :alt="alt" class="xl:w-[600px] w-[400px] xl:h-[400px] h-[200px] border-[1px] border-white rounded-xl object-cover mr-5" />

    <div class="flex flex-col gap-5 max-w-[400px] tracking-wide">
      <h3 class="text-black/60 font-semibold"> | {{ smallTitle }}</h3>
    </div>
  </div>
</template>

<style scoped>

</style>