import React from 'react'

export default function ButtonClickable({onClick,className, text, icon, disabled}) {
    className = className || "px-5 text-slate-50 bg-orange-500 uppercase"
  return (
    <button onClick={onClick} disabled={disabled} className={`py-2 px-5 md:px-7 text-sm  w-max rounded-[2rem] md:rounded-2rem md:text-center flex items-center gap-2 ${className}`}>{icon} {text}</button>
  )
}
