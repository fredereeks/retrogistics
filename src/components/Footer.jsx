import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks, headerLinks } from '../data'
import FooterLink from './FooterLink'

export default function Footer() {
 
  return (
    <footer className="bg-slate-800 pt-10 pb-8 px-5">
      <div className="container max-w-[1096px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <Link to={"/"} className="relative mt-3 h-[50px] w-[50px] flex items-center gap-2 before:border-[1rem] before:border-transparent before:border-l-orange-500 before:rounded-[1rem] before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:z-10 before:bg-transparent after:border-[1.5rem] after:border-transparent after:border-r-white after:rounded-[2rem] after:absolute after:-top-[15%] after:-left-[30%] after:h-0 after:w-full after:z-5 after:bg-transparent">
            </Link>
            <h3 className="text-3xl sm:text-4xl text-white font-thin">Retrogistics</h3>
          </div>
          <p className="pb-2 text-slate-200 text-xs sm:text-sm leading-tight">Retrogistics is the leading web-based order management and shipping software designed to make retailers exceptionally effieicne at processing and shipping</p>
        </div>
        <div className="col-span-2 flex flex-wrap gap-4 sm:justify-around sm:pt-6">
          <ul className="flex flex-col">
            {
              headerLinks.map(link => (<FooterLink blank={false} key={link.id} {...link} />))
            }
          </ul>
          <ul className="flex flex-col">
            {
              footerLinks.slice(0,4).map(link => (<FooterLink blank={true} key={link.id} {...link} />))
            }
          </ul>
          <ul className="flex flex-col">
            {
              footerLinks.slice(4).map(link => (<FooterLink blank={false} key={link.id} {...link} />))
            }
          </ul>
        </div>
        <small className="sm:col-span-3 -mb-4 text-orange-500 text-xs text-center">&copy;{new Date().getFullYear()} Retrogistics. All Rights Reserved.</small>
      </div>
    </footer>
  )
}
