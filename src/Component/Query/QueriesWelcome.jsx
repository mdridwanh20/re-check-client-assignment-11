import React from 'react'

export default function QueriesWelcome() {

  
  return (

    <div className='bg-[#fc685c] py-20'>
    
      <div className=" text-white flex flex-col md:flex-row items-center container m-auto px-4 justify-center ">
      {/* Left Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Welcome to Ask me</h2>
        <p className="mb-6 text-white">
        Hardships may come easily, shaped by custom. We live at the top, desiring deep connections. Care for life lies in clear decisions. Strive to stay balanced
        </p>
        <div className="space-x-4">
          <button className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
            About Us
          </button>
          <button className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
            Join Now
          </button>
        </div>

      </div>

      {/* Right Graphic */}
      <div className="md:w-1/2 flex justify-center">
        <div className="bg-white rounded-md shadow-md w-full max-w-lg">
          
          {/* Browser Tab */}
          <div className="bg-gray-300 rounded-t-md px-4 py-2 flex justify-between items-center">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
          </div>

          {/* Content Box */}
          <div className="bg-red-100 p-6 relative">
            <div className="flex items-center ">
              <div className="text-black mr-3 mt-1">
                🖊️
              </div>
              <p className="text-sm italic text-black">
                Ask any question and you be sure find your answer?
              </p>
            </div>
            <button className="absolute bottom-4 cursor-pointer right-4 bg-[#fc685c] text-white font-semibold py-2 px-4 rounded">
              Ask Now
            </button>
          </div>
        </div>
      </div>

    </div>

    </div>
  )
}
