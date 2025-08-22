import dbconnect, { collectionName } from '@/lib/dbconnect'
import React from 'react'
import ProductCard from './components/ProductCard'
import { Nunito } from 'next/font/google' 

const nunito = Nunito({
    weight: ['400','600'],
    subsets: ['latin']
})

export default async function page() {

  const allProducts = await dbconnect(collectionName.PRODUCTS).find().toArray()

  return (
    <div className='pt-24 px-2 lg:px-12 pb-8'>
        <h1 className={`text-3xl font-bold ${nunito.className} text-[#799EFF] mb-4`}>All Products</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {allProducts.map(p => 
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
