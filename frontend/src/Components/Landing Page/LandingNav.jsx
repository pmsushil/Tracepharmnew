import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
          {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
          <h1 className="text-white font-semibold">AIDIZITAL</h1>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase text-white items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Home
            </Link>
          </li>
          
          <NavLinks />
          <li>
            <input className="  mr-4 rounded-md h-8 text-center text-black"
            placeholder="Search..."
            />
          </li>
        </ul>
        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden text-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li className="text-white">
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <input/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;