import React from 'react';
import './FoodMenu.css';


const FoodMenu = ({handleCategory}) => {
  return (
    <section className="food-menu text-center my-10">
      <div onClick={(e) => handleCategory(e)}>
        <span className='bg-orange-300 rounded mx-3 cursor-pointer py-2 px-5'>All</span>
        <span className='bg-orange-300 rounded mx-3 cursor-pointer py-2 px-5'>Breakfast</span>
        <span className='bg-orange-300 rounded mx-3 cursor-pointer py-2 px-5'>Lunch</span>
        <span className='bg-orange-300 rounded mx-3 cursor-pointer py-2 px-5'>Dinner</span>
      </div>
    </section>
  );
};

export default FoodMenu;
