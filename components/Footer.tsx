import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#151515] px-6 md:px-12 lg:px-24 py-4 md:py-5'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
        <div className='flex gap-3 md:gap-4'>
          <Link href="/" className='cursor-pointer'>
            <Image src="/linkedin.png" alt="logo" width={40} height={40} className='w-[35px] md:w-[40px] lg:w-[50px]' />
          </Link>
          <Link href="/" className='cursor-pointer'>
            <Image src="/x.png" alt="logo" width={40} height={40} className='w-[35px] md:w-[40px] lg:w-[50px]' />
          </Link>
          <Link href="/" className='cursor-pointer'>
            <Image src="/instagram.png" alt="logo" width={40} height={40} className='w-[35px] md:w-[40px] lg:w-[50px]' />
          </Link>
          <Link href="/" className='cursor-pointer'>
            <Image src="/facebook.png" alt="logo" width={40} height={40} className='w-[35px] md:w-[40px] lg:w-[50px]' />
          </Link>
          <Link href="/" className='cursor-pointer'>
            <Image src="/youtube.png" alt="logo" width={40} height={40} className='w-[35px] md:w-[40px] lg:w-[50px]' />
          </Link>
        </div>
        <div className='text-base md:text-lg lg:text-xl text-white flex mt-1 hover:underline cursor-pointer text-center'>
          Privacy Policy | Terms & Conditions
        </div>
      </div>
    </div>
  )
}

export default Footer
