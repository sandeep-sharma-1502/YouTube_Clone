import React from 'react'
import SideMenu from './SideMenu'
import SideMenu2 from './SideMenu2'
import {useSelector } from 'react-redux'

const Side = () => {
  const isitem=useSelector((store=>store.btn.ismenu))

  return (!isitem)?<SideMenu2/>:(<SideMenu/>)
}

export default Side