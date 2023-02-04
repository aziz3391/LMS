<template>
  <WelcomeItem />
  <CourseItem />
  <ForWhom />
  <ReasonWhy />
  <EffectItem />
  <HowItworks />
  <QuoteItem />
  <RegistraTion />
  <UsefulInfo />
  <FaQuest />
</template>

<script>
import ReasonWhy from "@/components/home/Reason/ReasonWhy.vue";
import WelcomeItem from "@/components/home/welcomepage/WelcomeItem.vue";
import CourseItem from "@/components/home/courses/CourseItem.vue";
import ForWhom from "@/components/home/Forwhom/ForWhom.vue";
import EffectItem from "@/components/home/efficiency/EffectItem.vue";
import HowItworks from "@/components/home/howitworks/HowItworks.vue";
import QuoteItem from "@/components/home/quote/QuoteItem.vue";
import RegistraTion from "@/components/home/registration/RegistraTion.vue";
import UsefulInfo from "@/components/home/usefulinfo/UsefulInfo.vue";
import FaQuest from "@/components/home/faq/FaQuest.vue";
export default {
  name: "HomeView",
  components: {
    WelcomeItem,
    CourseItem,
    ForWhom,
    ReasonWhy,
    EffectItem,
    HowItworks,
    QuoteItem,
    RegistraTion,
    UsefulInfo,
    FaQuest,
  },
};
</script>
