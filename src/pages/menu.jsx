import React from 'react'
import Button from '../components/button';
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import transfer from '../assets/icon/bank-transfer.png'
import diposit from '../assets/icon/piggy-bank.png'
import withdraw from '../assets/icon/cash-withdrawal.png'
import wallet from '../assets/icon/wallet.png'
import bg from '../assets/icon/bg.jpeg'


const Menu = () => {
  return (
    <div className="flex gap-10 justify-around items-center  w-full h-full pt-24 px-16 ">
      <img src={bg} className='absolute top-0 z-[-999] w-full h-full blur-md' />
        <div className='flex flex-col gap-10'> 
        <Button img={withdraw} title='WITHDRAW'/>
        <Button img={transfer} title='TRANSFER'/>
        <Link to='/'><Button exit img={''} icon={<ExitToAppIcon className='text-red-700'/>} title='EXIT'/></Link>
        </div>
        <div className='flex flex-col gap-10'>
        <Button img={diposit} title='DIPOSIT'/>
        <Button img={wallet}  title='BALANCE ENQUIRY'/>
        <Button img={''} title='CHNAGE PIN'/>
        </div>
        
    </div>
  )
}

export default Menu;