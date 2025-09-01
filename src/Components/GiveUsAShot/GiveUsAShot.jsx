import React from 'react';
import image from '../../assets/Image.png';

const GiveUsAShot = () => {
  return (
    <div className='w-11/12 mx-auto my-12 lg:my-25 lg:flex justify-between items-center bg-[#53389E] rounded-2xl'>
      {/* left part */}
      <div className='px-5 py-10 lg:px-15'>
        <h1 className='text-2xl lg:text-4xl text-white font-semibold'>Give us a shot</h1>
        <p className='text-sm lg:text-xl text-[#E9D7FE] mt-4'>Join over 4,000+ startups already growing with Untitled.</p>

        {/* Buttons */}
        <div className='mt-6 flex flex-col-reverse md:flex-row gap-2 lg:gap-3'>

          {/* learn more */}
          <button className='w-full lg:w-auto text-sm lg:text-base font-medium cursor-pointer bg-white hover:bg-white/90 text-black px-6 py-2 lg:py-3 rounded-md transition-all duration-400 ease-in-out'>Learn more</button>

          {/* get started */}
          <button className='w-full lg:w-auto bg-[#7F56D9] text-white text-sm lg:text-base font-medium px-6 py-2 lg:py-3 cursor-pointer rounded-md hover:bg-[#643fb3] hover:border-white transition-all duration-400 ease-in-out'>Get started</button>
        </div>
      </div>

      {/* right part */}
      <div>
        <img className='rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl w-full' src={image} alt="image" />
      </div>
    </div>
  );
};

export default GiveUsAShot;