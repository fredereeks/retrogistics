import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { dish1 } from '../assets/images'
import { headerLinks } from '../data/headerLinks'
import LinkCard from './LinkCard'


export default function Header() {
  const [navshow, setNavShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const header = useRef();
  const navRef = useRef();
  const location = useLocation();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 60) {
        setFixed(true)
      }
      else {
        setFixed(false)
      }
    }
    return () => {
      setFixed(false);
      window.scrollTo(0, 0)
      setNavShow(false);
      // closeDropdown()
    }
  }, [location])
  return (
    // <header className="bg-white sm:bg-red-700 md:bg-cyan-700 lg:bg-lime-700">
    <header ref={header} className={`${fixed ? 'fixed shadow-md shadow-[#0001]' : 'relative'} max-w-full w-full top-0 left-0 z-[1999] bg-white p-5 pb-2`}>
      <div className="container max-w-[1024px] mx-auto flex justify-between">
        <Link to={"/"} className="relative h-[50px] w-[50px] flex items-center gap-2 before:border-[1rem] before:border-transparent before:border-l-orange-500 before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:z-10 before:bg-transparent after:border-[1.5rem] after:border-transparent after:border-r-slate-900 after:absolute after:-top-[15%] after:-left-[30%] after:h-0 after:w-full after:z-5 after:bg-transparent">
        </Link>
        <nav ref={navRef} className={`absolute z-[99] w-full sm:w-max sm:relative sm:shadow-none shadow-md transition-all duration-300 ${navshow ? 'left-0 top-full z-50' : 'left-[110%] sm:left-0 z-0 top-full'}`}>
          <ul className="flex flex-col sm:flex-row sm:justify-end sm:items-center">
            {
              headerLinks.map(link => (
                <LinkCard key={link.id} url={link.url} title={link.title} />
              ))
            }
            {/* <Button to={"/contact"} text={"Get In Touch"} className={"py-2 px-5 bg-white text-sm sm:text-sm text-slate-700 sm:border-[1px] sm:border-slate-700 rounded-[2rem] md:ml-[4rem] hover:text-slate-50 hover:bg-slate-900 sm:rounded-2rem sm:text-center w-full md:w-max"} /> */}
            <Link to="/contact" className={`py-2 px-5 text-sm sm:text-sm text-slate-50 sm:ml-2 bg-slate-700 sm:bg-white sm:text-slate-700 sm:border-[1px] sm:border-slate-700 rounded-0 md:ml-[4rem] sm:rounded-[2rem] sm:text-center hover:sm:text-slate-200 hover:sm:bg-slate-700`}>Get In Touch</Link>
          </ul>
        </nav>
        <div onClick={() => setNavShow(prev => !prev)} className="h-[25px] w-[25px] flex items-center justify-center p-1 cursor-pointer sm:hidden">
          <div className="h-[2px] w-full bg-slate-700 rounded-sm relative before:h-[2px]  before:w-full  before:bg-slate-700  before:rounded-sm  before:absolute before:-top-[200%] before:left-0 after:h-[2px]  after:w-full  after:bg-slate-700  after:rounded-sm  after:absolute after:top-[200%] after:left-0"></div>
        </div>
      </div>
    </header>
  )
}
