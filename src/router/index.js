import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/course',
    // name: 'course',
    component: () => import('../views/CourseView.vue')
  },
  {
    path: '/blogs',
    // name: 'blogs',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/blogs/:id',
    // name: 'blog',
    component: () => import('../components/blog/BlogMore.vue')
  },
  {
    path: '/faq',
    // name: 'faq',
    component: () => import('../views/more/FaqView.vue')
  },
  // {
  //   path: '/blogs',
  //   // name: 'blogs',
  //   component: () => import('../components/blog/BlogMore.vue')
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
