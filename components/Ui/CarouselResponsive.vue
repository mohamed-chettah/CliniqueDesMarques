<script setup lang="ts">

</script>

<template>
    <UCarousel
        v-slot="{ item }"
        loop
        auto-scroll
        :ui="{
          container: 'transition-[height]',
          controls: 'absolute -bottom-8 inset-x-12',
          dots: '-top-7',
          dot: 'w-6 h-1'
          }"
        class="w-full max-w-xs mx-auto"
    >
      <NuxtImg :src="item"  class="h-[300px] w-[350px] rounded-lg" />
    </UCarousel>
</template>

<style scoped>

</style>