import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-gray-800'>
      <div>
        <h1 className='w-full text-2xl font-bold text-[#6c7270]'>&copy;AIDIZITAL</h1>
        {/* <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p> */}
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Our Links</h6>
        <ul>
            <li className='py-2 text-sm'>Pharma Compliance</li>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Our Team</li>
            <li className='py-2 text-sm'>Contact</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Our Platform</h6>
        <ul>
            <li className='py-2 text-sm'>Track & Trace</li>
            <li className='py-2 text-sm'>Recalls & Returns</li>
            <li className='py-2 text-sm'>Demand Signals</li>
            <li className='py-2 text-sm'>Market Intelligence</li>
            <li className='py-2 text-sm'>Shelf Life Forecast</li>
            <li className='py-2 text-sm'>Smart Contracts</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;