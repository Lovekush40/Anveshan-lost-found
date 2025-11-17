import React from 'react'
import ItemForm from '../Components/itemForm/ItemForm'
import Container from '../Components/container'


function Found() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br rom-blue-150 via-white to-blue-200 px-4 py-10">
      <div className="w-full max-w-5xl border-gray-400 border rounded-2xl px-6 py-4">
        <Container className="bg-white rounded-2xl shadow-xl p-10  border-gray-200 backdrop-blur-3xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            🧾 Report a Found Item
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Please fill out the details below to help us return this item to its rightful owner.
          </p>

          <div className="animate-fadeIn">
            <ItemForm status="found"/>
          </div>
        </Container>
      </div>
    </div>
  )
} 

export default Found
 