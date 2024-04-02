import React from 'react';
import { Link } from 'react-router-dom';

export default function Accounts() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 mt-20" style={{width:"70vw"}}>
      <div className="bg-white shadow-md rounded-lg p-8 w-full">
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className='text-left'>
                <th className="border-b border-gray-300 py-2 px-4">Bank Name</th>
                <th className="border-b border-gray-300 py-2 px-4">Account Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border-b border-gray-300 py-4 px-4">
                  <Link to="/infoBank" className="text-blue-600 hover:underline">State Bank of India</Link>
                </td>
                <td className="border-b border-gray-300 py-4 px-4">12345679000</td>
              </tr>
              <tr className="bg-white">
                <td className="border-b border-gray-300 py-4 px-4">
                  <Link to="/union" className="text-blue-600 hover:underline">Union Bank of India</Link>
                </td>
                <td className="border-b border-gray-300 py-4 px-4">834456016784</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-b border-gray-300 py-4 px-4">
                  <Link to="/maha" className="text-blue-600 hover:underline">Maharashtra Bank Of India</Link>
                </td>
                <td className="border-b border-gray-300 py-4 px-4">333965998007</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
