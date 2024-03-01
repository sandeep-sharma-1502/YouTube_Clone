import React from 'react'
import Side from './Side'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Body = () => {

  const issilde=useSelector(store=>store.btn.ismenu)
  // console.log(issilde)

  return (
        (!(issilde))?
          <div className='flex absolute top-[56px] z-0'>
          <Outlet/>
          </div>
          :
          <div className='flex absolute top-[56px] z-0'>
          <Side/>
          <Outlet/>
          </div>
  )
}

export default Body