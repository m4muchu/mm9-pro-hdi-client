import { productId } from '../features/productView/model'
import { request } from './httpService'

export const productServices = {
  listProduct,
  fetchProductbyId,
  fetchProductbyFilter,
}

function listProduct(params: boolean) {
  return request({
    method: 'GET',
    url: `product`,
    param: params,
    contentType: 'json',
  })
}

function fetchProductbyId(productId: Number) {
  return request({
    method: 'GET',
    url: `product/${productId}/`,

    // param: params,
    contentType: 'json',
  })
}

function fetchProductbyFilter(filter: string) {
  return request({
    method: 'GET',
    url: `product/${filter}/`,

    // param: params,
    contentType: 'json',
  })
}
