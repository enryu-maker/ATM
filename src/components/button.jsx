import React from "react";

const Button = ({ title, icon, img, exit, handleClick }) => {
  return (
    <>
      <div className="flex items-center justify-center ">
        {/* <button className=" inline-flex items-center justify-center w-[250px] px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500 ">
          icon title
        </button> */}
        <button onClick={handleClick} className={`inline-flex gap-4 outline-none items-center justify-center w-[250px] h-[60px] px-4 py-2 text-base font-bold  text-black  bg-white border border-white rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]  ${exit && 'text-red-700'}`}>
          {icon && icon}
          {img && <img src={img} className="w-[35px] h-[35px] " />}
           
           {title }
        </button>
      </div>
    </>
  );
};

export default Button;
