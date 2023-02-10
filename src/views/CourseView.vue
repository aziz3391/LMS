<template>
  <div class="container full">
    <div class="row1 w1480vh dfc">
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
            <li class="p14 gray ma">Курсы</li>
          </ul>
          <!-- <h1>{{ getCourses }}</h1> -->
        </div>
        <div class="ndlinecourse">
          <h1 class="m0">Курсы</h1>
          <div class="list_lang gap15 mt30">
            <button class="btn btn_all">Все</button>
            <button class="newsu" v-for="item in categories" :key="item._id">
              {{ item.name }}
            </button>

            <!-- <button class="btn h34w69">Все</button> -->
            <!-- <button class="newsu c4F4F4F">Китайский</button>
            <button class="newsu c4F4F4F">Английский</button>
            <button class="newsu c4F4F4F">Немецкий</button> -->
          </div>
        </div>
      </div>
      <div class="oneitemcourse">
        <div class="wholeitemcourse w946 p0 mt32 dfc">
          <div v-for="item in getCourses" :key="item._id" class="stlinecourse fit gap40 d-flex">
            <CourSe :courses="item" class="mt40" /><CourSe :courses="item" class="mt40" />
          </div>
          <!-- <div class="ndlinecourse fit gap40 d-flex"><CourSe :courses="getCourses" /><CourSe :courses="getCourses" /></div>
          <div class="ndlinecourse fit gap40 d-flex"><CourSe :courses="getCourses" /><CourSe :courses="getCourses" /></div>
          <div class="ndlinecourse fit gap40 d-flex"><CourSe :courses="getCourses" /><CourSe :courses="getCourses" /></div>
          <div class="ndlinecourse fit gap40 d-flex"><CourSe :courses="getCourses" /><CourSe :courses="getCourses" /></div>
          <div class="ndlinecourse fit gap40 d-flex"><CourSe :courses="getCourses" /><CourSe :courses="getCourses" /></div>
          <div class="ndlinecourse fit gap40 d-flex"><CourSe :courses="getCourses" /><CourSe :courses="getCourses" /></div> -->
          <div class="rdlinecourse"></div>
        </div>
        <div class="col-3 col-md-12 sticky15 mt32 p0">
          <div class="course_level">
            <div class="course_level_title">
              <p class="p20medium mb20">Уровень</p>
            </div>
            <div class="course_level_checkbox">
              <div class="c1 dfaicjic mb18">
                <input
                  type="checkbox"
                  checked
                  name="checking"
                  id="check1"
                  class="level_checkbox mr15"
                />
                <label for="check1" checked>Начальный</label>
              </div>
              <div class="c2 dfaicjic mb18">
                <input
                  type="checkbox"
                  name="checking"
                  id="check2"
                  class="level_checkbox mr15"
                />
                <label for="check2">Средний</label>
              </div>
              <div class="c3 dfaicjic mb18">
                <input
                  type="checkbox"
                  name="checking"
                  id="check3"
                  class="level_checkbox mr15"
                />
                <label for="check3">Высокий</label>
              </div>
            </div>
          </div>
          <div class="course_eligibility mt30">
            <div class="course_level_title">
              <p class="p20medium mb20">Для каких целей</p>
            </div>
            <div class="course_level_checkbox">
              <div class="c1 dfaicjic mb18">
                <input
                  type="checkbox"
                  checked
                  name="checking"
                  id="check4"
                  class="level_checkbox mr15"
                />
                <label for="check4" checked>Школа</label>
              </div>
              <div class="c2 dfaicjic mb18">
                <input
                  type="checkbox"
                  name="checking"
                  id="check5"
                  class="level_checkbox mr15"
                />
                <label for="check5">Студенты</label>
              </div>
              <div class="c3 dfaicjic mb18">
                <input
                  type="checkbox"
                  name="checking"
                  id="check6"
                  class="level_checkbox mr15"
                />
                <label for="check6">Эмигрантам</label>
              </div>
              <div class="c3 dfaicjic mb18">
                <input
                  type="checkbox"
                  name="checking"
                  id="check7"
                  class="level_checkbox mr15"
                />
                <label for="check7">Общение</label>
              </div>
              <div class="c3 dfaicjic mb18">
                <input
                  type="checkbox"
                  name="checking"
                  id="check8"
                  class="level_checkbox mr15"
                />
                <label for="check8">Бизнес и работа</label>
              </div>
              <div class="c3 dfaicjic mb18">
                <input
                  type="checkbox"
                  name="checking"
                  id="check9"
                  class="level_checkbox mr15"
                />
                <label for="check9">Путешествие</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourSe from "../components/home/courses/CourSe.vue";

export default {
  components: {
    CourSe,
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.$store.dispatch('getCourses')
// console.log(this.$store.dispatch('getCourses'),"courseview");
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    getCourses(){
      return this.$store.getters.Courses
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/courseview";
</style>
