import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SideMenu from './SideMenu'



const Body = () => {

  const menu=useSelector(store=>store.btn.ismenu)

  return (
        (!(menu))?
          <div className='flex absolute top-[56px] z-0'>
          <Outlet/>
          </div>
          :
          <div className='flex absolute top-[56px] z-0'>
          <SideMenu/>
          <Outlet/>
          </div>
  )
}

export default Body