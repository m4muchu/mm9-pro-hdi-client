import { loginParam } from '../features/auth/model'
import { request } from './httpService'

export const authServices = {
  login,
}

function login(params: loginParam) {
  console.log('params+++++++++++++++', params)
  return request({
    method: 'POST',
    url: 'auth/store/login/',
    param: params,
    is_authenticated: false,
    content_type: 'json',
  })
}
