<template>
  <nav>
    <div class="firstitem">
      <img class="imghead" src="../../assets/img/logo.png" alt="School Logo" />
      <ul class="ulhead">
        <li>
          <router-link to="/"> Курсы </router-link>
        </li>
        <li>
          <router-link to="/"> О нас </router-link>
        </li>
        <li>
          <router-link to="/"> Блог </router-link>
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