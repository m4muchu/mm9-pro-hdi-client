import { request } from './httpService'

interface categoryType{
    name:string;
    id:string;
    level:number;

}

export const categoryServices = {
    listCategory,
}

function listCategory() {
    return request({
      method: 'GET',
      url: `productCategory`,
    //   param: params,
      contentType: 'json',
    })
  }
  


