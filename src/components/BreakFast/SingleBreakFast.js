import React from 'react';
import { useCartContex } from '../../Contex/CartContex';
import './SingleBreakFast.css';
import { motion } from "framer-motion"


const SingleBreakFast = ({food}) => {
  const { name, img, description, price } = food;
  const {cart, setCart} = useCartContex()


  const handleAddToCart = (item) => {
    setCart([...cart, item])
  }

  return (

    <motion.div animate={{scale: 1}} style={{transform: 'scale(.5)'}}  className="card-container">
      <img src={img} alt="" />
      <h2 className="text-xl"> {name} </h2>
      <p className="text-slate-500"> {description} </p>
      <h2 className="text-2xl font-bold">${price} </h2>
      <div className="btn flex justify-between">
        <button className="btn-style btn-1 py-2 mr-2 px-5 rounded-r-full">
          See Details
        </button>
        <button
          onClick={() => handleAddToCart(food)}
          className="btn-style btn-2 py-2 px-5 ml-2 rounded-l-full"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default SingleBreakFast;
