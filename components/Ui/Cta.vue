<script setup lang="ts">
onMounted(() => {
  useGsap.to('.cta',{
    scale: 5,
    scrollTrigger:{
      trigger:'.cta',
      pinnedContainer: ".main",
      start:'top 40%',
      end : 'bottom 20%',
      toggleActions: 'play reset play reset',
    }
  })
});
</script>

<template>
<div class="cta text-center mx-10 mt-20 p-10 rounded-xl">
  Pret à Transformé votre marque et votre entreprise ?
</div>
</template>

<style scoped>

</style>