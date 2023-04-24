import React from 'react'
import LibrarySongs from './LibrarySongs'
const Library = ({songs,SelectAudio,setSongs,toggle}) => {
  return (
   <div>
     
       <div  className={` ${toggle ? '-translate-x-full duration-200':'translate-x-0 duration-200'} shadow-2xl fixed left-0 top-0 h-full w-[22%] overflow-y-scroll `}>
         <h2 className='font-bold p-4 text-xl text-[#353434]'>Library</h2>
       <div className='flex flex-col '>
         { songs.map(song=><LibrarySongs id={song.id} setSongs={setSongs} songs={songs} SelectAudio={SelectAudio} song={song} key={song.id} />)}
       </div>
   </div>
     
   </div>
  )
}

export default Library