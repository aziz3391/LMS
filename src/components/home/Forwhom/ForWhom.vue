<template>
  <img
    src="../../../assets/else/Vector.png"
    alt="nothing"
    style="position: absolute"
  />
  <div class="container cntr_mt">
    <div class="row">
      <div class="col-4 col-md-12">
        <h3 class="h3for">Кому подойдет <span class="l2go"> L2GO </span></h3>

        <p>
          <span class="ltg"> Language to go </span>
          подойдет всем, кто хочет за короткий срок качественно изменить свою
          жизнь, освоив иностранный язык.
        </p>

        <button class="btn mt-40">Попробовать бесплатно</button>
      </div>
      <div class="col-8 col-md-12">
        <div class="row">
          <div class="col-6 col-sm-12" v-for="(el, i) in whom" :key="i">
            <div class="whom_box">
              <img :src="require(`@/assets/forwhom/whom${i + 1}.png`)" alt="" />
              <h4 class="whom_candidates">{{el.name}}</h4>
              <p class="whom_text">
                {{el.descr}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whom: [
        {
          name: "Школьникам",
          descr: " Сдать выпускные экзамены или поступить в ВУЗ.",
        },
        {
          name: "Студентам",
          descr:
            " Переехать на обучение в другую страну или найти               высокооплачеваемую работу",
        },
        {
          name: "Эмигрантам",
          descr:
            "Адаптироваться в новой стране, создать конкурентное преимущество и трудоустроиться",
        },
        {
          name: "Общительным",
          descr:
            "Создать счастливую семью с иностранцем и интегрироваться в новое общество",
        },
        {
            name: "Бизнесменам",
          descr: "Завести полезные знакомства среди иностранцев и масштабировать бизнес",
        },
            {
              name: "Путешественникам",
              descr:
                "Свободно общаться и находить новых друзей, решать бытовые вопросы и спорные ситуации",
            },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../styles/components/forwhom/Forwhom.scss";
</style>