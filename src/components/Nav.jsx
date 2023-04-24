import React from 'react'
import {HiMusicNote} from 'react-icons/hi'
const Nav = ({setToggle,toggle}) => {
  return (
    <div onClick={()=>setToggle(!toggle)} className='absolute w-full flex items-center justify-center   top-4 '>
          <div className='flex items-center w-full justify-between md:justify-around py-4 px-6'>
            <h3 className='font-bold text-xl'>Waves</h3>
             <h2 className='py-1 px-2 flex items-center text-[#343131] border-2 border-[#4b4646]  cursor-pointer hover:bg-[#343131] hover:text-white duration-200 z-40'>Library <HiMusicNote className='text-lg' />   </h2>
             
          </div>
    </div>
  )
}

export default Nav