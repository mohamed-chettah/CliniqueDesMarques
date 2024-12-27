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
  <div class="flex w-full items-center justify-center">
    <NuxtImg :src="image" :alt="alt" class="w-[600px]" />
  </div>
</template>

<style scoped>

</style>