import React from 'react'
import { Row, Col, Select, InputNumber, Card, Checkbox } from 'antd'
import _ from 'lodash'
import ProductCardLarge from './productCardLarge'

var colorArray = ['red', 'pink', 'green', 'blue', 'indigo']

function ProductFilter() {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`)
    }
    return (
        <div className="product_filter">
            <Row>
                <Col span={4}>
                    <Card className="product_filter_card">
                        <h3 className="product_filter_title">FILTER BY</h3>

                        <hr />
                        <button className="product_filter_clear_button">Clear all</button>
                        <h3 className="product_filter_title">CATEGORIES</h3>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                        <h3 className="product_filter_title">PRICE</h3>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}> $15.00 - $16.00</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>$22.00 - $24.00</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>$25.00 - $28.00</Checkbox>
                        </li>

                        <h3 className="product_filter_title">SIZE</h3>
                        <li>
                            <Checkbox onChange={onChange}>S</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>M</Checkbox>
                        </li>
                        <li>
                            <Checkbox onChange={onChange}>L</Checkbox>
                        </li>
                        <h3 className="product_filter_title">COLOR</h3>
                        {colorArray.map(item => (
                            <li>
                                {' '}
                                <Checkbox onChange={onChange}>{item}</Checkbox>
                            </li>
                        ))}

                        <h3 className="product_filter_title">COMPOSITIONS</h3>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                        <h3 className="product_filter_title">STYLES</h3>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Cotton</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Polyester</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Viscose</Checkbox>
                        </li>
                        <h3 className="product_filter_title">PROPERTIES</h3>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Casual</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                        <li>
                            {' '}
                            <Checkbox onChange={onChange}>Checkbox</Checkbox>
                        </li>
                    </Card>
                </Col>
                <Col span={17}>
                    <ProductCardLarge />{' '}
                </Col>
            </Row>
        </div>
    )
}

export default ProductFilter
