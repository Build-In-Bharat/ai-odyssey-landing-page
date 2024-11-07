import React from 'react'
import Image from 'next/image'

interface CardData {
  heading: string;
  description: string;
}

const Card = ({ heading, description }: CardData) => {
  return (
    <div className='p-[2px] bg-gradient-to-br from-[#C14F52] to-[#5327E0] w-[300px] rounded-3xl'>
      <div className='bg-[#010101] h-full py-6 lg:py-8 px-4 lg:px-5 rounded-3xl'>
        <div className='text-[#48A4EF] text-2xl lg:text-3xl font-semibold mb-2 lg:mb-3'>{heading}</div>
        <div className='text-[#C6C6C6] text-base lg:text-lg'>{description}</div>
      </div>
    </div>
  )
}

const Second = () => {
  const cards: CardData[] = [
    {
      heading: "Professional Growth",
      description: "Stay ahead in the AI landscape."
    },
    {
      heading: "Verified by Microsoft:", 
      description: "Globally recognized certification."
    },
    {
      heading: "Practical Learning:",
      description: "Hands-on experience with Azure AI technologies."
    }
  ]

  return (
    <div className='px-6 md:px-12 lg:px-24 mt-16 md:mt-32 lg:mt-56 lg:min-h-[70vh] relative mb-8'>
      <div className='hidden lg:block lg:absolute w-[40vw] top-0 left-0 -z-10'>
        <Image src="/second.png" alt="second" width={1000} height={1000} />
      </div>
      <div className='w-full lg:absolute lg:w-[55vw] lg:left-[60%] lg:transform lg:-translate-x-1/2'>
        <div className='text-white w-full lg:w-[25vw] text-3xl md:text-4xl lg:text-5xl italic mb-6 lg:mb-8 leading-[40px] lg:leading-[55px]'>
          <div>Accelerate</div>
          <div>Your AI Journey</div>
        </div>
        <div className='flex flex-wrap md:flex-nowrap md:flex-row gap-6 lg:gap-10'>
          {cards.map((card, index) => (
            <Card 
              key={index}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Second
