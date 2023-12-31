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
import ErrorPage from './registration/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';
import Faq from './Footer/Component/Faq/Faq';
import About from './Footer/Component/About/About';



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('https://roomjet-server-side.vercel.app/rooms')
      },
      {
        path: '/rooms',
        element: <RoomsData/>,
        loader: () => fetch('https://roomjet-server-side.vercel.app/rooms')
      },
      {
        path: '/rooms/:id',
        element:
          <RoomDetails/>,
        
        loader: ({params}) => fetch(`https://roomjet-server-side.vercel.app/rooms/${params.id}`)
      },
      {
        path: '/book/:id',
        element:<PrivateRoute>
          <Bookings/>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://roomjet-server-side.vercel.app/rooms/${params.id}`)
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
         loader: ({params}) => fetch(`https://roomjet-server-side.vercel.app/bookings/${params.id}`)
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/singup',
        element: <SingUp/>
      },
      {
        path: '/faq',
        element: <Faq/>
      },
      {
        path: '/about',
        element: <About/>
      },

    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </AuthProvider>
  </React.StrictMode>,
)
