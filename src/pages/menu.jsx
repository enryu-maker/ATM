import React from 'react'
import Button from '../components/button';
import { Link } from 'react-router-dom';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import withdraw from '../assets/icon/cash-withdrawal.png'

import bg from '../assets/icon/bg.jpeg'


const Menu = () => {
  return (
    <div className="flex gap-10 justify-around items-center  w-full h-full pt-24 px-16 ">
      <img src={bg} className='absolute top-0 z-[-999] w-full h-full blur-md' />
        <div className='flex flex-col gap-10'> 
        
        {/* <Button  img={withdraw} title='WITHDRAW'/> */}
        <Link to='/details'><Button exit img={withdraw} title='WITHDRAW'/></Link>
        
        <Link to='/'><Button exit img={''} icon={<ExitToAppIcon className='text-red-700'/>} title='EXIT'/></Link>
        </div>
        
    </div>
  )
}

export default Menu;