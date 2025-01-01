<script setup lang="ts">
onMounted(() => {
  useGsap.to('.cta',{
    zoom: 3,
    scrollTrigger:{
      trigger:'.cta',
      start: "top 40%",
      end: "-=500",
      markers: true,
      toggleActions: 'restart reverse none reverse',
      scrub: 4,
    }
  })
});
</script>

<template>
<div class="cta absans text-center mx-10 mt-40 mb-[500px] text-xl rounded-xl">
  Toujours pas convaincu ?
  <br>
  Regardez ce que disent nos clients !
</div>
</template>

<style scoped>

</style>