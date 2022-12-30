import React from 'react'
import FeedbackCard from './FeedbackCard'
import { comments } from '../assets/texts'
import {motion} from 'framer-motion'

const variants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const Testimonials = () => {
  return (
    <section className='bg-darkBackground text-white text-center w-full flex flex-col items-center py-20 px-14 md:px-20 lg:px-24'>
        <div className=' flex flex-col items-center'>
            <h2 className='font-bold'>What Clients Say</h2>
            <p className='font-medium paragraph'>Problems trying to resolve the conflict between <br className='hidden sm:block' /> the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <motion.div 
        variants={variants}
        initial='hidden'
        whileInView='show'
        className='flex flex-1 flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center w-full mt-16 gap-5'>
            <FeedbackCard comments={comments} item={item} />
        </motion.div>
    </section>
  )
}

export default Testimonials