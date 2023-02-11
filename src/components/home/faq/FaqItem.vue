<template>
  <div @click="toggle=!toggle" :class="`faq_box ${toggle?'open':''}`" >
    <div class="faq_header ">
      <div class="faq_title  ">
        <h4 class="h24bold faq_question ml0">{{faq.question}}</h4>
    
        <div  class="plus">  </div>
      </div>
    </div>
    <div class="faq_body">{{faq.answer}}
    </div>
  </div>
</template>

<script>
export default {
    props:["faq"],
    data() {
        return {
        
            toggle:false
        }
    },
};
</script>

<style lang="scss">
@import "../../../styles/components/faq/faqitem";
</style>