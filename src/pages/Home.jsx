import React from 'react'
// import { Link } from 'react-router-dom'
import { IoGlobeOutline, IoPlayCircleOutline } from 'react-icons/io5'
import { container_hanging3, container_stack1, freight_support3, freight_transport1, freight_transport3 } from '../assets/images'
import Button from '../components/Button'
import { deliveries, steps } from '../data'
import { Banner, DeliveryCard, StepCard } from '../components'

export default function Home() {
  return (
    <main className="relative flex flex-col bg-white">
      <section className="hero relative flex flex-col px-5 md:py-20 overflow-hidden">
        <img src={container_hanging3} alt="background slide" className="absolute h-full w-full top-0 sm:left-[20%] md:left-[5%] md:scale-x-[1.5] md:scale-y-[1.2] object-cover md:object-contain" />
        <div className="container mx-auto max-w-[1024px] relative flex flex-col gap-4 pb-10 pt-14 sm:py-5">
          <div className="flex justify-between md:items-center flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-slate-700 text-5xl sm:text-6xl font-normal max-w-md">We will <span className="text-orange-500">Deliver</span> your <span className="text-orange-500">Package</span></h2>
              <Button text={"Get in Touch"} to={"/contact"} key={181} />
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
      <section className="bg-slate-900 rounded-[1rem] overflow-hidden mt-5 px-5 py-20 relative">
        <IoGlobeOutline className="absolute text-9xl opacity-10 scale-[4] -top-[10%] left-[70%] rotate-[35deg] text-slate-500" />
        <div className="container relative mx-auto max-w-[1024px] flex flex-col items-stretch sm:grid sm:grid-cols-2 gap-5">
          <div className="flex flex-[370px] sm:flex-1 relative rounded-tr-[3.1rem] rounded-bl-[3.1rem] rounded-none border-[12px] border-slate-900 overflow-hidden">
            <img src={container_stack1} alt="" className="absolute top-0 left-0 w-full h-full" />
            <div className="absolute top-0 left-0 w-[200px] h-[150px] md:w-[250px] md:h-[200px] rounded-none rounded-br-[2.5rem] border-[12px] border-slate-900 bg-slate-900">
              <img src={freight_transport1} alt="" className="object-cover w-full h-full rounded-[2rem]" />
            </div>
            <div className="absolute bottom-0 right-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-tl-[2.5rem] border-[12px] bg-slate-900 border-slate-900" >
              <img src={freight_support3} alt="" className="absolute object-cover w-full h-full rounded-[2rem]" />
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5 md:pt-10 pb-5 justify-end max-w-md">
            <div className="flex flex-col">
              <p className="text-white text-2xl font-thin">We are</p>
              <p className="text-orange-500 text-4xl font-medium">#1 Logistics</p>
              <p className="text-white py-2 text-5xl font-thin uppercase">Worldwide</p>
            </div>
            <p className="text-slate-50/50 text-sm md:text-base leading-loose sm:max-w-xs">We are an international scale company that has been trusted by all corners of the world. Use our company to expedite your package delivery!</p>
            <div className="flex gap-3 py-3">
              <Button text={"Get in Touch"} to={"/contact"} key={181} />
              <Button icon={<IoPlayCircleOutline className="text-lg text-white capitalize" />} text={"Watch Video"} className={'bg-transparent text-slate-50 border-slate-50 border-[1px]'} to={"/contact"} key={182} />
            </div>
          </div>
        </div>
      </section>
      <section className="steps bg-gray-50 px-5 py-20">
        <div className="container mx-auto max-w-[1024px] flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:justify-beween md:items-center">
            <h2 className="text-slate-900 text-4xl font-normal max-w-sm"><span className="text-orange-500">Everything</span> you need we have!</h2>
            <p className="sm:ml-auto text-slate-600 text-sm md:text-base leading-relaxed max-w-lg sm:max-w-xs">We treat customers like KING. Everything you need, everything is guaranteed and fast with Retrogistics!</p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 grid-flow-dense md:grid-cols-4 gap-4 py-10">
            {
              steps.map((step, index) => (<StepCard key={step.id} {...step} index={index} />))
            }
          </div>
        </div>
      </section>
      <Banner key={9237} title="Are You Ready to Get Started" image={freight_transport3} text={"Start Shipping Now"} to="/contact"  />
      <section className="delivery bg-gray-50 px-5 py-20">
        <div className="container mx-auto max-w-[1024px] flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:justify-beween md:items-center">
            <h2 className="text-slate-900 text-4xl font-normal max-w-sm">Delivery of your <span className="text-orange-500">Package!</span></h2>
            <p className="sm:ml-auto text-slate-600 text-sm md:text-base leading-relaxed max-w-lg sm:max-w-xs">We provide all access to simplify and expedite your packge delivery. Retrogistics gives you the best!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] justify-center gap-4 py-10">
            {
              deliveries.map((delivery, index) => (<DeliveryCard key={delivery.id} {...delivery} />))
            }
          </div>
        </div>
      </section>
    </main>
  )
}
