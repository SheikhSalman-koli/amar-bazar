import Image from 'next/image'
import React from 'react'

export default async function page({params}) {

   const id = await params?.id

   const res = await fetch(`http://localhost:3000/api/product/${id}`)
   const product =await res.json()
  //  console.log(product);


  return (
         <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 pt-24">
      {/* Left: Product Image */}
      <div className="flex justify-center items-center border rounded-xl p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        {/* have to fix the issue */}
              {/* <Image 
                  src={product?.image}
                  width={350}
                  height={380}
                  alt={product?.name}
                  className='w-80 object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105'
                /> */}
      </div>

      {/* Right: Product Info */}
      <div className="space-y-4">
        {/* Category + Ratings */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            {product.category}
          </span>
          <span>⭐ {product.ratings?.average} ({product.ratings?.totalReviews} reviews)</span>
        </div>

        {/* Product Name */}
        <h1 className="text-2xl font-semibold ">{product.name}</h1>

        {/* Description */}
        <p className="text-gray-500">{product.description}</p>

        {/* Price + Unit */}
        <div className="flex justify-between items-center border-t pt-3">
          <div>
            {product.discount?.isDiscounted ? (
              <div>
                <span className="text-red-600 font-bold text-xl">
                  {product.price - (product.price * product.discount.discountPercent) / 100} {product.currency}
                </span>
                <span className="line-through text-gray-400 ml-2">
                  {product.price} {product.currency}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold">{product.price} {product.currency}</span>
            )}
            <p className="text-gray-500 text-sm">per {product.unit}</p>
          </div>
        </div>

        {/* Stock */}
        <p className="text-sm text-gray-500">
          In Stock: <span className="font-medium">{product.stock}</span>
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {product.tags?.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 text-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  
  )
}
