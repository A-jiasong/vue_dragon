// 封装用户相关的请求模块
import request from '@/utils/request'

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/api/login',
    data
  })
}

// 获取用户信息
export const getUserInfo = userInfo => {
  return request({
    method: 'get',
    url: '/my/userinfo',
    params: {
      userInfo
    }
  })
}
