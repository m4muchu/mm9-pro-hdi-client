import React from 'react'
import { Layout, Dropdown, Menu, Input, Badge } from 'antd'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { routerHistory } from '../Router'
import { Link, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { isAuthenticated, setUserAuthenticated } from '../../features/auth/authSlice'
import { configConstants } from '../../constants/config-constants'
import { isEmpty } from 'lodash'

const { SubMenu } = Menu
const { Search } = Input

const menu = (
  <Menu>
    <SubMenu className="text-uppercase" title="jerseys">
      <Menu.Item className="text-capitalize">new arrivals</Menu.Item>
      <Menu.Item className="text-capitalize">club jerseys</Menu.Item>
      <Menu.Item className="text-capitalize">National team jerseys</Menu.Item>
      <Menu.Item className="text-capitalize">previous season</Menu.Item>
      <Menu.Item className="text-capitalize">Retro kits</Menu.Item>
    </SubMenu>
  </Menu>
)

const menuHash = {
  clothing: [
    {
      subTitle: 'jerseys',
      menuItems: [
        'new arrivals',
        'club jerseys',
        'National team jerseys',
        'previous season',
        'Retro kits',
      ],
    },
    {
      subTitle: 'training',
      menuItems: ['training kit', 'shorts', 'socks', 'training bibs'],
    },
    {
      subTitle: 'lifestyle',
      menuItems: ['Polo t-shirts', 't-shirts', 'sweatshirts & hoodies'],
    },
    {
      subTitle: 'women & kids',
      menuItems: ['Shop for women', 'Shop for kids', 'sweatshirts & hoodies'],
    },
  ],
  football: [
    {
      subTitle: 'footballs',
      menuItems: [],
    },
    {
      subTitle: 'football boots',
      menuItems: [],
    },
    {
      subTitle: 'training equipments',
      menuItems: ['Goal keeper gloves', 'shin pads', 'equipments', 'others'],
    },
  ],
  fanstore: [
    {
      subTitle: 'phone cases',
      menuItems: [],
    },
    {
      subTitle: 'key chains',
      menuItems: [],
    },
    {
      subTitle: 'action figures',
      menuItems: [],
    },
  ],
}

const menuItemRender = navTitle => {
  const menuData = menuHash?.[navTitle]

  const renderMenu = (
    <Menu>
      {menuData?.map(menu => {
        !isEmpty(menu?.menuItems)
          ? (menu = (
              <SubMenu className="text-uppercase" title={menu.subTitle}>
                {menu?.menuItems?.map(item => (
                  <Menu.Item className="text-capitalize">{item}</Menu.Item>
                ))}
              </SubMenu>
            ))
          : (menu = <Menu.Item className="text-capitalize">{menu.subTitle}</Menu.Item>)

        return menu
      })}
    </Menu>
  )

  return renderMenu
}

const HeaderLayout = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()

  const loggedIn = useAppSelector(isAuthenticated)

  const navItems = [
    {
      label: 'Home',
      to: '/home/',
    },
    {
      label: 'clothing',
      to: '/women/',
      dropDown: true,
    },
    {
      label: 'football',
      to: '/men/',
      dropDown: true,
    },
    {
      label: 'fanstore',
      to: '/accessories/',
      dropDown: true,
    },
    {
      label: 'rewards',
      to: '/accessories/',
    },
    {
      label: 'giftcard',
      to: '/accessories/',
    },
    {
      label: 'support',
      to: '/accessories/',
    },
  ]
  console.log('history+++++++++++++', routerHistory)

  const userLogout = () => {
    localStorage.removeItem(configConstants.TOKEN_NAME)
    dispatch(setUserAuthenticated({ authenticated: false }))
  }

  const userProfileMenu = loggedIn => {
    return (
      <Menu>
        <>
          {!loggedIn ? (
            <>
              <Menu.Item>
                <Link to="/login/">Login</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/sign-in/">Sign In</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item>My Account</Menu.Item>
              <Menu.Item onClick={() => userLogout()}>Logout</Menu.Item>
            </>
          )}
        </>
      </Menu>
    )
  }

  return (
    <>
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
            <div
              className="header-navbar-collapse collapse navbar-collapse"
              id="navbarTogglerDemo02"
            >
              {/* header-navbar-nav-item-selected  */}
              <ul className="header-navbar-nav navbar-nav me-auto mb-2 mb-lg-0">
                {navItems.map(nav =>
                  nav.dropDown ? (
                    <Dropdown overlay={() => menuItemRender(nav.label)}>
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
                <Dropdown overlay={() => userProfileMenu(loggedIn)}>
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
    </>
  )
}

export default HeaderLayout
