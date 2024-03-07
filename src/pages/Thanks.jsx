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
    navigate("/mobilenum");
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
    

    <h1 style={{fontSize:'20px' , fontWeight:'800'}}>Thank You for Choosing Laxmi Cheat Fund</h1>
  );
};

export default UserDetails;
