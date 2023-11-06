import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Footer/Component/Home/Home';
import RoomsData from './Footer/Component/Rooms/RoomsData';
import RoomDetails from './Footer/Component/Rooms/RoomDetails';
import Login from './registration/Login';
import SingUp from './registration/SingUp';
import AuthProvider from './Provider/authProvider';
import Bookings from './Booking/Bookings';



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/rooms')
      },
      {
        path: '/rooms',
        element: <RoomsData/>,
        loader: () => fetch('http://localhost:5000/rooms')
      },
      {
        path: '/rooms/:id',
        element:<RoomDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: '/book/:id',
        element:<Bookings/>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/singup',
        element: <SingUp/>
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
