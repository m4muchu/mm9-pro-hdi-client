import React from 'react'
import Star from '../utils/Star'
import _ from 'lodash'
import { Card, Row, Col, Select, InputNumber } from 'antd'
function ProductCardLarge() {
    return (
        <div>
            <Card>
                <span className="product_card_tag">NEW</span>
                <Row>
                    <Col>
                        <img
                            src="http://demo.posthemes.com/pos_aboss/layout2/24-home_default/faded-short-sleeves-tshirt.jpg"
                            alt=""
                            data-full-size-image-url="http://demo.posthemes.com/pos_aboss/layout2/24-large_default/faded-short-sleeves-tshirt.jpg"
                        />

                        {' '}</Col>
                    <Col>    <p>Blouse</p>
                        {_.range(5).map(item => (
                            <Star />
                        ))}
                        <hr />
                        <p>Short-sleeved blouse with feminine draped sleeve detail.</p>
                    </Col>
                </Row>
                <hr />

            </Card>
        </div>
    )
}

export default ProductCardLarge
