<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div class="bg-gradient-to-r from-[#EFECFE] to-purple-100 rounded-xl p-6 border">
    <div class="flex justify-between items-center">
      <h3 class="font-bold xl:text-xl text-md">{{ title }}</h3>
      <div class="rounded-full bg-white border-[2px] border-beige flex items-center p-4">
        <UIcon :name="icon" class="text-4xl text-purple" size="2xl" />
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl flex flex-col gap-4 mt-8 border-[2px] border-beige">
      <p class="text-sm">{{ description }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>