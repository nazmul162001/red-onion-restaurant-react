import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className='hero flex justify-center items-center text-center'>
      <div className="hero-content">
        <h1 className="hero-title text-4xl py-5 font-semibold text-gray-700">
          Best Food waiting for your belly
        </h1>
        <div className="search-field relative">
        <input className='w-[65%] py-2 pl-3 rounded-full' type="search" name="search" id="serch" placeholder='Search food items' />
        <button className='absolute bg-red-500 py-2 text-white px-12 rounded-full right-16'>Search</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;