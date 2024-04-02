// import React, { useState } from 'react';

// const MiniStatement = () => {
  
//   const [transactions, setTransactions] = useState([
//     { id: 1, date: '2024-03-20', description: 'Withdrawal', amount: -500 },
//     { id: 2, date: '2024-03-18', description: 'Deposit', amount: 1000 },
//     { id: 3, date: '2024-03-15', description: 'Withdrawal', amount: -200 },
   
//   ]);

//   return (
//     <div>
//       <h2>Mini Statement</h2>
//       <table className=' w-60 border border-black divide-black  justify-center item-center'>
//         <thead className='m-5 p-5'>
//           <tr className='m-5 p-5'>
//             <th>Date</th>
//             <th>Description</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody className='m-5 p-5'>
//           {transactions.map(transaction => (
//             <tr className='m-5 p-5' key={transaction.id}>
//               <td>{transaction.date}</td>
//               <td>{transaction.description}</td>
//               <td>{transaction.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MiniStatement;



import React, { useState } from 'react';

const MiniStatement = () => {
  
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-03-20', description: 'Deposit', amount: 500 },
    { id: 2, date: '2024-03-18', description: 'Deposit', amount: 1000 },
    { id: 3, date: '2024-03-15', description: 'Withdrawal', amount: -200 },
    { id: 3, date: '2024-03-12', description: 'Withdrawal', amount: -200 },
    { id: 3, date: '2024-03-10', description: 'Withdrawal', amount: -200 },
  ]);

  return (
    <div className="w-90 h-full mt-80 mx-auto fixed">
        <div className='mt-10'></div>
      <h2 className="text-center font-bold text-xl text-rose-700">Mini Statement</h2>
      <table className='w-full border border-black divide-black mx-auto'>
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Date</th>
            <th className="border border-black px-4 py-2">Description</th>
            <th className="border border-black px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
              <td className="border border-black px-4 py-2">{transaction.date}</td>
              <td className="border border-black px-4 py-2">{transaction.description}</td>
              <td className="border border-black px-4 py-2">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiniStatement;
