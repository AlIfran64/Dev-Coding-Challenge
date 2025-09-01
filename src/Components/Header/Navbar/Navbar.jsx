import React from 'react';
import logo from '../../../assets/Logo.png';
import { NavLink } from 'react-router';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {

  const links = <>
    <NavLink className="mx-5 text-sm font-medium">Home</NavLink>
    <NavLink className="mx-5 text-sm font-medium">Products <IoIosArrowDown className='inline-block' size={18} /></NavLink>
    <NavLink className="mx-5 text-sm font-medium">Resources <IoIosArrowDown className='inline-block' size={18} /></NavLink>
    <NavLink className="mx-5 text-sm font-medium">Pricing</NavLink>
  </>

  return (
    <div className='bg-[#53389E] py-3'>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        {/* left */}
        <div className='flex justify-start items-center gap-1 text-white'>
          <img className='w-8 h-8' src={logo} alt="logo" />
          <h1 className='font-semibold text-lg'>Untitled UI</h1>

          {/* Navigation */}
          <div className='mx-5'>
            {links}
          </div>
        </div>

        {/* right */}
        <div className='space-x-2'>
          <button className='text-sm text-white font-medium cursor-pointer border-2 border-transparent hover:border-[#7F56D9] px-4 py-2 rounded-md'>Log in</button>
          <button className='bg-[#7F56D9] text-white text-sm font-medium px-4 py-2 cursor-pointer rounded-md border-2 border-[#7F56D9]'>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;