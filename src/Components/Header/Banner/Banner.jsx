import React from 'react';
import cards from '../../../assets/banner-cards.png';
import { LuCirclePlay } from 'react-icons/lu';

const Banner = () => {
  return (
    <div className='bg-[#53389E]'>
      <div className='pt-12 lg:pt-20 px-5'>
        <p className='lg:text-center text-xs lg:text-base text-[#E9D7FE] font-medium'>Super. Simple. Banking.</p>

        <h1 className='text-2xl lg:text-7xl lg:text-center text-white font-semibold leading-tight mt-2 mb-3 lg:mb-6'>Banking technology <br /> that has your back.</h1>

        <p className='text-sm lg:text-xl lg:text-center text-[#E9D7FE]'>Simple, transparent banking. No hidden fees and free overdrafts.</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3 lg:gap-0 lg:space-x-3 my-6 lg:my-12 px-5">

        {/* Demo */}
        <button className="w-full lg:w-auto flex items-center justify-center gap-2 py-2 lg:py-3.5 px-6.5 rounded-md bg-white hover:bg-white/90 font-semibold cursor-pointer transition-all duration-400 ease-in-out text-sm lg:text-base">
          <LuCirclePlay size={18} /> Demo
        </button>

        {/* Sign up */}
        <button className="w-full lg:w-auto flex items-center justify-center py-2 lg:py-3.5 px-6.5 rounded-md bg-[#7F56D9] hover:bg-[#643fb3] text-white font-semibold cursor-pointer transition-all duration-400 ease-in-out text-sm lg:text-base">
          Sign up
        </button>
      </div>


      {/* Cards */}
      <div className="mt-15 lg:mt-0 h-44 md:h-64 lg:h-auto overflow-x-hidden overflow-y-visible relative">
        <img
          className="w-full h-full object-cover transform scale-100 sm:scale-none transition-transform duration-500 origin-top"
          src={cards}
          alt="cards"
        />
      </div>



    </div>
  );
};

export default Banner;