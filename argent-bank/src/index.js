import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/styles/main.scss'

import Footer from './components/Footer'
import Header from './components/Header'

// import Home from './pages/Home'
// import SignIn from './pages/SignIn'
import User from './pages/User'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Hello World!</h1>,
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {/* <Home /> */}
    {/* <SignIn /> */}
    <User />
    <Footer />

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
