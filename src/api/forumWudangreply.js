// 封装用户相关的请求模块
import request from '@/utils/request'

// 添加
export const addForumWudangreply = data => {
  return request({
    method: 'POST',
    url: '/forumWudangreply/addForumWudangreply',
    data
  })
}

// 通过id查询
export const findById = id => {
  return request({
    method: 'get',
    url: '/forumWudangreply/findById',
    params: {
      id: id
    }
  })
}

// 通过id进行删除
export const deleteById = id => {
  return request({
    method: 'DELETE',
    url: '/forumWudangreply/deleteById',
    params: {
      id: id
    }
  })
}

// 修改
export const updateForumWudangreply = data => {
  return request({
    method: 'PUT',
    url: '/forumWudangreply/updateForumWudangreply',
    data
  })
}
// 修改点击量
export const updateClickNumWudangreply = data => {
  return request({
    method: 'PUT',
    url: '/forumWudangreply/updateClickNum',
    data
  })
}

// 查询所有用户
export const findAllWudangReply = () => {
  return request({
    method: 'GET',
    url: '/forumWudangreply/findAll'
  })
}