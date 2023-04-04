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
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
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
        path: '*',
        element: <div></div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
