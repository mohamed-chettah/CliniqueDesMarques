<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div class="bg-gradient-to-r from-[#EFECFE] to-purple-100 rounded-xl p-6 border h-full">
    <div class="flex justify-between items-center">
      <h3 class="font-bold 2xl:text-xl xl:text-lg md:text-md text-sm ">{{ title }}</h3>
      <div class="rounded-full bg-white border-[2px] border-beige flex items-center xl:p-4 p-3">
        <UIcon :name="icon" class="xl:text-4xl text-2xl text-purple" />
      </div>
    </div>

    <div class="bg-white xl:p-6 p-4 tracking-wide leading-loose rounded-xl flex flex-col gap-4 mt-8 border-[2px] border-beige">
      <p class="md:text-sm text-xs">{{ description }}</p>
    </div>

  </div>
</template>

<style scoped>

</style>