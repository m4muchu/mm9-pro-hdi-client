import React from 'react'
// import { WrappedFormUtils } from 'antd/lib/form/Form'
import { Modal, Row, Col } from 'antd'
import CartModal from '../../components/cartModal'

interface CustomSectionModalProps {
  //   form: WrappedFormUtils
  modalStatus: boolean
  cancelModal: Function
  proceedToCheckout: Function
}

const AddToCartModal: React.FC<CustomSectionModalProps> = ({
  modalStatus,
  cancelModal,
  proceedToCheckout,
}) => {
  return (
    <Modal visible={modalStatus} centered closable={false} footer={null} width="70%">
      <>
        <div className="cart_modal">
          <Row className="cart_modal_wrapper" gutter={24}>
            <div className="cart_modal_image">
              <img src="https://picsum.photos/id/1/200/300"></img>
            </div>

            <div className="cart_modal_product_details">
              <p className="font-weight-bold">Printed Chiffon Dress</p>
              <p>$20.50</p>

              <p>Size: S</p>
              <p>Color: Yellow</p>
              <p>Quantity: 1</p>
            </div>

            <div className="cart_modal_product_bill">
              <p>Here is 1 item in your cart.</p>
              <p>Total products: $20.50</p>
              <p>Total shipping: $7.00</p>
              <p>Taxes $0.00</p>
              <p>Total: $27.50 (tax excl.)</p>
              <div className="cart_modal_button_wrapper">
                <button
                  className="cart_modal_button cart_modal_button--continue"
                  onClick={() => cancelModal()}
                >
                  Continue shopping
                </button>
                <button className="cart_modal_button cart_modal_button--proceed">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </Row>
        </div>
      </>
    </Modal>
  )
}

export default AddToCartModal
