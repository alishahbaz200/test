import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

const showItem = {
  hidden:{
    scale:1.0,
  },
  visible:{
    transition:{
      duration:1,
      type:"spring",
      stiffness:130
    }
  },
  whileHove:{
    scale:1.3,
    color:"orange",
    originX:0,
    originY:.5,
    originZ:0
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];


  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li variants={showItem} whileHover="whileHove" animate="visible" initial="hidden" key={topping} 
            onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button animate={{x:0 , fontSize:21,transition:{
          duration:2,
          delay:1,
          type:"spring",
          stiffness:120,
          when:"beforeChildren"
        }}} 
        initial={{x:'-100vw'}}
        whileHover={{
          color:"orange",
          scale:1.3
        }}  
        type="button">
          Order
        </motion.button>
      </Link>
    </div>
  )
}

export default Toppings;