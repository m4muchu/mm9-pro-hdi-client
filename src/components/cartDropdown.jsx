import React from 'react'
import { Row, Col, Select, InputNumber, Card, Menu } from 'antd'

function CartDropdown() {
    return (
        <div className="cart_dropdown">
            <Menu>
                <Row>
                    <Col className="cart_dropdown_image">
                        <img
                            src={
                                'http://demo.posthemes.com/pos_aboss/layout2/71-side_default/printed-chiffon-dress.jpg'
                            }
                        ></img>
                    </Col>
                    <Col>
                        <div className="cart_dropdown_items">
                            <h3>Printed Chiffon Dress</h3>
                            <p>$20.50</p>

                            <p>Size: S</p>
                            <p>Color: Yellow</p>
                            <p>Quantity: 1</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {/* <p>X</p> */}
                        </div>
                    </Col>
                </Row>
                <div className="cart_dropdown_bill">
                    <div className="cart_dropdown_bill_items">
                        <p>Subtotal</p>
                        <p>$51.00</p>
                    </div>
                    <div className="cart_dropdown_bill_items">
                        <p>Shipping</p>
                        <p>$7.00</p>
                    </div>
                    <div className="cart_dropdown_bill_items">
                        <p>Taxes</p>
                        <p>$0.00</p>
                    </div>
                    <div className="cart_dropdown_bill_items">
                        <p>Total</p>
                        <p>$58.00</p>
                    </div>
                </div>
                <div className="cart_dropdown_button_container">
                    <button className="cart_dropdown_button">CHECKOUT</button>
                </div>
            </Menu>
        </div>
    )
}

export default CartDropdown
