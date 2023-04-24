import React from 'react'

const Songs = ({currentSong}) => {
  return (
    <div className=' min-h-[60vh] flex flex-col items-center justify-center'>
      <img className=' w-[50%] md:w-[16%]  rounded-full' src={currentSong.cover} alt="" />
      <h2 className='mt-10 mb-2 text-2xl text-[#333]  font-bold' >{currentSong.name} </h2>
      <h3 className='text-sm text-[#818080]'>{currentSong.artist}</h3>
    </div>
  )
}

export default Songs