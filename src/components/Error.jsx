import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router'

export function Error() {

    const navigate = useNavigate()

    console.log(navigate)

    const handleButton = () => {
        navigate(-1)
    }

    const error = useRouteError();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      
      {/* Big error code */}
      <h1 className="text-9xl font-bold text-red-500 tracking-widest animate-pulse">
        404
      </h1>

      {/* Error message */}
      <p className="mt-6 text-2xl font-semibold text-gray-300">
        Oops! Page Not Found
      </p>

      {/* Optional error details */}
      {error?.statusText || error?.message ? (
        <p className="mt-2 text-gray-500 text-sm">
          {error.statusText || error.message}
        </p>
      ) : null}

      {/* Button to go home */}
      <button
        onClick={() => handleButton()}
        className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
      >
        Go Back Home
      </button>

      {/* Optional decorative image / icon */}
      <div className="mt-10 w-64 h-64 bg-zinc-900 rounded-xl animate-pulse"></div>
    </div>
  )
}
