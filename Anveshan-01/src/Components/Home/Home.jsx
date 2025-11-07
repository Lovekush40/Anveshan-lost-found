import React from 'react'
import { Link } from 'react-router-dom'
import Items from './Items'


function Home() {
  return (
    <>
    <div className='relative h-full  w-full'>
      <div className=" flex justify-center items-center shadow-2xl bg-[url('https://www.shutterstock.com/image-vector/rajasthan-fort-skyline-red-background-260nw-2079137164.jpg')] bg-cover w-full h-100">
        <div className=' absolute top-12 h-auto w-150'>
              <h2 className='text-blue-600 text-3xl font-bold ml-35'> Simplest Way To Search</h2>
              <p className='text-gray-600 font-semibold ml-50'>What’s lost may yet return</p>
                      <ul className="flex gap-5 font-semibold mt-10 ">
                        {["All", "Lost", "Found"].map((label, index) => (
                         <li key={label}>
                         <input
                         type="radio"
                          name="Search_Category"
                          value={label.toLowerCase()}
                          id={label}
                          defaultChecked={label === "All"}
                          className=" peer hidden"
                        />
                        <label
                          htmlFor={label}
                           className="peer-checked:bg-white peer-checked:text-gray-500 bg-blue-600 text-white py-2 px-4 rounded-t-sm cursor-pointer transition-all duration-200"
                           >
                          {label}
                        </label>
                    </li>
                  ))}
                </ul>
                <div className='bg-white flex mt-1.5 rounded-b-md rounded-r-md '>
                  <input type='Search' placeholder='Search Memories.....'
                    className='w-full p-2 rounded-md'></input>
                  <button className='text-center border-1 font-bold border-blue-500 px-4 rounded-r-md bg-blue-600  text-white'> Search </button>
                </div>
        </div>
    </div>
        <Items/>
    </div>
    </>
  )
}

export default Home