import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumb({page,title}) {
  return (
    <section className="breadcrumb relative px-5 shadow-[inset_0_0_20px_#e8e8e8]">
        <div className="container max-w-[1024px] mx-auto py-4 flex gap-3">
            <Link to="/" className="text-sm md:text-base text-slate-700 font-bold">Home</Link> / 
            <div className="text-sm md:text-base text-slate-500 font-medium">{title}</div> 
        </div>
    </section>
  )
}
