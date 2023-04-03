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


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Products></Products>,
        loader: () => fetch('products.json')
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch('products.json')
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
