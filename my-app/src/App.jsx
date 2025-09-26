import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🚀 Vite + React + Tailwind</h1>

      <button
        className="px-6 py-3 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Click Me
      </button>

      <p className="mt-4 text-gray-300">
        Tailwind is <span className="text-green-400 font-semibold">working!</span>
      </p>
    </div>
  )
}

export default App
