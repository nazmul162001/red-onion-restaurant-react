import React from 'react';
import { useCartContex } from '../../Contex/CartContex';

const DetailsFood = () => {
  const {cart, setCart} = useCartContex()
  return (
    <div>
      This is food details
    </div>
  );
};

export default DetailsFood;