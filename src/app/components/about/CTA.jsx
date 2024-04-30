import React from 'react'

const CTA = () => {
  return (
    <section className="relative py-24 md:pb-32 bg-white overflow-hidden" >
      <div className="relative container px-4 mx-auto">
        <div className="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">Get Started</span>
          <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-heading font-bold">Registreer nu, en begin met bieden!</h1>
          <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-heading">Ons platform is meer dan alleen een tool; het is een beweging richting een transparantere vastgoedmarkt. Met Thuistekoop bent u niet alleen een koper, maar een belangrijke speler in het vormgeven van een eerlijkere manier van vastgoedtransacties.</p>
          <a className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm" href="#">Registreer nu</a>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <img className="absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10" src="flex-ui-assets/elements/circle3-yellow.svg" alt="" />
          <img className="absolute bottom-0 right-0 -mb-6 lg:-mb-10 -mr-6 lg:-mr-12 w-20 lg:w-auto" src="flex-ui-assets/elements/dots3-blue.svg" alt="" />
          <img className="relative" src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8b2ZmaWNlfGVufDB8fHx8MTcxNDQ2NjA0Nnww&ixlib=rb-4.0.3&q=85&w=1920" alt="" />
        </div>
      </div>
    </section>
  )
}

export default CTA
