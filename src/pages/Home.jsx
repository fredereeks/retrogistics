import React from 'react'
import { Link } from 'react-router-dom'
import {IoPlayCircleOutline} from 'react-icons/io5'
import { container_hanging3, container_stack1, freight_support3, freight_transport1 } from '../assets/images'

export default function Home() {
  return (
    <main className="relative flex flex-col bg-white">
      <section className="relative flex flex-col px-5 md:py-20 overflow-hidden">
        <img src={container_hanging3} alt="background slide" className="absolute h-full w-full top-0 sm:left-[20%] md:left-[5%] md:scale-x-[1.5] md:scale-y-[1.2] object-cover md:object-contain" />
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
      </section>
      <section className="bg-slate-900 rounded-[1rem] overflow-hidden my-5 px-5 py-10">
        <div className="container max-w-[1096px] flex flex-col items-stretch sm:grid sm:grid-cols-2 gap-5">
          <div className="flex flex-[370px] sm:flex-1 relative rounded-[3.1rem] border-[12px] border-slate-900 overflow-hidden">
            <img src={container_stack1} alt="" className="absolute top-0 left-0 w-full h-full" />
            <img src={freight_transport1} alt="" className="absolute object-cover top-0 left-0 w-[200px] h-[150px] md:w-[250px] md:h-[200px] rounded-[2rem] border-[12px] border-slate-900" />
            <img src={freight_support3} alt="" className="absolute object-cover bottom-0 right-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-[2rem] border-[12px] border-slate-900" />
          </div>
          <div className="flex flex-col gap-5 py-5 md:pt-10 pb-5 justify-end max-w-md">
            <div className="flex flex-col">
              <p className="text-white text-2xl font-thin">We are</p>
              <p className="text-orange-500 text-4xl font-medium">#1 Logistics</p>
              <p className="text-white py-2 text-5xl font-thin uppercase">Worldwide</p>
            </div>
            <p className="text-slate-50/50 text-sm md:text-base leading-loose max-w-xs">We are an international scale company that has been trusted by all corners of the world. Use our copany to expedite your package delivery!</p>
            <div className="flex gap-3 py-3">
              <Link to={"/contact"} className="py-2 px-5 md:px-7 bg-orange-500 text-sm text-slate-50 w-max rounded-[2rem]  hover:bg-orange-600 md:rounded-2rem md:text-center uppercase">Get in Touch</Link>
              <Link to={"/contact"} className="py-2 px-5 md:px-7 border-slate-50 border-[1px] text-sm text-slate-50 w-max rounded-[2rem] md:rounded-2rem md:text-center uppercase flex items-center gap-2"><IoPlayCircleOutline className="text-lg text-white" /> Watch Video</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
