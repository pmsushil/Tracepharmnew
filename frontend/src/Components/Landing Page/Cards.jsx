import React from 'react';
// import Single from '../assets/single.png'
// import Double from '../assets/double.png'
// import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[4rem] px-4 bg-white'>
        <div></div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-800 hover:text-white'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8 '>Basic Tier</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-1'> Only Mobile APP Access No Web Access</p>
                  <p className='py-2 border-b mx-8'>On-Board Only 1 Company </p>
                  <p className='py-2 border-b mx-8'>Serialization for 100k Units Service</p>
                  <p className='py-2 border-b mx-8 '>Aggregration for 10k Batches</p>
                  <p className='py-2 border-b mx-8 '>Track & Trace Services</p>
                  <p className='py-2 text-center text-3xl font-bold mt-3 text-blue-500'>£1500 <small className='text-xl'>/ Year</small></p>

              </div>
              <button className='bg-[#2918ac] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Know More</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-800 hover:text-white'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Standard Tier</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-1'>Web & Mobile APP Access</p>
                  <p className='py-2 border-b mx-8'>On-Board Upto 10 Companies </p>
                  <p className='py-2 border-b mx-8'>Serialization for 200k Units Service</p>
                  <p className='py-2 border-b mx-8 '>Aggregration for 20k Batches</p>
                  <p className='py-2 border-b mx-8 '>Track & Trace Services</p>
                  <p className='py-2 text-center text-3xl font-bold mt-3 text-blue-500'>£2500 <small className='text-xl'>/ Year</small></p>

              </div>
              <button className='bg-[#2918ac]  text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Know More</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-800 hover:text-white'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Premium Tier</h2>
              
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>Web & Mobile APP Access</p>
                  <p className='py-2 border-b mx-8'>On-Board Upto 50 Companies </p>
                  <p className='py-2 border-b mx-8'>Serialization for 1M Units Service</p>
                  <p className='py-2 border-b mx-8 '>Aggregration for 100k Batches</p>
                  <p className='py-2 border-b mx-8 '>Track & Trace Services</p>
                  <p className='py-2 text-center text-3xl font-bold mt-3 text-blue-500'>£3500 <small className='text-xl'>/ Year</small></p>

              </div>
              <button className='bg-[#2918ac] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Know More</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-800 hover:text-white'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
              <h2 className='text-2xl font-bold text-center py-8'>Platinum User</h2>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-1'>Web & Mobile APP Access</p>
                  <p className='py-2 border-b mx-8'>Unlimited On-Board Services </p>
                  <p className='py-2 border-b mx-8'>Unlimited Serialization Services</p>
                  <p className='py-2 border-b mx-8 '>Unlimited Aggregration Services</p>
                  <p className='py-2 border-b mx-8 '>Track & Trace Services</p>
                  <p className='py-2 text-center text-3xl font-bold mt-3 text-blue-500'>£4500 <small className='text-xl'>/ Year</small></p>

              </div>
              <button className='bg-[#2918ac] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Know More</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;