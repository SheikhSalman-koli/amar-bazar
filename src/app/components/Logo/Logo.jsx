import Image from 'next/image'
import React from 'react'
import hero1 from '../../../../public/assets/hero-1.png'

export default function Logo() {
  return (
    <div className='w-[50px] h-[50px] rounded-full border-2 border-[#799EFF] overflow-hidden ml-3 lg:ml-0'>
        
        <Image
        src={hero1}
        width={50}
        height={50}
        alt='logo'
        />
    </div>
  )
}
