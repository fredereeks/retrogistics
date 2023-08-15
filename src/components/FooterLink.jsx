import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLink({ title, url, blank }) {
    blank = blank ? '_blank' : '_self'
    return (<Link to={url} target={blank} className={`p-1 pl-0 text-xs sm:text-sm text-slate-100 hover:text-orange-500`}>{title}</Link>)
}
