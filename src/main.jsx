import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Footer/Component/Home/Home';
import RoomsData from './Footer/Component/Rooms/RoomsData';
import RoomDetails from './Footer/Component/Rooms/RoomDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('FakeData.json')
      },
      {
        path: '/rooms',
        element: <RoomsData/>,
        loader: () => fetch('FakeData.json')
      },
      {
        path: '/rooms/:name',
        element:<RoomDetails/>,
        loader: ({params}) => fetch(`FakeData.json/rooms/${params.name}`)
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
