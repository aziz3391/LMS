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
          <div class="blog1">
            <p class="p24bold">
              Новая система скидок в Language2GO: успейте забрать максимум!
            </p>
            <p class="p16medium e90d1 mt6mb10">05-06-2022</p>
            <p class="p16medium">
              Для многих стоимость изучения иностранного языка является важным
              критерием при выборе системы <br />
              обучения.
            </p>
            <div class="lastlineblog d-flex jcb mt20">
              <button class="newsu">Новость</button>
              <div class="right_blog ">
                
                  <router-link to="/blogs" class="d-flex p5 w120"> <h5>Подробнее </h5>
                
                <img
                  src="../assets/else/arrow-right.png"
                  alt="right  arrow"
                  class="arrow"
                />
                  </router-link>
              </div>
            </div>
          </div>
         
          <div class="row">
           <UsefulItem v-for="item in getBlogs" :key="item._id" :lastblogs="item"/>
          </div>
     
        </div>
        <div class="col-4 col-md-12 mt0 pl0 hfull ">
        <div class="inblog">
          <img src="../assets/img/blog.png" alt="" class="blogimg" />
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import UsefulItem from '@/components/home/usefulinfo/UsefulItem.vue'
export default {
  components: {
    UsefulItem
  },
  mounted(){
    this.$store.dispatch('getBlogs')
    this.id = this.$route.params.id
    this.$store.dispatch('getBlogId',this.id)
  },
  computed:{
    getBlogs(){
    return this.$store.getters.Blogs
    },
    getBlogId(){
    return this.$store.getters.Blog
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/views/blogview";
</style>
