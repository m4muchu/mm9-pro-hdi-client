import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import img1 from './dial.png'
import { Row, Col, Select, InputNumber, Breadcrumb } from 'antd'
import Star from '../../utils/Star'
import Carousal from '../../components/Carousal'
import { productServices } from '../../api/product'
import { useAppDispatch } from '../../app/hooks'
import { productId } from './model'

// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css'

function ProductView() {
  const handleDragStart = e => e.preventDefault()
  const [isLoading, setIsLoading] = useState(false)
  const [productData, setProductData] = useState({})

  // const [serverValidationMessage, setServerValidationMessage] = useState<string>('')
  const dispatch = useAppDispatch()
  const { Option } = Select
  const apiCalls = {
    productViewApi: id => {
      setIsLoading(true)
      productServices
        .fetchProductbyId(id)
        .then(response => {
          console.log('response from api call product', response)
          const { product } = response
          if (response.success == true) {
            console.log('entry', product)
            setProductData(product)
          }
        })
        // .catch(({ data: { message } }: { data: { message} }) => {
        //   console.log('err++++++++++++++++', message)
        //   setServerValidationMessage(message)
        // })
        .finally(() => {
          setIsLoading(false)
        })
    },
  }
  // const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  //   return items.map((item, i) => (
  //     <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
  //       {item}
  //     </div>
  //   ))
  // }

  useEffect(() => {
    apiCalls.productViewApi(19)
  }, [])
  return (
    <>
      <Row className="product_view" span={24}>
        <Col className="product_view_image" span={12}>
          <Carousal images={productData?.images} />
        </Col>

        <Col className="product_view_data" span={12}>
          <h1 className="product_view_data_name">{productData?.name}</h1>
          {_.range(5).map(item => (
            <Star />
          ))}

          <p className="product_view_data_price">{`$${productData?.price}`}</p>
          <Row>
            <Col span={16}>
              <hr />
              <p className="product_view_data_description">
                {productData?.description?.replace(/<\/?[^>]+(>|$)/g, '')}
              </p>
              <p className="product_view_data_attributes common_product_text">Size</p>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">M</Option>
                <Option value="lucy">S</Option>
                <Option value="lucy">L</Option>
              </Select>
              <p className="product_view_data_atributes common_product_text">Color</p>
              <Row>
                <Col>
                  <div className="product_view_item_colour "></div>
                </Col>
                <Col>
                  <div className="product_view_item_colour"></div>
                </Col>
              </Row>
              <p className="product_view_data_atributes common_product_text">Quantity</p>
              <Row>
                <Col span={8}>
                  <InputNumber min={1} max={10} value={productData?.quantity} />{' '}
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
