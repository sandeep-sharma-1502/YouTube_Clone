import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux' 
import { setMenu } from '../utils/menuSlice'
import { useSearchParams } from 'react-router-dom'
import LiveChat from './LiveChat'
import Comment2 from './Comment2'
import { gk } from '../utils/constant'
import { useState } from 'react'


const Watchvideo = () => {

  const dispatch=useDispatch()
  const[useparam]=useSearchParams()
  const [nes,setnew]=useState([])

  const [comment,setcomment]=useState([])

    useEffect(()=>{
        getdata()
    },[])

    async function getdata(){
        const data =await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="+useparam.get("v")+"&key="+gk)
        const json= await data.json()
        setcomment(json.items)
    }

  useEffect(()=>{
    dispatch(setMenu())

    return(
      ()=>(dispatch(setMenu()))
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
      <div className='mt-[30px]'>
          <span className='w-[50px h-[50px] ml-10 font-bold rounded-full text-lg'>COMMENTS</span>
          {comment.map((e)=><Comment2 key={e.id} comment={e}/>)}
      </div>
    </div>
  )
}

export default Watchvideo