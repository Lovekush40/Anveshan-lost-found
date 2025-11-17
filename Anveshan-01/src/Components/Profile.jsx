import React, { useEffect, useState } from 'react'
import authService from '../Appwrite/auth'
import { Link } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        async function fetchUser(){
            const data = await authService.getCurrentUser();
            setUser(data)
        }
        fetchUser();
    }, [])

    if(!user) return null

  return (
    <Link to="/profile" className="flex items-center justify-center mt-[-4px]">
      <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#065C77] bg-gray-100 hover:bg-gray-200">
        <i className="fa-solid fa-circle-user text-[#065C77] text-3xl"></i>
      </div>
    </Link>

  )
}

export default Profile