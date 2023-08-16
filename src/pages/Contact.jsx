import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { Banner, BreadCrumb, ButtonClickable, TextArea, TextInput, } from '../components'
import { contacts } from '../data'
import { IoChatbubbleEllipsesSharp, IoMailUnreadSharp, IoManSharp } from 'react-icons/io5'
import { freight_transport3 } from '../assets/images'

export default function Contact() {
  const [inputs, setInputs] = useState({
    fullname: '',
    company: '',
    phone: '',
    email: '',
    text: '',
  })

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success(`Thank you for contacting us ${inputs.fullname}. We will get back to you via email as soon as possible`)
    setInputs(prev => ({
      ...prev, fullname: '',
      company: '',
      phone: '',
      email: '',
      text: '',
    }))
  }
  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} title={"Contact"} />
      <section className="smart relative px-5 py-20 bg-white">
        <div className="container max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-6">
          <div className="flex flex-col col-span-2 items-center gap-2 text-center pb-10">
            <p className="text-slate-600 text-sm sm:text-base font-medium uppercase">Support</p>
            <h2 className="text-slate-900 text-4xl font-normal max-w-sm sm:max-w-md"><span className="text-orange-500">Contact</span> our Support Team!</h2>
            {/* <p className="sm:ml-auto text-slate-600 text-sm md:text-base leading-relaxed max-w-lg sm:max-w-xs">We treat customers like KING. Everything you need, everything is guaranteed and fast with Retrogistics!</p> */}
          </div>
          <div className="flex flex-col gap-6 py-5 relative z-10">
            <form onSubmit={handleSubmit} id="contact-form" className="flex flex-col">
              <div className="bg-slate-100 p-3 flex justify-center items-center">
                <Link to={"/"} className="relative mt-3 h-[50px] w-[50px] flex items-center gap-2 before:border-[1rem] before:border-transparent before:border-l-orange-500 before:rounded-[1rem] before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:z-10 before:bg-transparent after:border-[1.5rem] after:border-transparent after:border-r-slate-700 after:rounded-[2rem] after:absolute after:-top-[15%] after:-left-[30%] after:h-0 after:w-full after:z-5 after:bg-transparent">
                </Link>
                <h2 className="text-lg font-medium text-slate-700">Chat with Retro Support</h2>
              </div>
              <div className="flex gap-3 items-center px-2 py-5">
                <div className="h-7 w-7 rounded-full bg-orange-200 grid place-items-center">
                  <IoManSharp className="text-orange-500 text-lg" />
                </div>
                <div className="flex-1 flex flex-col w-full bg-slate-100 rounded-md p-2">
                  <TextInput className={'border-slate-200 w-full valid:border-0 bg-transparent flex-1 p-1 font-medium'} value={inputs.fullname} onChange={handleChange} name={'fullname'} placeholder={'Your Full Name *'} key={541} id={'fullname'} />
                  <TextInput className={'border-slate-200 w-full valid:border-0 bg-transparent flex-1 p-1'} value={inputs.company} onChange={handleChange} name={'company'} placeholder={'Company Name (if any)'} key={542} id={'company'} />
                </div>
              </div>
              <div className="flex gap-3 items-center px-2 py-5">
                <div className="h-7 w-7 rounded-full bg-orange-200 grid place-items-center">
                  <IoMailUnreadSharp className="text-orange-500 text-lg" />
                </div>
                <div className="flex-1 flex flex-col w-full bg-slate-100 rounded-md p-2">
                  <TextInput className={'border-slate-200 w-full valid:border-0 bg-transparent flex-1 p-1 font-medium'} value={inputs.email} onChange={handleChange} type={'email'} name={'email'} placeholder={'Email e.g. johndoe@gmail.com'} key={543} id={'email'} />
                  <TextInput className={'border-slate-200 w-full valid:border-0 bg-transparent flex-1 p-1'} value={inputs.phone} onChange={handleChange} required={false} name={'phone'} placeholder={'Phone Number (optional)'} key={544} id={'pohne'} />
                </div>
              </div>
              <div className="flex gap-3 items-center px-2 py-5">
                <div className="h-7 w-7 rounded-full bg-orange-200 grid place-items-center">
                  <IoChatbubbleEllipsesSharp className="text-orange-500 text-lg" />
                </div>
                <div className="flex-1 flex flex-col w-full bg-slate-100 rounded-md p-2">
                  <TextArea className={'border-slate-200 w-full valid:border-0 valid:bg-transparent flex-1 p-1'} value={inputs.text} onChange={handleChange} name={'text'} placeholder={'Your message here...'} key={545} id={'text'} />
                </div>
              </div>
              <ButtonClickable type={'submit'} onClick={handleSubmit} text={"Send Message"} className={'ml-3 text-sm bg-slate-800 text-white'} key={1694} />
            </form>
          </div>
          <div className="flex flex-col md:justify-center gap-4 sm:mx-auto sm:gap-8 relative">
            <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-medium max-w-lg">We have a team of <span className="text-orange-500">Shipping Experts</span> committed to helping you grow!</h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">Whether you are an established business or just getting started, you will have access to free, comprehensive onboarding support</p>
            <div className="grid grid-cols-2 gap-2 sm:gap-5">
              {
                contacts.map(contact => (
                  <aside key={contact.id} className="flex gap-2 sm:gap-3 items-start">
                    <span>{contact.icon}</span>
                    <div className="flex flex-col gap-3">
                      <h5 className="text-slate-700 text-md sm:text-lg font-medium">{contact.title}</h5>
                      <p className="text-slate-500 text-xs sm:text-sm">{contact.text}</p>
                    </div>
                  </aside>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <Banner key={9237} title="Are You Ready to Get Started" image={freight_transport3} text={"Start Shipping Now"} to="/contact#contact-form" />
      <section className="contact bg-white px-5 py-20">

        <div className="container max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="container max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          </div>
        </div>
      </section>
    </main>
  )
}
