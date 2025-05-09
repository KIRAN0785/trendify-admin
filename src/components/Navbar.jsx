import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        
        <div className="flex items-center space-x-3">
            <img className="w-14 sm:w-12 md:w-10" src={assets.logo} alt="" />
              <p className="text-3xl sm:text-2xl md:text-xl font-bold">
                TrendifyNow.
                <span className="block text-base sm:text-sm md:text-xs font-normal text-gray-500 ml-8 sm:ml-6 md:ml-4">
               Admin Panel
              </span>
            </p>
             </div>



        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-4 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar