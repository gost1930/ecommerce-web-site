import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import { FaBars } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import Links from './Links';
import Header from './Header';
import Search from './Search';
import Cart from './Cart';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <>
      <Header />
      <nav className='flex flex-row justify-between items-center w-full bg-black px-2 py-3 '>
        <a href="#">
          <img src={logo} alt="Logo" className='w-20' />
        </a>
        <Search />
        <ul className='hidden md:flex flex-row items-center'>
          <Links click={toggleCart} list='mx-4' button='text-white' />
        </ul>
        <ul className={`${menuOpen ? 'right-0' : '-right-[700px]'} md:hidden flex flex-col absolute w-[70%] h-full items-start top-0 bg-black duration-300 pr-5 py-10 z-20`}>
          <Links click={toggleCart} list='my-4' button='text-white text-xl' />
          <IoCloseCircleOutline className='text-2xl text-red-400 absolute top-2 left-2 cursor-pointer' onClick={toggleMenu} />
        </ul>
        <FaBars className='text-white text-2xl md:hidden flex cursor-pointer' onClick={toggleMenu} />
      </nav>

      <Cart change={cartOpen} close={toggleCart} />
    </>
  );
};

export default Nav;
