


// Verify.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
  const [open, setOpen] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      if (!mobileNo || !amount || !accountNumber) {
        alert('Please fill in all the fields');
        return;
      }
  
      const response = await axios.post("http://localhost:3000/withdraw/withdrawSend", {
        mobileNo: mobileNo,
        amount: amount,
        accountNumber: accountNumber
      });
  
      console.log('Send OTP Response:', response);
  
      if (response.data.message === 'OTP sent successfully') {
        alert('OTP sent successfully');
        setOpen(true);
      } else {
        alert('Failed to send OTP');
        console.error('Failed to send OTP:', response.data.message);
      }
    } catch (error) {
      alert("Error sending OTP");
      console.error('Error sending OTP:', error);
    }
  };
  
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const enteredOtp = otpCode.join('');

      const response = await axios.post("http://localhost:3000/withdraw/withdrawVerify", {
        mobileNo: mobileNo,
        amount: amount,
        accountNumber: accountNumber,
        otpCode: enteredOtp,
      });

      console.log('Verification Response:', response);

      if (response.data.message.startsWith('OTP verified successfully')) {
        alert('OTP verified successfully');
        navigate("/thank");
      } else {
        alert('Failed to verify OTP. Please try again.');
        console.error('Failed to verify OTP:', response.data.message);
      }
    } catch (error) {
      alert("Error verifying OTP.");
      console.error('Error in verify:', error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/otp/resend", {
        mobileNo: mobileNo,
      });

      if (response.data.message === 'OTP sent successfully') {
        alert('OTP resent successfully');
      } else {
        alert('Failed to resend OTP');
        console.error('Failed to resend OTP:', response.data.message);
      }
    } catch (error) {
      alert("Error resending OTP");
      console.error('Error in resend:', error);
    }
  };

  const OTP = () => {
    return (
      <div className="absolute inset-0 flex min-h-screen flex-col justify-center overflow-hidden bg-[rgba(0,0,0,0.3)] py-12">
        <div className="relative inset-0 flex justify-center items-center bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full h-fit max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Mobile Number Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your mobile number <span className='text-blue-600 text-xl'>********72</span></p>
              </div>
            </div>

            <form onSubmit={handleVerify} className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                {otpCode.map((digit, index) => (
                  <div key={index} className="w-16 h-16">
                    <input
                      style={{ border: '2px solid grey' }}
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-500"
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => {
                        const newOtp = [...otpCode];
                        newOtp[index] = e.target.value;
                        setOtpCode(newOtp);
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <button
                    type="submit"
                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-red-500 hover:bg-red-700 border-none text-white text-sm shadow-sm"
                  >
                    Verify Mobile Number
                  </button>
                </div>

                <div onClick={() => setOpen(false)} className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't receive code?</p>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="flex flex-row items-center text-blue-600"
                  >
                    Resend
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex items-end justify-around w-full h-full pb-32 bg-gradient-to-r from-red-700 to-red-500">
        <form onSubmit={handleSendOtp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-4">
              Account Number
            </label>
            <input
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              maxLength={10}
              placeholder=" Enter Account Number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-4">
              Mobile Number
            </label>
            <input
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              maxLength={10}
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-4">
              Amount
            </label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              maxLength={10}
              placeholder="Enter Amount"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>

      {open && (
        <OTP />
      )}
    </>
  );
};

export default Verify;
