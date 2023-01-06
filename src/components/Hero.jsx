import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='w-full min-h-[100vh] md:px-16 px-7 py-7 bg-heroImg bg-center bg-cover text-lightTC'>
      <Navbar />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.25, duration: 1 }}
        className='flex flex-col items-center justify-center w-full pt-32 text-center'>
        <h1 className='font-extrabold max-w-[573px] text-4xl leading-normal xxs:text-5xl xxs:leading-normal xs:text-h1 py-5'>
          We Take Care of the Future
        </h1>
        <p className='font-medium text-base xs:text-p max-w-[539px]'>
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <div className='flex justify-between gap-3 py-5 font-bold xs:py-10'>
          <button className='px-4 py-3 text-xs rounded-full xs:text-btn bg-primary xs:py-4 xs:px-8'>
            Get Quote Now
          </button>
          <button className='px-4 py-3 text-xs border-2 border-solid rounded-full xs:text-btn border-lightTC xs:py-4 xs:px-8'>
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
