<script setup lang="ts">

import MainHero from "~/components/Hero/MainHero.vue";
import SliderProduct from "~/components/Product/SliderProduct.vue";
import GroupService from "~/components/Service/GroupService.vue";
import GroupCaseStudy from "~/components/CaseStudy/GroupCaseStudy.vue";
import Cta from "~/components/Ui/Cta.vue";
import Faq from "~/components/FaqSection/Faq.vue";
import WhoWeAre from "~/components/WhoWeAre/WhoWeAre.vue";
import TabsContact from "~/components/Contact/TabsContact.vue";

onMounted(() => {
  useGsap.to('.note-google',{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    scrollTrigger:{
      trigger:'.last-div',
      pinnedContainer: ".main",
      start:'top 90%',
      end : 'bottom',
      toggleActions: 'play reset play reset',
    }
  })

});


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


      <div class="container mx-auto last-div">
        <WhoWeAre />

        <TabsContact />
      </div>




  </div>



</template>

<style scoped>

</style>