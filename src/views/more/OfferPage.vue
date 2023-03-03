<template>
    <div class="container full">
      <div class="row1 fit w1480vh dfc">
        <div class="dfc">
          <div class="stlinecourseup d-flex">
            <ul class="ul d-flex">
              <li class="p14 cpurple ma">
                <router-link to="/"> Главная </router-link>
              </li>
              <img
                class="w2424 ma"
                src="../../assets/else/chevron-right.png"
                alt=""
              />
              <li class="p14 gray ma">Cлужба поддержки</li>
            </ul>
          </div>
          <div class="ndlinecourse">
            <h1 class="m0 widthfit">
                Предложения по работе </h1> 
                <div class="d-flex">
                    <h1 class="m0 widthfit mr15 d-flex">сайта </h1><h1><span class="txtpurple"> Language to go</span></h1>
                </div>
            <p class="support_text p20medium c585858">
                Мы всегда готовы становиться лучше! Есть предложения по улучшению работы сайта? Напишите нам
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-8 col-md-12 nopadding">
            <div class="offerbox">
                <div class="d-flex gap24">

                <img src="../../assets/else/exclamation.svg" alt="">
              <h5 class="head_offer">Заголовок общая информация</h5>
                </div>
              <p class="offer_text">
                Здесь мы собираем предложения по улучшению <router-link to="/">Language to go</router-link>  и <router-link to="/">Language to go</router-link> 
Если вы столкнулись с техническими сложностями, свяжитесь с поддержкой

    
</p>
<p class="offer_text w733">
Пожелания по развитию <router-link to="/">Language to go</router-link>  можно оставить здесь.
Пожелания о добавлении на <router-link to="/">Language to go</router-link>  курсов, материалов, статей можно оставить здесь.
              </p>
            </div>
            <ContactReq type="2"  heading="Написать в службу поддержки" underhead=" Напишите свои предложения по улучшению работы сайта"   style="padding: 0px" />
          </div>
          <div class="col-4 col-md-12">
            <img class="support_img" src="../../assets/img/offerpage.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
import ContactReq from "../more/ContactReq.vue";
export default {
  components: {
    ContactReq,
  },
  data() {
    return {
      row_visible: true,
    };
  },
};
</script>
    
    <style lang="scss" scoped>
@import "../../styles/views/support";
@import "../../styles/views/blogview";
@import "../../styles/views/offer";
.support_text {
  max-width: 544px;
  font-family: "Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}
.blue {
  width: 100%;
  background: blue;
}
.col-md-12 {
  justify-content: flex-start;
  margin: 0px;
}
</style>
    