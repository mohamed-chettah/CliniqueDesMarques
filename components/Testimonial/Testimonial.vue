<script setup lang="ts">
const testimonials = shallowRef([
  [
    {
      name: "Laura Larivière",
      username: "@laural",
      role: "Fondatrice de Pé Pit'",
      text: "La Clinique des Marques a accompagné ma start up Pé Pit' dans l'élaboration et la conception de son Branding. Plus qu'un logo, c'est un réel accompagnement dont nous avons bénéficié ! Les mots qui définissent cette agence : Écoute, Pragmatique, Bienveillance & Vision business. Au-delà de l'aspect graphique, nous avons aussi repositionné toute la promesse de la marque qui a directement impacté notre business model (pour le mieux). Je recommande !",
    },
    // Ajoutez d'autres avis ici
  ],
  [
    {
      name: "Albin Quicampoix",
      username: "@albinq",
      role: "Membre de l'équipe Iad Lyon",
      text: "Nous avons eu l'opportunité d'être accompagnés par la Clinique des Marques, en particulier par Mehdi, dans le processus de création de nos valeurs, notre raison d'être et notre mission au sein de notre équipe chez Iad. Les ateliers collectifs ont été des moments clés, où Mehdi a su nous guider pour extraire l'essentiel et faciliter un accord collectif sur ces éléments fondamentaux. Son expertise et sa méthodologie ont grandement contribué à façonner notre identité. Nous sommes reconnaissants pour cette collaboration enrichissante. Je recommande à 100% ! Un grand merci à Mehdi de la part des Créateurs de Bons Moments chez Iad.",
    },
    // Ajoutez d'autres avis ici
  ],
  [
    {
      name: "Alain Humbert",
      username: "@alainh",
      role: "Responsable chez ÉcloHésion",
      text: "Nous avons travaillé avec La Clinique des Marques sur la refonte complète de nos marques et de notre identité. J'ai été pleinement satisfait de leur réactivité et de leur créativité.",
    },
    // Ajoutez d'autres avis ici
  ],
  [
    {
      name: "Marie Santos",
      username: "@maries",
      role: "Entrepreneuse",
      text: "Très bonne expérience avec La Clinique des Marques ! Mehdi et son équipe ont su comprendre mes besoins et m’accompagner à chaque étape de mise en place. Le tout avec réactivité et implication !",
    },
    // Ajoutez d'autres avis ici
  ],
  [
    {
      name: "Tom Depril Dupre",
      username: "@tomdd",
      role: "Client satisfait",
      text: "Agence très sérieuse et réactive ! Merci Mehdi !",
    },
    // Ajoutez d'autres avis ici
  ],
  [
    {
      name: "Mouloud Feknous",
      username: "@mouloudf",
      role: "Représentant de VETAGRAL",
      text: "Le travail réalisé pour la société VETAGRAL est très satisfaisant.",
    },
    // Ajoutez d'autres avis ici
  ],
  // Ajoutez d'autres groupes d'avis si nécessaire
]);

</script>
<template>
  <div id="testimonials" class="py-16">
    <div class="xl:mx-0 mx-10">
      <div class="border mt-10 p-10 bg-[url('/images/celest.jpeg')] bg-cover bg-no-repeat rounded-xl shadow-lg">
        <div class="flex my-16 rounded-2xl mx-auto">
          <div class="font-inter mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <template v-for="(col, index) in testimonials" :key="index">
              <template v-for="(testimonial, _index) in col" :key="_index">
                <div
                    class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <p
                      class="text-gray-700 text-base whitespace-pre-line font-normal mb-6 leading-relaxed"
                  >
                    “{{ testimonial.text }}”
                  </p>
                  <div class="mt-6 flex items-center">
                    <div class="flex flex-col">
                      <span
                          class="text-gray-900 text-lg font-bold"
                      >{{ testimonial.name }}</span>
                      <span
                          class="text-gray-500 text-sm font-medium"
                      >{{ testimonial.role }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>