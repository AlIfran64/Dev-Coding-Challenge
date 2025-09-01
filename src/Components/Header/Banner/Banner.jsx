import React from 'react';
import cards from '../../../assets/banner-cards.png';
import { LuCirclePlay } from 'react-icons/lu';

const Banner = () => {
  return (
    <div className='bg-[#53389E]'>
      <div className='pt-20'>
        <p className='text-center text-base text-[#E9D7FE] font-medium'>Super. Simple. Banking.</p>

        <h1 className='text-7xl text-center text-white font-semibold leading-tight mt-2 mb-6'>Banking technology <br /> that has your back.</h1>

        <p className='text-xl text-center text-[#E9D7FE]'>Simple, transparent banking. No hidden fees and free overdrafts.</p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center text-center space-x-3 my-12">
        <button className="flex items-center justify-center gap-2 py-3.5 px-6.5 rounded-md bg-white hover:bg-white/90 font-semibold cursor-pointer transition-all duration-400 ease-in-out">
          <LuCirclePlay size={20} /> Demo
        </button>
        <button className="flex items-center justify-center py-3.5 px-6.5 rounded-md bg-[#7F56D9] hover:bg-[#643fb3] text-white font-semibold cursor-pointer transition-all duration-400 ease-in-out">
          Sign up
        </button>
      </div>


      {/* Cards */}
      <div>
        <img className='object-cover' src={cards} alt="cards" />
      </div>
    </div>
  );
};

export default Banner;