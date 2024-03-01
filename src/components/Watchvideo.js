import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux' 
import { issl, isslid } from '../utils/menuSlice'
import { useSearchParams } from 'react-router-dom'
import LiveChat from './LiveChat'


const Watchvideo = () => {

  const dispatch=useDispatch()
  const[useparam]=useSearchParams()


  useEffect(()=>{
    
    dispatch(isslid())
    
    return(
      ()=>dispatch(issl())
    )
    
  },[dispatch])



  return (
    <div className='ml-[25px] m-[5px] w-[100%]'>
      <div className='flex justify-between'>
      <iframe
      className='rounded-xl'
        width="900"
        height="450" 
        src={"https://www.youtube.com/embed/"+useparam.get("v")}
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowBullScreen>
      </iframe>
        <LiveChat/>
      </div>
    </div>
  )
}

export default Watchvideo