import React, { useState } from 'react'
import _ from 'lodash'
import img1 from './dial.png'
import { Row, Col, Select, InputNumber } from 'antd'
import Star from '../../utils/Star'
import Carousal from '../../components/Carousal'

// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css'
function ProductView() {
  const handleDragStart = e => e.preventDefault()
  const { Option } = Select
  const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
      <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
        {item}
      </div>
    ))
  }

  return (
    <>
      <Row className="product_view" span={24}>
        <Col className="product_view_image" span={12}>
          <Carousal />
        </Col>

        <Col className="product_view_data" span={12}>
          <h1 className="product_view_data_name">Faded Short Sleeves T-Shirt</h1>
          {_.range(5).map(item => (
            <Star />
          ))}

          <p className="product_view_data_price">$19.45</p>
          <Row>
            <Col span={16}>
              <hr />
              <p className="product_view_data_description">
                Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a
                comfortable fit. Accessorize with a straw hat and you're ready for summer!
              </p>
              <p className="product_view_data_attributes">Size</p>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">M</Option>
                <Option value="lucy">S</Option>
                <Option value="lucy">L</Option>
              </Select>
              <p className="product_view_data_atributes">Color</p>
              <Row>
                <Col>
                  <div className="product_view_item_colour"></div>
                </Col>
                <Col>
                  <div className="product_view_item_colour"></div>
                </Col>
              </Row>
              <p className="product_view_data_atributes">quantity</p>
              <Row>
                <Col span={8}>
                  <InputNumber min={1} max={10} defaultValue={3} />{' '}
                </Col>
                <Col span={8}>
                  <button className="product_view_cart_button">Add to cart</button>{' '}
                </Col>
                <Col span={8} className="product_view_cart_instock">
                  <span>inStock</span>{' '}
                </Col>
              </Row>
              <div className="product_view_share">
                <p>Share</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default ProductView
