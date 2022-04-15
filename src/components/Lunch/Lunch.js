import React from 'react';
import useFoods from '../../hooks/useFoods';
import SingleLunch from './SingleLunch';

const Lunch = () => {
  const [foods, setFoods] = useFoods();
  const lunch = foods.filter(pd => pd.category === 'lunch');
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
      {
        lunch.map(food => <SingleLunch 
        key={food.id}
        food = {food}
        />)
      }
    </div>
  );
};

export default Lunch;