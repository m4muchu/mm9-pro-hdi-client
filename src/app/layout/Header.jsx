import React from 'react'
import { Layout, Dropdown, Menu, Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { routerHistory } from '../Router'
import { Link, useHistory } from 'react-router-dom'

const { SubMenu } = Menu
const { Search } = Input

const menu = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
)

const HeaderLayout = () => {
  const history = useHistory()

  const navItems = [
    {
      label: 'Home',
      to: '/home/',
    },
    {
      label: 'Women',
      to: '/women/',
    },
    {
      label: 'Men',
      to: '/mwn/',
    },
    {
      label: 'Accessories',
      to: '/accessories/',
    },
  ]
  console.log('history+++++++++++++', routerHistory)
  return (
    <div className="header">
      <div
        className="header-navbar navbar navbar-expand-sm navbar-dark fixed-top"
        style={{ backgroundColor: '#dd3a3fd9' }}
      >
        <div className="container-fluid">
          <Link className="header-navbar-logo navbar-brand mb-0 h1 text-white ml-2" to="/home/">
            <span className="header-navbar-logo-name">MM9 PRO HDI</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="header-navbar-collapse collapse navbar-collapse" id="navbarTogglerDemo02">
            {/* header-navbar-nav-item-selected  */}
            <ul className="header-navbar-nav navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map(nav => (
                <Dropdown overlay={menu}>
                  <li className="header-navbar-nav-item nav-item">
                    <Link
                      className="nav-link text-uppercase text-white ml-2"
                      aria-current="page"
                      to="/home/"
                      key={nav.label}
                    >
                      {nav.label}
                    </Link>
                  </li>
                </Dropdown>
              ))}
            </ul>
            <div class="header__search">
              <Search
                placeholder="input search text"
                // onSearch={onSearch}
                style={{ width: 230 }}
              />
            </div>
            <div className="header__cart">{/* <ShoppingCartOutlined /> */}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderLayout
