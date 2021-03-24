import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
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
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/home/components/welcome.vue')
      },
      {
        path: '/ebcyclopedia',
        name: 'ebcyclopedia',
        component: () => import('@/views/ebcyclopedia')
      },
      {
        path: '/esoterica',
        name: 'esoterica',
        component: () => import('@/views/esoterica')
      },
      {
        path: '/contest',
        name: 'contest',
        component: () => import('@/views/contest')
      },
      {
        path: '/forum',
        name: 'forum',
        component: () => import('@/views/forum')
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('@/views/mall'),
        children: [
          {
            path: '',
            name: 'goods',
            component: () => import('@/views/mall/components/goods')
          },
          {
            path: '/goodsDetail',
            name: 'goodsDetail',
            component: () => import('@/views/mall/components/goodsDetail')
          },
          {
            path: '/cart',
            name: 'cart',
            component: () => import('@/views/mall/components/cart')
          },
          {
            path: '/buyNow',
            name: 'buyNow',
            component: () => import('@/views/mall/components/buyNow')
          }
        ]
      }
    ]
  }
]
const router = new VueRouter({
  routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   const userToken = window.sessionStorage.getItem('DRAGON_USER')
//   // console.log(userToken === false)
//   if (!userToken) {
//     // 如果用户token存在，则往下执行
//     if (to.path === '/login' || to.path === '/register') {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })
export default router
