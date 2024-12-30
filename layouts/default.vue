<script setup lang="ts">
import Navbar from "~/components/Main/Navbar.vue";
import Footer from "~/components/Main/Footer.vue";
</script>

<template>

  <Navbar class="pt-2"/>

  <div class="background"></div>
  <div class="shape1"></div>
  <div class="shape2"></div>
  <div class="mt-52">
    <slot />
  </div>

  <div class="fixed md:bottom-2 bottom-[1px] xl:left-2 left-[0.5px] xl:p-4 p-2 bg-white rounded-xl z-50 border">
    <a href="https://www.trustindex.io/reviews/clinique-des-marques.fr?lang=fr" target="_blank">
      <div class="flex flex-col gap-2 items-center">
        <NuxtImg src="./images/google.png" class="xl:w-6 w-5" />
        <div class="flex flex-col">
          <div v-for="n in 5" :key="n">
            <UIcon name="i-mdi-star" class="text-yellow-500"/>
          </div>
        </div>
      </div>
    </a>
  </div>

  <Footer />

</template>



<style>



/* Formes diagonales */
.background::before {
  backdrop-filter: blur(10px);
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
  rgba(255, 245, 245, 0.8) 0%,
  rgba(255, 224, 224, 0.6) 50%,
  rgba(255, 245, 245, 0.8) 100%);
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
  z-index: -1;
}

.background::after {
  backdrop-filter: blur(10px);
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: linear-gradient(135deg,
  rgba(255, 192, 203, 0.2) 0%,
  rgba(255, 182, 193, 0.4) 50%,
  rgba(255, 192, 203, 0.2) 100%);
  clip-path: polygon(0 30%, 100% 50%, 100% 100%, 0 80%);
  z-index: -2;
}

@media screen and (max-width: 1440px) {
  .background::after {
    width: 100%;
    height: 130%;
  }

}

</style>