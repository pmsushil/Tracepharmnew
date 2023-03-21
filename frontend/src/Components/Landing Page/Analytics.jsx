import React from 'react';


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' /> */}
        <div className='flex flex-col justify-center'>
          <p className='text-[#e6743b] font-bold '>WEB 4.0 SOLUTION</p>
          <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>A Blockchain & AI -Powered Solution
For Real Time Visibility Into Your Entire Supply Chain</h1>
          <p className=' text-gray-400'>
            Unlock Market Intelligence using our technology platform. We process your underutilized internal and external data across your supply chains helping you with actionable insights for better business productivity, revenue optimization & compliance
          </p>
          <button className='bg-[#110a42] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;