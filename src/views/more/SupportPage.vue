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
          <h1 class="m0">
            Служба поддержки <span class="txtpurple"> Language to go</span>
          </h1>
          <p class="support_text p20medium c585858">
            Если у вас возникли трудности по работе сайта, сложности в оплате
            или есть вопрос, вы можете обратиться в службу поддержки, мы
            обязательно вам поможем.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-8 col-md-12 nopadding">
          <div class="support_text2">
            <h5 class="head_support">Общая информация</h5>
            <p class="p16medium width100">
              Ясность нашей позиции очевидна: консультация с широким активом
              однозначно определяет каждого участника как способного принимать
              собственные решения касаемо прогресса профессионального
              сообщества. Как уже неоднократно упомянуто, сделанные на базе
              интернет-аналитики выводы призывают нас к новым свершениям,
              которые, в свою очередь, должны быть объединены в целые кластеры
              себе подобных. Являясь всего лишь частью общей картины, явные
              признаки победы институционализации подвергнуты целой серии
              независимых исследований.
            </p>
          </div>
          <ContactReq type="1"  heading="Нужна помощь с выбором курса?" underhead=" Оставьте заявку и мы подберем индивидуальное решение"   style="padding: 0px" />
        </div>
        <div class="col-4 col-md-12">
          <img class="support_img" src="../../assets/img/support.png" alt="" />
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
      row_visible: true
    };
  },
};
</script>
  
  <style lang="scss" scoped>
@import "../../styles/views/support";
@import "../../styles/views/blogview";
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
  