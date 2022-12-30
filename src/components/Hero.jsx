import React from 'react'
import Navbar from './Navbar'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-full min-h-[100vh] md:px-16 px-7 py-7 heroImage text-lightTC'>
      <Navbar />
      <motion.div
      initial={{y: 30, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{ease: 'easeInOut', delay: .25, duration: 1}}
      className='w-full flex flex-col items-center justify-center text-center pt-32'>
          <h1 className='font-extrabold max-w-[573px] py-5'>We Take Care of the Future</h1>
          <p className='font-medium max-w-[539px]'>We know how large objects will act, but things on a 
  small scale just do not act that way.</p>
          <div className='py-10 flex justify-between font-bold gap-3'>
            <button className='btn-text bg-primary py-4 px-8 rounded-full'>Get Quote Now</button>
            <button className='btn-text border-solid border-2 border-lightTC py-4 px-8 rounded-full'>Learn More</button>
          </div>
      </motion.div>
    </div>
  )
}

export default Hero