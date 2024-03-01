import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Userheader from './Userheader'

const Header = () => {
  return (
    <div className=' w-[1317px] h-[56px] flex justify-between items-center mx-[16px] fixed z-10 bg-white shadow-md'>
        <Logo/>
        <Search/>
        <Userheader/>
    </div>
  )
}

export default Header