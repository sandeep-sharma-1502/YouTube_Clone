import React from 'react'
import Menubar from './Menubar'
import Maincontainer from "./Maincontainer"
import { useSelector } from 'react-redux'


const All = () => {

  const iss=useSelector(store=>store.btn.ismenu)

  return (
    <div className={iss&&'ml-[76px]'}>
        <Menubar/>
        <Maincontainer/>
    </div>
  )
}

export default All