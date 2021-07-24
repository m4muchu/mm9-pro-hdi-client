import { loginParam } from '../features/auth/model'
import { request } from './httpService'

export const authServices = {
  login,
  signIn,
}

function login(params: loginParam) {
  console.log('params+++++++++++++++', params)
  return request({
    method: 'POST',
    url: 'auth/store/login/',
    param: params,
    isAuthenticated: false,
    contentType: 'json',
  })
}

function signIn(params: loginParam) {
  return request({
    method: 'POST',
    url: 'auth/store/register/',
    param: params,
    isAuthenticated: false,
    contentType: 'json',
  })
}
