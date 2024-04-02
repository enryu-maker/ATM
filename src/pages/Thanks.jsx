import React, { useState } from 'react';
import './BankDetails.css';
import bg from '../assets/icon/thanks.jpg'
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

  const img ={
    backgroundImage: `url(${bg})`,
    backgroundSize:"cover",
  }

  return (
    <div style={{...img,height:"100vh",width:"100vw"}}>

    <h1 style={{fontSize:'20px' , color:"white", fontWeight:'800',paddingTop:"50vh"}} className='flex justify-center '>Thank You for Choosing Laxmi Cheat Fund</h1>
    </div>
  );
};

export default UserDetails;
