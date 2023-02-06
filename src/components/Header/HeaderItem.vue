<template>
  <nav class="sticky">
    <div class="firstitem">
      <router-link 
      to="/">
      <img class="imghead mt28 ml50" src="../../assets/img/logo.png" alt="School Logo" />
      </router-link>
      <ul class="ulhead">
        <li>
          <router-link to="/course"> Курсы </router-link>
        </li>
        <li>
          <router-link to="/about"> О нас </router-link>
        </li>
        <li>
          <router-link to="/blog"> Блог </router-link>
        </li>
        <li>
          <span> Ещё </span>
        </li>
      </ul>
    </div>
    <!-- <router-view></router-view> -->
    <button class="btnhead">Войти</button>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "/src/styles/components/Header.scss";
</style>