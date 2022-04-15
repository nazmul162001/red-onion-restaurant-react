import React from 'react';
import logo from '../../images/logo2.png';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="h-24 bg-white sticky top-0 flex items-center justify-between px-14">
      <div className="logo">
        <img style={{ height: '40px' }} src={logo} alt="" />
      </div>
      <div className="menu flex items-center">
        <div className="cart-icon relative">
          <BsCart2 className='text-2xl' />
          <div className='absolute bg-yellow-300 opacity-90 w-5 h-5 rounded-full top-[-8px] right-[-10px] flex justify-center items-center'>5</div>
        </div>
        <Link className='px-8 text-lg' to='/login'>Login</Link>
        <Link className='bg-red-600 text-white text-lg py-1 px-5 rounded-full' to='/SignUp'>SignUp</Link>
      </div>
    </nav>
  );
};

export default Header;
