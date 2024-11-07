import React from 'react'
import { Card as UICard } from '@/components/ui/card'

interface CardComponentProps {
  heading: string;
  description: string;
}

const CardComponent = ({ heading, description }: CardComponentProps) => {
  return (
    <UICard className='w-fit p-6 rounded-3xl bg-[#010101] relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-br before:from-[#C14F52] before:to-[#5327E0] before:rounded-3xl before:-z-10'>
      <div className='text-[#48A4EF] text-3xl font-semibold mb-3'>{heading}</div>
      <div className='text-[#C6C6C6] text-lg'>{description}</div>
    </UICard>
  )
}

export default CardComponent
