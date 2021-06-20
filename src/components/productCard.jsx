import React from 'react'
function ProductCard() {
    return (
        <div className="product_card">
            <span className="product_card_tag">NEW</span>
            <img className="product_card_image" src="http://demo.posthemes.com/pos_aboss/layout2/36-large_default/printed-dress.jpg"></img>
            <div className="product_card_action overlay">
                <button className="text">QUICK VIEW</button>
                <button className="text">ADD TO CART</button>
            </div>
            {/* <div className="overlay">
                <div className="text">Hello World</div>
            </div> */}
            <p className="product_card_name">Printed shiffon Dress</p>
            <span></span>
            <p className="product_card_price">$30.6</p>
        </div>
    )
}

export default ProductCard
