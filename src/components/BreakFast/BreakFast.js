import React, { useEffect, useState } from 'react';
import useFoods from '../../hooks/useFoods';
import SingleBreakFast from './SingleBreakFast';
import FoodMenu from '../FoodMenu/FoodMenu';

const BreakFast = () => {
  const [foods, setFoods] = useFoods();
  const [datas, setDatas] = useState([])

  useEffect(()=> {
    setDatas(foods)
  },[foods])
  


  const handleCategory = (e) => {
    
      if(e.target.innerText.toLowerCase() === 'dinner' ){
        setDatas(foods.filter((pd) => pd.category.toLowerCase() ===  'dinner'))
      }
      else if(e.target.innerText.toLowerCase() === 'breakfast') {
        setDatas(foods.filter((pd) => pd.category.toLowerCase() ===  'breakfast'))
      }
      else if(e.target.innerText.toLowerCase() === 'lunch') {
        setDatas(foods.filter((pd) => pd.category.toLowerCase() ===  'lunch'))
      }
      else if(e.target.innerText.toLowerCase() === 'all') {
        setDatas(foods.filter((pd) => pd))
      }
    }
  

// const data = foods.filter((pd) => pd.category.toLowerCase() ===  {category});

  return (
    <div>
      <FoodMenu
      handleCategory = {handleCategory}
      ></FoodMenu>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {datas?.map((food) => (
          <SingleBreakFast key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
