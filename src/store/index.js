import { createStore } from 'vuex'
// import axios from "axios"

 import category  from './modules/category';
 import course  from './modules/courses';
 import blog from './modules/blog';
 
export default createStore({
  state: {
    url:'http://localhost:3003'
  },
  getters: {
    url(state){
      return state.url 
    }
  },
  mutations: {
  },
  actions: {
           
  },
  modules: {
    category,course, blog
  }
})
