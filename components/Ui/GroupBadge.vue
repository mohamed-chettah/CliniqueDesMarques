<script setup lang="ts">
const props = defineProps({
  listBadge: Array
})
</script>

<template>
  <div class="flex gap-1" >
    <UBadge v-for="badge in listBadge" class="bg-beige text-black">{{ badge }}</UBadge>
  </div>
</template>

<style scoped>

</style>