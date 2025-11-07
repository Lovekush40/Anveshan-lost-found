import React from 'react'

function Report_Lost() {
  return (
    <>
    <div className='flex justify-center items-center relative w-full h-screen'>
      <div className='p-5 w-1/2 rounded-2xl bg-gray-400 shadow-inner'>
        <div className='' >
          <form className='bg-gray-200 p-6 rounded-3xl shadow-inner'>
            <h1 className='text-center text-gray-800 text-4xl mb-4'> Report Lost </h1>
             <div className="relative shadow-xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="text" placeholder="Name" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-gray-800  focus:outline-none" />
              </div>
               <div className="relative shadow-xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="text" placeholder="Item Name" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-gray-800  focus:outline-none" />
              </div>
              <div className="relative shadow-xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="text" placeholder="Location" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-gray-800  focus:outline-none" />
              </div>
              <div className="relative shadow-xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="Date" placeholder="Date" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-gray-800  focus:outline-none" />
              </div>
              <button
              type="submit"
              className="w-full bg-white text-amber-700 font-semibold py-2 px-4 rounded-full hover:bg-amber-100 shadow-xl transition">
                Report
              </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Report_Lost

