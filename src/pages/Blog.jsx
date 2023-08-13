import React from 'react'
import { Banner, BlogCard, BreadCrumb, } from '../components'
import { blogs } from '../data/blogs'
import { freight_transport2 } from '../assets/images'

export default function Blog() {
  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} title={"Blog"} />
      <section className="steps bg-gray-50 px-5 py-20">
        <div className="container mx-auto max-w-[1024px] relative flex flex-col gap-4">
          <h2 className="text-slate-700 text-4xl font-medium max-w-lg">Our <span className="text-orange-500">Top Pick</span> for You!</h2>
          {
            blogs.slice(-1).map(blog => (<BlogCard key={blog.id} wide={true} {...blog} />))
          }
        </div>
      </section>
      <section className="bg-slate-900 rounded-[1rem] overflow-hidden mt-5 px-5 py-20 relative">
        <div className="container max-w-[1024px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-slate-600 text-sm sm:text-base font-medium">See our Other</p>
            <h2 className="text-white text-4xl font-normal max-w-lg">Helpful <span className="text-orange-500">Shipping Articles</span> to get ahead of the Curve!</h2>
            {/* <p className="sm:ml-auto text-slate-600 text-sm md:text-base leading-relaxed max-w-lg sm:max-w-xs">We treat customers like KING. Everything you need, everything is guaranteed and fast with Retrogistics!</p> */}
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-dense lg:grid-cols-4 gap-4 py-10"> */}
          <div className="grid grid-cols-1 gap-4 py-10">
            {
              blogs.slice(0,3).map((blog) => (<BlogCard key={blog.id} wide={false} {...blog} />))
            }
          </div>
        </div>
      </section>
      <Banner key={9237} title="Would you like to Get Started already?" image={freight_transport2} text={"Make an Inquiry"} to="/contact"  />
      </main>
  )
}
