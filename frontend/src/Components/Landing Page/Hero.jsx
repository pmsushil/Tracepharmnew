import React from 'react';
import { Link } from 'react-router-dom';
import {Carousel} from "antd"

const Hero = () => {

  
  return (
    <div className='text-white bg-gray-800' >
      <div className='max-w-[800px] mt-[-96px] w-full h-screen  mx-auto text-center flex flex-col justify-center'>
        <Carousel autoplay  >
        <div>
          <h1 className='text-[white] font-bold p-2 md:text-3xl sm:text-2xl text-xl'>
        AIDIZITAL
        </h1>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold md:py-6 text-[#e6743b]'>
        We are Helping startups, SME's to change how the world lives and works. We are helping apply deep technology to drive your transformation into the future
        </p>
        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible  
          </p>
          
        </div> */}
        <p className='md:text-2xl text-xl font-bold text-gray-500'>We help you in creating a powerful architectural technology with the potential to impact enterprise and B2B ecosystems as much as the internet and cloud.</p>
        <Link to='signup'><button className='bg-[#2918ac] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button></Link>
     
          </div>
          <div>
          <div className="flex  justify-center">
        <h1 className="font-bold  p-2 md:text-3xl sm:text-2xl text-xl text-[#f76c16]">Trace<span className='text-white'>Pharm</span></h1>
        
      </div>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold md:py-6 text-[white]'>
        Supply chain traceability & digital identity for your products into last mile of delivery with Supply Chain traceability & digital identity of your products from supplier to consumer
        </p>
        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible  
          </p>
          
        </div> */}
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Our supply chain tracking platform allows companies and organizations to track products from source to consumer.</p>
        <Link to='signup'><button className='bg-[#2918ac] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button></Link>
     
          </div>
          <div>
          <h1 className='font-bold  p-2 md:text-3xl sm:text-2xl text-xl text-[#f76c16]'>
          Environmental, Social, and Governance(ESG)
        </h1>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold md:py-6 text-[white]'>
        ESG is a framework that helps stakeholders understand how an organization is managing risks and opportunities related to environmental, social, and governance criteria.
       </p>
        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible  
          </p>
          
        </div> */}
        <p className='md:text-2xl text-xl font-bold text-gray-500'>ESG takes the holistic view that sustainability extends beyond just environmental issues.</p>
        <Link to='signup'><button className='bg-[#2918ac] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button></Link>
     
          </div>
          <div>
          <h1 className='font-bold  p-2 md:text-3xl sm:text-2xl text-xl text-[#f76c16]'>
          Serialization & Aggregation
        </h1>
        <p className='md:text-2xl sm:text-2xl text-xl font-bold md:py-6 text-[white]'>
        In the world of unique identifiers, the process of aggregation involves capturing and maintaining parent-child relationships between different packaging levels of goods. Serialized at the saleable unit level, the serial number is associated with those units in the next level of the packaging hierarchy, the shipper cases.
       </p>
        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible  
          </p>
          
        </div> */}
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Aggregation can be a part of the serialisation solution on your production lines.</p>
        <Link to='signup'><button className='bg-[#2918ac] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button></Link>
     
          </div>
        </Carousel>
        
         </div>
    </div>
  );
};

export default Hero;