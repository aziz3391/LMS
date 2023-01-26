<template>
  <HeaderItem />
  <router-view></router-view>
</template>

<script>
import HeaderItem from "./components/lib/HeaderItem.vue";
export default {
  components: {
    HeaderItem,
  },
};
</script>


<style lang="scss">
@import "/src/styles/app";
</style>
