import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import Logo from '../Logo';
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';
import Profile from '../profile';
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
        <header className="shadow border-gray-400 border-1 top-0 w-full bg-gray-100">
  <nav className="flex justify-between items-center px-6 py-3">
    
    <Logo />

    <ul className="flex space-x-10 items-center text-gray-600 font-medium">
      {navItems.map((item) =>
        item.active ? (
          <li key={item.name}>
            <NavLink
              to={item.slug}
              className={({ isActive }) =>
                `py-2 px-3 duration-200 ${
                  isActive ? "text-[#065C77]" : "text-gray-600"
                } hover:text-[#065C77]`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ) : null
      )}

      {authStatus && (
        <li>
          <LogoutBtn />
        </li>
      )}

      {authStatus && (
        <li>
          <Profile />
        </li>
      )}
    </ul>

  </nav>
</header>

  )
}

export default Header