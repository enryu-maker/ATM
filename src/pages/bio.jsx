import React from 'react';
import scan from '../assets/icon/fingerprint-scan.gif';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Bio = () => {

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(-1)
  }

  return (
  <>
    <div className=" flex flex-col gap-4 items-center justify-center w-full h-full pt-40 bg-gradient-to-r from-red-700 to-red-500">
            <h3 className='text-2xl font-bold text-gray-100'> Please place your finger on Biometric Scanner</h3>
        <div className='  flex justify-center items-center flex-col gap-5 bg-white/20 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 w-[500px] '>
            <img src={scan} alt="" className='w-[200px] h-[200px]'/>
        </div>
        <Button  handleClick={handleClick} icon={<ArrowBackIcon/>} title='BACK TO MENU' />
    </div>
  </>
  )
}

export default Bio;