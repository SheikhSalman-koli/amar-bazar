import React from 'react'
import AddProductForm from './component/AddProductForm'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
    weight: ['400','600'],
    subsets: ['latin']
})
export default function AddProduct() {

  return (
    <div className='pt-24 pb-8 px-3'>
        <div className="max-w-4xl mx-auto p-6 border-1 shadow-lg rounded-2xl">
      <h2 className={`text-3xl font-bold mb-6 ${nunito.className}`}>Add New Product</h2>

     <AddProductForm />
    </div>
    </div>
  )
}
