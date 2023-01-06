import React from "react";
import { featuresT } from "../assets/texts";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: ["0px", "-10px", "0px"],
    transition: {
      duration: 1,
    },
  },
};

const Features = () => {
  return (
    <section className='bg-darkBackground text-white text-center w-full min-h-[100vh] flex flex-col items-center py-20 lg:px-28 px-10'>
      <div className='flex flex-col items-center '>
        <motion.h2
          variants={variants}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className='mb-5 text-3xl font-bold xs:text-h2 '>
          WHY CHOOSE <br className='block ss:hidden' /> US
        </motion.h2>
        <motion.p
          variants={variants}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          className='text-sm font-medium xs:text-p'>
          Problems trying to resolve the conflict between{" "}
          <br className='hidden sm:block' /> the two major realms of Classical
          physics: Newtonian mechanics{" "}
        </motion.p>
      </div>
      <motion.div
        variants={variants}
        initial='hidden'
        whileInView='show'
        className='flex flex-wrap justify-center w-full gap-5 mt-10 xs:mt-16'>
        <FeatureCard cards={featuresT} item={item} />
      </motion.div>
    </section>
  );
};

export default Features;
