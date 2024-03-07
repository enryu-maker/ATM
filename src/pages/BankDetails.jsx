import React, { useState } from 'react';
import './BankDetails.css';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    mobileNumber: '',
    accountNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    navigate("/verify");
    console.log('User data:', userData);
  };

  const userDetailsStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
  };

  const buttonStyle = {
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div className="main">
      <div style={userDetailsStyle}>
        <h2 style={headingStyle}>User Details</h2>
        <div className='inputes'>
          <label>
            <strong>Account Number:</strong> &nbsp;&nbsp;
            <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
          </label>
        </div>
        <div className='inputes'>
          <label>
            <strong>Mobile Number:</strong>&nbsp;
            <input type="text" name="mobileNumber" value={userData.mobileNumber} onChange={handleInputChange} />
          </label>
        </div>
        <div className='inputes'>
          <label>
            <strong>Withdraw Amount:</strong> &nbsp;&nbsp;
            <input type="text" name="accountNumber" value={userData.accountNumber} onChange={handleInputChange} />
          </label>
        </div>
      </div>
      <button className='nextbtn' style={buttonStyle} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default UserDetails;
