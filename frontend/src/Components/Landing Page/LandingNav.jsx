import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };
  
  

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <div className="flex">
        <h2 className="font-bold text-2xl text-[#f76c16]">Trace</h2>
        <h2 className="font-bold text-2xl text-[#d1d1d3]">Pharm</h2>
      </div>
      <ul className="hidden md:flex text-white">
        <li className="p-4">Home</li>
        <li className="p-4" >Company </li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4"><Link to="/login">SignIn</Link></li>

      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
 <div className="flex">
        <h2 className="font-bold text-2xl text-[#f76c16]">Trace</h2>
        <h2 className="font-bold text-2xl text-white">Pharm</h2>
      </div>       
       <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4"><Link to="/login">SignIn</Link></li>
      </ul>
    </div>

  );
};

export default Navbar;
