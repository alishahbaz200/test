import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";

const buttonVariant = {
  hover: {
    scale: 1.3,
    textShadow: "0px 0px 8px rgb(225,225,225)",
    boxShadow: "0px 0px 8px rgb(225,225,225)",
    transition: {
      duration: 0.52,
      yoyo: Infinity,
    },
  },
};

const containerVariant = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{ delay: 1, duration: 4 }
  },
  exit:{
    x:"-100vw"
  }
}

const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
        {showTitle && <motion.h2
        >
        Welcome to Pizza Joint</motion.h2>}
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
