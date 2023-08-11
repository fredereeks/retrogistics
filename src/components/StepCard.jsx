import React from 'react'

export default function StepCard({title, text, bg, index}) {
    const span = index === 2 || index === 3 ? 'lg:col-span-2' : 'col-span-1'
  return (
    <aside className={`p-5 md:p-7 transition-all duration-300 rounded-[.5rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 ${bg} ${span}`}>
        <h2 className={`text-base text-inherit font-medium`}>{title}</h2>
        <p className={`text-sm md:text-base leading-tight opacity-70 text-inherit`}>{text}</p>
    </aside>
  )
}
