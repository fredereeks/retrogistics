import React from 'react'
import { Banner, BreadCrumb, Button, StepCard, WorkingCard } from '../components'
import { container_hanging4, freight_transport2 } from '../assets/images'
import { steps, workings } from '../data'

export default function About() {
  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} title={"About"} />
      <section className="smart relative px-5 py-20 bg-white">
        <div className="container max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-6 py-10">
          <div className="flex flex-col gap-6 py-5 relative z-10">
            <h2 className="text-slate-900 text-4xl sm:text-6xl font-normal max-w-lg">The <span className="text-orange-500">Best</span> & Smart Way to <span className="text-orange-500">Ship</span>!</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">Ship with confidence, knwoing you are getting savings of up to 84% off fromt he top carriers. Over 130,000 merchants save more money, print faster and spend less time shipping</p>
            <Button text={"Learn More"} key={1694} to={"/contact"} />
          </div>
          <div className="grid place-items-center relative">
            {/* <img src={container_hanging1} alt="background slide" className="absolute h-full w-full top-0 sm:left-[20%] md:left-[5%] md:scale-x-[1.5] md:scale-y-[1.2] object-cover md:object-contain" /> */}
            <img src={container_hanging4} alt="" className="relative scale-150 top-0 right-0 w-full h-full max-w-4xl object-cover" />
            <div className="absolute h-80 w-80 bg-gray-100 opacity-50 rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
            <aside className="absolute -left-1 sm:-left-8 top-0 bg-white w-60 sm:w-80 shadow-lg shadow-[#23204250] rounded-md p-4 pl-9 flex flex-col gap-2">
              <p className={`relative before:[content:'"'] before:font-serif before:text-6xl before:absolute before:-rotate-12 before:font-bold before:text-orange-300 before:-translate-x-7 text-xs text-slate-500`}>T'Was great working with your company. Elder Fredericks was much helpful in coordinating the transport. </p>
              <h6 className="text-slate-700 text-sm sm:text-[.9rem] font-medium">Loyal Customer</h6>
            </aside>
            <aside className="absolute left-8 top-3/4 bg-white w-60 sm:w-80 shadow-lg shadow-[#23204250] rounded-md p-4 pl-9 flex flex-col gap-2">
              <p className={`relative before:[content:'"'] before:font-serif before:text-6xl before:absolute before:-rotate-12 before:font-bold before:text-orange-300 before:-translate-x-7 text-xs text-slate-500`}>A very good service. The driver was prompt both at pickup and delivery. Shout to Mr. Omar for being supportive and cooperative throughout. Will sure call again. </p>
              <h6 className="text-slate-700 text-sm sm:text-[.9rem] font-medium">Loyal Customer</h6>
            </aside>
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
      <Banner key={9237} title="Are You Ready to Get Started" image={freight_transport2} text={"Start Shipping Now"} to="/contact" />
      <section className="workings py-20 bg-gray-50 px-5">
        <div className="container max-w-[1024px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-slate-600 text-sm sm:text-base font-medium">How it works</p>
            <h2 className="text-slate-900 text-4xl font-normal max-w-sm"><span className="text-orange-500">Most Affordable</span> Way to Ship Products!</h2>
            {/* <p className="sm:ml-auto text-slate-600 text-sm md:text-base leading-relaxed max-w-lg sm:max-w-xs">We treat customers like KING. Everything you need, everything is guaranteed and fast with Retrogistics!</p> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-dense lg:grid-cols-4 gap-4 py-10">
            {
              workings.map((working, index) => (<WorkingCard key={working.id} {...working} />))
            }
          </div>
        </div>
      </section>
    </main>
  )
}
