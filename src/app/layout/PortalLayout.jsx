import { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { useAppDispatch } from '../../app/hooks'
import { Layout } from 'antd'
import { portalRoutes } from '../../routes/portal'
import { PrivateRoute } from './PrivateRoute'

import HeaderLayout from './Header'
import FooterLayout from './Footer'
import { configConstants } from '../../constants/config-constants'
import { setUserAuthenticated } from '../../features/auth/authSlice'

const { Content } = Layout

export const PortalLayout = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (localStorage.getItem(configConstants.TOKEN_NAME)) {
      dispatch(setUserAuthenticated({ authenticated: true }))
    }
    console.log('mounted++++++++++++++++')
  }, [dispatch])

  const switchRoutes = (
    <Switch>
      {portalRoutes.map((prop, key) => {
        return prop.needsAuth ? (
          <PrivateRoute exact path={prop.path} component={prop.component} key={key} />
        ) : (
          <Route path={prop.path} component={prop.component} key={key} />
        )
      })}
    </Switch>
  )

  return (
    <>
      <HeaderLayout />
      <div className="site-layout-background">
        <Content className="site-layout">{switchRoutes}</Content>
      </div>
      <FooterLayout />
    </>
  )
}
