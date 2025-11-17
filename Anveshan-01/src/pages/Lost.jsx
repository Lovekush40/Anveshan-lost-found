import React from 'react'
import ItemForm from '../Components/itemForm/ItemForm'
import Container from '../Components/container'

function Lost() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-blue-150 via-white to-blue-200 px-4 py-10">
      <div className="w-full max-w-5xl border-gray-400 border rounded-2xl px-6 py-4">
        <Container className="bg-white rounded-2xl shadow-xl p-10  border-gray-200 backdrop-blur-3xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            🧾  Report a Lost Item
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Help us locate your missing item by providing as many details as possible. We'll notify you if it's found.
          </p>

          <div className="animate-fadeIn">
            <ItemForm status="lost" />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Lost
