import { useState, useEffect } from 'react'
import { cartServices } from '../../api/cart'
import { productServices } from '../../api/product'
import ProductFilter from '../../components/productFilter'

function ProductList() {
  const [isLoading, setIsLoading] = useState(false)
  const [productData, setProductData] = useState([])
  // const [serverValidationMessage, setServerValidationMessage] = useState < string >

  const apiCalls = {
    productListApi: () => {
      setIsLoading(true)
      productServices
        .listProduct({ featured: true, page: 1, keyword: '' })
        .then(response => {
          console.log('response from api call product', response)
          // const { data } = response?.produc
          if (response) {
            console.log('entry', response.data)
            setProductData(response?.products?.data)
          }
        })
        // .catch(({ data: { message } }: { data: { message} }) => {
        //   console.log('err++++++++++++++++', message)
        //   setServerValidationMessage(message)
        // })
        .finally(() => {
          setIsLoading(false)
        })
    },
    cartPostApi: data => {
      console.log('data incoming ', data)
      setIsLoading(true)
      cartServices
        .postCart(data)
        .then(response => {
          console.log('response from api call product', response)
          // const { data } = response?.produc
          if (response) {
            console.log('entry', response.data)
            // setProductData([...productData, response?.products?.data])
          }
        })
        // .catch(({ data: { message } }: { data: { message} }) => {
        //   console.log('err++++++++++++++++', message)
        //   setServerValidationMessage(message)
        // })
        .finally(() => {
          setIsLoading(false)
        })
    },
  }
  useEffect(() => {
    apiCalls.productListApi()
  }, [])
  return (
    <div className="product_list_container">
      <ProductFilter products={productData} addCartData={apiCalls.cartPostApi} />
    </div>
  )
}

export default ProductList
