import React from 'react'
import fullStar from '../assets/stars/full-star.svg'
import halfStar from '../assets/stars/half-star.svg'
import noneStar from '../assets/stars/none-star.svg'
import {motion} from 'framer-motion'

const FeedbackCard = ({comments, item}) => {

    const addStars = (n, name) => {

        const stars = []

        for (let i = 0; i < Math.floor(n); i++) {
            stars.push(<img key={`star-${i}`} src={fullStar} />)
        }

        if (n - Math.floor(n) === .5) {
            stars.push(<img key={`star-${n}`} src={halfStar} />)
            n++
        }

        for (let i = Math.floor(n); i < 5; i++) {
            stars.push(<img key={`star-${i}`} src={noneStar} />)
        }

        return (<div className='flex w-[115px]' title='stars'>
            {
                stars.map(star => star)
            }
        </div>)
    }

  return (
    <>
        {
            comments.map(comment => (
                <motion.div 
                variants={item}
                viewport={{once: true}}
                key={comment.id} className='bg-lightBackground rounded-md text-black w-[300px] h-[19.9rem] p-7 flex flex-col text-left'>
                    {
                        addStars(comment.stars, comment.name)
                    }
                    <p className='text-secondTC py-5 font-semibold'>{comment.text}</p>
                    <div className='flex gap-3'>
                        <div>
                            <img src={comment.img} alt="" />
                        </div>
                        <div className='flex flex-col h6 font-semibold'>
                            <p className='text-primary h6 font-semibold'>{comment.name}</p>
                            <p className='h6 font-semibold text-firstTC'>{comment.job}</p>
                        </div>
                    </div>
                </motion.div>
            ))
        }
    </>
  )
}

export default FeedbackCard