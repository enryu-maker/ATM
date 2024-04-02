import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountCard = ({ type, balance }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{type} Account</h2>
      <p className="mb-2">Balance: ₹{balance}</p>
    </div>
  );
};

const ATMInterface = () => {
  
  const savingsBalance = 5000; 

const navigate = useNavigate();

  const handleWithdrawal = () => {
    
    navigate('/verify');
  };

  const handleExit = () => {
    // Perform exit logic here
    // For demo purposes, let's navigate to '/menu' route
    navigate('/');
  };

  return (
    <>
    <div className='bg-gray-200 p-6 rounded-lg shadow-lg mt-40 py-7 px-10'>
      <div className="flex justify-around mt-5 px-10 py-3">
        {/* Savings Account */}
        <AccountCard
          type="Savings"
          balance={savingsBalance} // Replace with your savings account balance state
        />
      </div>
      <div className=" flex justify-center items-center ">
        <button className='p-3 rounded-full bg-rose-700 text-white px-5'onClick={handleWithdrawal}>Withdrawal</button>
        <button className='p-3 rounded-full bg-rose-700 text-white ms-20 px-8'onClick={handleExit} >Exit</button>

      </div>
      </div>
    </>
  );
};

export default ATMInterface;




