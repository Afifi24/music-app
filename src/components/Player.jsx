import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'
import {AiFillStepBackward} from 'react-icons/ai'
const Player = ({audioRef,isplaying,setIsplaying,songInfo,Randomfunction,setTimeInput,timeInput,UpdateTimeOfInput}) => {
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
    <div className='min-h-[20vh]   flex flex-col items-center justify-between'>
       <div className='w-[50%] flex items-center  p-3'>
        <h3 className='text-center text-sm'>{Randomfunction(songInfo.currentTime)}</h3>
       <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={UpdateTimeOfInput} className='w-full mx-2 ' type="range" /> 
       <h3 className='text-center text-sm'>{Randomfunction(songInfo.duration)}</h3>
       </div>
       <div className='flex w-[30%] items-center cursor-pointer text-3xl justify-between '>
            <AiFillStepBackward className=''/>
            { isplaying ? <FaPause onClick={PlayPausehandler} className='cursor-pointer'/>:<FaPlay onClick={PlayPausehandler} className='cursor-pointer'/>}
            <AiFillStepBackward className='rotate-180 cursor-pointer'/>
       </div>
    </div>
  )
}

export default Player