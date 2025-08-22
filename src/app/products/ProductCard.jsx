import Image from 'next/image'
import React from 'react'

export default function ({product, ninuto}) {

  return (
     <div className=" rounded-xl overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="flex justify-center p-3">
        <Image 
          src={product.image}
          width={250}
          height={260}
          alt={product.name}

        />
        {/* <img
          className=" object-contain"
        /> */}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Content */}
      <div className="p-4 space-y-1">
        {/* Category + Ratings */}
        <div className="flex justify-between text-sm text-gray-500">
          <span className="capitalize">{product.category}</span>
          <span>⭐ {product.ratings.average}</span>
        </div>

        {/* Name */}
        <h2 className={`text-lg font-bold text-gray-800 ${ninuto.className} hover:text-[#799EFF]`}>{product.name}</h2>

        {/* Price + Unit */}
        <div className="flex justify-between text-gray-700 text-sm">
          <span>{product.price}: {product.currency}</span>
          <span>/{product.unit}</span>
        </div>
      </div>
    </div>
  )
}
