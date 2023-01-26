<template>
  <HeaderItem />
  <router-view></router-view>
</template>

<script>
import HeaderItem from "./components/Header/HeaderItem.vue";
export default {
  components: {
    HeaderItem,
  },
};
</script>


<style lang="scss">
@import "/src/styles/app";
@import "@splidejs/vue-splide/css";
</style>
