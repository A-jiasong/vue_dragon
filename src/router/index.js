import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: () => import('@/views/home'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/components/home.vue')
      },
      {
        path: '/ebcyclopedia',
        name: 'ebcyclopedia',
        component: () => import('@/views/ebcyclopedia')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/user/register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
