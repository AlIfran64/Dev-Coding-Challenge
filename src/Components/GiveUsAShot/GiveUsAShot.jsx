import React from 'react';
import image from '../../assets/Image.png';

const GiveUsAShot = () => {
  return (
    <div className='w-11/12 mx-auto my-25 flex justify-between items-center bg-[#53389E] rounded-2xl'>
      {/* left part */}
      <div className='px-15'>
        <h1 className='text-4xl text-white font-semibold'>Give us a shot</h1>
        <p className='text-xl text-[#E9D7FE] my-6'>Join over 4,000+ startups already growing with Untitled.</p>

        <div className='space-x-2'>

          {/* log in */}
          <button className='text-base font-medium cursor-pointer bg-white text-black px-4 py-2 rounded-md transition-all duration-400 ease-in-out'>Learn more</button>

          {/* sign up */}
          <button className='bg-[#7F56D9] text-white text-base font-medium px-4 py-2 cursor-pointer rounded-md hover:bg-[#643fb3] hover:border-white transition-all duration-400 ease-in-out'>Get started</button>
        </div>
      </div>

      {/* right part */}
      <div>
        <img className='rounded-r-2xl' src={image} alt="image" />
      </div>
    </div>
  );
};

export default GiveUsAShot;