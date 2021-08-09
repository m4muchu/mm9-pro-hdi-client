import React from 'react'
import ProductCard from '../components/productCard'
import { productArray } from "../utils/mocdata.js"

function ProductSections() {
    return (
        <div >
            <div className="product_section_container mx-auto">
                <h1>title</h1>
                <p>Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem</p>
            </div>
            <div className="products_card_container mx-auto">

                {productArray.map((product) => (<ProductCard />))}
            </div>
        </div>

    )
}

export default ProductSections
