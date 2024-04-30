import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <section className="bg-white mb-10  overflow-hidden wave-top wave-bottom">
      <div className="wave-top w-full text-coolGray-50">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='text-navy' d="M0 64.5909H349.922C606.664 64.5909 859.771 0 1080 0C1300.23 0 1440 64.5909 1440 64.5909V116H0V64.5909Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="relative bg-navy text-white">
        {/* Make sure the path to the images is correct */}
        <div className="absolute top-0 left-0 ml-4 lg:ml-12 mt-4 md:mt-0 h-20 md:h-auto">
          <Image
            src="/flex-ui-assets/elements/dots3-blue.svg"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 mr-4 lg:mr-12 mb-4 md:mb-0 h-20 md:h-auto">
          <Image
            src="/flex-ui-assets/elements/dots3-violet.svg"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative container px-4 mx-auto">
          <div className="max-w-4xl py-16 mx-auto text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold">The fastest way from idea to live site. Period.</h2>
            <p className="mb-6 text-lg md:text-xl font-heading font-medium text-coolGray-500">
              Flex is a Small SaaS Business. Flex isn’t a traditional company. We believe a diverse team, approaches to work and transparency are key to our success.
            </p>
            <a
              className="inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-black bg-white font-medium text-center focus:ring-2 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="wave-bottom w-full text-coolGray-50">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='text-navy' d="M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}

export default CTA
