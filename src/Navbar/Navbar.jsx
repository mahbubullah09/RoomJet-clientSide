import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import logo from '../assets/RoomJet logo.png'
import { AuthContext } from "../Provider/authProvider";


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
  console.log(user);
 

  const navLink = (
    <div className=" gap-2 flex flex-col lg:flex-row ">
      <ul className="py-1 relative group">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-black font-bold bg-white rounded   py-2 px-4     "
              : " font-bold  py-2 px-4  "
          }
        >
          {" "}
          Home
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>
      <ul className="py-1 relative group">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? " text-black font-bold bg-white rounded   py-2 px-4     "
              : " font-bold  py-2 px-4  "
          }
        >
          {" "}
          About
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>
      <ul className="py-1 relative group">
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive
              ? " text-black font-bold bg-white rounded   py-2 px-4     "
              : " font-bold  py-2 px-4  "
          }
        >
          {" "}
         FAQ
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>

      <ul className="py-1 relative group">
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive
              ? " text-black font-bold bg-white rounded   py-2 px-4  "
              : " font-bold  py-2 px-4  "
          }
        >
          {" "}
          Rooms
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>

      <ul className="py-1 relative group">
        <NavLink
          to="/mybookings"
          className={({ isActive }) =>
            isActive
              ? " text-black font-bold bg-white rounded   py-2 px-4  "
              : "  font-bold py-2 px-4  "
          }
        >
          {" "}
          My Bookings
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>

     
    </div>
  );

  return (
    <div>
      <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLink}
            </ul>
          </div>
         <Link to={'/'}>
         <img
            className="w-1/5"
            src={logo}
            alt=""
          />
         </Link>
        </div>
        <div className="navbar-center hidden lg:flex bg-[#ffcf00] rounded-lg    ">
          <ul className="menu menu-horizontal px-4 ">{navLink}</ul>
        </div>
        <div className="navbar-end">
          
          {user?.email ? (
            <div className="cursor-pointer mr-2 flex gap-2">
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="">
                  <div className="w-10  ">
                    {user ? (
                      <img
                        className="  cursor-pointer rounded-full w-16"
                        src={user?.photoURL}
                        alt=""
                      />
                    ) : (
                      <div className=" text-4xl">
                        {" "}
                     
                      </div>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  

                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li>
                    <a>{user?.email}</a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  className="text-base font-semibold hover:bg-[#28844b] hover:text-black bg-[#ffcf00]  text-black  py-2 px-4 rounded-md hover:bg-blue-gray-800"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className=" text-base font-semibold hover:bg-[#28844b] hover:text-black bg-[#ffcf00]  text-black  py-2 px-4 rounded-md hover:bg-blue-gray-800 ">
              <Link to={"/login"}>Log In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;