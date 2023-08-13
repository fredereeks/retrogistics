import React from 'react'
import { Link } from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'

export default function BlogSingleCard({id, image, title, text, wide }) {
    const link = title.toLowerCase().replaceAll("'","").replaceAll(" ", "-").replaceAll("!","");
    return (
        <aside className={`py-3 flex gap-2 relative ${wide ? '' : 'max-w-4xl mx-auto'}`}>
            <Link state={{image,title,text,}} to={`/blogs/${id}/${link}`} className="absolute top-0 left-0 w-full h-full opacity-0"></Link>
            <img src={image} alt={title} className={`${wide ? 'w-80' : 'w-52'} object-cover`} />
            <div className="flex flex-col gap-3 py-2 px-4">
                <h3 className={`text-lg truncate line-clamp-2 sm:line-clamp-3 md:line-clamp-4 whitespace-pre-wrap sm:text-xl md:text-2xl ${wide ? 'text-slate-800 font-bold' : 'text-white'}`}>{title}</h3>
                <p className={`truncate line-clamp-3 whitespace-pre-wrap sm:flex text-xs sm:text-sm md:text-base ${wide ? 'text-slate-600' : 'text-slate-300'} opacity-70`}>{text}</p>
                <Link to={`/blogs/${link}`} className="w-max pr-2 flex items-center gap-1 text-orange-500 border-b-[1px] border-b-orange-500 py-2 text-sm sm:text-base">Read More <FaChevronRight className="text-inherit scale-50" /></Link>
            </div>

        </aside>
    )
}
