
<script setup lang="ts">
const navigation = [
  {
    label: "Services",
    links: [
      {
        label: "Development",
        link: "#",
      },
      {
        label: "Design",
        link: "#",
      },
      {
        label: "Mobile Apps",
        link: "#",
      },
      {
        label: "Imagene Data",
        link: "#",
      },
    ],
  },
];

const other_navigation = [
  {
    label: "Company",
    links: [
      {
        label: "About",
        link: "#",
      },
      {
        label: "Website",
        link: "#",
      },
      {
        label: "Brand",
        link: "#",
      },
      {
        label: "Gallery",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
      {
        label: "Services",
        link: "#",
      },
      {
        label: "Careers",
        link: "#",
      },
    ],
  },
];

const product_navigation = [
  {
    label: "Product",
    links: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Features",
        link: "#",
      },
      {
        label: "Pricing",
        link: "#",
      },
      {
        label: "FAQs",
        link: "#",
      },
      {
        label: "Updates",
        link: "#",
      },
    ],
  },
];

</script>

<template>
  <footer
      class="text-white flex flex-col p-10 mt-20 bg-[url('/images/image-mesh-gradient-3.png')] bg-cover bg-no-repeat text-white"
  >
    <div class="mx-auto container relative z-10 grid w-full grid-cols-10 gap-y-4 lg:gap-y-0">
      <div
          class="col-span-full flex flex-col items-start justify-start gap-y-6 lg:col-span-4 xl:col-span-8"
      >
        <span
            class="text-white absans inline-block w-full text-lg font-medium md:w-1/2"
        >
          La Clinique des marques
        </span>
        <p
            class="text-dark-950/50 dark:text-dark-50/50 font-inter inline-block w-full text-sm md:w-1/2"
        >
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit.
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
          class="col-span-full flex w-full flex-col gap-y-2 md:col-span-6 lg:col-span-2 xl:col-span-1"
      >
        <template v-for="(nav, index) in navigation" :key="index">
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
                color="neutral"
                size="lg"
                class="p-0"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
          class="col-span-full flex w-full flex-col gap-y-2 md:col-span-6 lg:col-span-2 xl:col-span-1"
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
          class="gap-1 text-white border-dark-950/10 dark:border-dark-50/10 text-dark-950/50 dark:text-dark-50/50 col-span-full mt-4 mb-2 flex items-center justify-center border-t pt-4 text-sm"
      >
       <p>© Made with ❤️ by </p>  <a class="text-[#F0BF6C]" href="https://www.mc-studio.eu/"> MC Studio</a>
      </div>
    </div>
  </footer>
</template>
