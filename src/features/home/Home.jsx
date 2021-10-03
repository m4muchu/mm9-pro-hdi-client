import { useState, useEffect } from 'react'
import { Divider } from 'antd'
import ProductSections from '../../components/productSections'
import BannerCarousal from './BannerCarousal'
import { productArray } from '../../utils/mocdata'
import CategorySection from '../../components/CategoriesSection'
import { cartServices } from '../../api/cart'

const categories = [
  {
    name: 'shoes',
    imageName:
      'http://demo.posthemes.com/pos_aboss/layout2/modules/poslistcategories/images/8ea310e98a5fea2c7215099ff36a0833cdbb4b04_1.png',
  },
  {
    name: 'men',
    imageName:
      'http://demo.posthemes.com/pos_aboss/layout2/modules/poslistcategories/images/81890fbcc1c72c08fbe28cf9d589306c5ae0d5d4_2.png',
  },
  {
    name: 'watches',
    imageName:
      'http://demo.posthemes.com/pos_aboss/layout2/modules/poslistcategories/images/f750bd6a971b68dbda2949838f6103ceff6997dd_3.png',
  },
  {
    name: 'Accessories',
    imageName:
      'http://demo.posthemes.com/pos_aboss/layout2/modules/poslistcategories/images/d175a4fd5529b123bfb0d35aa3172d6cb5ef4803_4.png',
  },
  {
    name: 'women',
    imageName:
      'http://demo.posthemes.com/pos_aboss/layout2/modules/poslistcategories/images/bcd7357619ed02bf0c8d493285306e1d789b1387_5.png',
  },
]

export default function Home() {
  const [cartData, setCartData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const apiCalls = {
    cartListApi: () => {
      setIsLoading(true)
      cartServices
        .listCart({ userId: 1 })
        .then(response => {
          console.log('response from api call cart list', response)
          const { data } = response
          if (response.success == true) {
            setCartData(data)
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
  // useEffect(() => {
  //   apiCalls.cartListApi()
  // }, [])
  return (
    <div>
      <BannerCarousal />
      <CategorySection
        header="OUR CATEGORIES"
        subHeader="Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem"
        categories={categories}
      />
      <Divider className="pl-4" />
      <ProductSections
        header="FEATURED PRODUCTS"
        subHeader="Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem"
        products={productArray}
        addToCart={apiCalls.cartListApi}
      />
    </div>
  )
}
