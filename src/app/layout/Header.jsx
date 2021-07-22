import React from 'react'
import { Layout, Dropdown, Menu, Input, Badge } from 'antd'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
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

const userProfileMenu = (
  <Menu>
    <Menu.ItemGroup>
      <Menu.Item>
        <Link to="/login/">Login In</Link>
      </Menu.Item>
      <Menu.Item>Sign In</Menu.Item>
      <Menu.Item>My Account</Menu.Item>
    </Menu.ItemGroup>
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
      dropDown: menu,
    },
    {
      label: 'Men',
      to: '/men/',
      dropDown: menu,
    },
    {
      label: 'Accessories',
      to: '/accessories/',
      dropDown: menu,
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
              {navItems.map(nav =>
                nav.dropDown ? (
                  <Dropdown overlay={menu}>
                    <li className="header-navbar-nav-item nav-item">
                      <Link
                        className="nav-link text-uppercase text-white ml-2"
                        aria-current="page"
                        to={nav.to}
                        key={nav.label}
                      >
                        {nav.label}
                      </Link>
                    </li>
                  </Dropdown>
                ) : (
                  <li className="header-navbar-nav-item nav-item">
                    <Link
                      className="nav-link text-uppercase text-white ml-2"
                      aria-current="page"
                      to={nav.to}
                      key={nav.label}
                    >
                      {nav.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div class="header__search">
              <Search
                placeholder="Search for products, brands and more"
                // onSearch={onSearch}
                style={{ width: '30rem' }}
              />
            </div>
            <div className="ml-5">
              <Dropdown overlay={userProfileMenu}>
                <UserOutlined style={{ fontSize: '2.3rem', color: '#fff', cursor: 'pointer' }} />
              </Dropdown>
            </div>
            <div className="ml-5">
              <Badge count={5}>
                <ShoppingCartOutlined
                  style={{ fontSize: '2.3rem', color: '#fff', cursor: 'pointer' }}
                />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderLayout
