import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({to, className, text, icon}) {
    className = className || "px-5 text-slate-50 bg-orange-500 uppercase"
  return (
    <Link to={to} className={`py-2 px-5 md:px-7 text-sm  w-max rounded-[2rem] md:rounded-2rem md:text-center flex items-center gap-2 ${className}`}>{icon} {text}</Link>
  )
}
