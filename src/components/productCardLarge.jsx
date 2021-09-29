import Star from '../utils/Star'
import _ from 'lodash'
import { Card, Row, Col, Select, InputNumber } from 'antd'
function ProductCardLarge({ product }) {
  return (
    <div className="product_card_container">
      <Card>
        <span className="product_card_tag">NEW</span>
        <Row>
          <Col span={8} className="product_card_image_container">
            <img
              className="product_card_image"
              // src={product?.images[1]?.url}
              src="http://demo.posthemes.com/pos_aboss/layout2/24-home_default/faded-short-sleeves-tshirt.jpg"
              alt=""
              data-full-size-image-url="http://demo.posthemes.com/pos_aboss/layout2/24-large_default/faded-short-sleeves-tshirt.jpg"
            />{' '}
          </Col>
          <Col span={16} className="product_card_descripton_container">
            {' '}
            <p className="product_card_name">{product?.name}</p>
            {_.range(5).map(item => (
              <Star />
            ))}
            <p className="product_card_price">{product?.price}</p>
            <div className="product_card_description">
              <p className="product_card_description_text">
                {product?.description.replace(/<\/?[^>]+(>|$)/g, '')}
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default ProductCardLarge
