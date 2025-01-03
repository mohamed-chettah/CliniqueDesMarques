<script setup lang="ts">
const testimonials = shallowRef([
  [
    {
      avatar: "/images/avis/antoine-courbon.jpeg",
      name: "Antoine Courbon",
      role: "Entrepreneur",
      text: "Je suis très satisfait de cette agence ! Nous sommes tenus informés tout au long du projet. Toujours réactif et surtout on se sent accompagné et conseillé, exactement ce qu’on attend comme réponse à nos problématiques."
    },
  ],
  [
    {
      avatar: "/images/avis/albin.jpg",
      name: "Albin Quicampoix",
      username: "@albinq",
      role: "Membre de l'équipe Iad Lyon",
      text:"Je recommande à 100% ! Un grand merci à Mehdi de la part des Créateurs de Bons Moments chez Iad."
    },
    // Ajoutez d'autres avis ici
  ],
  [
    {
      avatar: "/images/avis/sophe-rossi.jpeg",
      name: "Sophie Rossi",
      role: "Fondatrice d'HedonX",
      text: "Nous avons travaillé avec La Clinique des Marques sur la refonte complète de nos marques et de notre identité. J'ai été pleinement satisfait de leur réactivité et de leur créativité.",
    },
    // Ajoutez d'autres avis ici
  ],
  [
    {
      avatar: "/images/avis/guillaume.png",
      name: "Guillaume Bourdon",
      role: "Fondateur Second souffle lyon",
      text: "Nous avons fait intervenir la Clinique des Marques sur le site de notre association second souffle lyon ...c'est une révolution ! positive bien sur ! ils ont bien compris nos besoins et ce sont adaptés à notre niveau ...pour le bien des entrepreneurs accompagnés ! Merci"
    },
  ],
  [
    {
      avatar: "/images/avis/tom.png",
      name: "Tom Depril Dupre",
      username: "@tomdd",
      role: "Entrepreneur",
      text: "Agence très sérieuse et réactive ! Merci Mehdi !",
    },
  ],
  [
    {
      avatar: "/images/avis/isabelle-de-ochandiano.jpeg",
      name: "Isabelle De Ochandiano",
      role: "Fondatrice d'Itinérances",
      text: "Je ne peux que recommander chaleureusement La Clinique des Marques. L'équipe m'a permis de définir l'identité de ma Société Itinérances en prenant le temps, en ayant une approche pédagogique et fine pour cerner ma demande.",
    },
    // Ajoutez d'autres avis ici
  ],
  // Ajoutez d'autres groupes d'avis si nécessaire
]);

</script>
<template>
  <div id="testimonials" class="py-16">
    <div class="xl:mx-0 sm:mx-10">
      <div class="border mt-10 p-10 bg-[url('/images/celest.jpeg')] bg-cover bg-no-repeat rounded-xl shadow-lg">
        <div class="flex my-16 rounded-2xl mx-auto">
          <div class="font-inter mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <template v-for="(col, index) in testimonials" :key="index">
              <template v-for="(testimonial, _index) in col" :key="_index">
                <div
                    class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <p
                      class="text-gray-700 xl:text-[15px] sm:text-sm text-xs whitespace-pre-line font-normal mb-6 leading-relaxed"
                  >
                    {{ testimonial.text }}
                  </p>

                  <div class="flex sm:flex-row flex-col sm:items-center items-start gap-3">
                    <UAvatar :src="testimonial.avatar" size="xl"/>
                    <div>
                      <p class="absans xl:text-md text-sm">{{ testimonial.name }}</p>
                      <p class="text-xs font-semibold">{{ testimonial.role}}</p>
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