import React from 'react'
import logo from '../assets/icon/lcf_logo.png'

const Header = () => {
  return (
    <div className='fixed top-0 font-extrabold text-2xl text-white flex flex-col justify-center items-center'>
        <img src={logo} alt="" style={{filter: 'drop-shadow(0 0 0.75rem #b30506)' ,width:325, height:150  }}/>
        Laxmi Cheat Fund {'(Bank)'}</div>
  )
}

export default Header;