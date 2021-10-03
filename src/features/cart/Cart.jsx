import React from 'react'
import { Row, Col, Select, InputNumber, Card } from 'antd'
import { useState, useEffect } from 'react'
import { cartServices } from '../../api/cart'

function Cart() {
  const { Option } = Select
  const [cartData, setCartData] = useState({})
  const [productQuantity, setProductQuantity] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [editCartData, setEditCartData] = useState({})

  const apiCalls = {
    cartListApi: () => {
      setIsLoading(true)
      cartServices
        .listCart({ userId: 1 })
        .then(response => {
          console.log('response from api call cart list', response)
          if (response) {
            setCartData(response.cartItems)
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
    editCartApi: data => {
      console.log('data edit', data)

      setIsLoading(true)
      cartServices
        .editCart(data)
        .then(response => {
          console.log('response from api call edit cart list', response)
          // if (response) {
          //   setCartData(response.cartItems)
          // }
        })
        // .catch(({ data: { message } }: { data: { message} }) => {
        //   console.log('err++++++++++++++++', message)
        //   setServerValidationMessage(message)
        // })
        .finally(() => {
          setIsLoading(false)
        })
    },
    deleteCartApi: data => {
      console.log('response from api call delete cart ', data)
      setIsLoading(true)
      cartServices
        .deleteCart(data)
        .then(response => {
          console.log('response from api call edit cart list', response)
          // if (response) {
          //   setCartData(response.cartItems)
          // }
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
  const handleQuantityChange = (item, e) => {
    console.log('change qunatity', e, item)
    let editQuantityData = {
      variantSku: item?.variantSku,
      quantity: e,
      userId: item?.userId,
    }
    console.log('after change', editQuantityData)
    setEditCartData(editQuantityData)
  }
  const handleCartDelete = item => {
    const data = {
      userId: item.userId,
      variantSku: item.variantSku,
    }
    apiCalls.deleteCartApi(data)
  }
  useEffect(() => {
    apiCalls.cartListApi()
  }, [])

  useEffect(() => {
    editCartData?.quantity && apiCalls.editCartApi(editCartData)
  }, [editCartData])

  useEffect(() => {
    console.log('updated cart data', cartData)
  }, [cartData])
  return (
    <div>
      <Row gutter={24}>
        <Col span={14} offset={3}>
          <Card>
            <h3 className="cart_header">SHOPPING CART</h3>
            <hr />
            {cartData?.map?.(item => (
              <Row>
                <Col span={6}>
                  <img src="http://demo.posthemes.com/pos_aboss/layout2/24-cart_default/faded-short-sleeves-tshirt.jpg"></img>
                </Col>
                <Col span={8}>
                  <p className="cart_item">{item?.product?.name}</p>
                  <p className="cart_item">{item?.product?.price}</p>

                  <p className="cart_item">Size: S</p>
                  <p className="cart_item">Color: Orange</p>
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={item.quantity}
                    onChange={e => handleQuantityChange(item, e)}
                  />{' '}
                </Col>
                <Col className="cart_item_price" span={4}>
                  {item?.product?.price}
                </Col>
                <Col span={2} onClick={() => handleCartDelete(item)}>
                  <img src="https://img.icons8.com/material-outlined/16/000000/trash--v1.png" />
                </Col>
              </Row>
            ))}
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
              <div className="cart_button_container">
                <button className="cart_button">cart</button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <p className="cart_back">
        <span>&lt;</span> Continue shopping
      </p>
    </div>
  )
}

export default Cart
