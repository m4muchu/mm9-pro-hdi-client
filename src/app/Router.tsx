import React, { Suspense } from 'react'
import { Router as ReactRouter, Route } from 'react-router-dom'

import { Layout, Spin, Breadcrumb } from 'antd'

import { createBrowserHistory } from 'history'
import Home from '../features/home/home'
import HeaderLayout from './layout/Header'
import FooterLayout from './layout/Footer'
// import { Redirect } from "react-router";

export const routerHistory = createBrowserHistory()
const { Content } = Layout

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
]

const Router = () => (
  <Suspense fallback={<Spin />}>
    <HeaderLayout />
    <ReactRouter history={routerHistory}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {routes.map(route => (
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact={route.exact}
            />
          </Content>
        ))}
      </div>
    </ReactRouter>
    <FooterLayout />
  </Suspense>
)

export default Router
