import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Products from './Products/Products';
import Cart from './components/Cart/Cart';
import Submit from './Products/Submit';
import Carusal from './components/Carusal/Carusal';
import Single from './Single/Single';
import Eror from './Eror/Eror';
import Account from './components/Account/Account';
import Register from './components/Account/Register';
import AuthProvider from './components/AuthProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Carusal></Carusal>
        // loader: () => fetch('products.json')
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/product/:id',
        element: <Single></Single>,
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/order_place',
        element: <Submit></Submit>
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '*',
        element: <Eror></Eror>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
