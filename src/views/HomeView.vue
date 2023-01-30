<template>
  <WelcomeItem />
  <CourseItem />
  <ForWhom />
  <ReasonWhy />
</template>

<script>
import ReasonWhy from "@/components/home/Reason/ReasonWhy.vue";
import WelcomeItem from "@/components/home/welcomepage/WelcomeItem.vue";
import CourseItem from "@/components/home/courses/CourseItem.vue";
import ForWhom from "@/components/home/Forwhom/ForWhom.vue";
export default {
  name: "HomeView",
  components: {
    WelcomeItem,
    CourseItem,
    ForWhom,
    ReasonWhy,
  },
};
</script>
