import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ({product, nunito}) {

  return (
     <div className=" rounded-xl overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="flex justify-center p-3 overflow-hidden">
        {/* <Image 
          src={product?.image}
          width={250}
          height={260}
          alt={product?.name}
          className='transition-transform duration-300 ease-in-out hover:scale-120'
        /> */}
        <img
          src={product?.image}
          alt={product?.name}
          className='transition-transform duration-300 ease-in-out hover:scale-120'
        /> 
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Content */}
      <div className="p-4 space-y-1">
        {/* Category + Ratings */}
        <div className="flex justify-between text-sm text-gray-500">
          <span className="capitalize">{product?.category}</span>
          <span>⭐ {product?.ratings?.average}</span>
        </div>

        {/* Name */}
        <h2 className={`text-lg font-bold  ${nunito?.className} hover:text-[#799EFF]`}>{product?.name}</h2>

        {/* Price + Unit */}
        <div className="flex justify-between  text-sm">
          <span>{product?.price}: {product?.currency}</span>
          <span>per: {product?.unit}</span>
        </div>

        <div className='mt-4'>
          <Link 
           href={`/products/${product?._id}`}
           className='bg-[#799EFF] text-white rounded px-4 py-2 hover:bg-blue-500 transition'
           >Details</Link>
        </div>
      </div>
    </div>
  )
}
