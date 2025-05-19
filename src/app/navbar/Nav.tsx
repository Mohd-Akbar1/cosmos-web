'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: You can use your own icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full flex items-center justify-between px-6 py-4 sticky top-0 z-10 shadow-md backdrop-blur-md bg-white/5 text-white'>
      <h1 className='text-2xl font-bold'>COSMOS</h1>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8'>
        <p className='cursor-pointer hover:text-gray-300'>Learner</p>
        <p className='cursor-pointer hover:text-gray-300'>Build</p>
        <p className='cursor-pointer hover:text-gray-300'>Explore</p>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden'>
          <p className='cursor-pointer hover:text-gray-300'>Learner</p>
          <p className='cursor-pointer hover:text-gray-300'>Build</p>
          <p className='cursor-pointer hover:text-gray-300'>Explore</p>
        </div>
      )}
    </div>
  );
};

export default Nav;
