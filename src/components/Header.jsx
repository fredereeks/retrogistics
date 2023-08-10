import React from 'react'
import { Link } from 'react-router-dom'
import { dish1 } from '../assets/images'
import { headerLinks } from '../data/headerLinks'


export default function Header() {
  return (
    // <header className="bg-white sm:bg-red-700 md:bg-cyan-700 lg:bg-lime-700">
    <header className="bg-white">
      <div className="container mx-auto p-6 flex justify-between">
        <Link to={"/"} className="flex items-center gap-2 w-max">
          <img src={dish1} alt="" className="h-[50px] w-[50px] rounded-full object-cover" />
          <h1 className="text-slate-600 font-bold text-xl">Retrogistics</h1>
        </Link>
        <nav className="relative">
          <ul className="flex flex-col md:flex-row md:justify-end md:items-center">
            {
              headerLinks.map(link => (
                <Link key={link.id} to={link.url} className="py-2 px-5 bg-white text-sm md:text-md text-slate-700 hover:text-slate-900 md:rounded-2rem md:text-center">{link.title}</Link>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}
