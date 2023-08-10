import React from 'react'
import { Link } from 'react-router-dom'
import { container_hanging3 } from '../assets/images'

export default function Home() {
  return (
    <main className="relative flex flex-col py-10 md:py-20 px-5 bg-white">
        <img src={container_hanging3} alt="background slide" className="absolute h-full w-full top-0 md:-top-[10%] sm:left-[20%] md:left-[5%] md:scale-x-75 md:scale-y-150 object-cover md:object-fill" />
      <div className="container mx-auto max-w-[1096px] relative flex flex-col gap-4">
        <div className="flex justify-between md:items-center flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-slate-700 text-5xl sm:text-6xl font-normal max-w-md">We will <span className="text-orange-500">Deliver</span> your <span className="text-orange-500">Package</span></h2>
            <Link to={"/contact"} className="py-2 px-5 bg-orange-500 text-sm md:text-base text-slate-50 w-max rounded-[2rem]  hover:bg-orange-600 md:rounded-2rem md:text-center">{"Get in Touch"}</Link>
          </div>
          <p className="text-slate-600 text-sm md:text-base sm:bg-gray-50/50 md:text-right leading-loose max-w-xs">Trust your package to us, we have been trusted by the whole world, your package is safe with us!</p>
        </div>
        <div className="flex flex-row flex-wrap max-w-md pt-5">
          <div className="flex flex-col flex-1 py-2">
            <h3 className="font-bold text-orange-500 text-2xl md:text-3xl">10+</h3>
            <p className="text-xs text-orange-500">Years of Experience</p>
          </div>
          <div className="flex flex-col flex-1 py-2">
            <h3 className="font-bold text-slate-700 text-2xl md:text-3xl">18+</h3>
            <p className="text-xs text-slate-700">Offices</p>
          </div>
          <div className="flex flex-col flex-1 py-2">
            <h3 className="font-bold text-slate-700 text-2xl md:text-3xl">20+</h3>
            <p className="text-xs text-slate-700">Vehicles</p>
          </div>
        </div>
      </div>
    </main>
  )
}
