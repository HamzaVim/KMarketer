import React from "react";
import { team } from "../assets/texts";

const OurTeam = ({ Twitter, Instagram, Facebook }) => {
  const teamCard = (employe) => {
    return (
      <div
        key={employe.id}
        className='bg-lightBackground w-[328px] pb-5 xs:pb-7'>
        <img
          src={employe.img}
          className='w-full object-cover mb-7 max-h-[232px]'
          alt={employe.position}
        />
        <p className='font-bold text-h5'>{employe.name}</p>
        <p className='pt-1 pb-2 text-h6 text-secondTC'>{employe.position}</p>
        <div className='flex justify-center gap-5'>
          <Facebook className='cursor-pointer text-secondary1 w-7 h-7' />
          <Instagram className='cursor-pointer text-secondary1 w-7 h-7' />
          <Twitter className='cursor-pointer text-secondary1 w-7 h-7' />
        </div>
      </div>
    );
  };

  return (
    <section className='flex flex-col items-center w-full py-20 text-center bg-darkBackground px-14 md:px-20 lg:px-24'>
      <div className='flex flex-col items-center text-white '>
        <h2 className='mb-5 text-3xl font-bold xs:text-h2'>Meet Our Team</h2>
        <p className='text-sm font-medium xs:text-p'>
          Problems trying to resolve the conflict between{" "}
          <br className='hidden sm:block' /> the two major realms of Classical
          physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className='flex flex-wrap justify-center flex-1 w-full gap-5 mt-16 md:flex-nowrap'>
        {team.map((employe) => teamCard(employe))}
      </div>
    </section>
  );
};

export default OurTeam;
