import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = (
    <>
      <li className='hover:text-orange-500'>Pricing</li>
      <li className='hover:text-orange-500'>Product</li>
      <li className='hover:text-orange-500'>About</li>
      <li className='hover:text-orange-500'>Careers</li>
      <li className='hover:text-orange-500'>Community</li>
    </>
  );

  return (
    <div>
      <nav className='relative container mx-auto p-6 border-b-2 m-2'>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
            <img src="https://www.freepnglogos.com/uploads/company-logo-png/brand-tibco-logo-palo-alto-company-png-34.png" alt="Logo" className='w-20' />
          </div>
          <div>
            <ul className='hidden md:flex space-x-6 pt-1'>
              {menuItems}
            </ul>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-2xl pt-3'>
              <CiMenuBurger />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className='absolute flex flex-col items-center py-8 mt-10  font-bold bg-white sm:w-auto self-center left-6 right-6 drop-shadow-md rounded-lg duration-500'>
            <ul className='flex flex-col space-y-3'>
              {menuItems}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
