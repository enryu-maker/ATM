
import React, { useState, useEffect } from 'react';
import scan from '../assets/icon/fingerprint-scan.gif';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import axios from 'axios';
import { CaptureFinger, MatchFinger } from '../pages/mfs100-9.0.2.6';

const Bio = () => {
  const [fingerimage, setfingerimage] = useState("");
  const [fingerkey, setfingerkey] = useState("");
  const [matchStatus, setMatchStatus] = useState(false);

  const CaptureFingerhere = async () => {
    try {
      const FingerData = new CaptureFinger();
      const capturedBitmapData = FingerData.data.BitmapData;

      setfingerimage(capturedBitmapData);
      setfingerkey(FingerData.data.AnsiTemplate);

      await saveFingerprintDataToServer({
        userId: 'user123', // Replace with the actual user ID
        bitmapData: capturedBitmapData,
        ansiTemplate: FingerData.data.AnsiTemplate,
      });

      console.log("Finger_Data", FingerData);
    } catch (error) {
      console.error('Error capturing fingerprint data:', error);
    }
  };

  const matchFingerhere = async () => {
    try {
      if (fingerkey !== "") {
        const MatchData = new MatchFinger(80, 5000, fingerkey, "");
        console.log("Matching Data: ", MatchData);

        if (MatchData.data?.Status) {
          setMatchStatus(true);
          alert("Match successfully");

          
          navigate('/menu');
        } else {
          alert("Fingerprint matching failed. Please try again.");
        }
      } else {
        alert("Please capture finger first to compare.");
      }
    } catch (error) {
      console.error('Error matching fingerprint data:', error);
    }
  };

  const saveFingerprintDataToServer = async (fingerprintData) => {
    try {
      await axios.post('http://localhost:3001/biometric/storeFingerprint', fingerprintData);
      console.log('Fingerprint data stored successfully.');
    } catch (error) {
      console.error('Error sending fingerprint data to the server:', error);
    }
  };

  useEffect(() => {
    // You can add any additional logic or side effects here
  }, [fingerkey, fingerimage, matchStatus]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full pt-40 bg-gradient-to-r from-red-700 to-red-500">
        <h3 className='text-2xl font-bold text-gray-100'> Please place your finger on Biometric Scanner</h3>
        <div className='flex justify-center items-center flex-col gap-5 bg-white/20 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 w-[500px]'>
          {fingerimage ? (
            <div>
              <img src={`data:image/png;base64,${fingerimage}`} className='h-20 w-20' alt="" />
              <div>
                {matchStatus ? "Match Successfully" : "Processing"}
              </div>
            </div>
          ) : (
            <img src={scan} alt="" className='w-[200px] h-[200px]' onClick={() => CaptureFingerhere()} />
          )}
          <div>
            <button
              onClick={() => CaptureFingerhere()}
              className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
            >
              Capture Finger
            </button>

            <button
              onClick={() => matchFingerhere()}
              className="ml-4 py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
            >
              Match Finger
            </button>
          </div>
        </div>
        <Button handleClick={handleClick} icon={<ArrowBackIcon />} title='BACK TO MENU' />
      </div>
    </>
  );
};

export default Bio;

