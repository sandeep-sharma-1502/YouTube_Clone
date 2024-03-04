import React, { useEffect, useState } from 'react'
import { youtubeapi } from '../utils/constant'
import VideoCart from './VideoCart'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'


const Maincontainer = () => {
  // const dispatch=useDispatch()
  // function handle(){
  //   dispatch(setMenu())
  // }

    const [youtube,setyoutube]=useState([])
    useEffect(()=>{
        getdata()
    },[])

    async function getdata(){
        const data=await fetch(youtubeapi)
        const json=await data.json()
        setyoutube(json.items)
        
    }
console.log(youtube)

  return ((youtube.length==0) ||(youtube==undefined))?console.log("sandeep"): (
    <div className='px-[16px] pt-[24px] flex flex-wrap'>
        {youtube.map((e)=>(
          <Link to={"/watch?v="+e.id}>
        <VideoCart key={e.id} info={e}/>
        </Link>
        ))}
    </div>
  )
}

export default Maincontainer