import React, {useEffect, useState} from 'react'
import moment from 'moment'
import { BreadCrumb, BlogSingleCard } from '../components'
import { useLocation } from 'react-router-dom'
import { blogs } from '../data/blogs';

export default function BlogSingle() {
    const location = useLocation();
    const blogId = +location.pathname.split("/").slice(-2)[0] 
    const [blog,setBlog] = useState(location.state || {})

    console.log({blog})

    useEffect(() => {
        const fetchBlog = (blogId) =>{
            const blogpost = blogs.find(blog => blog.id === blogId)
            setBlog(prev => ({...prev, blogpost}))
        }
        if(!location.state){
            fetchBlog(blogId)
        }
        return () => {
            // setBlog({})
            // location.state = null;
        }
    }, [location, blogId])
  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} extra={{page: "/blog", title: "Blog"}} title={`${blog?.title}`} />
      <section className="bg-white px-5 py-20">
        <div className="container max-w-1024px mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="blog__contents flex flex-col gap-4 md:col-span-2">
            <h2 className="text-slate-700 text-2xl font-medium">{blog?.title}</h2>
            <div className="flex gap-2 pt-2 sm:gap-10 items-center">
              <div className="flex gap-2 items-center">
                <figure className="h-7 w-7 bg-orange-500 rounded-full"></figure>
                <p className="text-sm text-slate-600">Admin</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm text-slate-600 capitalize">Published: {moment(blog?.date || new Date().getTime()).fromNow()}</p>
              </div>
            </div>
            <img src={blog?.image} alt={blog?.title} className="w-full object-contain" />
            <p className="text-slate-600 text-justify leading-loose">{blog?.text}</p>
          </article>
          <aside className="flex md:flex-col gap-3 flex-wrap">
              <p className="w-max text-orange-500 text-2xl pb-2 mb-5 w-full font-medium border-b-2 border-b-slate-800">Suggested Links</p>
            {
              blogs.filter(item => item.id !== blogId).slice(0,5).map(blog => (<BlogSingleCard key={blog.id} {...blog} />))
            }
          </aside>
        </div>
      </section>
    </main>
  )
}
