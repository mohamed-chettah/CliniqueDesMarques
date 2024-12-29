<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div class="bg-gradient-to-r from-[#EFECFE] to-purple-100 rounded-xl p-6 border">
    <div class="flex justify-between items-center">
      <h3 class="font-bold 2xl:text-lg text-md">{{ title }}</h3>
      <div class="rounded-full bg-white border-[2px] border-beige flex items-center p-4">
        <UIcon :name="icon" class="text-4xl text-purple" size="2xl" />
      </div>
    </div>

    <div class="bg-white shadow- p-6 rounded-xl flex flex-col gap-4 mt-8 border-[2px] border-beige">
      <h5 class="italic xl:text-md text-sm">{{ subtitle }}</h5>
      <p class="md:text-sm text-xs">{{ description }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>