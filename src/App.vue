<template>
  <HeaderItem class="sticky"/>
  <router-view style="margin-bottom:100px"></router-view>
  <FooterItem />
</template>

<script>
import HeaderItem from "./components/Header/HeaderItem.vue";
import FooterItem from "./components/home/footer/FooterItem.vue"
export default {
  components: {
    HeaderItem,
    FooterItem
  },
  mounted(){
    this.$store.dispatch('getBlogs')
  },
  computed:{
    getBlogs(){
    return this.$store.getters.Blogs
    }
  }
};
</script>


<style lang="scss">

@import "/src/styles/app";
@import "@splidejs/vue-splide/css";
</style>
