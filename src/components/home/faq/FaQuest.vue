<template>
  <div class="container">
    <div class="row">
      <div class="col-4 col-md-12">
        <div class="stlinef mb60 ">
          <h2 class="h46heavy mb30">
            Отвечаем на <br />
            частые вопросы
          </h2>
          <button class="btn p18semibold">Задать вопрос</button>
        </div>
        <div class="ndlinef">
          <img src="../../../assets/img/FAQ.png" alt="faq" class="faq" />
        </div>
      </div>
      <div class="col-8 col-md-12"><FaqItem class="mb10" v-for="(item, index) in getLastFaqs" :key="index" :faq="item"
      list="list"
      /></div>
    </div>
  </div>
</template>

<script>
import FaqItem from "@/components/home/faq/FaqItem.vue";
export default {
 
  components: {
    FaqItem,
  },
  mounted(){
    this.$store.dispatch('getLastFaqs')
  },
  computed:{
    getLastFaqs(){
      return this.$store.getters.LastFaqs
    }
  }
};
</script>

<style lang="scss">
@import "../../../styles/components/faq/faq";
</style>