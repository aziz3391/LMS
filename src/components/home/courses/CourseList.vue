<template>
  <div class="course without">
    <div class="container without">
      <div class="row without">
        <Splide
          class="spliding"
          :options="{
            type: 'loop',
            perPage: 3,
            autoplay: true,
            arrows: false,
            gap: 40,
          }"
        >
          <SplideSlide>
            <div class="item_f">
              <img
                src="../../../assets/flags/german.svg"
                alt="german"
                class="f1"
              />
              <h3 class="name">Немецкий для начального уровня</h3>
              <div class="fortext">
                <div class="d-flex first">
                  <p class="norm">Длительность:</p>
                  <p class="bold">45 часов</p>
                </div>
                <div class="d-flex second">
                  <p class="norm">Модулей:</p>
                  <p class="bold">3</p>
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
                <h4>От 6 520 Р</h4>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="item_s">
              <img src="../../../assets/flags/china.png" alt="china" class="f1" />
              <h3 class="name">Китайский для начального уровня</h3>
              <div class="fortext">
                <div class="d-flex first">
                  <p class="norm">Длительность:</p>
                  <p class="bold">45 часов</p>
                </div>
                <div class="d-flex second">
                  <p class="norm">Модулей:</p>
                  <p class="bold">3</p>
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
                <h4>От 6 520 Р</h4>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="item_t">
              <img src="../../../assets/flags/spain.png" alt="spain" class="f1" />
              <h3 class="name">Испанский для начального уровня</h3>
              <div class="fortext">
                <div class="d-flex first">
                  <p class="norm">Длительность:</p>
                  <p class="bold">45 часов</p>
                </div>
                <div class="d-flex second">
                  <p class="norm">Модулей:</p>
                  <p class="bold">3</p>
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
                <h4>От 6 520 Р</h4>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="item_s">
              <img src="../../../assets/flags/china.png" alt="china" class="f1" />
              <h3 class="name">Китайский для начального уровня</h3>
              <div class="fortext">
                <div class="d-flex first">
                  <p class="norm">Длительность:</p>
                  <p class="bold">45 часов</p>
                </div>
                <div class="d-flex second">
                  <p class="norm">Модулей:</p>
                  <p class="bold">3</p>
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
                <h4>От 6 520 Р</h4>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="item_t">
              <img src="../../../assets/flags/spain.png" alt="spain" class="f1" />
              <h3 class="name">Испанский для начального уровня</h3>
              <div class="fortext">
                <div class="d-flex first">
                  <p class="norm">Длительность:</p>
                  <p class="bold">45 часов</p>
                </div>
                <div class="d-flex second">
                  <p class="norm">Модулей:</p>
                  <p class="bold">3</p>
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
                <h4>От 6 520 Р</h4>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style lang="scss">
@import "/src/styles/components/course/courselist";
</style>