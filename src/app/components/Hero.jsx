import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-white text-black  overflow-hidden" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center"}}>
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-navy uppercase rounded-9xl">thuistekoop</span>
              <h1 className="mb-6 md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-3xl">Thuistekoop, een nieuwe stap in de vastgoedwereld.</h1>
              <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Transparant en direct, voor een heldere en open vastgoedmarkt. Sluit u aan bij onze missie om woningaankoop eerlijker te maken.</p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-navy hover:bg-navy focus:ring-2 focus:ring-navy focus:ring-opacity-50 border border-navy rounded-md shadow-sm" href="#">Bekijk alle huizen</a></div>
                <div className="w-full md:w-auto py-1 md:py-0"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#">Registreer nu</a></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
               <img className="relative shadow-xl rounded-xl" src="https://static.shuffle.dev/uploads/files/ca/ca93b15d6cf770d6b247547f82af68584d64acf8/Untitled-design-46.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
