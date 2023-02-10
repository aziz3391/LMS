<template>
  <div class="container full">
    <div class="row1 w1480vh hfull d-flex">
      <div class="col-8 col-md-12 mt0">
        <div class="dfc">
          <div class="stlinecourseup d-flex">
            <ul class="ul d-flex">
              <li class="p14 cpurple ma">
                <router-link to="/"> Главная </router-link>
              </li>
              <img
                class="w2424 ma"
                src="../../assets/else/chevron-right.png"
                alt=""
              />
              <li class="p14 gray ma">
                <router-link to="/blogs"> Блог </router-link>
              </li>
              <img
                class="w2424 ma"
                src="../../assets/else/chevron-right.png"
                alt=""
              />
              <li class="p14 grey ma">Статья подробно</li>
            </ul>
          </div>
          <div class="d-flex">
            <div class="ndlinecourse">
              <!-- <button @click="getBloks" class="btn">click</button>
              <button @click="getBlok" class="btn">click2</button> -->
              <h2 class="m0 mt28mb30 h162">
                <router-link  class="nostyle" :to="`/blogs/${getBlog._id}`"> 
                {{ getBlog.title }}
                </router-link>
              </h2>
              <p class="p20medium e90d1">{{getdate(getBlog.createdAt)}}</p>
              <p class="p16medium c585858 blogmoretxt">
                <router-link  class="nostyle" :to="`/blogs/${getBlog._id}`"> 
                {{getBlog.text}}
                </router-link>
              </p>

              <div class="lastlingblog w823 mb90 d-flex between">
                <button class="newsu">Новость</button>
                <div class="lastlineblog_right d-flex w239">
                  <p class="p16medium">Поделиться:</p>
                  <div class="d-flex">
                    <img
                      src="../../assets/img/social/social_blog/fb.svg"
                      alt=""
                    />
                    <img
                      src="../../assets/img/social/social_blog/yt.svg"
                      alt=""
                    />
                    <img
                      src="../../assets/img/social/social_blog/tw.svg"
                      alt=""
                    />
                    <img
                      src="../../assets/img/social/social_blog/vk.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="rowblog dfaic pr">
                <h3>Другие новости</h3>
                <button class="btn outline">Все новости</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 mt0  dfgap40">
            <div class="blog1 " v-for="item in getBlogs" :key="item._id">
              <p style="width:770px" class=" heading_max_blog">
                <router-link  class="nostyle" :to="`/blogs/${item._id}`"> 
                {{ item.title }}
                </router-link>
              </p>
              <p class="p16medium e90d1 mt6mb10">{{getdate(item.createdAt)}}</p>
              <p class="p16medium blogmore_text">
                <router-link  class="nostyle" :to="`/blogs/${item._id}`"> 
               {{item.text}}
               </router-link>
              </p>
              <div class="lastlineblog d-flex jcb mt20">
                <button class="newsu">Новость</button>
                <div class="right_blog d-flex p5 w120">
                  <h5>
                    <router-link  class="nostyle" :to="`/blogs/${item._id}`"> 
                    Подробнее
                    </router-link>
                    </h5>
                  <img
                    src="../../assets/else/arrow-right.png"
                    alt="right  arrow"
                    class="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-12"></div>
        </div>
      </div>
      <div class="col-4 col-md-12 mt0 pl0 hfull">
        <div class="inblog">
          <img src="../../assets/img/blog.png" alt="" class="blogimg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$store.dispatch('getBlogs')
    this.id = this.$route.params.id;
    console.log(this.id);
    this.$store.dispatch("getBlogId", this.id);
  },
  methods:{
    getdate(d){
            let t = new Date(d)
            return `${t.getDate()}-${t.getMonth()}-${t.getFullYear()}`
        }
  },
  computed: {
    getBlogs() {
      return this.$store.getters.Blogs;
    },
    getBlog() {
      return this.$store.getters.Blog;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/blog/blogmore.scss";
</style>
