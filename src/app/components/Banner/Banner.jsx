"use client"
import Image from 'next/image'
import React from 'react'
import hero1 from '../../../../public/assets/hero-1.png'
import hero2 from '../../../../public/assets/hero-2.png'
import hero3 from '../../../../public/assets/hero-3.png'
import { Nunito } from "next/font/google";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';


const nunito = Nunito({
    weight: ['400', '600', "700"],
    subsets: ['latin']
})

export default function Banner() {
    return (
        <div>
            <Splide
                 options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 2000,
                    pauseOnHover: true,
                    perPage: 1,
                }}  
            >
                <SplideSlide>
                    <section className="relative overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
                        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
                            <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                                {/* Left: Title & Text */}
                                <div className="space-y-6 flex-1">
                                    <p className="max-w-prose text-base text-gray-600 sm:text-lg">
                                        flat 30% off
                                    </p>
                                    <h1 className={`text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl lg:text-5xl ${nunito.className}`} >
                                        Explore <span className='text-[#799EFF]'>Healthy</span> & Fresh Fruites
                                    </h1>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                             className="px-4 py-2 rounded-xl border-1 hover:text-white hover:bg-[#799EFF] transition"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>


                                {/* Right: Image */}
                                <div className="relative flex-1">
                                    <div className="relative mx-auto w-full max-w-xl flex justify-center">
                                        <Image
                                            src={hero1}
                                            width={500}
                                            height={450}
                                            alt='hero-1'
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </SplideSlide>

                <SplideSlide>
                    <section className="relative overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
                        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
                            <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                                {/* Left: Title & Text */}
                                <div className="space-y-6 flex-1">
                                    <p className="max-w-prose text-base text-gray-600 sm:text-lg">
                                        flat 20% off
                                    </p>
                                    <h1 className={`text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl lg:text-5xl ${nunito.className}`} >
                                        Explore <span className='text-[#799EFF]'>Organic</span> & Fresh Vegetables
                                    </h1>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            className="px-4 py-2 rounded-xl border-1 hover:text-white hover:bg-[#799EFF] transition"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>


                                {/* Right: Image */}
                                <div className="relative flex-1 mt-3">
                                    <div className="relative mx-auto w-full max-w-xl flex justify-center">
                                        <Image
                                            src={hero3}
                                            width={500}
                                            height={450}
                                            alt='hero-1'
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </SplideSlide>

                <SplideSlide>
                    <section className="relative overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
                        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
                            <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                                {/* Left: Title & Text */}
                                <div className="space-y-6 flex-1">
                                    <p className="max-w-prose text-base text-gray-600 sm:text-lg">
                                        flat 25% off
                                    </p>
                                    <h1 className={`text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl lg:text-5xl ${nunito.className}`} >
                                        Explore <span className='text-[#799EFF]'>Worm</span> Fast-Food & Snacks
                                    </h1>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                             className="px-4 py-2 rounded-xl border-1 hover:text-white hover:bg-[#799EFF] transition"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>


                                {/* Right: Image */}
                                <div className="relative flex-1">
                                    <div className="relative mx-auto w-full max-w-xl flex justify-center">
                                        <Image
                                            src={hero2}
                                            width={500}
                                            height={450}
                                            alt='hero-1'
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </SplideSlide>
            </Splide>

        </div>



    )
}
