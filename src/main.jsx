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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyBookings from './Footer/Component/MyBooking/MyBookings';
import UpdateBookings from './Footer/Component/MyBooking/UpdateBookings';



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
        element:<PrivateRoute>
          <RoomDetails/>,
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: '/book/:id',
        element:<PrivateRoute>
          <Bookings/>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: '/mybookings',
        element:<PrivateRoute>
          <MyBookings/>
        </PrivateRoute>,
      },
      {
        path: '/updateBookings/:id',
        element:<PrivateRoute>
          <UpdateBookings/>
        </PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
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
