import {IoPhoneLandscapeOutline, IoChatbubbleEllipsesOutline, IoMailUnreadOutline, IoGlobeOutline} from 'react-icons/io5'
export const contacts = [
    {
        id: 72341,
        title: "Call Us",
        text: <a href="tel:+23470681717101" className="text-slate-500 text-xs sm:text-sm">(+234) 70681717101</a>,
        icon: <IoPhoneLandscapeOutline className="text-orange-500 mt-1 text-lg sm:text-xl"/>,
    },
    {
        id: 72342,
        title: "Chat Us",
        text: <a href="tel:+2348816075406" className="text-slate-500 text-xs sm:text-sm">(+234) 8816075406</a>,
        icon: <IoChatbubbleEllipsesOutline className="text-orange-500 mt-1 text-lg sm:text-xl"/>,
    },
    {
        id: 72343,
        title: "Email Us",
        text: <a href="mailto:shipping@retrogistics.com" className="text-slate-500 text-xs sm:text-sm">shipping@retrogistics.com</a>,
        icon: <IoMailUnreadOutline className="text-orange-500 mt-1 text-lg sm:text-xl"/>,
    },
    {
        id: 72344,
        title: "Social Media",
        text: <a href="https://www.instagram.com/retrogistics" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-xs sm:text-sm">instagram.com/retrogistics</a>,
        icon: <IoGlobeOutline className="text-orange-500 mt-1 text-lg sm:text-xl"/>,
    },
]