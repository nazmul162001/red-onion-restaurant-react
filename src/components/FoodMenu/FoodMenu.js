import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodMenu.css';

const FoodMenu = () => {
  return (
    <section className="food-menu text-center my-10">
      <NavLink
        className={({isActive}) => (isActive ? 'active-link' : 'link')}
        to="/breakfast"
      >
        Breakfast
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? 'active-link' : 'link')}
        to="/Lunch"
      >
        Lunch
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? 'active-link' : 'link')}
        to="/Dinner"
      >
        Dinner
      </NavLink>
    </section>
  );
};

export default FoodMenu;
