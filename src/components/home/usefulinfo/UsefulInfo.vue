<template>
  <div class="container">
    <div class="row w1480 dffdc mb100">
      <div class="df relative">
        <h2>Полезные новости и статьи</h2>
        <button class="btn outline w127">Все новости</button>
      </div>
      <!-- <h5>{{ lastblogs }}</h5> -->
      <div class="nfuseful d-flex jcb aic w100percent gap40">
        <UsefulItem
          v-for="item in lastblogs"
          :key="item._id"
          :lastblogs="item"
        />
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
  props: ["lastblogs"],
  mounted() {
    console.log(this.lastblogs, "useful");
  },
};
</script>

<style lang="scss">
@import "../../../styles/components/usefulinfo/usefulinfo";
</style>