import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { auth } = useContext(AuthProvider)
  return (
    <Route
      {...rest}
      render={props => (true ? <Component {...props} /> : <Redirect to="/login/" />)}
    />
  )
}
