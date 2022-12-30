import React from 'react'
import arrow from '../assets/arrow.svg'

const ContactUs = () => {
  return (
    <section className='contactUsImage w-full min-h-[100vh] font-bold flex flex-col items-center lg:items-start pt-20'>
        <div className='text-lightTC  px-14 md:px-20 lg:px-24'>
            <p className='h5'>
                Contact Us
            </p>
            <h2 className=''>
                Make an Appoinment
            </h2>
        </div>
        <div className='w-full flex flex-col items-center lg:items-start gap-5 ss:gap-7 py-10 px-14 md:px-20 lg:px-24'>
            <div className='flex flex-col ss:flex-row justify-center lg:justify-start w-full gap-5'>
                <input type="text" placeholder='Full Name' className='input focus:outline-primary'/>
                <input type="email" placeholder='example@gmail.com' className='input focus:outline-primary'/>
            </div>
            <div className='flex flex-col ss:flex-row justify-center lg:justify-start w-full gap-5'>
                <div className='relative'>
                    <select className='input text-gray-400 w-full ss:w-[225px] focus:outline-primary'>
                        <option disabled selected >Please Select</option>
                    </select>
                    <img src={arrow} className='Arrow' />
                </div>
                <div className='relative'>
                    <select className='input text-gray-400 w-full ss:w-[225px] focus:outline-primary'>
                        <option disabled selected >4:00 Available</option>
                    </select>
                    <img src={arrow} className='Arrow' />
                </div>
            </div>
            <textarea placeholder='Message' className='rounded-md px-7 py-4 h-36 text-start focus:outline-primary resize-none w-full ss:w-[470px]'/>
            <button className='text-lightTC bg-primary px-[40px] py-5 rounded-md w-full mb-16 max-w-[470px]'>Book Appointment</button>
        </div>
        <div className='w-full py-7 bg-lightBackground px-14 md:px-20 lg:px-24 flex flex-col md:flex-row items-center'>
            <div className='w-[249px] ss:w-full ss:text-center'>
                <h3 className='font-bold text-firstTC'>Consulting Agency For Your Business</h3>
                <p className='paragraph font-medium text-secondTC pt-4'>the quick fox jumps over <br className='ss:hidden' /> the lazy dog</p>
            </div>
            <button className='text-lightTC bg-primary px-[40px] py-5 rounded-md w-full mt-10 mb-3'>Book Appointment</button>
        </div>
    </section>
  )
}

export default ContactUs