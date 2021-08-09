import React from 'react'
import ProductSections from '../../components/productSections'
// import BannerCarousal from './BannerCarousal'
import { productArray } from '../../utils/mocdata'

export default function Home() {
  return (
    <div>
      {/* <BannerCarousal /> */}
      <ProductSections
        header="FEATURED PRODUCTS"
        subHeader="Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem"
        products={productArray}
      />
    </div>
  )
}
