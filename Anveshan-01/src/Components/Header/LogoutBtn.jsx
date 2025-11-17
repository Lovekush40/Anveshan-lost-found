import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler} className=' inline-block px-6 py-2  rounded-xl border-[#065C77] text-[#065C77] border-1 font-medium mt-[-5px] duration-200 hover:bg-[#065C77] hover:text-white ' >LogOut</button>
  )
}

export default LogoutBtn