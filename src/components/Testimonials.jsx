import React from "react";
import FeedbackCard from "./FeedbackCard";
import { comments } from "../assets/texts";
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
      duration: 0.8,
    },
  },
};

const Testimonials = () => {
  return (
    <section className='bg-darkBackground text-white text-center w-full min-h-[100vh] flex flex-col items-center py-20 lg:px-28 px-10'>
      <div className='flex flex-col items-center '>
        <h2 className='mb-5 text-3xl font-bold xs:text-h2'>What Clients Say</h2>
        <p className='text-sm font-medium xs:text-p'>
          Problems trying to resolve the conflict between{" "}
          <br className='hidden sm:block' /> the two major realms of Classical
          physics: Newtonian mechanics{" "}
        </p>
      </div>
      <motion.div
        variants={variants}
        initial='hidden'
        whileInView='show'
        className='flex flex-wrap justify-center w-full gap-5 mt-16'>
        <FeedbackCard comments={comments} item={item} />
      </motion.div>
    </section>
  );
};

export default Testimonials;
