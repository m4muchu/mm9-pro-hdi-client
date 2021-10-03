// import { cartId } from '../features/cart/model'
import { request, getQueryString } from './httpService'

export const cartServices = {
  listCart,
  postCart,
  deleteCart,
  editCart,
}
export interface addToCartProps {
  productId: number
  userId: number
  variantSku: string
  quantity: number
}
export interface editCartProps {
  variantSku: string
  quantity: number
  userId: number
}

interface userId {
  userId: Number
}
interface changeCartProps {
  userId: string
  variantSku: string
}
function listCart(params: userId) {
  return request({
    method: 'GET',
    url: `cart`,
    param: params,
    contentType: 'json',
  })
}

function postCart(params: addToCartProps) {
  console.log('test xxx powt', params)

  return request({
    method: 'POST',
    url: `cart`,
    param: params,
    contentType: 'json',
  })
}

// {{BASE_URL}}/cart?userId=1&variantSku=TESTSKU
function editCart(params: editCartProps) {
  return request({
    method: 'PUT',
    url: `cart`,
    param: params,
    contentType: 'json',
  })
}

// url: `cart?userId=1&variantSku=TESTSKU`,
function deleteCart(params: changeCartProps) {
  console.log('test xxx', params)
  // // var p = new URLSearchParams()
  // params.userId && p.append('userId', params.userId)
  // params.variantSku && p.append('variantSku', params.variantSku)
  // let p = getQueryString(params)

  return request({
    method: 'DELETE',
    url: `cart`,
    param: params,
    contentType: 'json',
  })
}
