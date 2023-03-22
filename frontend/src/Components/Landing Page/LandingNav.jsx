import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  const menuItems = [
    { id: 1, label: 'TracePharm', link: 'https://www.tracepharm.com/' },
    { id: 2, label: 'Environmental Social Government(ESG)' },
    { id: 3, label: 'Serialization & Aggregation' },
  ];

  function toggleDropdown2() {
    setIsDropdownOpen2(!isDropdownOpen2);
  }
  const serviceItems = [
    { id: 1, label: 'Technical Services' },
    { id: 2, label: 'Business Services' },
    { id: 3, label: 'Others' },
  ];
  const TechnicalItems = [
    { id: 1, label: 'BlockChain/AI Technologies' },
    { id: 2, label: 'Prototyping' },
    { id: 3, label: 'POC' },
    { id: 4, label: 'Solution Design' },
  ];
  const BusinessItems = [
    { id: 1, label: 'Strategy' },
    { id: 2, label: 'Ideation' },
    { id: 3, label: 'Development' },
  ];
  const Company = [
    { id: 1, label: 'About Us' },
    { id: 2, label: 'Team' },
    { id: 3, label: 'Contact Us' },
  ];

  function toggleDropdown3() {
    setIsDropdownOpen3(!isDropdownOpen3);
  }


  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <div className="flex gap-4">
        <h2 className="font-bold text-2xl text-[white]">AIDIZITAL</h2>
       
      </div>
      
      <ul className="hidden md:flex text-white">
     
        <li className="p-4">Home</li>
        <li className="cursor-pointer  p-4" onClick={toggleDropdown} >Products 
        <div className={`absolute z-10  bg-gray-800 text-white rounded-lg shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
              {menuItems.map(item => (
                <a key={item.id} href={item.link} className="block px-4 py-4 hover:bg-white">{item.label}</a>
              ))}
            </div>
            
        </li>
        <li  className="cursor-pointer p-4" onClick={toggleDropdown2}>Services
        <div className={`absolute z-10 bg-gray-800 text-white rounded-lg shadow-lg ${isDropdownOpen2 ? 'block' : 'hidden'}`}>
              {serviceItems.map(item => (
                <a key={item.id} href={item.link} className="block px-4 py-2 hover:bg-white">{item.label}</a>
              ))}
            </div></li>
        
        <li className="cursor-pointer p-4" onClick={toggleDropdown3}>Company
        <div className={`absolute z-10 bg-gray-400 text-white rounded-lg shadow-lg ${isDropdownOpen3 ? 'block' : 'hidden'}`}>
              {Company.map(item => (
                <a key={item.id} href={item.link} className="block px-4 py-2 hover:bg-white">{item.label}</a>
              ))}
            </div>
            </li>
        <input className=" rounded-md text-center text-black h-8 p-5"
        placeholder="Search..."/>
      </ul>
     
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? " z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
 <div >
 <h2 className="font-bold text-2xl text-[white]">AIDIZITAL</h2>

      </div>       
       <li className="p-4 border-b border-gray-600">Home</li>
       <li className="cursor-pointer  p-4 border-b border-gray-600" onClick={toggleDropdown} >Products 
        <div className={`absolute z-10  bg-gray-800 text-white rounded-lg shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
              {menuItems.map(item => (
                <a key={item.id} href={item.link} className="block px-4 py-4 hover:bg-white">{item.label}</a>
              ))}
            </div>
            
        </li>       
         <li  className="cursor-pointer p-4 border-b border-gray-600" onClick={toggleDropdown2}>Services
        <div className={`absolute z-10 bg-gray-800 text-white rounded-lg shadow-lg ${isDropdownOpen2 ? 'block' : 'hidden'}`}>
              {serviceItems.map(item => (
                <a key={item.id} href={item.link} className="block px-4 py-2 hover:bg-white">{item.label}</a>
              ))}
            </div></li>    
            <li className="cursor-pointer p-4" onClick={toggleDropdown3}>Company
        <div className={`absolute z-10 bg-gray-400 text-white rounded-lg shadow-lg  ${isDropdownOpen3 ? 'block' : 'hidden'}`}>
              {Company.map(item => (
                <a key={item.id} href={item.link} className="block px-4 py-2 hover:bg-white">{item.label}</a>
              ))}
            </div>
            </li>       
      </ul>
    </div>

  );
};

export default Navbar;
