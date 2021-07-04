import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from 'antd'
import { portalRoutes } from '../../routes/portal'

import HeaderLayout from './Header'
import FooterLayout from './Footer'

const { Content } = Layout

export const PortalLayout = () => {
  //   useEffect(() => {
  //     if (!localStorage.getItem(configConstants.ADMIN_TOKEN)) {
  //       history.push('/auth')
  //     }
  //   }, [])

  const switchRoutes = (
    <Switch>
      {portalRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />
      })}
    </Switch>
  )

  return (
    <>
      <HeaderLayout />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          {switchRoutes}
        </Content>
      </div>
      <FooterLayout />
    </>
  )
}
