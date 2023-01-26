<template>
  <WelcomeItem />
  <CourseItem />
</template>

<script>
import WelcomeItem from "@/components/welcomepage/WelcomeItem.vue";
import CourseItem from "@/components/courses/CourseItem.vue";
export default {
  name: "HomeView",
  components: {
    WelcomeItem,
    CourseItem,
  },
};
</script>
