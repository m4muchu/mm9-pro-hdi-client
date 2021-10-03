import { request } from './httpService'

interface categoryType {
  name: string
  id: string
  level: number
}
type root = {
  root: boolean
}
type categoryByIdProps = {
  id: string
}
export const categoryServices = {
  listCategory,
  listCategoryById,
}

function listCategory(params: root) {
  return request({
    method: 'GET',
    url: `product-category`,
    param: params,
    contentType: 'json',
  })
}

function listCategoryById(params: categoryByIdProps) {
  return request({
    method: 'GET',
    url: `product-category`,
    param: params,
    contentType: 'json',
  })
}
