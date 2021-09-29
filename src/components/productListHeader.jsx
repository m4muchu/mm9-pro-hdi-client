import React, { useState } from 'react'
import { Row, Col, Select, InputNumber, Card, Checkbox, Option } from 'antd'

function ProductListHeader() {
  const [cities, setcity] = useState([
    'Relevance',
    'Name, A to Z',
    'Name, Z to A',
    'Price, low to high',
    'Price, high to low',
  ])
  const { Option } = Select

  const onFilter = () => {}
  return (
    <div className="product_list_header">
      <div span={12} className="product_list_header_inner">
        <div className="product_list_header_icons">
          <div className="product_list_icons_img">
            <img src="https://img.icons8.com/small/16/000000/activity-grid-2.png" />
          </div>
          <div className="product_list_icons_img">
            <img src="https://img.icons8.com/small/16/000000/grid-3.png" />{' '}
          </div>
        </div>
        <div className="product_list_header_product_count">There are 12 products.</div>
      </div>
      <div span={12} className="product_list_header_inner">
        <div className="product_list_header_sort">Sort by</div>
        <div>
          {' '}
          <Select
            style={{ width: 220 }}
            // defaultValue={'select...'}
            value={cities}
            onChange={onFilter}
          >
            {cities.map(city => (
              <Option key={city}>{city}</Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  )
}

export default ProductListHeader
