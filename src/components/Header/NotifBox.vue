<template>
  <div
    :class="`notif ${notif.class}${
      notif.msg ? ' active' : ''
    }`"
  >
    {{ notif.msg }}
  </div>
</template>

<script>
export default {
  computed: {
    notif() {
      return this.$store.getters.notif;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/library/colors.scss";
.notif {
  position: fixed;
  top: -1000px;
  left: 0;
  right: 0;
  max-width: 500px;
  margin: auto;
  color: white;
  z-index: 1;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &.active{
    top: 120px;
  }
  &.success {
    border: 3px solid darken($green, 10%);
    background: lighten($green, 10%);
    
  }
  &.warning{
    border:3px solid darken($yellow,10%);
    background:$yellow;
    color: black;
  }
  &.danger{
    border:3px solid darken($red,10%);
    background:$red;

  }
}
</style>