<template>
  <div class="footerbox">
    <div class="stline">
      <div id="noborder" class="col-4 col-lg-12 cntrcol">
        <div class="st_itemfooter">
          <img
            src="../../../assets/img/logofooter.png"
            alt="footerlogo"
            class="footerimg"
          />
          <p class="footerp">
            Language2Go — интерактивная платформа для легкого, удобного и
            быстрого изучения иностранных языков.
          </p>
          <div class="payments">
            <img
              src="../../../assets/img/payment/visa.png"
              class="visa"
              alt=""
            />
            <img
              src="../../../assets/img/payment/mastercard.png"
              class="master"
              alt=""
            />
            <img src="../../../assets/img/payment/mir.png" class="mir" alt="" />
          </div>
        </div>
      </div>

      <div id="noborder" class="col-8 col-lg-12 align">
        <div class="col-4 col-md-12 mr">
          <div class="one">
            <h4 class="p24">Обучение</h4>
            <ul class="ulenlist" v-for="el in edu" :key="el">
              <li class="li">{{ el.name }}</li>
            </ul>
          </div>
        </div>
        <div class="col-4 col-md-12 mr">
          <div class="one">
            <h4 class="p24">Информация</h4>
            <ul class="ulenlist" v-for="el in info" :key="el">
              <li class="li">{{ el.name }}</li>
            </ul>
          </div>
        </div>
        <div class="col-4 col-md-12 mr">
          <div class="one">
            <h4 class="p24">Контакты</h4>
            <h4 class="p24">+7 (495) 156-35-50</h4>

            <ul class="ulenlist" v-for="el in contact" :key="el">
              <li class="li">{{ el.name }}</li>
            </ul>
            <div class="line">
              <img src="../../../assets/img/social/fb.png" alt="" />
              <img src="../../../assets/img/social/yt.png" alt="" />
              <img src="../../../assets/img/social/vk.png" alt="" />
              <img src="../../../assets/img/social/tw.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lastline">
      <div class="lastone">
        © 2022 Language to go
      </div>
      <div class="lasttwo">
        <ul class="line">
          <li>Правовая оговорка</li>
          <li>Пользовательское соглашение</li>
          <li>Политика конфиденциальности</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edu: [
        { name: "Все языки" },
        { name: "Взрослым" },
        { name: "Детям и подросткам" },
        { name: "Мини-курсы" },
        { name: "Тренажеры" },
        { name: "Индивидуальные занятия" },
      ],
      info: [
        { name: "О нас" },
        { name: "Отзывы" },
        { name: "Новости" },
        { name: "Частые вопросы" },
        { name: "Условия оплаты" },
        { name: "Контакты" },
      ],
      contact: [
        { name: "info@language2go.ru" },
        { name: "support@language2go.ru 101000, Москва, Россия" },
        // { name: "Детям и подросткам" },
        // { name: "Мини-курсы" },
        // { name: "Тренажеры" },
        // { name: "Индивидуальные занятия" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../styles/components/footer/footer";
</style>