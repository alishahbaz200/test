import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const container = {
  hidden:{
    x:"100vw",
    opacity:0,
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      delay:5.55,
      type:"spring",
      stiffness:102
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container" 
      variants={container}
      animate="visible"
      initial="hidden"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li   whileHover={{ scale:1.3 , color:"#f8e112",originX:0 }} key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" animate={{x:0}} initial={{x:"-100vw"}} transition={{type:"spring",stiffness:120}}>
          <Link to="/toppings">
            <motion.button whileHover={{scale:1.3 , 
            textShadow:"0px 0px 8px rgb(225,225,225)" , 
            boxShadow:"0px 0px 8px rgb(225,225,225)"}}>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;