import React from 'react'
import { Link } from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'

export default function BlogSingleCard({ id, image, title, text }) {
    const link = title.toLowerCase().replaceAll("'","").replaceAll(" ", "-").replaceAll("!","");
    return (
        <aside className={`pb-2 flex gap-2 relative w-full`}>
            <Link state={{image,title,text,}} to={`/blogs/${id}/${link}`} className="absolute top-0 left-0 w-full h-full opacity-0"></Link>
            <img src={image} alt={title} className={`w-24 object-cover`} />
            <div className="flex flex-col mb-1 gap-1 flex-1">
                <h3 className={`text-lg truncate line-clamp-1 whitespace-pre-wrap text-slate-800 font-bold`}>{title}</h3>
                <p className={`truncate line-clamp-2 whitespace-pre-wrap text-xs sm:text-sm text-slate-600 opacity-70`}>{text}</p>
                <Link to={`/blogs/${link}`} className="w-max flex items-center gap-1 text-orange-500 border-b-[1px] border-b-orange-500 p-2 text-xs">Read More <FaChevronRight className="text-inherit scale-50" /></Link>
            </div>
        </aside>
    )
}
