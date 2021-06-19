import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const FooterLayout = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      MM9 PRO HDI ©{new Date().getFullYear()} Created by CartMaker
    </Footer>
  )
}

export default FooterLayout
