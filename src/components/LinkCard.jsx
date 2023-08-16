import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkCard({title, url, colored}) {
  return (
    <Link to={url} className={`py-2 px-5 bg-white text-sm md:text-md text-slate-700 hover:text-white hover:bg-orange-500 hover:sm:bg-gray-100 hover:sm:text-slate-900 sm:rounded-[2rem] sm:text-center`}>{title}</Link>
  )
}
