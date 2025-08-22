import dbconnect, { collectionName } from '@/lib/dbconnect'
import React from 'react'
import ProductCard from './ProductCard';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
    weight: ['400','600'],
    subsets: ['latin']
})

export default async function Products() {

    const products =await dbconnect(collectionName.PRODUCTS).find().limit(4).toArray()
    // console.log(products);


  return (
    <div className='px-2 space-y-8 lg:px-12'>
       <div className='space-y-2'>
         <h1 
        className={`text-3xl font-bold ${nunito.className}`}
        >New <span className='text-[#977EFF]'>Arrivals</span></h1>
        <p>Shop online for new arrivals and get free shipping!</p>
       </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map(p => 
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
