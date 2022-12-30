import React from 'react'

const Footer = ({Twitter, Instagram, Facebook, Youtube}) => {
  return (
    <footer className='bg-darkBackground text-lightTC'>
        <div className='w-full pt-12 px-14 md:px-20 lg:px-24'>
            <div className='flex justify-between flex-col sm:flex-row gap-14 pb-7 sm:border-b-2 sm:border-b-[#364067]'>
                <h3 className='font-bold'>KMarketer</h3>
                <div className='flex gap-5'>
                    <Facebook className='facebook w-7 h-7' />
                    <Instagram className='instagram w-7 h-7' />
                    <Twitter className='twitter w-7 h-7' />
                    <Youtube className='youtube w-7 h-7' />
                </div>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between flex-wrap gap-x-5 gap-y-10 py-14 w-full px-14 md:px-20 lg:px-24'>
            <div className='flex flex-col gap-3 w-[130px]'>
                <h5 className='h5 font-bold pb-3 w-max'>Company Info</h5>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>About Us</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Carrier</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>We are hiring</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Blog</p>
            </div>
            <div className='flex flex-col gap-3 w-[130px]'>
                <h5 className='h5 font-bold pb-3 w-max'>Legal</h5>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>About Us</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Carrier</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>We are hiring</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Blog</p>
            </div>
            <div className='flex flex-col gap-3 w-[130px]'>
                <h5 className='h5 font-bold pb-3 w-max'>Features</h5>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Business Marketing</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>User Analytic</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Live Chat</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Unlimited Support</p>
            </div>
            <div className='flex flex-col gap-3 w-[130px]'>
                <h5 className='h5 font-bold pb-3 w-max'>Resources</h5>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>IOS & Android</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Watch a Demo</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>Customers</p>
                <p className='link w-max font-semibold sm:text-mutedC text-lightTC'>API</p>
            </div>
            <div className='flex flex-col gap-3 w-[55vw] lg:w-max'>
                <h5 className='h5 font-bold pb-3'>Get In Touch</h5>
                <form className='relative'>
                    <input type="email" placeholder='Your Email' className='p-4 w-full rounded-md focus:outline-primary text-firstTC font-bold inputPlaceHolder' required />
                    <input type="submit" value='Subscribe' className='p-[15px] bg-primary rounded-md absolute right-[1px] top-[1px]' />
                    <p className='text-mutedC font-normal text-xs py-1 px-1'>Lorem ipsum dolor sit</p>
                </form>
            </div>
        </div>
        <div className='w-full bg-secondary2 py-7 px-14 md:px-20 lg:px-24 text-left'>
            <p className='h6 font-semibold'>Made With Love By <br className='sm:hidden' /> Figmaland All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer