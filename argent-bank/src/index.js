import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/styles/main.scss'

import App from './pages/App'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import E404 from './pages/E404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><App><Home /></App></>,
  },
  {
    path: '/signin',
    element: <><App><SignIn /></App></>,
  },
  {
    path: '/user',
    element: <><App><User /></App></>,
  },
  {
    path: '*',
    element: <><App><E404 /></App></>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
