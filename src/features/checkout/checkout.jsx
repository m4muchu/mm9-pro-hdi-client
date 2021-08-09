import React from 'react'
import { Row, Col, Select, InputNumber, Card } from 'antd'
import Icon from '@ant-design/icons'
import ProductFilter from '../../components/productFilter'
import CartModal from '../../components/cartModal'
import CartDropdown from '../../components/cartDropdown'

function checkout() {
  const { Option } = Select

  return (
    <div>
      <CartModal />

      {/* <CartDropdown /> */}
      {/* <ProductFilter /> */}
      {/* <Row gutter={24}>
                <Col span={14} offset={3}>
                    <Card>
                        <h3 className="checkout_header">SHOPPING CART</h3>
                        <hr />
                        <Row>
                            <Col span={6}>
                                <img src="http://demo.posthemes.com/pos_aboss/layout2/24-cart_default/faded-short-sleeves-tshirt.jpg"></img>
                            </Col>
                            <Col span={8}>
                                <p className="checkout_item">Faded Short Sleeves T-shirt</p>
                                <p className="checkout_item">$16.51</p>

                                <p className="checkout_item">Size: S</p>
                                <p className="checkout_item">Color: Orange</p>
                            </Col>
                            <Col span={4}>
                                <InputNumber min={1} max={10} defaultValue={3} />{' '}
                            </Col>
                            <Col className="checkout_item_price" span={4}>$16.95</Col>
                            <Col span={2}>deletes</Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <div>
                            <Row>
                                <Col span={12}>
                                    <p>2 items</p>
                                    <p>Shipping</p>
                                </Col>

                                <Col span={12}>
                                    <p>$43.5</p>
                                    <p>$7</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col span={12}>
                                    <p>Total (tax excl.)</p>
                                    <p>Taxes</p>
                                </Col>

                                <Col span={12}>
                                    <p>$50.50</p>
                                    <p>$0.00</p>
                                </Col>
                            </Row>
                            <hr />
                            <div className="checkout_button_container">
                                <button className="checkout_button">CHECKOUT</button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <p className="checkout_back"><span>&lt;</span> Continue shopping</p> */}
    </div>
  )
}

export default checkout
