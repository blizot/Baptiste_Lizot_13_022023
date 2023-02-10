import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/styles/main.scss'

import App from './pages/App'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><App><Home /></App></>,
    errorElement: <Error />,
  },
  {
    path: '/signin',
    element: <><App><SignIn /></App></>,
    errorElement: <Error />,
  },
  {
    path: '/user',
    element: <><App><User /></App></>,
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
