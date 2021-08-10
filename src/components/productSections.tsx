import React from 'react'
import ProductCard from './ProductCard'

interface ProductSectionsProps {
  header: string
  subHeader: string
  products: any
}

const ProductSections: React.FC<ProductSectionsProps> = ({ header, subHeader, products }) => {
  return (
    <div className="product_section_wrapper">
      <div className="product_section_container">
        <h2 className="main-header mb-2">{header}</h2>
        <div className="sub-header mb-3">{subHeader}</div>
      </div>
      <div className="products_card_container mt-4">
        {products.map((product: any) => (
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
