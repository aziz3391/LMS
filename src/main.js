import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';
import clickOut from './helpers/js/clickout'


createApp(App).use(store).directive('click-out',clickOut).use(VueSplide).use(router).mount('#app')
