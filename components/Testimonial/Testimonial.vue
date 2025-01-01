<script setup lang="ts">
const testimonials = shallowRef([
  [
    {
      name: "Emily Johnson",
      username: "@emilyj",
      text: "This service transformed my business. The tools" +
          "\n  provided are easy to use and incredibly effective. Highly recommend!",
    },
    //Add more data
  ],
  [
    {
      name: "Laura Fernández",
      username: "@laurafern",
      text: "La mejor herramienta que he usado para crear " +
          "\n landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
    },
    //Add more data
  ],
  [
    {
      name: "David Wilson",
      username: "@davidw",
      text: "Exceeded all my expectations! The UI is beautiful" +
          "\n  and the features are exactly what I needed for my project.",
    },
    //Add more data
  ],
  [
    {
      name: "Sophie Li",
      username: "@sophieli",
      text: "I've been using this service for a few months now and I'm very happy with " +
          "\n the results. It's easy to use and the support team is great.",
    },
    //Add more data
  ],
  [
    {
      name: "John Smith",
      username: "@johnsmith",
      text: "I've tried a few different services and this one is by far the best. " +
          "\n The features are great and the support is top-notch.",
    },
    //Add more data
  ],
  [
    {
      name: "Maria García",
      username: "@mariag",
      text: "Me encanta esta herramienta. " +
          "\n Es fácil de usar y tiene todas las funciones que necesito para mis proyectos. ¡Muy recomendable!",
    },
    //Add more data
],
]);
</script>

<template>

  <NuxtMarquee
      direction="up"
      gradientColor="var(--color-dark-50)"
  >
  </NuxtMarquee>

    <div class="xl:mx-0 mx-10 mt-10">

      <div class="border mt-10 p-10 bg-[url('/images/abstract-purple.jpeg')]  bg-cover bg-no-repeat rounded-xl">

        <div class="flex my-16 rounded-2xl mx-auto">
          <NuxtMarquee
              direction="right"
              gradientColor="var(--color-dark-50)"
          >
            <div class="font-inter mt-8 grid grid-cols-12 gap-4 p-4 md:mt-24">

              <template v-for="(col, index) in testimonials" :key="index">

                <div
                    class="col-span-full flex h-full flex-col gap-2 even:mt-4 md:col-span-4"
                >
                  <template v-for="(testimonial, _index) in col" :key="_index">
                    <div
                        class=" bg-beige border rounded-xl p-8 transition-all duration-300 ease-in-out"
                    >
                      <p
                          class="text-dark-950/80 dark:text-dark-50/60 text-base whitespace-pre-line font-normal"
                      >
                        {{ testimonial.text }}
                      </p>
                      <div class="mt-20">
                  <span
                      class="text-dark-950 dark:text-dark-50 inline-block w-full text-sm font-bold"
                  >{{ testimonial.name }}</span
                  >
                        <span
                            class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-sm font-normal"
                        >{{ testimonial.username }}</span
                        >
                      </div>
                    </div>
                  </template>
                </div>

              </template>

            </div>
          </NuxtMarquee>
        </div>

      </div>

    </div>



</template>

<style scoped>

</style>