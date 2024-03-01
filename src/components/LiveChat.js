import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { useDispatch, useSelector } from 'react-redux'
import { addmassage } from '../utils/chatSlice'
import { generate,makeid } from '../utils/constant'

const LiveChat = () => {
    
    const massage=useSelector(store=>store.chat.array)
    const dispatch=useDispatch()

    const [mass,setmass]=useState("")

    useEffect(()=>{
        const i= setInterval(()=>{
            dispatch(addmassage({
                name:generate(),
                massage:makeid(10)
            }))
        },1000)

        return (
            ()=>clearInterval(i)
        )
    },[])


  return (
    <div>
    <div className=' rounded-lg border-[1px] border-black w-[380px] h-[400px] ml-4 overflow-scroll flex flex-col-reverse'>
        {
            massage.map((e,i)=>(<Comment key={i} massage={e}/>))
        }
    </div>
        <form className=' p-1 w-[380px] mt-1 ml-4 rounded-md'>
            <input className='border-[1px] border-black w-3/4 rounded-md p-1'
             type="text" placeholder='massage'
             onChange={(e)=>setmass(e.target.value)}
             value={mass}
             />
            <button className=' border-[1px] border-gray-500 rounded-md w-1/4 p-1' onClick={(e)=>{
                e.preventDefault()
                dispatch(addmassage({
                    name:"Sandeep Sharma",
                    massage:mass
                }))
                setmass("")
            }}>Send Chat</button>
        </form>
    </div>
  )
}

export default LiveChat