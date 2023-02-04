<template>
  <div class="container"></div>
  <div class="row w1480">
  <div class="stlinecourse d-flex">
    <ul class="ul d-flex">
      <li class="p14 cpurple ma">
        <router-link to="/"> Главная </router-link>
      </li>
      <img class="w2424 ma" src="../assets/else/chevron-right.png" alt="" />
      <li class="p14 gray ma">Курсы</li>
    </ul>
  </div>
  <div class="ndlinecourse ">

  <h1>Курсы</h1>
  <div class="list_lang mt30">
    <button class="btn h34w69">Все</button>
    <button class="newsu c4F4F4F">Китайский</button>
    <button class="newsu c4F4F4F">Английский</button>
    <button class="newsu c4F4F4F">Немецкий</button>
  </div>
  </div>
  </div>
  <div class="row">
    <div class="col-9 col-md-12">
     <div class="rowsm d-flex">
      <CourseOne/>
      <CourseTwo/> 
     </div>
     <div class="rowsm d-flex gap40">
      <CourseThree/>
      <CourseTwo/>

     </div>
     <div class="rowsm"></div>
    </div>
    <div class="col-3 col-md-12"></div>
  </div>
</template>

<script>
import CourseOne from "@/components/home/courses/CourseOne.vue";
import CourseTwo from "@/components/home/courses/CourseTwo.vue";
import CourseThree from "@/components/home/courses/CourseThree.vue";
export default {
  components:{
     CourseOne,
    CourseTwo,
    CourseThree,
  }
};
</script>

<style lang="scss">
@import "../styles/views/courseview";
</style>
