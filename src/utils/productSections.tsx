import React from 'react'
import ProductCard from '../components/ProductCard'
import { Row, Col } from 'antd'
import { productArray } from './mocdata.js'

const ProductSections: React.FC<{}> = () => {
  return (
    <div>
      <div className="product_section_container">
        <h1>FEATURED PRODUCTS</h1>
        <p>
          Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem
        </p>
      </div>
      <div className="products_card_container mt-4">
        {productArray.map((product: any) => (
          <ProductCard
            productName={product.title}
            productPrice={product.price}
            isNew={true}
            imageURL={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSections
