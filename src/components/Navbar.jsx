import React, {useState, useEffect} from 'react';
import search from '../assets/search.svg';
import shopping from '../assets/shopping.svg';
import menu from '../assets/toggler.svg';
import close from '../assets/close.svg';
import {motion} from 'framer-motion'

const Navbar = () => {

    const animation = {
        open: {
            top: "0vh",
            transition: {
                ease: 'easeInOut', 
                duration: 1
            }
        },
        close: {
            top: "-30vh",
            transition: {
                ease: 'easeInOut', 
                duration: 1
            }
        }
    }

    const [toggle, setToggle] = useState(false)

    useEffect(() => console.log(toggle), [toggle])

  return (
    <div
     className='flex items-center justify-between text-lightTC'>
        <motion.div 
        initial={{x: -20, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{ease: 'easeInOut', delay: .25, duration: 1}}
        className='hidden sm:block'>
            <h3 className='italic font-extrabold'><span className=''>KM</span>arketer</h3>
        </motion.div>
        <motion.div 
        initial={{x: 20, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{ease: 'easeInOut', delay: .25, duration: 1}}
        className='sm:flex justify-between w-[430px] ss:w-[400px] hidden'>
            <ul className='flex justify-between w-[350px] ss:w-[320px] font-semibold'>
                <li className='list-none link'>Home</li>
                <li className='list-none link'>Product</li>
                <li className='list-none link'>Pricing</li>
                <li className='list-none link'>Contact</li>
            </ul>
            <div className='flex justify-between w-[60px]'>
                <img src={search} alt="search" className='w-[20px] cursor-pointer' />
                <img src={shopping} alt="shopping" className='w-[20px] cursor-pointer' />
            </div>
        </motion.div>
        <div className='flex justify-between w-full sm:hidden'>
            <motion.div
            initial={{x: -20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ease: 'easeInOut', delay: .25, duration: 1}}
            >
                <h3 className='italic font-extrabold'><span className=''>KM</span>arketer</h3>
            </motion.div>
            <motion.div 
            initial={{x: 20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ease: 'easeInOut', delay: .25, duration: 1}}
            className='flex justify-between w-[110px]'>
                <button>
                    <img src={search} alt="search" className='w-[20px]' />
                </button>
                <button>
                    <img src={shopping} alt="shopping" className='w-[20px]' />
                </button>
                <button onClick={() => setToggle(!toggle)}>
                    <img src={menu} className='w-[20px]' />
                </button>
            </motion.div>
            {/* <motion.div 
            initial={{x: 100}}
            className='absolute top-0 left-0 w-full h-48 bg-darkBackground p-7'></motion.div> */}
            <motion.div 
            initial={{top: "-30vh", left: 0}}
            animate={toggle ? "open" : "close"} 
            variants={animation} 
            className={`absolute w-full bg-darkBackground flex flex-col p-7`}>
                <div className='flex justify-between w-full'>
                    <div>
                        <h4 className='italic font-extrabold'><span>H</span>Marketer</h4>
                    </div>
                    <div className='flex justify-between w-[110px]'>
                        <button>
                            <img src={search} alt="search" className='w-[20px] cursor-pointer' />
                        </button>
                        <button>
                            <img src={shopping} alt="shopping" className='w-[20px] cursor-pointer' />
                        </button>
                        <button>
                            <img src={close} className='w-[20px] cursor-pointer' onClick={() => setToggle(!toggle)} />
                        </button>
                    </div>
                </div>
                <div className='w-full py-7'>
                    <ul className='flex flex-col items-center justify-between gap-5 font-semibold'>
                        <li className='list-none link'><button className='w-full'>Home</button></li>
                        <li className='list-none link'><button>Product</button></li>
                        <li className='list-none link'><button>Pricing</button></li>
                        <li className='list-none link'><button>Contact</button></li>
                    </ul>
                </div>
            </motion.div >
        </div>
    </div>
  )
}

export default Navbar