import React from 'react'

export const portalRoutes = [
  {
    path: '/login',
    component: React.lazy(() => import('../features/auth/Login')),
  },

  {
    path: '/home',
    component: React.lazy(() => import('../features/home/Home')),
  },
]
