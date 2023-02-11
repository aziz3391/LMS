<template>
    <!-- <div class=" col-6 noborder"> -->
    <div class="half heightfit ">
              <router-link  class="nostyle" :to="`/blogs/${lastblogs._id}`"> 
              <p class="p24bold w410 maxheight_60" >
                {{ lastblogs.title}} 
              </p>
              </router-link>
              <p class="p16medium e90d1 mt6mb10">{{getdate(lastblogs.createdAt)}}</p>
              <router-link  class="nostyle"  :to="`/blogs/${lastblogs._id}`"> 
              <p class="p16medium overflowhidden mb50 c585858 ">
               {{lastblogs.text}}
              </p></router-link>
              <div class="lastlinehalfblog  d-flex jcb">
                <button class="greenish">Статья</button>
                <div class="right_blog ">
                  <router-link class="d-flex p5 w120" to="/blogs"> 
                 
                  <h5>Подробнее</h5>
                  <img
                    src="../../../assets/else/arrow-right.png"
                    alt="right  arrow"
                    class="arrow"
                  />
                   </router-link>
                </div>
              </div>
            </div>
            <!-- </div> -->

</template>


<script>
export default {
    props:["lastblogs"],
    methods:{
        getdate(d){
            let t = new Date(d)
            return `${t.getDate()}-${t.getMonth()}-${t.getFullYear()}`
        }
    },
    mounted(){
      console.log(this.blogs);
    }
}

</script>

<style lang="scss">
@import '../../../styles/views/blogview.scss';
.p-10{
    padding: 0 10px;
}
</style>