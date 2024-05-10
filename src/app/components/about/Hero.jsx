import React from 'react'
import Image from 'next/image';


const Hero = () => {
    return (
        <div className="pt-20  md:pb-72">
      <div className="container px-4 mx-auto">
        <div className="mx-auto text-center max-w-3xl">
          <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-white bg-navy uppercase rounded-9xl">Over ons</span>
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">Thuistekoop: Een Nieuwe Generatie in Vastgoed.</h1>
          <p className="mb-8 mx-auto text-lg md:text-xl text-coolGray-500 font-medium max-w-3xl">
            In de dynamische wereld van vastgoed brengt Thuistekoop een frisse wind. Als een pionierend platform stellen we u in staat om zelf te bieden op huizen, wat een transparante en toegankelijke ervaring voor iedereen garandeert. Thuistekoop maakt het mogelijk om op een duidelijke en eerlijke manier deel te nemen aan de vastgoedmarkt.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
              <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-white font-medium text-center bg-navy hover:bg-navy focus:ring-2 focus:ring-navy focus:ring-opacity-50 border border-white rounded-md shadow-sm" href="#">
                Contact
              </a>
            </div>
            <div className="w-full md:w-auto py-1 md:py-0">
              <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#">
                Registreer nu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
