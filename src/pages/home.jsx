import React from 'react'
import Button from '../components/button';
import { Link } from 'react-router-dom';
import bg from '../assets/icon/bg.jpeg'

const Home = () => {
  return (

        <div className="flex items-end justify-around w-full h-full pb-32  " > 
        <img src={bg} className='absolute top-0 z-[-999] w-full h-full blur-md' />
        <Link to="/mobilenum"><Button img={'https://cdn-icons-png.flaticon.com/128/159/159478.png'} title='OTP'/></Link>
       <Link to="/bio"> <Button img={'https://cdn-icons-png.flaticon.com/128/3132/3132092.png'} title='Biomatric'/></Link>
        {/* <img src={require('../assets/icon/otp.png')}/> */}
        </div>
        
      )
}

export default Home;