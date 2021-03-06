// 封装用户相关的请求模块
import request from '@/utils/request'

// 添加
export const addMallClothes = data => {
  return request({
    method: 'POST',
    url: '/mallClothes/addMallClothes',
    data
  })
}

// 通过id查询
export const findById = id => {
  return request({
    method: 'get',
    url: '/mallClothes/findById',
    params: {
      id: id
    }
  })
}

// 通过id进行删除
export const deleteById = id => {
  return request({
    method: 'DELETE',
    url: '/mallClothes/deleteById',
    params: {
      id: id
    }
  })
}

// 修改
export const updateMallClothes = data => {
  return request({
    method: 'PUT',
    url: '/mallClothes/updateMallClothes',
    data
  })
}
// 修改点击量
export const updateClickNumClothes = data => {
  return request({
    method: 'PUT',
    url: '/mallClothes/updateClickNum',
    data
  })
}

// 分页查询
export const getMallClothesList = data => {
  return request({
    method: 'POST',
    url: '/mallClothes/getMallClothesList',
    data
  })
}
