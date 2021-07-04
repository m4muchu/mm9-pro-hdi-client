import React, { Suspense } from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router-dom'

import { indexRoutes } from '../routes/index'

import { Spin } from 'antd'

import { createBrowserHistory } from 'history'

export const routerHistory = createBrowserHistory()

const Router = () => (
  <Suspense fallback={<Spin />}>
    <ReactRouter history={routerHistory}>
      <Switch>
        {indexRoutes.map((prop: any) => {
          return <Route path={prop.path} component={prop.component} key={prop.path} />
        })}
      </Switch>
    </ReactRouter>
  </Suspense>
)

export default Router
