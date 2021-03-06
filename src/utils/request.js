// 封装axios请求模块
import axios from 'axios'
// 引入store，来获取token数据
import store from '@/store'

const request = axios.create({
  // 接口的基准地址
  baseURL: 'http://localhost:3006/'
})

// 请求拦截器
request.interceptors.request.use(
  function(config) {
    // 将userToken解构出来
    const { userToken } = store.state
    // 用户存在且用户的token存在，再配置headers
    if (userToken) {
      config.headers.Authorization = `${userToken}`
      // console.log(userToken)
    }
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

export default request
