<template>
  <div class="container mtb100">
    <div class="row cwhite">
      <div class="col-6 col-md-12 dfaicjcc">
            <h2 class="mb40">
          Регистрируйтесь и приступайте к первому бесплатному уроку
          </h2>
           <div class="underitemreg widthlength">
          <div class="reg1">
            <div class="linereg1">
              <p class="p14 c232323">Телефон *</p>
              <div class="input">
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  class="phonenum"
                />
                <button class="btn">Начать обучение</button>
              </div>
            </div>
          </div>
          <div class="reg2 dflex">
            <input id="agree" type="checkbox" class="checkbox" />

            <label class="p16w561 gray checkit" for="agree"
              >Отправляя заявку, я соглашаюсь с
              <router-link to="/"> политикой конфиденциальности </router-link> и
              <router-link to="/">
                пользовательским соглашением</router-link
              ></label
            >
          </div>
        </div>
      </div>
      <div class="col-6 col-md-12 dfaicjcc">
        <img src="../../../assets/img/register.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../styles/components/register/register";
</style>