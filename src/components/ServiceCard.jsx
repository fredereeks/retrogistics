import React from 'react'
import { IoHeartOutline, IoLocationOutline, IoStarOutline } from 'react-icons/io5'

export default function ServiceCard({service}) {
    return (
        <aside key={service.id} className="rounded-md p-4 sm:p-6 flex flex-col justify-between overflow-hidden relative group">
            <img src={service.image} alt={service.title} className="absolute left-0 top-0 transition-all duration-300 group-hover:scale-150 object-cover w-full h-full" />
            <div className="absolute left-0 top-0 object-cover w-full h-full bg-slate-700/60 group-hover:bg-slate-200/50"></div>
            <div className="relative flex justify-between pb-10">
                <div className="flex flex-col">
                    <h6 className="text-base sm:text-lg md:text-xl text-white group-hover:text-slate-800 font-medium sm:font-semibold">{service.title}</h6>
                    <p className="text-xs sm:text-sm text-white group-hover:text-slate-800 sm:fond-bold">${service.price.toLocaleString()}</p>
                    <div className="flex gap-1 items-center bg-transparent group-hover:bg-orange-400 w-max -mx-1 p-1 pr-2 pt-[.2rem] rounded-sm">
                        <IoStarOutline className="text-[.65rem] text-white" />
                        <p className="text-[.70rem] sm:text-xs text-white">{service.rating}</p>
                    </div>
                </div>
                <IoHeartOutline className="text-xs sm:text-sm text-white cursor-pointer" />
            </div>
            <div className="relative flex gap-1 items-center bg-transparent group-hover:bg-white w-max -mx-1 p-1 pr-2 pt-[.2rem] rounded-sm">
                <IoLocationOutline className="text-[.65rem] text-xs text-white group-hover:text-orange-700" />
                <p className="text-xs sm:text-sm text-white group-hover:text-orange-700">{service.city}</p>
            </div>
        </aside>
    )
}
