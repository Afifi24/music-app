import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'
import {AiFillStepBackward} from 'react-icons/ai'
const Player = ({audioRef,isplaying,setIsplaying,songInfo,Randomfunction,setTimeInput,timeInput,UpdateTimeOfInput,Next,Back}) => {
  const PlayPausehandler = ()=>{
    if(isplaying){
      audioRef.current.pause()
      setIsplaying(!isplaying)
    }else{
      audioRef.current.play()
      setIsplaying(!isplaying)

    }
  }
  return (
    <div className='mt-6 md:mt-0 min-h-[25vh]   flex flex-col items-center justify-around'>
       <div className='w-[90%] md:w-[50%] flex items-center  p-3'>
        <h3 className='text-center text-sm'>{Randomfunction(songInfo.currentTime)}</h3>
       {/* <div className='bg-gray-300 w-full h-6 relative rounded-md'> */}
       <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={UpdateTimeOfInput} className='w-full mx-2  cursor-pointer  ' type="range" />
       {/* <div className=' h-4 absolute top-0 left-0'></div>  */}
       {/* </div> */}
       <h3 className='text-center text-sm'>{songInfo.duration ? Randomfunction(songInfo.duration): '0:00'}</h3>
       </div>
       <div className='flex w-[50%] md:w-[30%] items-center cursor-pointer text-3xl justify-between '>
            <AiFillStepBackward onClick={Back} className=''/>
            { isplaying ? <FaPause onClick={PlayPausehandler} className='cursor-pointer'/>:<FaPlay onClick={PlayPausehandler} className='cursor-pointer'/>}
            <AiFillStepBackward onClick={Next} className='rotate-180 cursor-pointer'/>
       </div>
    </div>
  )
}

export default Player