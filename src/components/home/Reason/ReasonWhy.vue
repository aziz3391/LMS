<template>
  <div class="container centeredcont">
    <div class="row">
      <h2 class="l714">Почему вы быстро освоите язык</h2>
    </div>
    <div class="row centeredrow">

      <div class="col-6 col-md-12
" id="forleft">
        <div class="col-10 col-sm-12">
          <div class="all">
            <div class="number">1</div>
            <h3 class="mt-22">Интересные уроки</h3>
            <div class="passage">
              <p class="p20">Короткие, но насыщенные уроки до 45 минут.</p>
              <p class="p20">
                Более глубокий объем знаний, чем в других школах и даже чем
                предусмотрено международными стандартами.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-12">
        <div class="col-8 col-sm-12">
          <img
            class="boyandgirl"
            src="../../../assets/img/boy_and_girl_withnoutebook.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="row">
      <!-- 2nd reason -->
      <ReasonTwo/>
    </div>
  </div>
</template>

<script>
import ReasonTwo from "@/components/home/Reason/ReasonTwo.vue"
export default {
  components:{
    ReasonTwo
  }
};
</script>

<style lang="scss">
@import "../../../styles/components/Reason/reason";
</style>