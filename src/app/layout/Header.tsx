import React from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const HeaderLayout = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">HOME</Menu.Item>
        <Menu.Item key="2">WOMEN</Menu.Item>
        <Menu.Item key="3">MEN</Menu.Item>
        <Menu.Item key="4">ACCESSORIES</Menu.Item>
      </Menu>
    </Header>
  )
}

export default HeaderLayout
