import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home')
  }
]

const router = new VueRouter({
  routes
})

export default router
