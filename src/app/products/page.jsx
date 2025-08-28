
import React from 'react'
import ProductCard from '../components/card/ProductCard'
import { Nunito } from 'next/font/google'
import { headers } from 'next/headers';

const nunito = Nunito({
  weight: ['400', '600'],
  subsets: ['latin']
})

export default async function page() {

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`,{
        headers: new Headers(await headers()) 
   })
   const allProducts =await res?.json()
  // console.log(allProducts);

  return (
    <div className='pt-24 px-2 lg:px-12 pb-8'>
      <h1 className={`text-3xl font-bold ${nunito.className} text-[#799EFF] mb-4`}>All Products</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {allProducts?.map(p =>
        (<ProductCard
          key={p?._id}
          product={p}
          nunito={nunito}
        />)
        )}
      </div>
    </div>
  )
}
