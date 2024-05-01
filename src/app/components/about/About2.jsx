import React from 'react'
import Image from 'next/image';

const About2 = () => {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden" >
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap lg:items-center -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                        <div className="relative mx-auto md:ml-0 max-w-max">

                            {/* Main Image with unsplash URL */}

                            <img
                                src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxNXx8ZHV0Y2glMjByZWFsJTIwZXN0YXRlfGVufDB8fHx8MTcxNDQ2NTk4M3ww&ixlib=rb-4.0.3&q=85&w=1920"
                                alt="About Visual"
                                className="shadow-lg rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h1 className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">Sluit u nu aan!</h1>
                        <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
                            Sluit u aan bij ons op deze reis naar vernieuwing en zie zelf hoe Thuistekoop de manier waarop wij denken over woningaankopen verandert. Met ons aan uw zijde, is uw nieuwe thuis slechts een klik verwijderd.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2
