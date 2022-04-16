// import React from 'react';
// import useFoods from '../../hooks/useFoods';
// import SingleDinner from './SingleDinner';

// const Dinner = () => {
//   const [foods, setFoods] = useFoods();
//   const dinner = foods.filter(pd => pd.category === 'dinner');
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
//       {
//         dinner.map(food => <SingleDinner 
//         key={food.id}
//         food = {food}
//         />)
//       }
//     </div>
//   );
// };

// export default Dinner;