
<script setup lang="ts">

const product_navigation = [
  {
    label: "Navigation",
    links: [
      {
        label: "Services",
        link: "#",
      },
      {
        label: "Etudes de cas",
        link: "#",
      },
      {
        label: "Avis Clients",
        link: "#",
      },
      {
        label: "FAQs",
        link: "#",
      },
      {
        label: "Mention légales",
        link: "#",
      },
    ],
  },
];

</script>

<template>
  <footer
      class="footer text-white flex flex-col p-10 bg-purple text-white border-t "
  >
    <div class="containers">
    <div class="relative z-10 grid w-full grid-cols-10 gap-y-4 lg:gap-y-0">
      <div
          class="col-span-full flex flex-col items-start justify-start gap-y-6 lg:col-span-4 xl:col-span-8"
      >
        <span
            class="text-white absans inline-block w-full text-lg font-medium md:w-1/2"
        >
          La Clinique des marques
        </span>
        <p
            class="text-white font-inter inline-block w-full text-sm md:w-1/2"
        >
          Nous donnons de la personnalité aux entreprises.
          <br />
          Elles performent.
          <br />
          Leurs clients adorent.
        </p>
        <div
            class="text-dark-950/50 dark:text-dark-50/50 flex items-center justify-start gap-x-4"
        >
          <UButton
              icon="i-simple-icons-instagram"
              variant="link"
              color="neutral"
              to="#"
              target="_blank"
              class="bg-purple text-white hover:text-beige"
          />
          <UButton
              icon="i-simple-icons-linkedin"
              variant="link"
              color="neutral"
              to="#"
              target="_blank"
              class="bg-purple text-white hover:text-beige"
          />
        </div>
      </div>
      <ul
          class="col-span-4 flex justify-end w-full flex-col gap-y-2 md:col-span-6 lg:col-span-2 xl:col-span-1"
      >
        <template v-for="(nav, index) in product_navigation" :key="index">
          <li
              class="text-white font-inter mb-3 text-base font-medium capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                size="lg"
                class="text-white p-0 hover:underline"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <div
          class="gap-1 col-span-full mt-8 mb-2 flex items-center justify-center border-t pt-4 text-sm"
      >
       <p>© 2024 - Made by </p>  <a class="text-[#F0BF6C]" href="https://www.mc-studio.eu/"> MC Studio</a>
      </div>
    </div>
    </div>
  </footer>
</template>
