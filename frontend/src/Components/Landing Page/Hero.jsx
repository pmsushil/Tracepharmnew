import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white bg-gray-800'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#e6743b] font-bold p-2'>
        A Market Intelligence Platform
        </p>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
        For Your Complex Supply Chains
        </h1>
        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible  
          </p>
          
        </div> */}
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Track & Trace your Orders by using this Application.</p>
        <Link to='signup'><button className='bg-[#2918ac] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button></Link>
      </div>
    </div>
  );
};

export default Hero;