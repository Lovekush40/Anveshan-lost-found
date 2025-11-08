import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import Logo from '../Logo';
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';
function Header(){
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    
    {
      name: "About",
      slug: "/about",
      active: authStatus,
     },
     {
      name: "Found Something",
      slug: "/found_something",
      active: authStatus,
    },
    {
      name: "Report Lost",
      slug: "/report_lost",
      active: authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
     
    ]
  return (
        <header className='shadow  border-gray-400 border-1 top-0'>
            <nav className='bg-gray-100 flex  lg:px-5 px-4 py-3'>
                <Logo/>   
                    <div className='text-gray-500 justify-center ml-96 mt-2'> 
                        <ul className='flex ml-auto  space-x-14'>
                        {navItems.map((item) => 
                            item.active ? (
                            <li key={item.name}>
                               <NavLink to={item.slug}  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#065C77]" : "text-gray-600"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#065C77] font-medium lg:p-0`
                                    }>
                                    {item.name}
                                </NavLink>
                            </li>
                        ) : null
                        )}
                        {authStatus && (
                        <li>
                            <LogoutBtn className="font-medium bg-[#065C77]" />
                        </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
  )
}

export default Header