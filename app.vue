<template>


    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>

</template>

<script setup lang="ts">

useHead({
  htmlAttrs: {
    class: 'nuxt-ui-scrollbars',
  },
});
// For Nuxt 3
definePageMeta({
  colorMode: 'light',
})

</script>