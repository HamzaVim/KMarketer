import React from "react";
import playIcon from "../assets/playIcon.svg";

const Business = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full py-16 text-center bg-black bg-twoBC px-14 md:px-20 lg:px-24 text-lightTC'>
      <h2 className='mb-5 text-3xl font-bold xs:text-h2'>
        We are providing best <br className='hidden sm:block' /> business
        service.
      </h2>
      <p className='pb-10 text-sm xs:text-p'>
        Problems trying to resolve the conflict between{" "}
        <br className='hidden sm:block' /> the two major realms of Classical
        physics: Newtonian mechanics
      </p>
      <div className='bg-videoImg bg-center bg-cover min-h-[442px] xl:h-[600px] w-full flex justify-center items-center'>
        <div className='bg-secondary1 w-[80px] h-[80px] sm:w-[98px] sm:h-[98px] rounded-full flex justify-center items-center cursor-pointer'>
          <img src={playIcon} alt='' className='ml-[6px]' />
        </div>
      </div>
    </section>
  );
};

export default Business;
