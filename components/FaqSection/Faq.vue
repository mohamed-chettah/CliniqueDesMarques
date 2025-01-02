

<script setup lang="ts">
import CollapseQuestion from "~/components/FaqSection/CollapseQuestion.vue";

const firstQuestion = ref([
  {
    question: "Qu'est-ce qu'une agence de branding et " +
        "comment peut-elle aider mon entreprise à Lyon ?",
    answer: "Une agence de branding à Lyon est spécialisée dans la création et le développement de l’identité de marque. Nous accompagnons les entreprises lyonnaises dans la construction de leur plateforme de marque, la définition de leur positionnement, la création de leur identité visuelle (logo, charte graphique) et la construction d’une image de marque cohérente sur tous les supports de communication.",
    open: false,
  },
  {
    question: "Quels services propose " +
        "votre agence de branding à Lyon ?",
    answer: "Notre agence lyonnaise propose une gamme complète de services :  Audit de marque et positionnement stratégique, Création d’identité visuelle (logo, charte graphique), Design d’emballage et packaging, Stratégie de communication, Branding digital, Naming et identité verbale, Activation de marque sur le territoire lyonnais.",
    open: false,
  },
  {
    question: "Pourquoi choisir une agence de " +
        "branding locale à Lyon ?",
    answer: "Travailler avec une agence de branding basée à Lyon présente plusieurs avantages : Une parfaite connaissance du tissu économique local, La possibilité de rencontres régulières en présentiel, Une compréhension fine des spécificités du marché lyonnais, Un réseau solide de partenaires locaux, Une réactivité accrue grâce à la proximité géographique.",
    open: false,
  },
  {
    question: "Combien coûte une prestation de branding à Lyon ?",
    answer: "Les tarifs varient selon l’ampleur du projet et les services demandés. Nos prestations démarrent à partir de 1500€ pour une identité visuelle complète. Nous établissons un devis personnalisé après avoir cerné précisément vos besoins et objectifs.",
    open: false,
  },
  {
    question: "Quelles sont les étapes d'un projet de branding ?",
    answer: "Réunion de cadrage à Lyon pour comprendre vos besoins, Formalisation de votre philosophie de marque, Audit de votre marque et analyse concurrentielle, Définition de la stratégie de marque, Création des éléments d’identité visuelle et textuelle, Déploiement sur les différents supports, Accompagnement dans l’activation de la marque.",
    open: false,
  },
]);


const secondQuestion = ref([
  {
    question: "Travaillez-vous avec des entreprises " +
        "en dehors de Lyon ?",
    answer: "Bien que basés à Lyon, nous accompagnons des entreprises dans toute la France. Notre expertise locale s’étend naturellement sur le marché Français, tout en maintenant la même qualité de service et de suivi.",
    open: false,
  },
  {
    question: "Combien de temps dure un projet de branding ?",
    answer: "La durée moyenne d’un projet complet de branding est de 2 à 4 mois. Ce délai peut varier selon la complexité du projet et les livrables attendus. Nous établissons un planning détaillé dès le début de la collaboration.",
    open: false,
  },
  {
    question: "Comment débuter une collaboration " +
        "avec votre agence de branding ?",
    answer: "Contactez-nous par téléphone ou via notre formulaire de contact. Nous organisons une première réunion en visio ou dans nos locaux à Lyon. Nous vous envoyons une proposition détaillée sous 48h. Le projet démarre dès validation du devis.",
    open: false,
  },
  {
    question: "Quelles entreprises lyonnaises avez-vous déjà accompagnées ?",
    answer: "Notre agence de branding a accompagné de nombreuses entreprises locales dans des secteurs variés : restauration, immobilier, technologie, industrie, cosmétique… Nous vous présenterons nos références lors de notre premier rendez-vous à Lyon ou en visio.",
    open: false,
  },
  {
    question: "Proposez-vous un suivi après la création du branding ?",
    answer: "Oui, nous assurons un suivi post-création pour garantir l’optimisation de votre nouvelle identité. Nous accompagnons également nos clients dans la création de contenus et de campagnes de communication, afin de maintenir une cohérence de marque durable. Nous proposons en outre de former vos équipes à l’utilisation de votre charte graphique et de vous guider dans le déploiement de votre marque.",
    open: false,
  },
])

const initial = ref({
  y: 100,
  opacity: 0,
})

const enter = ref({
  y: 0,
  opacity: 1,
})
</script>


<template>
  <div id="faq">

  </div>
  <div class="bg-dark-50 dark:bg-dark-950 w-full px-4 mt-32  ">
    <UContainer>
      <div class="flex flex-col">
        <h2 class="font-semibold">FAQ</h2>
        <h3 class="md:text-3xl text-2xl font-bold mt-2 text-purple">
          Les Questions qu'on nous pose le plus souvent
        </h3>
      </div>


      <div class="mt-5 h-full flex xl:flex-row flex-col gap-3">
        <div>
          <template v-for="(faq, index) in firstQuestion" :key="index">
            <CollapseQuestion :faq="faq" />
          </template>
        </div>

        <div>
          <template v-for="(faq, index) in secondQuestion" :key="index">
            <CollapseQuestion :faq="faq" />
          </template>
        </div>

      </div>
    </UContainer>
  </div>
</template>