import React from 'react'
import logo from '../assets/icon/lcf_logo.png'

const Header = () => {
  return (
    <div className='fixed top-0 font-extrabold text-2xl text-white flex flex-col justify-center items-center'>
        <img src={logo} alt="" style={{filter: 'drop-shadow(0 0 0.75rem #bae6ff)' ,width:325, height:150  }}/>
        <h2 className='text-black'>Laxmi Cheat Fund {'(Bank)'}</h2>
        
        </div>
  )
}

export default Header;