import React, { useState, useEffect } from "react";
import search from "../assets/search.svg";
import shopping from "../assets/shopping.svg";
import menu from "../assets/toggler.svg";
import close from "../assets/close.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const animation = {
    open: {
      top: "0%",
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
    close: {
      top: "-60%",
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  const [toggle, setToggle] = useState(false);

  useEffect(() => console.log(toggle), [toggle]);

  return (
    <div className='flex items-center justify-between text-lightTC'>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.25, duration: 1 }}
        className='hidden sm:block'>
        <h3 className='italic font-extrabold select-none text-h3'>KMarketer</h3>
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.25, duration: 1 }}
        className='sm:flex justify-between w-[430px] ss:w-[400px] hidden'>
        <ul className='flex justify-between w-[350px] ss:w-[320px] font-semibold'>
          <li className='list-none text-link'>
            <button>Home</button>
          </li>
          <li className='list-none text-link'>
            <button>Product</button>
          </li>
          <li className='list-none text-link'>
            <button>Pricing</button>
          </li>
          <li className='list-none text-link'>
            <button>Contact</button>
          </li>
        </ul>
        <div className='flex justify-between w-[60px]'>
          <button>
            <img
              src={search}
              alt='search'
              className='w-[20px] cursor-pointer'
            />
          </button>
          <button>
            <img
              src={shopping}
              alt='shopping'
              className='w-[20px] cursor-pointer'
            />
          </button>
        </div>
      </motion.div>
      <div className='flex justify-between w-full sm:hidden'>
        <motion.div
          initial={{ x: -20, opacity: 0, paddingRight: 16 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.25, duration: 1 }}>
          <h3 className='text-xl italic font-extrabold select-none xxs:text-h3'>KMarketer</h3>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.25, duration: 1 }}
          className='flex justify-between w-full max-w-[110px]'>
          <button>
            <img src={search} alt='search' className='w-[20px]' />
          </button>
          <button>
            <img src={shopping} alt='shopping' className='w-[20px]' />
          </button>
          <button onClick={() => setToggle(true)}>
            <img src={menu} className='w-[20px]' />
          </button>
        </motion.div>
        <motion.div
          initial={{ top: "-100%", left: 0 }}
          animate={toggle ? "open" : "close"}
          variants={animation}
          className={`absolute w-full bg-darkBackground flex flex-col p-7`}>
          <div className='flex justify-between w-full'>
            <div>
              <h3 className='text-xl italic font-extrabold select-none xxs:text-h3'>KMarketer</h3>
            </div>
            <div className='flex justify-between w-[110px]'>
              <button>
                <img src={search} alt='search' className='w-[20px]' />
              </button>
              <button>
                <img src={shopping} alt='shopping' className='w-[20px]' />
              </button>
              <button onClick={() => setToggle(false)}>
                <img
                  src={close}
                  className='w-[20px]'
                />
              </button>
            </div>
          </div>
          <div className='w-full py-7'>
            <ul className='flex flex-col items-center justify-between gap-5 font-semibold'>
              <li className='w-full list-none text-link'>
                <button className='w-full'>Home</button>
              </li>
              <li className='w-full list-none text-link'>
                <button className='w-full'>Product</button>
              </li>
              <li className='w-full list-none text-link'>
                <button className='w-full'>Pricing</button>
              </li>
              <li className='w-full list-none text-link'>
                <button className='w-full'>Contact</button>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
