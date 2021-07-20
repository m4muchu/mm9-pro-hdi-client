import React from 'react'
import { Row, Col, Select, InputNumber, Card } from 'antd'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


function CartModal() {
  return (
    <div className="cart_modal">

      <Row className="cart_modal_wrapper" gutter={24}>
        <Col className="cart_modal_image" span={3} >
          <img src={"http://demo.posthemes.com/pos_aboss/layout2/24-home_default/faded-short-sleeves-tshirt.jpg"}></img>
        </Col>
        <Col span={6}>
          <div className="cart_modal_product_details">
            <h3>Printed Chiffon Dress</h3>
            <p>$20.50</p>

            <p>Size: S</p>
            <p>Color: Yellow</p>
            <p>Quantity: 1</p>
          </div>
        </Col>
        <Col span={12}>
          <div className="cart_modal_product_bill">
            <p>here is 1 item in your cart.</p>
            <p>Total products: $20.50</p>
            <p></p>Total shipping: $7.00
            <p>Taxes $0.00</p>
            <p>Total: $27.50 (tax excl.)</p>
            <div>
              <button className="cart_modal_button">Continue shopping</button>
              <button className="cart_modal_button">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CartModal
