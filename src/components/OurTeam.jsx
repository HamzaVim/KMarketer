import React from 'react'
import { team } from '../assets/texts'
// import {FaTwitter, FaInstagram, FaFacebookSquare} from 'react-icons/fa'

const OurTeam = ({Twitter, Instagram, Facebook}) => {

  const teamCard = employe => {
    return  <div key={employe.id} className='bg-lightBackground w-[328px] h-[373px]'>
              <img src={employe.img} className='w-full object-cover mb-7 max-h-[232px]' alt={employe.position} />
              <p className='h5 font-bold'>{employe.name}</p>
              <p className='h6 text-secondTC pt-1 pb-2'>{employe.position}</p>
              <div className='flex justify-center gap-5'>
                <Facebook className='text-secondary1 w-7 h-7 cursor-pointer' />
                <Instagram className='text-secondary1 w-7 h-7 cursor-pointer' />
                <Twitter className='text-secondary1 w-7 h-7 cursor-pointer' />
              </div>
            </div>
  }

  return (
    <section className='bg-darkBackground text-center w-full flex flex-col items-center py-20 px-14 md:px-20 lg:px-24'>
        <div className=' flex flex-col items-center text-white'>
            <h2 className='font-bold'>Meet Our Team</h2>
            <p className='font-medium paragraph'>Problems trying to resolve the conflict between <br className='hidden sm:block' /> the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className='flex flex-1 flex-wrap md:flex-nowrap justify-center w-full mt-16 gap-5'>
            {
              team.map(employe => teamCard(employe))
            }
        </div>
    </section>
  )
}

export default OurTeam