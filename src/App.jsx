import React from 'react'
import './App.css'
import Login from './routes/auth/Login'
import Signup from './routes/auth/Signup'
import Home from './routes/home'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom' 
import Profile from './routes/Profile'

function App() {


  const router = createBrowserRouter([
    {path: '/', element: <Signup/>},
    {path: '/login', element: <Login/>},
    {path: '/home', element: <Home/>},
    {path: '/profile', element: <Profile/>},
  ])

  return (
    <>
    {/* <Signup/> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
