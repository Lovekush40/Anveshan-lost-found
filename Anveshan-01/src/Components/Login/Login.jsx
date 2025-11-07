import React ,{useState} from 'react'

function Login() {
   const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-white text-blue-800 overflow-hidden">     
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[450px] border border-black rounded-2xl overflow-hidden z-20  shadow-2xl p-2 bg-white">
      
        <div className="absolute top-0 left-0 w-[58%] h-full hidden lg:block">
         <div className='h-full  w-full'> <img src="https://cdn1.vectorstock.com/i/1000x1000/14/65/young-man-studying-vector-1481465.jpg" alt="" className='object-cover w-full h-full' /></div>
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-[42%] h-100">
          <div className={`absolute flex justify-center items-center w-full h-full transition-transform duration-700 ease-in-out ${isActive ? 'translate-x-[430px]' : 'translate-x-0'}`}>
            <form className="text-center w-full px-6">
              <h1 className="text-3xl font-bold mb-6">Login</h1>
              <div className="relative shadow-2xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="text" placeholder="Username" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-blue-800 placeholder-blue-400 focus:outline-none" />
              </div>
              <div className="relative shadow-2xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="password" placeholder="Password" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-blue-800 placeholder-blue-400 focus:outline-none" />
              </div>
              <div className="flex justify-between text-sm mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="accent-blue-200 mr-2" />
                  Remember me
                </label>
                <a href="#" className="hover:underline">Forgot Password?</a>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                Login
              </button>
              <p className="text-sm mt-4">
                Don’t have an account? <button type="button" onClick={() => setIsActive(true)} className="font-medium hover:underline">Sign Up</button>
              </p>
            </form>
          </div>
          <div className={`absolute flex justify-center items-center w-full h-full transition-transform duration-700 ease-in-out ${isActive ? 'translate-x-0' : 'translate-x-[430px]'}`}>
            <form className="text-center w-full px-6">
              <h1 className="text-3xl font-bold  my-6">Sign Up</h1>
              <div className="relative shadow-2xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="text" placeholder="Name" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-blue-800 placeholder-blue-400 focus:outline-none" />
              </div>
              <div className="relative shadow-2xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="email" placeholder="Email" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-blue-800 placeholder-blue-400 focus:outline-none" />
              </div>
              <div className="relative shadow-2xl mb-6 bg-gray-300 p-2 rounded-4xl">
                <input type="password" placeholder="Password" className="w-full border border-gray-500 rounded-full px-4 py-2 bg-white text-blue-800 placeholder-blue-400 focus:outline-none" />
              </div>
              <label className="text-sm flex items-center justify-center gap-2 mb-4">
                <input type="checkbox" className="accent-blue-600" />
                I agree to the terms & conditions
              </label>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                Sign Up
              </button>
              <p className="text-sm mt-4">
                Already have an account? <button type="button" onClick={() => setIsActive(false)} className="font-medium hover:underline">Login</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login