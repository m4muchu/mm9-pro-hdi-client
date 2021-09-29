import React from 'react'

// for private route pass key `needsAuth: true`
export const portalRoutes = [
  {
    path: '/login/',
    component: React.lazy(() => import('../features/auth/Login')),
  },
  {
    path: '/sign-in/',
    component: React.lazy(() => import('../features/auth/SignIn')),
  },
  {
    path: '/product-view/',
    component: React.lazy(() => import('../features/productView/productView')),
  },
  {
    path: '/checkout/',
    component: React.lazy(() => import('../features/checkout/checkout')),
  },
  {
    path: '/category/',
    component: React.lazy(() => import('../features/productList/productList')),
  },
  {
    path: '/',
    component: React.lazy(() => import('../features/home/Home')),
  },
]
