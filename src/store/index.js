import Vue from 'vue'
import Vuex from 'vuex'

import { setItem, getItem } from '@/utils/storage.js'

Vue.use(Vuex)

// 定义一个常量，方便复用
const tokenKey = 'userToken'

export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    // user: JSON.parse(window.localStorage.getItem('DRAGON_USER'))
    userToken: getItem(tokenKey)
  },
  mutations: {
    setUser(state, userToken) {
      state.userToken = userToken
      // 修改token
      // window.localStorage.setItem('DRAGON_USER', JSON.stringify(user))
      setItem(tokenKey, userToken)
    }
  },
  actions: {},
  modules: {}
})
