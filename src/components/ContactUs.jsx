import React from "react";

const ContactUs = () => {
  return (
    <section className='bg-contactUs bg-center bg-cover w-full min-h-[100vh] font-bold flex flex-col items-center justify-between lg:items-start pt-20'>
      <div className='px-5 text-center text-lightTC xxs:text-left xxs:px-14 md:px-20 lg:px-24'>
        <h5 className='text-h5'>Contact Us</h5>
        <h2 className='text-3xl xs:text-h2'>Make an Appoinment</h2>
      </div>
      <div className='flex flex-col items-center w-full gap-5 py-10 lg:items-start ss:gap-7 px-14 md:px-20 lg:px-24'>
        <div className='flex flex-col justify-center w-full gap-5 ss:flex-row lg:justify-start'>
          <input
            type='text'
            placeholder='Full Name'
            className='text-sm rounded-[5px] px-[15px] py-[10px] focus:outline-primary'
          />
          <input
            type='email'
            placeholder='example@gmail.com'
            className='text-sm rounded-[5px] px-[15px] py-[10px] focus:outline-primary'
          />
        </div>
        <div className='flex flex-col justify-center w-full gap-5 ss:flex-row lg:justify-start'>
          <div>
            <select className='appearance-none text-sm rounded-[5px] px-[15px] py-[10px] bg-white bg-arrow bg-no-repeat bg-arrowSize bg-arrowPosition text-gray-400 relative w-full appearance ss:w-[225px] focus:outline-primary'>
              <option disabled selected className='font-bold'>
                Please Select
              </option>
            </select>
          </div>
          <div>
            <select className='appearance-none text-sm rounded-[5px] px-[15px] py-[10px] bg-white bg-arrow bg-no-repeat bg-arrowSize bg-arrowPosition text-gray-400 w-full ss:w-[225px] focus:outline-primary'>
              <option disabled selected className='font-bold'>
                4:00 Available
              </option>
            </select>
          </div>
        </div>
        <textarea
          placeholder='Message'
          className='rounded-md px-7 py-4 h-36 text-start focus:outline-primary resize-none w-full ss:w-[470px]'
        />
        <button className='text-lightTC bg-primary px-[40px] py-5 rounded-md w-full mb-16 max-w-[470px]'>
          Book Appointment
        </button>
      </div>
      <div className='flex flex-col items-center w-full gap-5 py-7 bg-lightBackground px-14 md:px-20 lg:px-24 sm:flex-row'>
        <div className='w-full text-center'>
          <h3 className='text-lg font-bold xs:text-h3 text-firstTC'>
            Consulting Agency For Your Business
          </h3>
          <p className='pt-4 text-sm font-medium xs:text-p text-secondTC'>
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <button className='text-lightTC bg-primary px-[40px] py-5 rounded-md w-full mt-2 sm:mt-0'>
          Book Appointment
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
