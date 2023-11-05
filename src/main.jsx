import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div> <h3>home</h3></div>,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
