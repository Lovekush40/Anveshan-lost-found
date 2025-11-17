import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx' 
import Found from './pages/Found.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Login/Signup.jsx'
import Lost from './pages/Lost.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import Protected from './Components/AuthLayout.jsx'
import SingleItem from './pages/SingleItem.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <SingleItem />
      },
      {
        path: '/login',
        element: (
                <Protected authentication={false}>
                    <Login />
                </Protected>
            ),        
      },
      {
        path: '/signup',
        element: (
                    <Signup/>
            ),        
      },
      {
        path: '/about',
        element: (

                    <About />
              
            ),        
      },
      {
        path: '/found_something',
        element: (
                <Protected authentication>
                    <Found />
                </Protected>
            ),        
      },
      {
        path: '/report_lost',
        element: (
                <Protected authentication>
                    <Lost />
                </Protected>
            ),        
      },

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>,
)
