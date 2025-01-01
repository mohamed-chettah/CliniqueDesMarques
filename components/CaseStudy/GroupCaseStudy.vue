<script setup lang="ts">

import CardStudy from "~/components/CaseStudy/CardStudy.vue";

onMounted(() => {
  useGsap.to('.note-google',{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    scrollTrigger:{
      trigger:'.case-study',
      pinnedContainer: ".main",
      start:'top 90%',
      end : 'bottom 10%',
      toggleActions: 'play reset play reset',
    }
  })

});

const listCaseStudy = [
  {
    number: "01",
    listBadge: ["Naming", "Identité visuelle", "Territoire de marque","Industrie"],
    title: "Manufacture des blouses",
    description1: "Notre analyse a révélé deux axes stratégiques essentiels pour le repositionnement de la marque : la signification du vêtement de travail pour les collaborateurs et le manque de stylisme dans l’univers des vêtements professionnels.",
    description2: "La Manufacture des Blouses a changé de nom pour refléter une offre plus large de vêtements professionnels sur mesure. Son identité visuelle et sa typographie ont été modernisées pour allier tradition et modernité.",
    listTache: ["Typographie", "Charte graphique", "Broderie"],
    avisClient: {
      avis: "Une prestation sur-mesure et un accompagnement de qualité réalisé" +
          "\n par La Clinique des Marques. Je recommande.",
      avatar: "/images/manufacutre-blouse/photo-avis.jpeg",
      name: "Virginie Rey",
      job: "Gérante de la manufactures des blouses",
    },
    listImage: [
      '/images/manufacutre-blouse/carte-de-visite-industrie-textile.jpg',
      '/images/manufacutre-blouse/charte_graphique_mb_Page_4-1024x768.jpg',
      '/images/manufacutre-blouse/charte_graphique_mb_Page_5-1024x768.jpg',
      '/images/manufacutre-blouse/embroidery.jpg',
      '/images/manufacutre-blouse/identite-visuelle-industrie-textile-1024x683.jpg',
      '/images/manufacutre-blouse/logo-brode-industrie-textile.jpg'
    ]
  },
  {
    number: "02",
    listBadge: ["Plateforme de marque", "Audit Marketing","Naming","Cabinet de conseil"],
    title: "ÉcloHésion",
    description1: "Notre agence a mené un audit approfondi pour mieux comprendre la perception de la marque auprès des clients de EcloHésion.",
    description2: "Le nouveau nom « EcloHésion » résulte d’une réflexion sur la mission de l’entreprise : accompagner les collaborateurs dans l’éclosion de leur potentiel tout en renforçant la cohésion au sein des équipes, pour une meilleure productivité.",
    listTache: ["Nom de marque", "Typographie", "Iconographie"],
    avisClient: {
      avis: "Nous avons travaillé avec La Clinique des Marques sur la refonte complète " +
          " \nde nos marques et de notre identité. "+
          "J'ai été pleinement \n satisfait de leur réactivité et de leur créativité.",
      avatar: "/images/eclo-hesion/alain-humbert.jpeg",
      name: "Alain Humbert",
      job: "PDG EcloHésion",
    },
    listImage: [
      '/images/eclo-hesion/srf.jpg',
      '/images/eclo-hesion/2-scaled.jpg',
      '/images/eclo-hesion/d-1536x1097.jpg',
      '/images/eclo-hesion/Eclohesion.png',
      '/images/eclo-hesion/EcloHesion-1.png',
      '/images/eclo-hesion/identite-graphique-eclohesion-scaled.jpg',
      '/images/eclo-hesion/linikedin-eclo-scaled.jpg',
      '/images/eclo-hesion/signature-mail-eclo-scaled.jpg',
    ]
  }
]



</script>

<template>

  <div class="case-study bg-purple text-white mt-32 py-20">

    <div class="containers">
      <div class="xl:mx-0 mx-10 ">
        <h2 class="font-semibold">Etudes de cas</h2>
        <h3 class="md:text-3xl text-2xl font-bold mt-2">Des études de cas inspirantes pour révéler le potentiel de votre marque.</h3>

        <section class="mt-10" v-for="caseStudy in listCaseStudy">
          <CardStudy :number="caseStudy.number" :listBadge="caseStudy.listBadge" :title="caseStudy.title" :description1="caseStudy.description1" :description2="caseStudy.description2" :listTache="caseStudy.listTache" :avisClient="caseStudy.avisClient" :listImage="caseStudy.listImage" />
        </section>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>