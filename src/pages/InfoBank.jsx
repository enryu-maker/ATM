


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BankDetails = () => {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/user/getuser');
//         setUserData(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchUserData();

//     // Cleanup function to cancel any ongoing requests if the component unmounts
//     return () => {
//       // Cancel the request if the component unmounts before the request completes
//     };
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="flex items-center justify-center h-screen mt-40">
//       <div className="bg-transparent rounded-lg shadow-md p-6 max-w-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Bank Account Details</h2>
//         {userData ? (
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-bold mb-1">Name:</label>
//               <p className="text-gray-900">{userData.Name}</p>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-bold mb-1">Mobile Number:</label>
//               <p className="text-gray-900">{userData.mobileNo}</p>
//             </div>
//             {userData.BankAccount && userData.BankAccount.length > 0 ? (
//               <>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">Bank Name:</label>
//                   <p className="text-gray-900">{userData.BankAccount[0].BankName}</p>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">Account Number:</label>
//                   <p className="text-gray-900">{userData.BankAccount[0].AccNo}</p>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">IFSC Code:</label>
//                   <p className="text-gray-900">{userData.BankAccount[0].IFSC}</p>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">Balance:</label>
//                   <p className="text-green-700 font-semibold">{userData.BankAccount[0].Balance}</p>
//                 </div>
//               </>
//             ) : (
//               <p>No bank account data available.</p>
//             )}
//           </div>
//         ) : (
//           <p>Loading bank details...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BankDetails;




// import React, { useState, useEffect } from 'react';

// const BankDetails = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Simulate fetching data from the backend
//     const fetchData = () => {
//       // Simulate a delay to mimic network latency
//       setTimeout(() => {
//         const dummyData = {
//           _id: '66010a4c80e6ce90314d83bd',
//         //   Name: 'SUJIT wagh',
//         //   mobileNo: '8605209381',
//           BankAccount: [
//             {
//               BankName: 'HDFC Bank',
//               AccNo: '834016784',
//               IFSC: 'EXMP1234567',
//               Balance: " ₹ 5000"
//             }
//           ]
//         };

//         setUserData(dummyData);
//         setLoading(false);
//       }, 1000); // Adjust delay as needed
//     };

//     fetchData();

//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="fixed flex items-center justify-center h-screen mt-40">
//       <div className="bg-transparent rounded-lg shadow-md p-6 max-w-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Bank Details</h2>
//         {userData ? (
//           <div className="grid grid-cols-2 gap-4">
//             {/* <div>
//               <label className="block text-gray-700 font-bold mb-1">Name:</label>
//               <p className="text-gray-900">{userData.Name}</p>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-bold mb-1">Mobile Number:</label>
//               <p className="text-gray-900">{userData.mobileNo}</p>
//             </div> */}
//             {userData.BankAccount && userData.BankAccount.length > 0 ? (
//               <>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">Bank Name:</label>
//                   <p className="text-gray-900">{userData.BankAccount[0].BankName}</p>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">Account Number:</label>
//                   <p className="text-gray-900">{userData.BankAccount[0].AccNo}</p>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">IFSC Code:</label>
//                   <p className="text-gray-900">{userData.BankAccount[0].IFSC}</p>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-bold mb-1">Balance:</label>
//                   <p className="text-green-700 font-semibold">{userData.BankAccount[0].Balance}</p>
//                 </div>
//                 <button>Continue</button>
//               </>
//             ) : (
//               <p>No bank account data available.</p>
//             )}
//           </div>
//         ) : (
//           <p>No data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BankDetails;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BankDetails = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Access navigate function

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchData = () => {
      // Simulate a delay to mimic network latency
      setTimeout(() => {
        const dummyData = {
          _id: '66010a4c80e6ce90314d83bd',
          BankAccount: [
            {
              BankName: 'SBI Bank',
              AccNo: '834016784',
              IFSC: 'SBI1234567',
              Balance: " ₹****"
            }
          ]
        };

        setUserData(dummyData);
        setLoading(false);
      }, 1000); // Adjust delay as needed
    };

    fetchData();

  }, []);

  const handleContinue = () => {
    // Navigate to the desired path when Continue button is clicked
    navigate('/menu'); // Replace '/menu' with your desired path
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="fixed flex items-center justify-center h-screen mt-40">
      <div className="bg-transparent rounded-lg shadow-md p-6 max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Bank Details</h2>
        {userData ? (
          <div className="grid grid-cols-2 gap-4">
            {userData.BankAccount && userData.BankAccount.length > 0 ? (
              <>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">Bank Name:</label>
                  <p className="text-gray-900">{userData.BankAccount[0].BankName}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">Account Number:</label>
                  <p className="text-gray-900">{userData.BankAccount[0].AccNo}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">IFSC Code:</label>
                  <p className="text-gray-900">{userData.BankAccount[0].IFSC}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">Balance:</label>
                  <p className="text-green-700 font-semibold">{userData.BankAccount[0].Balance}</p>
                </div>
              <button onClick={handleContinue} className='bg-rose-700 p-3 text-white'>Continue</button>
              </>
            ) : (
              <p>No bank account data available.</p>
            )}
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default BankDetails;
