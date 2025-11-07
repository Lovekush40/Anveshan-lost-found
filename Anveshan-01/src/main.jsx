import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Found_something from './Components/Found-Something/Found_something.jsx'
import Report_Lost from './Components/Report_Lost/Report_Lost.jsx'
import Login from './Components/Login/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/found_something' element={<Found_something/>} />
      <Route path='/Report_Lost' element={<Report_Lost/>} />
      <Route path='/login' element={<Login/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
