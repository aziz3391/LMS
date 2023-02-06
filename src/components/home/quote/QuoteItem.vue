<template>
  <div class="container">
    <div class="row mt100 d-flexq">
      <h2>
        Что говорят о нас <br />
        ученики?
      </h2>
      <button class="btn outline" style="font-size: 15px">Все отзывы</button>
    </div>
    <div class="row">
      <div class="col-6 col-md-12">
        <img src="../../../assets/img/opinion/changed.png" alt="opinion" />
      </div>
          <div class="col-6 col-md-12">
      <Splide 
      class="w700"
    
        :options="{
          type: 'loop',
          autoplay: true,
          perPage: 1,
          arrows: false,
        }"
      >
        <SplideSlide>
            <div class="innner">
            <div class="insidequote border1">
              <div class="quoteline1">
                <div class="leftquote">
                  <h4 class="h20">Артем М.</h4>
                  <h5 class="h16 black">Студент</h5>
                </div>
                <div class="rightstart">
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                </div>
              </div>
              <div class="quoteline2">
                <p class="p16w720">
                  Занятия курса очень понравились, в основном благодаря
                  необычной системе — я человек настроения и не могу
                  подстраиваться под график индивидуального репетитора или тем
                  более целой группы. Иногда занимался несколько часов подряд —
                  настолько легко и интересно организована подача материала, а
                  один раз по болезни пропустил целую неделю.
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
            <div class="innner">
            <div class="insidequote border1">
              <div class="quoteline1">
                <div class="leftquote">
                  <h4 class="h20">Артем М.</h4>
                  <h5 class="h16 black">Студент</h5>
                </div>
                <div class="rightstart">
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                  <img src="../../../assets/icons/Star7.png" alt="" />
                </div>
              </div>
              <div class="quoteline2">
                <p class="p16">
                  Занятия курса очень понравились, в основном благодаря
                  необычной системе — я человек настроения и не могу
                  подстраиваться под график индивидуального репетитора или тем
                  более целой группы. Иногда занимался несколько часов подряд —
                  настолько легко и интересно организована подача материала, а
                  один раз по болезни пропустил целую неделю.
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style lang="scss">
@import "../../../styles/components/quote/quote";
</style>