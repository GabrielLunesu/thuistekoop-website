import React from 'react'
import Image from 'next/image';


const About1 = () => {
    return (
        <section className="py-18 md:py-20 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap lg:items-center -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                        <h1 className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">Meer als een platform.</h1>
                        <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">Ons platform is meer dan alleen een tool; het is een beweging richting een transparantere vastgoedmarkt. Met Thuistekoop bent u niet alleen een koper, maar een belangrijke speler in het vormgeven van een eerlijkere manier van vastgoedtransacties.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-4 h-1/4">
                        <div className="relative mx-auto md:mr-0 max-w-max">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw5fHxyZWFsJTIwZXN0YXRlJTIwfGVufDB8fHx8MTcxNDQ2NTk1Nnww&ixlib=rb-4.0.3&q=85&w=1920"
                                alt="About Visual"
                                className="shadow-lg rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About1
