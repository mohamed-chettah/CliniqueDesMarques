<script setup lang="ts">

import MainHero from "~/components/Hero/MainHero.vue";
import SliderProduct from "~/components/Product/SliderProduct.vue";
import GroupService from "~/components/Service/GroupService.vue";
import GroupCaseStudy from "~/components/CaseStudy/GroupCaseStudy.vue";
import Cta from "~/components/Ui/Cta.vue";
import Faq from "~/components/FaqSection/Faq.vue";
import WhoWeAre from "~/components/WhoWeAre/WhoWeAre.vue";
import TabsContact from "~/components/Contact/TabsContact.vue";
import Background from "~/components/Contact/Background.vue";


</script>

<template>

  <div class="containers">

    <MainHero />

    <SliderProduct />

    <GroupService />

  </div>

  <GroupCaseStudy />

  <div class="containers ">
    <Cta />

    <Testimonial />

    <Faq />

  </div>



  <div class="bg-[#6716DE] mt-32 py-20">


      <div class="container mx-auto">
        <WhoWeAre />

        <TabsContact />
      </div>




  </div>



</template>

<style scoped>

</style>