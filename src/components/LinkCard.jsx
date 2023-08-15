import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkCard({title, url, colored}) {
  return (
    <Link to={url} className={`py-2 px-5 bg-white text-sm md:text-md text-slate-700 hover:text-slate-900 md:rounded-[2rem] md:text-center`}>{title}</Link>
  )
}
