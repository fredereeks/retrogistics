import React, { useEffect, useState } from 'react'
import { BreadCrumb, ButtonClickable, DeliveryCard, ServiceCard, } from '../components'
import { deliveries, services } from '../data'


export default function Services() {
  const [allServices, setAllServices] = useState([...services])
  const [searchServices, setSearchServices] = useState([...services])
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = useState('All')

  const handleSort = category => {
    if (category === "All") {
      setSearchServices(prev => ([...allServices]))
      setSelected('All')
    }
    else {
      setSearchServices(prev => (allServices.filter(item => item.category === category)))
      setSelected(category)
    }
  }

  useEffect(() => {
    setAllServices(prev => ([...services]))
    setCategories(prev => ([...new Set(services.map(item => item.category))]))
  }, [])

  return (
    <main className="flex flex-col">
      <BreadCrumb page={"/"} title={"Services"} />
      <section className="services relative px-5 py-20 bg-white">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col col-span-2 items-center gap-2 text-center pb-14">
            <p className="text-slate-600 text-sm sm:text-base font-medium uppercase">What We Offer</p>
            <h2 className="text-slate-900 text-4xl font-normal max-w-lg sm:max-w-xl">Organize and <span className="text-orange-500">Streamline</span> your Order Fulfillment Process!</h2>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <ButtonClickable key={8345} text={'All'} className={`font-medium bg-gray-100 ${selected === 'All' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'} text-slate-700`} onClick={() => handleSort('All')} />
            {
              categories?.map((category, index) => (
                <ButtonClickable key={index} text={category} className={`font-medium bg-gray-100 ${selected === category ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'} text-slate-700`} onClick={() => handleSort(category)} />
              ))
            }
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 items-stretch justify-center gap-3 sm:gap-4 pt-10 flex-wrap">
            {
              searchServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))
            }
          </div>
        </div>
      </section>
      <section className="delivery bg-gray-100/80 px-5 py-20">
        <div className="container mx-auto max-w-[1024px] flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:justify-beween md:items-center">
            <h2 className="text-slate-900 text-4xl font-normal max-w-sm">Delivery of your <span className="text-orange-500">Package!</span></h2>
            <p className="sm:ml-auto text-slate-600 text-sm md:text-base leading-relaxed max-w-lg sm:max-w-xs">We provide all access to simplify and expedite your packge delivery. Retrogistics gives you the best!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] justify-center gap-4 py-10">
            {
              deliveries.map((delivery) => (<DeliveryCard key={delivery.id} {...delivery} />))
            }
          </div>
        </div>
      </section>
      </main>
  )
}
