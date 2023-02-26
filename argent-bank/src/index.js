import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/services/redux.store'

import './assets/styles/main.scss'

import App from './pages/App'
import Error from './pages/Error'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><App><Home /></App></>,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <><App><LogIn /></App></>,
    errorElement: <Error />,
  },
  {
    path: '/profile',
    element: <><App><Profile /></App></>,
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
