<script setup lang="ts">
onMounted(() => {
  const mm = useGsap.matchMedia(); // Initialise matchMedia

  mm.add("(min-width: 1024px)", () => {
    // Animation pour écran large
    useGsap.to('.cta', {
      fontSize: 50,
      duration : 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.cta',
        start: "top center",
        end: "bottom+=500 center",
        toggleActions: 'restart reverse none reverse',
        scrub: 4,
        pin: true, // Bloque l'élément pendant l'animation,
      },
    });
  });

  mm.add("(max-width: 1023px)", () => {
    // Animation pour écran mobile/tablette
    useGsap.to('.cta', {
      fontSize: 25,
      duration : 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: '.cta',
        start: "top center",
        end: "bottom+=300 center",
        toggleActions: 'restart reverse none reverse',
        scrub: 2,
        pin: true, // Bloque l'élément pendant l'animation,
      },
    });
  });
});
</script>


<template>
  <div class="div-zoom">
    <div class="cta absans text-center pt-20 xl:mb-[400px] mb-[350px]  text-lg rounded-xl">
      Toujours pas convaincu ?
      <br>
      Regardez ce que disent nos clients !
    </div>
  </div>


</template>

<style scoped>
</style>