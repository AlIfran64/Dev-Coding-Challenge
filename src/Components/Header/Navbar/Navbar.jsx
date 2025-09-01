import React from 'react';
import logo from '../../../assets/Logo.png';
import { NavLink } from 'react-router';
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  const links = <>
    <NavLink className="mx-5 text-base font-medium hover:text-[#E9D5FF]">Home</NavLink>
    <NavLink className="mx-5 text-base font-medium hover:text-[#E9D5FF]">Products <IoIosArrowDown className='inline-block' size={18} /></NavLink>
    <NavLink className="mx-5 text-base font-medium hover:text-[#E9D5FF]">Resources <IoIosArrowDown className='inline-block' size={18} /></NavLink>
    <NavLink className="mx-5 text-base font-medium hover:text-[#E9D5FF]">Pricing</NavLink>
  </>

  return (
    <div className='bg-[#53389E] py-4'>
      <div className='w-11/12 mx-auto flex justify-between items-center'>

        {/* left part */}
        <div className='flex justify-start items-center gap-1 text-white'>
          <img className='w-8 h-8' src={logo} alt="logo" />
          <h1 className='font-semibold text-lg'>Untitled UI</h1>

          {/* Navigation */}
          <div className='mx-5 hidden lg:block'>
            {links}
          </div>
        </div>

        {/* right part */}
        <div className='space-x-2 hidden lg:block'>

          {/* log in */}
          <button className='text-base text-white font-medium cursor-pointer hover:bg-white hover:text-black px-4 py-1.5 rounded-md transition-all duration-400 ease-in-out'>Log in</button>

          {/* sign up */}
          <button className='bg-[#7F56D9] text-white text-base font-medium px-4 py-1.5 cursor-pointer rounded-md hover:bg-[#643fb3] hover:border-white transition-all duration-400 ease-in-out'>Sign up</button>
        </div>

        {/* Hamburger icon */}
        <div className='lg:hidden text-white'>
          <GiHamburgerMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;