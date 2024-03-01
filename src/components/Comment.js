import React from 'react'
import sand from"../pages/pngegg.png"

const Comment = ({massage}) => {
  return (
    <div className='flex p-2'>
        <img className='pl-2 pr-1 w-10' src={sand}  alt='image'/>
        <span className='font-bold px-1'>{massage.name}</span>
        <span className='px-1'>{massage.massage}</span>
    </div>
  )
}

export default Comment