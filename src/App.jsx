import React, { useState,useRef,useEffect } from 'react'
import Player from './components/Player'
import Songs from './components/Songs'
import Library from './components/Library'
import data from './util'
import Nav from './components/Nav'
const App = () => {
  const [songs,setSongs] = useState(data())
  const [index,setIndex] = useState(0)
  const [currentSong,setcurrentSong] = useState(songs[index])
  const [isplaying,setIsplaying] = useState(false)
  const [timeInput,setTimeInput] = useState()
  const [toggle,setToggle] = useState(true)
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
    const Next = ()=>{
         setIndex(index + 1)
         setcurrentSong(songs[index % songs.length])
        //  if(index >= songs.length-1){
        //    setIndex(0)
        //  }
      if(isplaying){
        const playpromsie = audioRef.current.play()
        if(playpromsie !== undefined){
         playpromsie.then((audio)=>{
           audioRef.current.play()
         })
        }
       }
    }
    const Back = ()=>{
         setIndex(index - 1)
         setcurrentSong(songs[index])
         if(index<=0){
         setIndex(songs.length-1)
         }
         if(isplaying){
          const playpromsie = audioRef.current.play()
          if(playpromsie !== undefined){
           playpromsie.then((audio)=>{
             audioRef.current.play()
           })
          }
         }
    }
    useEffect(()=>{
      const newsSong = songs.map((song)=>{
        if( song.id === currentSong.id){
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
       setSongs(newsSong)

    },[currentSong])
    
  return (
    <div>
      <Songs currentSong={currentSong} />
      <Player Back={Back} Next={Next} UpdateTimeOfInput={UpdateTimeOfInput} setTimeInput={setTimeInput} timeInput={timeInput} Randomfunction={Randomfunction} songInfo={songInfo} setIsplaying={setIsplaying} isplaying={isplaying} audioRef={audioRef} />
      <audio onTimeUpdate={TimeUpdate} onLoadedMetadata={TimeUpdate} ref={audioRef} src={currentSong.audio}></audio>
      <Library toggle={toggle} setSongs={setSongs} SelectAudio={SelectAudio} songs={songs}/>
      <Nav toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default App