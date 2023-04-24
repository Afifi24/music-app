import React, { useState } from 'react'
const LibrarySongs = ({song,SelectAudio,songs,setSongs,id}) => {
  const newsSong = songs.map((song)=>{
   if( song.id === id){
    return{
      ...song,
      active:true
    }
   }else{
    return{
      ...song,
      active:false
    }
   }
  })
   const Selectfunction = (song)=>{
    SelectAudio(song)
    setSongs(newsSong)
   }
  return (
    <div onClick={()=>Selectfunction(song)} className={`${song.active === true? 'bg-[#ebb4ee]':''} flex gap-4 items-center p-3 hover:bg-[#d7e3e6] duration-200 cursor-pointer`}>
      <img className='w-[30%]' src={song.cover} alt="" />
      <div>
         <h2 className='text-[#4e4d4d] font-bold'>{song.name}</h2>
         <h4 className='text-[#585858] text-[12px]'>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySongs