import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element-UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 时间过滤器
import * as filters from './filters'

Vue.use(ElementUI)

// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
