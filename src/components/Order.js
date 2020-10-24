import React from 'react';
import { motion } from 'framer-motion';

 const orderContainer = {
   hidden:{
    opacity:0,
    x:"100vw"
   },
   visible:{
    opacity:1,
    x:0,
    transition:{
      type:"spring",
      mass:200,
      damping:80,
      when:"beforeChildren",
      staggerChildren:1
      }
   }
 };
const childShow = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,

  }
};

const Order = ({ pizza }) => {
  return (
    <motion.div variants={orderContainer} animate="visible"
    initial="hidden"
     className="container order">
      <h2>Thank you for your order </h2>
      <motion.p variants={childShow}>You ordered a {pizza.base} pizza with:     </motion.p>
      <motion.div variants={childShow}>
         {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;