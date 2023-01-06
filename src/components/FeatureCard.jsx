import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ cards, item }) => {
  return (
    <>
      {cards.map((card) => (
        <motion.div
          variants={item}
          viewport={{ once: true }}
          key={card.id}
          className='bg-lightBackground text-black w-[300px] p-7 flex flex-col text-left'>
          <div className='flex items-center justify-center gap-3 mb-5'>
            <img src={card.img} alt='' />
            <h5 className='font-bold text-h5'>{card.title}</h5>
          </div>
          <div>
            <p className='font-medium paragraph text-secondTC'>{card.text}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FeatureCard;
