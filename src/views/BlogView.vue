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
              src="../assets/else/chevron-right.png"
              alt=""
            />
            <li class="p14 gray ma">Блог</li>
          </ul>
        </div>
        <div class="ndlinecourse">
          <h1 class="m0">
            Блог <span class="txtpurple"> Language to go</span>
          </h1>
          <p class="p20medium c585858">
            Будьте в курсе наших событий. Следите за нашими новостями
          </p>
          <div class="list_lang gap15 mt30">
            <button class="btn h34w69">Все</button>
            <button class="newsu c4F4F4F">Новости</button>
            <button class="newsu c4F4F4F">Статьи</button>
            <button class="newsu c4F4F4F">Интересное</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8 col-md-12 dfgap40">
          <div class="error_blog" v-if="false">
            There is an internal error on the website...
          </div>
          <div class="row" v-if="row_visible">
            <div
              v-for="(item, index) in getBlogs"
              :key="index"
              :class="`${index == 0 ? 'col-12 ' : 'col-6'} noborder`"
            >
              <UsefulItem :lastblogs="item" />
            </div>
          </div>
        </div>
        <div class="col-4 col-md-12 mt0 pl0 hfull">
          <div class="inblog">
            <img src="../assets/img/blog.png" alt="" class="blogimg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsefulItem from "@/components/home/usefulinfo/UsefulItem.vue";
export default {
  components: {
    UsefulItem,
  },
  data() {
    return {
      row_visible: true,
    
    };
  },
  mounted() {
    this.$store.dispatch("getBlogs");
    if(this.$route.params.id){
      this.id = this.$route.params.id;
      console.log(this.id);
      this.$store.dispatch("getBlogId", this.id);
    }
  },
  computed: {
    getBlogs() {
      return this.$store.getters.Blogs;

    },
    getBlogId() {
      if (this.$store.getters.Blog) {
        return this.$store.getters.Blog;
      } else {
        let inverse = !this.row_visible
     
        return inverse;
      }
    },
  
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/blogview";
</style>
