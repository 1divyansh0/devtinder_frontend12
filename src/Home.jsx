import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>

        <div className="min-h-screen bg-base-100 text-base-content flex flex-col items-center justify-center px-6">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 mb-6">
        Explore
      </h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl text-gray-400 max-w-xl mb-8">
        Connect. Collaborate. Code.<br />
        A clean platform for developers to find like-minded teammates.
      </p>

      {/* CTA */}
      <button
        onClick={() => {
        
          navigate('/login')
        }}
        className="btn btn-success btn-wide text-lg"
      >
        Login / Sign Up
      </button>

      {/* Optional Footer */}

    </div>
    </div>
  )
}

export default Home