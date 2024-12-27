<script setup lang="ts">
import Navbar from "~/components/Main/Navbar.vue";
</script>

<template>


  <Navbar class="pt-2"/>

  <div class="mt-52">
    <slot />
  </div>


</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>