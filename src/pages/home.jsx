import React from 'react'
import Button from '../components/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

        <div className="flex items-end justify-around w-full h-full pb-32 bg-gradient-to-r from-red-700 to-red-500
        // bg-[#b41c19]
        " > 
        
        <Link to="/mobilenum"><Button img={'https://cdn-icons-png.flaticon.com/128/159/159478.png'} title='OTP'/></Link>
        <Button img={'https://cdn-icons-png.flaticon.com/128/3132/3132092.png'} title='Biomatric'/>
        {/* <img src={require('../assets/icon/otp.png')}/> */}
        </div>
        
      )
}

export default Home;