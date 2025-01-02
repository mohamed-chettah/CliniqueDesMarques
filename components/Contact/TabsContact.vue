<script setup lang="ts">

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>

  <div class="text-center mt-32 text-white">
    <h2 class="font-semibold ">Contact</h2>
    <h3 class="md:text-3xl text-2xl font-bold mt-2">
      Prêt à travailler avec nous ?
    </h3>
  </div>

  <div class="flex flex-col border-[1px] border-white gap-5 shadow-2xl p-8 bg-beige rounded-xl mt-5 xl:mx-72 mx-10">

        <UForm :state="state" class="flex flex-col gap-4">

          <p class="text-bold text-sm">Informations de contact</p>

          <div class="flex gap-4 items-center">
            <UFormField label="Name" name="name">
              <UInput v-model="state.name" class="w-full" />
            </UFormField>
            <UFormField label="Email" name="username">
              <UInput v-model="state.username" class="w-full" />
            </UFormField>
          </div>

          <UTextarea  name="message" placeholder="Décriver votre projet" class="w-full" />

          <p class="text-sm">Précisez les domaines : </p>

          <div class="flex gap-2 text-purple">
            <UCheckbox label="Check me" />
            <UCheckbox label="Check me" />
            <UCheckbox label="Check me" />
            <UCheckbox label="Check me" />
          </div>

          <UButton label="Envoyer un message" type="submit" class="cursor-pointer bg-black hover:bg-black/70 self-center" />
        </UForm>

  </div>
</template>

