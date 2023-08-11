import React from 'react'
import Button from './Button'
import { freight_transport3 } from '../assets/images'

export default function Banner({image, to, title, text}) {
    image = image || freight_transport3;
    title = title || "Are You Ready to Get Started?";
    to = to || "/contact";
    text = text || "Start Shipping Now";
  return (
    <section className="banner relative py-20 px-5 before:absolute before:z-[4] before:top-0 before:left-0 before:w-full before:h-full before:bg-[#23204290]">
        <img src={image} alt="" className="object-cover absolute z-[1] top-0 left-0 w-full h-full bg-[#23204221]" />
        <div className="relative z-[10] container max-w-[1096px] mx-auto flex flex-col gap-4 justify-center items-center">
            <h2 className="text-white text-center text-3xl md:text-5xl font-normal sm:max-w-lg">{title}</h2>
              <Button key={28234} text={text} to={to} className="bg-slate-900 px-5 py-2 text-slate-50" />
            <div className="flex gap-4">
            </div>
        </div>
      </section>
  )
}
