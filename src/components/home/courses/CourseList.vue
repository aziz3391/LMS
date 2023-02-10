<template>
  <div class="course without">
    <div class="container without">
      <div class="row without">
        <Splide
          class="spliding"
          :options="{
            type: 'loop',
            perPage: 3,
            autoplay: true,
            arrows: false,
            gap: 40,
          }"
        >
          <SplideSlide v-for="(item, index) in courses" :key="index">
            <CourSe :courses="item" />
          </SplideSlide>
          <!-- <SplideSlide>
            <CourseTwo />
          </SplideSlide>
          <SplideSlide>
            <CourseThree />
          </SplideSlide>
          <SplideSlide>
            <CourseTwo />
          </SplideSlide>
          <SplideSlide>
            <CourseThree />
          </SplideSlide> -->
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import CourSe from "../courses/CourSe.vue";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
    CourSe,
  
  },
  props: ["courses"],
};
</script>

<style lang="scss">
@import "/src/styles/components/course/courselist";
</style>