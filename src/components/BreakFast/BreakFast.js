import React from 'react';
import useFoods from '../../hooks/useFoods';
import SingleBreakFast from './SingleBreakFast';



const BreakFast = () => {
  const [foods, setFoods] = useFoods();
  const breakfast = foods.filter(pd => pd.category === 'breakfast');


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
      {
        breakfast.map(food => <SingleBreakFast 
        key={food.id}
        food = {food}
        />)
      }
    </div>
  );
};

export default BreakFast;