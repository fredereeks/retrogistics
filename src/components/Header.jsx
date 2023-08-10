import React from 'react'
import { Link } from 'react-router-dom'
// import { dish1 } from '../assets/images'
import { headerLinks } from '../data/headerLinks'
import LinkCard from './LinkCard'


export default function Header() {
  return (
    // <header className="bg-white sm:bg-red-700 md:bg-cyan-700 lg:bg-lime-700">
    <header className="bg-white">
      <div className="container relative border-2 border-slate-500 mx-auto p-6 flex justify-between">
        <Link to={"/"} className="relative h-[50px] w-[50px] flex items-center gap-2 before:border-[1rem] before:border-transparent before:border-l-orange-500 before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:z-10 before:bg-transparent after:border-[1.5rem] after:border-transparent after:border-r-slate-900 after:absolute after:-top-[15%] after:-left-[30%] after:h-0 after:w-full after:z-5 after:bg-transparent">
        </Link>
        <nav className="absolute top-full left-0 w-full md:w-max md:relative">
          <ul className="flex flex-col md:flex-row md:justify-end md:items-center">
            {
              headerLinks.map(link => (
                <LinkCard key={link.id} url={link.url} title={link.title} />
              ))
            }
            <Link to={"/contact"} className="py-2 px-5 bg-white text-sm md:text-md text-slate-700 md:border-[1px] md:border-slate-700 rounded-[2rem] md:ml-[4rem] hover:text-slate-900 md:rounded-2rem md:text-center">{"Get in Touch"}</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
