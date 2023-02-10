<template>
  <div class="course without">
    <div class="container">
      <div class="row d-flexco">
        <h2>Курсы иностранных языков для любого уровня</h2>
        <!-- <h2>{{ courses }}</h2> -->
        <button class="btn outline">Все курсы</button>
      </div>
    </div>
    <CourseList :courses="courses"/>
  </div>
</template>

<script>
import CourseList from "@/components/home/courses/CourseList.vue";
export default {
  components: {
    CourseList,
  },
  props:['courses']
};
</script>

<style lang="scss">
@import "/src/styles/library/course";
</style>