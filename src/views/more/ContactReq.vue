<template>
  <!-- <div class="success_send">{{ success_send }}</div> -->

  <form class="inside_col8" @submit.prevent="send">
    <div class="col8_item-con contact_item1">
      <h3 class="bold24">{{heading}}</h3>
      <p class="medium16">
       {{underhead}}
      </p>
    </div>
    <div class="col8_item-con contact_item2">
      <div class="contact_item-gap8 ">
        <p>Имя</p>
        <input
          v-model="msg.name"
          type="text"
          class="input_ left"
          id="name-left"
          placeholder="Name"
          required
        />
      </div>
      <div class="contact_item-gap8 ">
        <p>Телефон</p>
        <input
          v-model="msg.phone"
          type="text"
          placeholder="+7 (___) ___-__-__"
          class="input_ right"
          id="name_right"
          required
        />
      </div>
    </div>
    <div class="col8_item-con contact_item3">
      <div class="d-flex medium">
        <p>Сообщение</p>
        <p class="gray">(не обязательно)</p>
      </div>
      <textarea
        v-model="msg.comment"
        placeholder="Расскажите нам о возникшем вопросе"
      ></textarea>
    </div>
    <div class="col8_item-con contact_item4">
      <button class="btn lastbtn">Оставить заявку</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  props: ["type","heading","underhead"],
  data() {
    return {
      msg: {},
     headtext: this.heading
    };
  },
  computed: {
    url() {
      return this.$store.getters.url;
    },
  },
  methods: {
    send() {
      axios
        .post(`${this.url}/product/feedback`, { ...this.msg, type: this.type }).then((res) => {
          if (res.data == "ok") {
            this.$store.dispatch("notif", {
              msg: "Сообщение отправлено!",
              class:'success',
            });
          } else {
            this.$store.dispatch("notif", {
              msg: "Сообщение не отправлено",
              class: "danger",
            });
          }
          this.msg={}
        })
        .catch(()=>{
          this.$store.dispatch('notif',{
            msg:'Ошибка в сервере',
            class:'danger'
          })
        })
    },
  },
};
</script>   

<style lang="scss">
@import "../../styles/views/contact.scss";
</style>