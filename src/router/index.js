import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MobileView from '../views/MobileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/desktop',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: MobileView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
