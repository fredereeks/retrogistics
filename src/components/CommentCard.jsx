// import React, {useRef, useState} from 'react'
import React, { useContext, useRef, useState } from 'react'
import moment from 'moment'
import { IoClose } from 'react-icons/io5'
// import { toast } from 'react-hot-toast'

import AuthContext from '../context/AuthContext'
// import { randomColor } from '../utils'

function CommentCard({ comment_id, post_id, fullname, created_at, text, replies, handleCommentDelete }) {
    const replyRef = useRef(null)
    const labelRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [allReplies, setAllReplies] = useState(replies)
    const [inputs, setInputs] = useState({
        fullname: "",
        email: "",
        reply: "",
    })
    const { currentUser } = useContext(AuthContext);


    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData(replyRef.current)
            formData.append("comment_id", comment_id);
            const res = await fetch(`${process.env.REACT_APP_REQUEST_API}/commentmgt.php`, {
                method: "POST",
                body: formData,
                credentials: 'include',
            })
            const data = await res.json()
            if (!data.error) {
                // toast.success(data.message, { id: "11" })
                if (allReplies?.length > 0) {
                    setAllReplies(prev => ([...allReplies, data.reply]))
                }
                else setAllReplies(prev => ([data.reply]))
                setInputs({ fullname: "", email: "", reply: "" })
                labelRef.current.click();
            } else {
                // toast.error(data.message, { id: "11" })
            }
        } catch (err) {
            if (err.response) {
                const { message } = err.response.data;
                console.log({message})
                // toast.error(message, { id: "11" })
            }
            // else toast.error(err.message, { id: "11" })
        }
        setLoading(false)
    }

    const handleDelete = async (reply_id, comment_id) => {
        // toast.loading("Please wait while we create your account...", { id: "14" })
        try {
            const formData = new FormData();
            formData.append("reply_id", reply_id);
            formData.append("comment_id", comment_id);
            formData.append("access_token", JSON.stringify(currentUser));
            const res = await fetch(`${process.env.REACT_APP_REQUEST_API}/commentmgt.php`, {
                method: "POST",
                body: formData,
                credentials: "include",
            })
            const data = await res.json()
            if (!data.error) {
                // toast.success(data.message, { id: "14" })
                allReplies?.length ? setAllReplies(prev => ([...allReplies.filter(reply => reply.reply_id !== reply_id)])) : setAllReplies(prev => [])
            } else {
                // toast.error(data.message, { id: "14" })
            }
        } catch (err) {
            if (err.response) {
                const { message } = err.response.data;
                console.log({message})
                // toast.error(message, { id: "14" })
            }
            //   else toast.error(err.message, { id: "14" })
        }
    }

    return (
        <aside className="flex flex-col py-3 relative">
            {currentUser && <button onClick={() => handleCommentDelete(comment_id, post_id)} title="Delete Comment" className="absolute z-[50] right-0 top-0 p-1 rounded-md cursor-pointer text-sm grid place-items-center bg-[#f66]">
                <IoClose className="text-sm text-white" />
            </button>}
            <div className="flex flex-col">
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        {/* <div style={{ background: randomColor(.9) }} className="h-8 w-8 rounded-full grid overflow-hideen place-items-center bg-slate-300"><p className="text-3xl text-white translate-y-[.1rem] rotate-12 font-extrabold">{fullname?.toString().toUpperCase()[0]}</p></div> */}
                        <div className="h-8 w-8 rounded-full grid overflow-hideen place-items-center bg-slate-300"><p className="text-3xl text-white translate-y-[.1rem] rotate-12 font-extrabold">{fullname?.toString().toUpperCase()[0]}</p></div>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-semibold text-slate-600">{fullname}</h4>
                            <div className="text-xs text-slate-400 font-extralight">{moment(created_at).fromNow()}</div>
                        </div>
                    </div>
                    <label htmlFor={`reply${comment_id}`} ref={labelRef} className="w-max cursor-pointer py-2 px-4 text-xs md:text-sm text-slate-600 bg-slate-300 rounded-md">Reply</label>
                </div>
                <p className="text-xs md:text-sm leading-loose text-justify text-slate-600 p-2">{text}</p>
            </div>
            <div className={`flex flex-col gap-1 ml-4 p-2 ${allReplies?.length > 0 ? 'border-l-2 border-slate-200' : ''}`}>
                <input type="checkbox" className={`hidden peer`} id={`reply${comment_id}`} />
                <div className={`peer-checked:flex hidden flex-col gap-2 py-5`}>
                    <form onSubmit={handleSubmit} ref={replyRef} className="flex-col gap-1 max-w-[35rem]">
                        <textarea maxLength={500} name="reply" placeholder="Write your reply here..." value={inputs.reply} onChange={handleChange} className='outline-none w-full placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4' cols="30" required rows="6"></textarea>
                        <div className="flex w-full flex-col mt-3 gap-1 md:flex-row md:gap-2">
                            <div className="w-full">
                                <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Full Name*'} onChange={handleChange} value={inputs.fullname} name={'fullname'} />
                            </div>
                            <div className="w-full">
                                <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Email*'} onChange={handleChange} value={inputs.email} name={'email'} />
                            </div>
                        </div>
                        <button onClick={() => handleDelete(replies?.reply_id, comment_id)} disabled={loading}  title="Post Reply" className="mt-3 px-4 text-white text-sm rounded-md cursor-pointer grid place-items-center bg-slate-800">{loading ? 'Please wait...' : 'Post Reply'}</button>
                    </form>
                </div>
                {
                    allReplies?.length > 0 ? allReplies?.map(reply => (<>
                        <div key={reply?.reply_id} className="flex flex-col relative">
                            {currentUser && <button onClick={() => handleDelete(reply?.reply_id, comment_id)} title="Delete Reply" className="absolute z-[50] right-0 top-0 p-1 text-sm rounded-md cursor-pointer grid place-items-center bg-slate-800">
                                <IoClose className="text-sm text-white" />
                            </button>}
                            <div className="flex gap-2 items-center">
                                {/* <div style={{ background: randomColor(.7) }} className="h-8 w-8 rounded-full grid overflow-hideen place-items-center bg-slate-300"><p className="text-3xl text-white translate-y-[.1rem] -rotate-12 font-extrabold">{reply?.fullname?.toString().toUpperCase()[0]}</p></div> */}
                                <div className="h-8 w-8 rounded-full grid overflow-hideen place-items-center bg-slate-300"><p className="text-3xl text-white translate-y-[.1rem] -rotate-12 font-extrabold">{reply?.fullname?.toString().toUpperCase()[0]}</p></div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-semibold text-slate-600">{reply?.fullname}</h4>
                                    <div className="text-xs text-slate-400 font-extralight">{moment(reply?.created_at).fromNow()}</div>
                                </div>
                            </div>
                            <p className="text-xs md:text-sm text-justify leading-loose text-slate-500 p-2">{reply?.text}</p>
                        </div>
                    </>)) : ""
                }
            </div>
        </aside>
    )
}

export default CommentCard