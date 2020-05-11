import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  console.log(data)
  return request({
    /* url: '/login/login', */
    url: 'http://127.0.0.1:8082/checkcentersys/login/login',
    method: 'post',
    data: data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    // url: '/user/info',
    url: 'http://127.0.0.1:8082/checkcentersys/login/info',
    method: 'get',
    params: { token }
  })
}

