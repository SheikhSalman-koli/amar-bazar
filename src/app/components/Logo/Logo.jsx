import Image from 'next/image'
import React from 'react'
import hero1 from '../../../../public/assets/hero-1.png'
import { Nunito } from 'next/font/google'


const nunito = Nunito({
  weight: ['400', '600'],
  subsets: ['latin']
})

export default function Logo() {

  return (
  <div className='hidden lg:block'>
      <div className='flex items-center gap-1 '>
      <div className='w-[50px] h-[50px] rounded-full border-2 border-[#799EFF] overflow-hidden '>
        <Image
          src={hero1}
          width={45}
          height={45}
          alt='logo'
        />
      </div>
      <h3 className={`text-[#799EFF] font-bold text-2xl ${nunito.className}`}>Organic</h3>
    </div>
  </div>
  )
}
