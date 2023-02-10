import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/styles/main.scss'

import Footer from './components/Footer'
import Header from './components/Header'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import E404 from './pages/E404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Home />
      <Footer />
    </>,
  },
  {
    path: '/signin',
    element: <>
      <Header />
      <SignIn />
      <Footer />
    </>,
  },
  {
    path: '/user',
    element: <>
      <Header />
      <User />
      <Footer />
    </>,
  },
  {
    path: '*',
    element: <>
      <Header />
      <E404 />
      <Footer />
    </>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
