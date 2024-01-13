import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Verify = ()=>{

  const [open,setOpen]=useState(false)
  const navigate = useNavigate()

  const handleVerify = () => {
    alert ("Mobile number verfied succesful");
    navigate("/thank")

  }
  const OTP = () => {


    return (
      // <div>OTP</div>
  
      <div class="absolute inset-0 flex min-h-screen flex-col justify-center overflow-hidden bg-[rgba(0,0,0,0.3)] py-12">
    <div class="realtive inset-0 flex  justify-center items-center bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full h-fit max-w-lg rounded-2xl">
      <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
        <div class="flex flex-col items-center justify-center text-center space-y-2">
          <div class="font-semibold text-3xl">
            <p>Mobile Number Verification</p>
          </div>
          <div class="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your mobile number <p className='text-blue-600 text-xl' >********72</p></p>
          </div>
        </div>
  
        <div>
          <form action="" method="post">
            <div class="flex flex-col space-y-16">
              <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-500" type="text"  maxlength="1" name="" id=""/>
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-500" type="text"  maxlength="1" name="" id="" />
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-500" type="text"  maxlength="1" name="" id="" />
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-500" type="text"  maxlength="1" name="" id="" />
                </div>
              </div>
  
              <div class="flex flex-col space-y-5">
                <div>
                  <button onClick={handleVerify} class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-red-500 hover:bg-red-700 border-none text-white text-sm shadow-sm">
                    Verify Mobile Number
                  </button>
                </div>
  
                <div onClick={() => setOpen(false)} class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-blue-600" onClick={() => setOpen(false)} target="_blank" rel="noopener noreferrer">Resend</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
    return(
        <>
        <div class=" flex items-end justify-around w-full h-full pb-32 bg-gradient-to-r from-red-700 to-red-500">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]">
    <div class="mb-4">
      <label class="block text-gray-700 text-lg font-bold mb-4">
        Mobile Number
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" maxLength={10} placeholder="Enter Mobile Number"/>
    </div>
   
    <div class="flex items-center justify-between">
      <button onClick={()=> setOpen(true)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send OTP
      </button>
      
    </div>
  </form>
  
</div>

{
      open ? <>
      <OTP open={open} setOpen={setOpen}/>
      </>:null
    }
        </>
    )
}
export default Verify;