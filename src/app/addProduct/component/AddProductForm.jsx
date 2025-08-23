"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function AddProductForm() {

  const [loader, setLoader] = useState(false)

  const {
    register,      // ✅ comes from useForm()
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const handleAddProduct =async (data) => {
    setLoader(true)
    data.price = parseInt(data.price)
    data.stock = parseInt(data.stock)

    data.discount = {
      isDiscounted: data.isDiscounted === "true",
      discountPercent: parseInt(data.discountPercent),
    }

    data.ratings = {
      average: parseFloat(data.average),       // keeps decimal
      totalReviews: parseInt(data.totalReviews)
    };
    data.tags = data.tags.split(",").map((tag) => tag.trim());
  
    reset()

    const res =await fetch(`http://localhost:3000/api/addProduct`,{
      method: "POST",
      body: JSON.stringify(data)
    })
    const parsedData = await res.json()
    if(parsedData?.insertedId){
      setLoader(false)
      Swal.fire({
        icon: "success",
        text: "Product added successfully!"
      })
    }
    // console.log(parsedData);
  }


  return (
    <div>
          <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
        
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input {...register("name")} className="w-full p-2 border rounded" required/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input {...register("category")} className="w-full p-2 border rounded" required/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea {...register("description")} className="w-full p-2 border rounded" required/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input type="number" step="0.01" {...register("price")} className="w-full p-2 border rounded" required/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Currency</label>
          <input {...register("currency")} placeholder="e.g. BDT, USD" className="w-full p-2 border rounded" required/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Unit</label>
          <input {...register("unit")} placeholder="e.g. kg, piece" className="w-full p-2 border rounded" required/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input type="number" {...register("stock")} className="w-full p-2 border rounded" required/>
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input {...register("image")} className="w-full p-2 border rounded" required/>
        </div>

        {/* Discount Section */}
        <div>
          <label className="block mb-1 font-medium">Discount Available?</label>
          <select {...register("isDiscounted")} className="w-full p-2 border rounded">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Discount Percent</label>
          <input type="number" {...register("discountPercent")} className="w-full p-2 border rounded" />
        </div>

        {/* Ratings Section */}
        <div>
          <label className="block mb-1 font-medium">Average Rating</label>
          <input type="number" step="0.1" {...register("average")} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Total Reviews</label>
          <input type="number" {...register("totalReviews")} className="w-full p-2 border rounded" />
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-1 font-medium">Tags</label>
          <input {...register("tags")} placeholder="comma separated (e.g. organic, fresh)" className="w-full p-2 border rounded" />
        </div>

        <button type="submit" className="w-full bg-[#799EFF] text-white py-2 rounded hover:bg-blue-500">
          {loader ? (<span className="loading loading-spinner text-warning"></span>) : "Add Product"}
        </button>
      </form>
    </div>
  )
}
