import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Footer/Component/Home/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
