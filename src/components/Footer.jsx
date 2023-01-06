import React from "react";

const Footer = ({ Twitter, Instagram, Facebook, Youtube }) => {
  return (
    <footer className='overflow-x-hidden bg-darkBackground text-lightTC'>
      <div className='w-full pt-12 px-14 md:px-20 lg:px-24'>
        <div className='flex justify-between flex-col gap-7 sm:flex-row sm:gap-14 sm:pb-7 sm:border-b-2 sm:border-b-[#364067]'>
          <h3 className='text-lg font-bold xs:text-h3'>KMarketer</h3>
          <div className='flex gap-3 xxs:gap-5'>
            <button><Facebook className='text-[#335BF5] w-7 h-7' /></button>
            <button><Instagram className='text-[#E51F5A] w-7 h-7' /></button>
            <button><Twitter className='text-[#21A6DF] w-7 h-7' /></button>
            <button><Youtube className='text-[#E42F08] w-7 h-7' /></button>
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-wrap justify-between w-full sm:flex-row gap-x-5 gap-y-10 py-14 px-14 md:px-20 lg:px-24'>
        <div className='flex flex-col gap-3 w-[130px]'>
          <h5 className='pb-3 font-bold text-h5 w-max'>Company Info</h5>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>About Us</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Carrier</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>We are hiring</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Blog</button>
          </p>
        </div>
        <div className='flex flex-col gap-3 w-[130px]'>
          <h5 className='pb-3 font-bold text-h5 w-max'>Legal</h5>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>About Us</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Carrier</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>We are hiring</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Blog</button>
          </p>
        </div>
        <div className='flex flex-col gap-3 w-[130px]'>
          <h5 className='pb-3 font-bold text-h5 w-max'>Features</h5>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Business Marketing</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>User Analytic</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Live Chat</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Unlimited Support</button>
          </p>
        </div>
        <div className='flex flex-col gap-3 w-[130px]'>
          <h5 className='pb-3 font-bold text-h5 w-max'>Resources</h5>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>IOS & Android</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Watch a Demo</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>Customers</button>
          </p>
          <p className='font-semibold text-link w-max sm:text-mutedC text-lightTC'>
            <button>API</button>
          </p>
        </div>
        <div className='flex flex-col gap-3 w-full xs:w-[55vw] lg:w-max'>
          <h5 className='pb-3 font-bold text-h5'>Get In Touch</h5>
          <form className='relative w-full'>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-4 font-bold rounded-md focus:outline-primary text-firstTC placeholder:font-normal'
              required
            />
            <input
              type='submit'
              value='Subscribe'
              className='px-[8px] py-[16px] xxs:p-[16px] bg-primary rounded-md absolute text-sm font-semibold right-[1px] top-[2px]'
            />
            <p className='px-1 pt-2 text-xs font-normal text-mutedC'>
              Lorem ipsum dolor sit
            </p>
          </form>
        </div>
      </div>
      <div className='w-full text-left bg-secondary2 py-7 px-14 md:px-20 lg:px-24'>
        <p className='text-xs font-semibold lap:text-h6'>
          Made With Love By <br className='sm:hidden' /> Figmaland All Right
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
