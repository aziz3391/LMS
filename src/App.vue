<template>
  <HeaderItem class="sticky"/>
  <router-view style="margin-bottom:100px"></router-view>
  <NotifBox/>
  <FooterItem />
</template>

<script>
import HeaderItem from "./components/Header/HeaderItem.vue";
import FooterItem from "./components/home/footer/FooterItem.vue"
import NotifBox from "./components/Header/NotifBox.vue"
export default {
  components: {
    HeaderItem,
    FooterItem,NotifBox
  },
  mounted(){
    this.$store.dispatch('getBlogs')
  },
  computed:{
    getBlogs(){
    return this.$store.getters.Blogs
    }
  },
  watch:{
    $route(){
      window.scroll(0,0)
    }
  }
};
</script>


<style lang="scss">

@import "/src/styles/app";
@import "@splidejs/vue-splide/css";
</style>
