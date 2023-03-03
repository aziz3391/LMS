<template>
  <nav class="sticky">
    <div class="firstitem">
      <router-link to="/">
        <img
          class="imghead mt28 ml50"
          src="../../assets/img/logo.png"
          alt="School Logo"
        />
      </router-link>
      <ul class="ulhead">
        <li>
          <router-link to="/course"> Курсы </router-link>
        </li>
        <li>
          <router-link to="/about"> О нас </router-link>
        </li>
        <li>
          <router-link to="/blogs"> Блог </router-link>
        </li>
        <li class="dropdown">
          <span
            v-click-out="hide"
            @click="toggle = !toggle"
            :class="`${toggle ? 'open' : 'dropbtn'}`"
          >
            Ещё
            <img
              src="../../assets/else/chevron-up.png"
              alt=""
              class="arrow_up"
            />
          </span>
          <div class="dropdown-content">
            <div class="dropitem border_radius-up10">
              <router-link class="nostyle semibold16" to="faq">FAQ</router-link>
            </div>
            <div class="dropitem">
              <router-link class="nostyle semibold16" to="contact">Контакты</router-link>
            </div>
            <div class="dropitem ">
              <router-link class="nostyle" to="faq">Условия оплаты</router-link>
            </div>
            <div class="dropitem ">
              <router-link class="nostyle semibold16" to="support">Служба поддержки</router-link>
            </div>
            <div class="dropitem border_radius-down10">
              <router-link class="nostyle semibold16" to="offer">Предложения</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- <router-view></router-view> -->
    <button class="btnhead">Войти</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    hide() {
      this.toggle = false;
    },
  },
  computed: {
    toggleit() {
      this.toggle == !this.toggle;
      return console.log(this.toggle);
    },
  },
};
</script>

<style lang="scss">
@import "/src/styles/components/Header.scss";

  .semibold16{
font-family: "Semi-bold";
font-size: 16px;
}

</style>