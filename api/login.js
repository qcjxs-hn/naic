import request from '@/utils/requestff'
 
// 登录方法
export function loginByMobile(user) {
  
  console.log(user);
  return request.post('/user/login',user)
}
 
// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}
 
// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}