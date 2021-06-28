import React, { Suspense } from 'react'
import { BrowserRouter as ReactRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Layout, Spin } from 'antd'

import { createBrowserHistory } from 'history'
import HeaderLayout from './layout/Header'
import FooterLayout from './layout/Footer'

export const routerHistory = createBrowserHistory()
const { Content } = Layout

const routes = [
  {
    path: '/home',
    component: React.lazy(() => import('../features/home/home')),
    exact: true,
  },
  {
    path: '/login',
    component: React.lazy(() => import('../features/auth/Login')),
    exact: true,
  },
]

const Router = () => (
  <Suspense fallback={<Spin />}>
    <HeaderLayout />
    <ReactRouter>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Switch>
            <Route path={'/'} exact={true} render={() => <Redirect to="/home" />} />
            {routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Content>
      </div>
    </ReactRouter>
    <FooterLayout />
  </Suspense>
)

export default Router
