import React from 'react'

export default function DeliveryCard({title, text, bg, icon}) {
    // const gradient = index !== 2 ? 'hover:bg-gradient-to-br hover:from-orange-500 hover:via-transparent hover:to-orange-700' : 'hover:bg-gradient-to-br hover:from-transparent hover:via-transparent hover:to-slate-300'
  return (
    <aside className={`p-5 md:p-7 rounded-[.25rem] md:rounded-[1rem] relative overflow-hidden ease-linear flex flex-col gap-4 md:gap-3 bg-gray-200 hover:bg-gradient-to-br hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 group`}>
        {bg}
        <div className="grid place-items-center h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex-shrink-0 rounded-full bg-white">
          {icon}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-1 translate-y-[58%] group-hover:translate-y-0 transition-transform duration-300 flex-col gap-2 relative text-slate-600 group-hover:text-white">
            <h2 className={`relative text-lg md:text-xl text-inherit font-medium`}>{title}</h2>
            <p className={`relative text-sm md:text-[.95rem] leading-tight opacity-70 text-inherit`}>{text}</p>
          </div>
        </div>
    </aside>
  )
}
