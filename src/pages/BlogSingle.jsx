import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { BreadCrumb, BlogSingleCard, CommentCard, ButtonClickable } from '../components'
import { useLocation } from 'react-router-dom'
import { blogs } from '../data/blogs';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, TelegramIcon, TelegramShareButton, LinkedinShareButton, LinkedinIcon } from 'react-share'

export default function BlogSingle() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const commentRef = useRef(null);
  const labelRef = useRef(null);
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    text: "",
  })
  const location = useLocation();
  const blogId = +location.pathname.split("/").slice(-2)[0]
  const [blog, setBlog] = useState(location.state || {})

  useEffect(() => {
    const fetchBlog = (blogId) => {
      const blogpost = blogs.find(blog => blog.id === blogId)
      setBlog(prev => ({ ...prev, ...blogpost }))
    }
    // if (!location.state) {
      fetchBlog(blogId)
    // }
    return () => {
      // setBlog({})
      // location.state = null;
    }
    //eslint-disable-next-line
  }, [location.pathname, location.state, blogId])

  const handleCommentDelete = (id) => {
    console.log({ id })
  }
  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(commentRef.current)
      formData.append("post_id", blogId);
      // const res = await axios.post(`${process.env.REACT_APP_REQUEST_API}/commentmgt.php${blogId}`, formData);
      const res = await fetch(`${process.env.REACT_APP_REQUEST_API}/commentmgt.php`, {
        method: "POST",
        body: formData,
        credentials: 'include',
      })
      const data = await res.json()
      if (!data.error) {
        // toast.success(data.message, { id: "10" })
        if (comments.length > 0) {
          setComments(prev => ([data.comment, ...comments]))
        }
        else setComments(prev => ([data.comment]))
        setInputs({ fullname: "", email: "", text: "" })
        labelRef.current.click();
      } else {
        // toast.error(data.message, { id: "10" })
      }
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data;
        console.log({message})
        // toast.error(message, { id: "10" })
      }
      // else toast.error(err.message, { id: "10" })
    }
    setLoading(false);
  }

  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} extra={{ page: "/blog", title: "Blog" }} title={`${blog?.title}`} />
      <section className="bg-white px-5 py-20">
        <div className="container max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="blog__contents flex flex-col gap-4 md:col-span-2">
            <h2 className="text-slate-700 text-2xl font-medium">{blog?.title}</h2>
            <div className="flex gap-2 pt-2 sm:gap-10 items-center">
              <div className="flex gap-2 items-center">
                <figure className="h-7 w-7 bg-orange-500 rounded-full"></figure>
                <p className="text-xs sm:text-sm text-slate-600">Admin</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-xs sm:text-sm text-slate-600 capitalize">Published: {moment(blog?.date || new Date().getTime()).fromNow()}</p>
              </div>
            </div>
            <img src={blog?.image} alt={blog?.title} className="w-full object-contain" />
            <p className="text-slate-600 text-justify leading-loose">{blog?.text}</p>
            <div className="flex gap-3 sm:gap-5 items-center py-10">
              {/* <div className="flex gap-2 py-10 items-center"> */}
              <h4 className="text-md md:text-base text-slate-500 font-semibold">Share:</h4>
              <div className="flex gap-3 items-center">
                <FacebookShareButton
                  url={`https://retrogistics.netlify.app/post/${blogId}`}
                  quote={`Retrogistics :: ${blog?.title}`}
                  hashtag={blog?.category}
                >
                  <FacebookIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full' />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://retrogistics.netlify.app/post/${blogId}`}
                  quote={`Retrogistics :: ${blog?.title}`}
                  hashtag={blog?.category}
                >
                  <TwitterIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full' />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={`https://retrogistics.netlify.app/post/${blogId}`}
                  quote={`Retrogistics :: ${blog?.title}`}
                  hashtag={blog?.category}
                >
                  <WhatsappIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full' />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={`https://retrogistics.netlify.app/post/${blogId}`}
                  quote={`Retrogistics :: ${blog?.title}`}
                  hashtag={blog?.category}
                >
                  <LinkedinIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full' />
                </LinkedinShareButton>
                <TelegramShareButton
                  url={`https://retrogistics.netlify.app/post/${blogId}`}
                  quote={`Retrogistics :: ${blog?.title}`}
                  hashtag={blog?.category}
                >
                  <TelegramIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full' />
                </TelegramShareButton>
                <EmailShareButton
                  url={`https://retrogistics.netlify.app/post/${blogId}`}
                  quote={`Retrogistics :: ${blog?.title}`}
                  hashtag={blog?.category}
                >
                  <EmailIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full' />
                </EmailShareButton>
              </div>
            </div>
            <div className="comment flex flex-col gap-2">
              {/* <label htmlFor="comment" className="w-max cursor-pointer py-2 px-4 text-xs md:text-sm text-slate-600 bg-slate-300 rounded-md">Post a Comment</label>
                                <input type="checkbox" className="hidden peer" id="comment" /> */}
              {/* <div className="peer-checked:flex hidden flex-col gap-2 py-5"> */}
              <div className="flex gap-4">
                <label htmlFor={`comment`} ref={labelRef} className="py-2 px-5 md:px-7 text-sm  w-max rounded-[2rem] md:rounded-2rem md:text-center flex items-center gap-2 text-slate-100 bg-slate-700 cursor-pointer">Post a Comment</label>
                {comments?.length > 0 && <label htmlFor="all_comments" className="w-max cursor-pointer py-2 px-4 text-xs md:text-sm text-slate-600 bg-slate-300 rounded-md">View Comments</label>}
              </div>
              <input type="checkbox" className={`hidden peer`} id={`comment`} />
              <div className={`hidden peer-checked:flex flex-col gap-2 py-5`}>
                <form onSubmit={handleSubmit} ref={commentRef} className="flex-col gap-1 max-w-[35rem]">
                  <input type="hidden" name="date" value={moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")} />
                  <textarea maxLength={500} name="text" placeholder="Write your comment here..." value={inputs.text} onChange={handleChange} className='outline-none w-full placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4' cols="30" required rows="6"></textarea>
                  <div className="flex w-full flex-col mt-3 gap-1 md:flex-row md:gap-2">
                    <div className="w-full">
                      <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Full Name*'} onChange={handleChange} value={inputs.fullname} name={'fullname'} />
                    </div>
                    <div className="w-full">
                      <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Email*'} onChange={handleChange} value={inputs.email} name={'email'} />
                    </div>
                  </div>
                  <ButtonClickable onClick={handleSubmit} text={loading ? 'Please wait...' : 'Post Comment'} className="bg-orange-500 text-white mt-3" disabled={loading} />
                </form>
              </div>
              {/* </div>           */}
              {comments.length > 0 ? <>
                <input type="checkbox" className="hidden peer" id="all_comments" />
                <div className="peer-checked:flex hidden flex-col gap-2 py-5">
                  {comments.map(comment => (
                    // <>
                    <CommentCard handleCommentDelete={handleCommentDelete} key={comment.comment_id} {...comment} />
                    // </> 
                  ))}
                </div>
              </> : <h3 className="peer-unchecked:hidden text-slate-600 font-bold text-sm md:text-md">No comments. Be the first to comment.</h3>
              }
            </div>
            {/* </div> */}
          </article>
          <aside className="flex md:flex-col gap-3 flex-wrap">
            <p className="w-max text-orange-500 text-2xl pb-2 mb-5 font-medium border-b-2 border-b-slate-800">Suggested Links</p>
            {
              blogs.filter(item => item.id !== blogId).slice(0, 4).map(blog => (<BlogSingleCard key={blog.id} {...blog} />))
            }
          </aside>
        </div>
      </section >
    </main >
  )
}
