import React from 'react'
const LibrarySongs = ({song,SelectAudio}) => {
  return (
    <div onClick={()=>SelectAudio(song)} className='flex gap-4 items-center p-4 hover:bg-[#d7e3e6] duration-200 cursor-pointer'>
      <img className='w-[30%]' src={song.cover} alt="" />
      <div>
         <h2 className='text-[#4e4d4d] font-bold'>{song.name}</h2>
         <h4 className='text-[#585858] text-[12px]'>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySongs