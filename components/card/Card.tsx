import React from 'react'
import Image from 'next/image'

interface CardProps {
  title?: string
  text: string
  image?: any
}

const Card = ({ title, text, image }: CardProps) => {
  return (
    <div className='w-8/12 flex flex-col md:flex-row columns-2 rounded-lg min-h-[300px] shadow-lg backdrop-blur-sm '>
      <div className={`flex flex-col justify-center  rounded-lg ${image ? 'w-full md:w-6/12' : 'w-full'} p-8 bg-white opacity-60 `}>
        <h3 className='text-[22px] font-bold mb-3'>{title}</h3>
        <p>{text}</p>
      </div>
      {image && (
        <div className='w-full md:w-6/12 '>
          <img className='object-cover min-h-full rounded-b-lg md:rounded-l-[0px] md:rounded-r-lg' src={image} alt='my image' />
        </div>
      )}
    </div>
  )
}

export default Card
//style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
