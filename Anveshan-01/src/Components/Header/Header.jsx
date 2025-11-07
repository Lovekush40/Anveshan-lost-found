import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from "../../assets/Anveshan-logo-transparent.png";

function Header() {
  return (
    <>
        <header className='shadow-2xl  border-gray-400 border-1 top-0'>
            <nav className='bg-white  lg:px-5 px-4 py-3'>
                <div className='flex justify-between items-center'>
                    <Link to="/" className='flex items-center'>
                        <img src={logo} alt="Logo" className="h-10 w-auto " />
                    </Link>
                    <div className='text-gray-500 ml-50'> 
                        <ul className='text-shadow-amber-50 flex font-bold justify-between items-center gap-2'>
                            <li>                                
                                  <NavLink to="" className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 ${isActive ? "text-blue-500" : "text-gray-600"} duration-300 hover:bg-transparent border-0 `} >
                                     Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 ${isActive ? "text-blue-500" : "text-gray-600"} duration-300  hover:bg-transparent border-0 `} >
                                     About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/found_something" className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 ${isActive ? "text-blue-500" : "text-gray-600"} duration-300  hover:bg-transparent border-0 `} >
                                     Found Something!
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Report_Lost" className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 ${isActive ? "text-blue-500" : "text-gray-600"} duration-300   hover:bg-transparent border-0  `} >
                                     Report Lost
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex item center lg:order-2'>
                        <Link to="/login" className="text-gray-600 t font-medium border-1 border-amber-50 hover:border-blue-500 rounded-lg text-sm px-4 py-2 mr-2 ">
                            Log in
                        </Link>
                        <Link to="#" className="border-blue-500 border-1 text-blue-500 bg-amber-50 hover:text-white hover:bg-blue-500 font-medium py-2 px-4 rounded-lg ">
                            For Faculty
                        </Link>
                    </div>
                </div>
            </nav>

        </header>
    </>
  )
}

export default Header