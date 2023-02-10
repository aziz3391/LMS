<template>
  <div class="item_f">
    <img src="../../../assets/flags/china.png" alt="german" class="f1" />
    <!-- <img :src="require(`@/assets/flags/`)" alt=""> -->
   
    <h3 class="name">{{ courses.title }}</h3>
    <div class="fortext">
      <div class="d-flex p16 first">
        <p class="norm">Длительность:</p>
        <p class="bold">{{ courses.time }}</p>
      </div>
      <div class="d-flex p16 second">
        <p class="norm">Модулей:</p>
        <p class="bold">{{ courses.parts }}</p>
      </div>
    </div>
    <div class="mainlast">
      <div class="lastlayer">
        <h5>Узнать подробнее</h5>
        <img
          src="../../../assets/else/arrow-right.png"
          alt="right  arrow"
          class="arrow"
        />
      </div>
      <h4>От {{ courses.price }} сум</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["courses"],
  computed: {},
};
</script>

<style lang="scss">
@import "../../../styles/components/course/courselist";
</style>