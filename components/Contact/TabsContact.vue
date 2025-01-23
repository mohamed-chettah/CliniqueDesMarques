<script setup lang="ts">

const state = reactive({
  name: '',
  username: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>

  <div id="contact">

  </div>

  <div  class="text-center mt-32 text-white">
    <h2 class="font-semibold ">Contact</h2>
    <h3 class="md:text-3xl text-2xl font-bold mt-2">
      Prêt à travailler avec nous ?
    </h3>
  </div>

  <div class="flex flex-col border-[2px] border-solid border-white gap-5 shadow-2xl p-8 bg-beige rounded-xl mt-5 xl:mx-72 mx-10">

        <UForm :state="state" class="flex flex-col gap-4">

          <p class="text-bold text-sm">Informations de contact</p>

          <div class="flex gap-4 items-center">
              <UInput placeholder="Nom" v-model="state.name" class="w-full" />
              <UInput  placeholder="Email" v-model="state.username" class="w-full" />
          </div>

          <UTextarea  name="message" placeholder="Décriver votre projet" class="w-full" />

          <p class="text-sm">Précisez les domaines : </p>

          <div class="flex xl:flex-row flex-col gap-2  text-purple">
            <div class="flex xl:flex-row flex-col gap-2">
              <UCheckbox color="neutral"  label="Identité Visuelle" />
              <UCheckbox color="neutral" label="WebDesign" />
            </div>
            <div class="flex xl:flex-row flex-col gap-2">
              <UCheckbox color="neutral" label="Audit Marketing" />
              <UCheckbox color="neutral" label="Positionnement" />
            </div>

          </div>

          <UButton to="#casestudy"
                   trailing-icon="i-lucide-arrow-right"
                   size="xl" class="xl:text-[14px] text-[12px] rounded-xl bg-purple border text-white hover:bg-white hover:text-black">Envoyer un message </UButton>
        </UForm>

  </div>
</template>

