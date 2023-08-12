import React from 'react'
import { Banner, BreadCrumb, WorkingCard } from '../components'
import { freight_transport2 } from '../assets/images'
import { workings } from '../data'

export default function About() {
  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} title={"About"} />
      <section className="workings py-20 bg-white px-5">
        <div className="container max-w-[1096px] mx-auto flex flex-col gap-6">
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
      <Banner key={9237} title="Are You Ready to Get Started" image={freight_transport2} text={"Start Shipping Now"} to="/contact"  />
    </main>
  )
}
