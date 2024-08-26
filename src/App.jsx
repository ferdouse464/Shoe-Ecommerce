import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="bg-purple-800 text-sm rounded-full px-4 py-1 inline-block mb-4">
            20% Discount For 1 Month Account
          </div>
          <h1 className="text-5xl font-bold mb-4">
            The Next <br />
            <span className="text-cyan-400">Generation</span> <br />
            Payment Method.
          </h1>
          <p className="mb-6 text-gray-400">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 rounded-full px-6 py-3 font-semibold hover:from-cyan-500 hover:to-cyan-600 transition-colors">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl shadow-lg"></div>
            <div className="w-full h-64 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl shadow-lg absolute top-4 left-4 transform rotate-3"></div>
          </div>
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </>
  
  )


}

export default App
