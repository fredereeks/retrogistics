import React from 'react'

export default function WorkingCard({ title, text, bg, icon }) {
  return (
    <aside className={`p-5 md:p-7 rounded-[.25rem] md:rounded-[1rem] relative overflow-hidden ease-linear flex flex-col justify-between gap-6 md:gap-3 transition-all duration-300 bg-gray-200 shadow-transparent hover:bg-white shadow-lg hover:shadow-gray-200 border-[2px] border-transparent hover:border-orange-500 group`}>
      {bg}
      <h2 className={`relative text-lg md:text-xl text-inherit font-medium group-hover:text-orange-500`}>{title}</h2>
      <p className={`relative text-sm md:text-[.95rem] leading-normal text-justify sm:text-left opacity-70 text-inherit`}>{text}</p>
    </aside>
  )
}
