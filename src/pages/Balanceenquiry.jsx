// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AccountCard = ({ type, balance, handleWithdrawal, handleExit }) => {
//   return (
//     <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">{type} Account</h2>
//       <p className="mb-2">Balance: ${balance}</p>
//       <div className="flex justify-center items-center">
//         <button className='p-3 rounded-full bg-rose-700 text-white px-5' onClick={handleWithdrawal}>Withdrawal</button>
//         <button className='p-3 rounded-full bg-rose-700 text-white ms-20 px-8' onClick={handleExit}>Exit</button>
//       </div>
//     </div>
//   );
// };

// const ATMInterface = () => {
//   // Assuming you have state for current balance and savings balance
//   const [currentBalance, setCurrentBalance] = useState(1000); // Replace this with your actual state value
//   const [savingsBalance, setSavingsBalance] = useState(5000); // Replace this with your actual state value

//   const navigate = useNavigate();

//   const handleCurrentWithdrawal = () => {
//     // Perform withdrawal logic for current account
//     // For demo purposes, let's navigate to '/verify' route
//     navigate('/verify');
//   };

//   const handleSavingsWithdrawal = () => {
//     // Perform withdrawal logic for savings account
//     // For demo purposes, let's navigate to '/verify' route
//     navigate('/verify');
//   };

//   const handleExit = () => {
//     // Perform exit logic here
//     // For demo purposes, let's navigate to '/' route
//     navigate('/');
//   };

//   return (
//     <div className="flex justify-around p-10">
//       {/* Current Account */}
//       <AccountCard
//         type="Current"
//         balance={currentBalance}
//         handleWithdrawal={handleCurrentWithdrawal}
//         handleExit={handleExit}
//       />
      
//       {/* Savings Account */}
//       <AccountCard
//         type="Savings"
//         balance={savingsBalance}
//         handleWithdrawal={handleSavingsWithdrawal}
//         handleExit={handleExit}
//       />
//     </div>
//   );
// };

// export default ATMInterface;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountCard = ({ type, balance, handleWithdrawal, handleExit }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{type} Account</h2>
      <p className="mb-2">Balance: ${balance}</p>
      <div className="flex justify-center items-center">
        {/* <button className='p-3 rounded-full bg-rose-700 text-white px-5' onClick={handleWithdrawal}>Withdrawal</button> */}
        <button className='p-3 rounded-lg bg-rose-700 text-white ms-20 px-8' onClick={handleExit}>Exit</button>
      </div>
    </div>
  );
};

const ATMInterface = () => {
  // Assuming you have state for current balance and savings balance
  const [currentBalance, setCurrentBalance] = useState(1000); // Replace this with your actual state value
  const [savingsBalance, setSavingsBalance] = useState(5000); // Replace this with your actual state value

  const navigate = useNavigate();

  // const handleCurrentWithdrawal = () => {
  //   // Perform withdrawal logic for current account
  //   // For demo purposes, let's navigate to '/verify' route
  //   navigate('/verify');
  // };

  // const handleSavingsWithdrawal = () => {
  //   // Perform withdrawal logic for savings account
  //   // For demo purposes, let's navigate to '/verify' route
  //   navigate('/verify');
  // };

  const handleExit = () => {
    // Perform exit logic here
    // For demo purposes, let's navigate to '/' route
    navigate('/');
  };

  return (
    <div className="flex justify-around p-10">
      {/* Current Account */}
      <AccountCard
        type="Current"
        balance={currentBalance}
        // handleWithdrawal={handleCurrentWithdrawal}
        handleExit={handleExit}
      />
      <div style={{ width: '50px' }} /> {/* Add space between account cards */}
      {/* Savings Account */}
      <AccountCard
        type="Savings"
        balance={savingsBalance}
        // handleWithdrawal={handleSavingsWithdrawal}
        handleExit={handleExit}
      />
    </div>
  );
};

export default ATMInterface;
