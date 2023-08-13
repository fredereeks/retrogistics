import React, {useEffect, useState} from 'react'
import { BreadCrumb } from '../components'
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

    console.log({title: blog?.title, blogId})
  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} title={`${blog?.title}`} />
        
    </main>
  )
}
