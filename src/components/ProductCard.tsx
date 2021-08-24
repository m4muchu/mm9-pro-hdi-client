import React, { useState } from 'react'
import _ from 'lodash'
import Star from '../utils/Star'
import { useHistory } from 'react-router-dom'
import AddToCartModal from '../features/addToCard/AddToCartModal'

interface ProductCardProps {
  isNew: boolean
  imageURL: string
  productPrice: number
  productName: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  isNew,
  imageURL,
  productPrice,
  productName,
}) => {
  const history = useHistory()
  const [modalStatus, setModalStatus] = useState(false)
  const cancelModal = () => setModalStatus(false)
  return (
    <>
      <div className="product_card" onClick={() => history.push('/product-view/')}>
        {isNew && <span className="product_card_tag">NEW</span>}
        <div className="product_card_image_container">
          <img className="product_card_image" src={imageURL} alt={productName}></img>
        </div>

        <div className="product_card_action overlay">
          <button className="product_card_quickview common_round_button mb-2">QUICK VIEW</button>
          <button
            className="product_card_addtocart common_round_button"
            onClick={event => {
              event.stopPropagation()
              setModalStatus(true)
            }}
          >
            ADD TO CART
          </button>
        </div>
        <p className="product_card_name text-truncate pl-4 pr-4">{productName}</p>
        <span>
          {' '}
          {_.range(5).map(item => (
            <Star />
          ))}
        </span>
        <p className="product_card_price">{productPrice}</p>
      </div>
      {modalStatus && (
        <AddToCartModal
          modalStatus={modalStatus}
          cancelModal={cancelModal}
          proceedToCheckout={() => console.log('checkout')}
        />
      )}
    </>
  )
}

export default ProductCard
