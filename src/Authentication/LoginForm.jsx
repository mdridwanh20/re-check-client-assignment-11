import React from 'react'

function LoginForm({handleLogin, handlerWithGoogle}) {


  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

   <div className='w-[500px] p-5 shadow-lg'>
   <form
      onSubmit={handleLogin}
      className=""
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          required
          name="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        onClick={handlerWithGoogle}
        className="w-full my-5 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
     

    </form>

    <button
        type="submit"
        onClick={handlerWithGoogle}
        className="w-full my-5 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Google with login
      </button>

   </div>

  </div>
  )
}

export default LoginForm
