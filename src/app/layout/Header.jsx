import React from 'react'
import { Layout, Menu } from 'antd'
import { routerHistory } from '../Router'
import { Link, useHistory } from 'react-router-dom'

const { Header } = Layout

const HeaderLayout = () => {
  const history = useHistory()
  console.log('history+++++++++++++', routerHistory)
  return (
    <div className="header">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#dd3a3fd9' }}>
        <div className="logo" />
        <div className="d-flex justify-content-between">
          <div>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={() => history.push('/home')}>
                HOME
              </Menu.Item>
              <Menu.Item key="2" onClick={() => history.push('/login')}>
                WOMEN
              </Menu.Item>
              <Menu.Item key="3">MEN</Menu.Item>
              <Menu.Item key="4">ACCESSORIES</Menu.Item>
            </Menu>
          </div>
          <div className="div">
            <Menu mode="horizontal">
              <Menu.Item key="5">Sign In</Menu.Item>
              <Menu.Item key="6">{/* <Link to="/login"> Login</Link> */}</Menu.Item>
            </Menu>
          </div>
        </div>
      </Header>
    </div>
  )
}

export default HeaderLayout
