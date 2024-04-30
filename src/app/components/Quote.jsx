import Image from 'next/image'
import React from 'react'

const Quote = () => {
  return (
    <section className="py-24 text-black md:pb-28 bg-white">
    <div className="container px-4 mx-auto">
      <div className="relative max-w-5xl sm:px-6 pb-6 mb-10 mx-auto text-center">
        <div className="absolute top-0 left-0">
          <Image 
            src="/flex-ui-assets/elements/testimonials/quote-top-green.svg"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image 
            src="/flex-ui-assets/elements/testimonials/quote-down-green.svg"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tighter">
            The best solution for anyone who wants to work a flexible schedule but still earn a full-time income
          </h2>
        </div>
      </div>
    </div>
    <div className="text-center mb-8">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
        <Image 
          src="https://placehold.co/600x400/png"
          alt=""
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>
      <h3 className="mb-2 text-xl md:text-2xl font-semibold">Naam</h3>
      <span className="text-lg text-coolGray-500 font-medium">CEO Thuistekoop</span>
    </div>
    <div className="text-center">
      <button className="inline-block h-3 w-3 mr-3 rounded-full bg-coolGray-100"></button>
      <button className="inline-block h-3 w-3 mr-3 rounded-full bg-green-500"></button>
      <button className="inline-block h-3 w-3 rounded-full bg-coolGray-100"></button>
    </div>
  </section>
  )
}

export default Quote
