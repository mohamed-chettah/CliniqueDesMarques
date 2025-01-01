<script setup lang="ts">
const props = defineProps<{
  to: string;
  size: string;
  class: string;
  label: string;
}>();
</script>

<template>
  <UButton :to="to" size="xl" class="xl:text-[14px] text-[12px] rounded-xl bg-[#6716DE] text-white hover:bg-[#FCF2F2] hover:text-black border">{{ label }}</UButton>
</template>

<style scoped>

</style>