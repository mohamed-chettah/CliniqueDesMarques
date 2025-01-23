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

definePageMeta({
  colorMode: 'light',
})

</script>