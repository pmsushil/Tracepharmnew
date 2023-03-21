import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      <div className="flex flex-col w-full h-full bg-slate-500">
        <div className="flex w-full h-12 bg-white items-center gap-4 p-2">
          
           <div className='flex'>
                <h2 className="font-bold text-2xl text-[#f76c16]">Trace</h2>
                <h2 className="font-bold text-2xl text-[#002D74]">Pharm</h2>
           </div> 
          <Link to="/login">
            <button> SignIn</button>
          </Link>
        </div>
        <div className="flex flex-col w-full h-screen  bg-slate-500 items-center gap-4 ">
            <div className=" flex flex-col items-center py-16 gap-4">
            <h1 className=" font-mono text-4xl text-white"> Serverless SaaS Reference Architecture</h1>
            <h3 className=" font-mono text-2xl text-white"> It's so nice it blows your mind.</h3>
            <button className="bg-[#ee7518] w-28 h-8 rounded-xl text-white py- hover:scale-105 duration-300" >
            <Link to="/signup">
             <h5 className=" text-white">SignUp</h5>
          </Link>
          </button>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
