import React from 'react'

export default function StepCard({title, text, bg, index}) {
    const span = index === 2 || index === 3 ? 'sm:col-span-2' : 'col-span-1'
    const gradient = index !== 2 ? 'hover:bg-gradient-to-br hover:from-orange-500 hover:via-transparent hover:to-orange-700' : 'hover:bg-gradient-to-br hover:from-transparent hover:via-transparent hover:to-slate-300'
  return (
    <aside className={`p-5 md:p-7 transition-colors duration-50 rounded-[.5rem] md:rounded-[1.5rem] relative overflow-hidden ease-linear flex flex-col gap-2 md:gap-3 ${bg} ${gradient} ${span}`}>
        <h2 className={`relative text-base text-inherit font-medium`}>{title}</h2>
        <p className={`relative text-sm md:text-base leading-tight opacity-70 text-inherit`}>{text}</p>
    </aside>
  )
}
