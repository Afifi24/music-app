import React, { useState,useRef } from 'react'
import Player from './components/Player'
import Songs from './components/Songs'
import Library from './components/Library'
import data from './util'
const App = () => {
  const [songs,setSongs] = useState(data())
  const [currentSong,setcurrentSong] = useState(songs[0])
  const [isplaying,setIsplaying] = useState(false)
  const [timeInput,setTimeInput] = useState()
  const [songInfo,setSongInfo] = useState({
      currentTime : 0,
      duration : 0,
  })
  const audioRef = useRef()
  const TimeUpdate = (e)=>{
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo,currentTime:current,duration:duration})
    }
    const Randomfunction = (time)=>{
        return(
          Math.floor(time/60) +  ':' + ('0' + Math.floor(time%60)).slice(-2)
        )
    }
    const UpdateTimeOfInput = (e)=>{
      audioRef.current.currentTime = e.target.value
      setSongInfo({...songInfo,currentTime:e.target.value})
    }
    const SelectAudio = (item)=>{
      setcurrentSong(item)
      if(isplaying){
       const playpromsie = audioRef.current.play()
       if(playpromsie !== undefined){
        playpromsie.then((audio)=>{
          audioRef.current.play()
        })
       }
      }
    }
  return (
    <div>
      <Songs currentSong={currentSong} />
      <Player UpdateTimeOfInput={UpdateTimeOfInput} setTimeInput={setTimeInput} timeInput={timeInput} Randomfunction={Randomfunction} songInfo={songInfo} setIsplaying={setIsplaying} isplaying={isplaying} audioRef={audioRef} />
      <audio onTimeUpdate={TimeUpdate} onLoadedMetadata={TimeUpdate} ref={audioRef} src={currentSong.audio}></audio>
      <Library SelectAudio={SelectAudio} songs={songs}/>
    </div>
  )
}

export default App