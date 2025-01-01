<script setup lang="ts">
const props = defineProps({
  faq: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="whitespace-pre-line mt-5 border rounded-xl p-2">
    <UCollapsible class="flex flex-col gap-4" :defaultOpen="faq.open">
      <UButton
          @click="faq.open = !faq.open"
          class="text-black md:text-sm  font-medium text-xs flex cursor-pointer items-center justify-between pb-2"
          :label="faq.question"
          variant="link"
      >
        <template #trailing>
          <UIcon class="text-purple font-semibold text-xl"
              :name="faq.open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
          />
        </template>
      </UButton>
      <template #content>
        <p
            class="font-extralight  w-full md:text-[13px] text-xs px-3"
        >
          {{ faq.answer }}
        </p>
      </template>
    </UCollapsible>
  </div>
</template>

<style scoped>

</style>