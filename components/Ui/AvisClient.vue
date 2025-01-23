<script setup>
const props = defineProps({
  avisClient: Object
})
</script>

<template>
  <div class="flex flex-col gap-3 p-4 rounded-xl bg-white text-black  w-max-[180px] ">

    <p class="text-xs xl:whitespace-pre-line"> {{ avisClient.avis }}</p>

    <div class="flex items-center gap-3">
      <UAvatar :src="avisClient.avatar" size="xl"/>
      <div>
        <p class="absans xl:text-md text-sm font-semibold">{{ avisClient.name }}</p>
        <p class="text-xs font-light">{{ avisClient.job }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>