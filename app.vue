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

onMounted(
    () => {
      if(localStorage.getItem('nuxt-color-mode') != 'light') {
        localStorage.setItem('nuxt-color-mode', 'light')
      }
    }
)
</script>