



import React from 'react';
import { Link } from 'react-router-dom'; 
import bg from '../assets/icon/bg.jpeg';
import { Bank } from '../assets/data';

const Accounts = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center w-full h-full pt-40 ">
        <img src={bg} className='absolute top-0 z-[-999] w-full h-full blur-md' />
        <div className='  flex justify-between items-center gap-5 bg-indigo-600 shadow-md rounded-2xl px-8 py-5 w-[1000px] '>
          <div className='w-[50%]'>
            <h3 className='font-bold text-white text-xl'>Bank Name</h3>
          </div>
          <div className='w-[50%] flex items-start'>
            <h3 className='font-bold text-white text-xl'>Account No.</h3>
          </div>
        </div>
        {
          Bank.map((item, id) => (
            <div key={id} className='  flex justify-between items-center gap-5 bg-white shadow-md rounded-2xl px-8 py-5 w-[1000px] '>
              <div className='w-[50%]'>
                
                <Link to="/menu">
                  <h3 className='font-semibold text-black text-md'>{item.bankname}</h3>
                </Link>
              </div>
              <div className='w-[50%] flex items-start'>
                
                <Link to="/menu">
                  <h3 className='font-semibold text-black text-md'>{item.accno}</h3>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Accounts;
