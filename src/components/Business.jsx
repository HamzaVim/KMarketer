import React from 'react'
import VideoImg from '../assets/videoImage.png'
import playIcon from '../assets/playIcon.svg'

const Business = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-black bg-twoBC w-full px-14 md:px-20 lg:px-24 py-16 text-lightTC text-center'>
        <h2 className='font-bold pb-5'>We are providing best <br className='hidden sm:block' /> business service.</h2>
        <p className='paragraph pb-10'>Problems trying to resolve the conflict between <br className='hidden sm:block' /> the two major realms of Classical physics: Newtonian mechanics </p>
        <div className='videoImgG min-h-[442px] xl:h-[600px] w-full flex justify-center items-center'>
          <div className='bg-secondary1 w-[98px] h-[98px] rounded-full flex justify-center items-center cursor-pointer'>
            <img src={playIcon} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Business