import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='px-6 md:px-12 lg:px-24 relative'>
      <div className='hidden md:block absolute w-full md:w-[70vw] lg:w-[60vw] top-0 right-0 -z-10'>
        <Image src="/hero.png" alt="hero" width={1000} height={1000} className='w-full h-auto' />
      </div>
      <div className='customFontSection py-3 md:py-4 lg:py-5'>
        <h1 className='bg-gradient-to-b from-[#FFFFFF] to-[#858585] text-transparent bg-clip-text text-2xl md:text-2xl lg:text-3xl font-semibold'>AIOdyssey</h1>
      </div>
      <div className='mt-8 md:mt-20 lg:mt-28 z-10'>
        <div className='w-full md:w-[60vw] lg:w-[48vw] text-white text-4xl md:text-5xl lg:text-6xl leading-[45px] md:leading-[60px] lg:leading-[70px] italic'>Unlock the Future of AI 
        with Microsoft AI Odyssey</div>
        <div className='w-full md:w-[40vw] lg:w-[30vw] my-4 md:my-5 text-[#C6C6C6] text-lg md:text-xl'>
        Step into the future of AI with Microsoft Azure&apos;s certification course.
        </div>
        <div>
          <button className='bg-white text-black px-8 md:px-10 lg:px-12 py-[12px] md:py-[14px] rounded-full font-semibold text-sm md:text-base'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
