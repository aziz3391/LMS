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
          <SplideSlide>
            <CourseOne />
          </SplideSlide>
          <SplideSlide>
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
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import CourseOne from "@/components/home/courses/CourseOne.vue";
import CourseTwo from "@/components/home/courses/CourseTwo.vue";
import CourseThree from "@/components/home/courses/CourseThree.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
    CourseOne,
    CourseTwo,
    CourseThree,
  },
};
</script>

<style lang="scss">
@import "/src/styles/components/course/courselist";
</style>