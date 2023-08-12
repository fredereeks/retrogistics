import React from 'react'
import { BreadCrumb, Button, } from '../components'

export default function Services() {
  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} title={"Services"} />
      <section className="destination px-5 py-20 bg-white">
        <div className="container max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-6 py-10">
          <div className="flex flex-col gap-6 py-5 relative z-10">
            <h2 className="text-slate-900 text-4xl sm:text-6xl font-normal max-w-lg">Let&apos;s <span className="border-b-2 mb-0 pb-0 leading-[-10px] border-b-orange-500">Travel</span> the <span className="text-orange-500">World</span>!</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">Ship with confidence, knwoing you are getting savings of up to 84% off fromt he top carriers. Over 130,000 merchants save more money, print faster and spend less time shipping</p>
            <Button text={"Learn More"} key={1694} to={"/contact"} />
          </div>
          <div className="flex flex-col gap-3">

          </div>
        </div>
      </section>
    </main>
  )
}
