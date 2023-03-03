<template>
  <div class="contact_container">
    <div class="row contact_st">
      <ul class="ul d-flex">
        <li class="p14 cpurple ma">
          <router-link to="/"> Главная </router-link>
        </li>
        <img
          class="w2424 ma"
          src="../../assets/else/chevron-right.png"
          alt=""
        />
        <li class="p14 gray ma">Контакты</li>
      </ul>
      <h5 class="contact_title">Контакты</h5>
      <p class="contact_txt1">Мы на связи в любое удобное время</p>
    </div>
    <div class="row mt32">
      <div class="col-4 col-md-12 p0">
        <div class="inside_col4">
          <div class="contact_col4-item">
            <img
              src="../../assets/img/contact/phone.png"
              class="col4_img"
              alt=""
            />
            <div class="right_part-contact">
              <p class="contact_txt-up">По телефону</p>
              <p class="contact_txt-down">+7 (495) 156-35-50</p>
            </div>
          </div>
          <div class="contact_col4-item">
            <img
              src="../../assets/img/contact/email.png"
              class="col4_img"
              alt=""
            />
            <div class="right_part-contact">
              <p class="contact_txt-up">По электронке</p>
              <p class="contact_txt-down purple">
                info@language2go.ru <br />
                support@language2go.ru
              </p>
            </div>
          </div>
          <div class="contact_col4-item">
            <img
              src="../../assets/img/contact/social_net.png"
              class="col4_img"
              alt=""
            />
            <div class="right_part-contact">
              <p class="contact_txt-up">В соц. сетях</p>
              <div class="social">
                <img
                  src="../../assets/img/contact/f1.png"
                  alt="social networks"
                />
                <img
                  src="../../assets/img/contact/y1.png"
                  alt="social networks"
                />
                <img
                  src="../../assets/img/contact/t1.png"
                  alt="social networks"
                />
                <img
                  src="../../assets/img/contact/v1.png"
                  alt="social networks"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 col-md-12"> 
 <ContactReq type="0" heading="Написать в службу поддержки" underhead="Оставьте заявку и мы постараемся вам помочь" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactReq from './ContactReq.vue';

export default {
  components:{
    ContactReq
  },

};
</script>

<style lang="scss">
@import "../../styles/views/contact.scss";
</style>