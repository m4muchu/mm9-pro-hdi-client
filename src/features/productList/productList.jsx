import { useState, useEffect } from 'react'
import { productServices } from '../../api/product'
import ProductFilter from '../../components/productFilter'

function ProductList() {
  const [isLoading, setIsLoading] = useState(false)
  const [productData, setProductData] = useState({})
  // const [serverValidationMessage, setServerValidationMessage] = useState < string >

  const apiCalls = {
    productListApi: () => {
      setIsLoading(true)
      productServices
        .listProduct()
        .then(response => {
          console.log('response from api call product', response)
          const { data } = response
          if (response.success == true) {
            console.log('entry', data)
            setProductData(data)
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
      <ProductFilter products={productData} />
    </div>
  )
}

export default ProductList
