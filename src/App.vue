<template>
  <HeaderItem />
  <router-view style="margin-bottom:500px"></router-view>
  <FooterItem/>
</template>

<script>
import HeaderItem from "./components/Header/HeaderItem.vue";
import FooterItem from "./components/home/footer/FooterItem.vue"
export default {
  components: {
    HeaderItem,
    FooterItem
  },
};
</script>


<style lang="scss">
@import "/src/styles/app";
@import "@splidejs/vue-splide/css";
</style>
