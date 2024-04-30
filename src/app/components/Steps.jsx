import React from 'react'

const Steps = () => {
    return (
        <section class="py-24 text-black  md:py-28 bg-white">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/3 px-4">
                        <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                            <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-navy rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"


                                    className="text-white" // This sets the color of the SVG to white using Tailwind CSS
                                >
                                    <path fill="#ffffff" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z" />
                                </svg>
                            </div>
                            <h3 class="mb-3 text-xl md:text-2xl leading-tight font-bold">Meld u aan</h3>
                            <p class="text-gray-800 font-medium">Stay connected with your team and make quick decisions wherever you are.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4">
                        <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                            <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-navy rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="text-white" // This sets the color of the SVG to white using Tailwind CSS
                                >
                                    <path fill="#ffffff" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2z" />
                                </svg>
                            </div>
                            <h3 class="mb-3 text-xl md:text-2xl leading-tight font-bold">Verifieer uw ID</h3>
                            <p class="text-gray-800 font-medium">Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4">
                        <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                            <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-navy rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="text-white" // This sets the color of the SVG to white using Tailwind CSS
                                >
                                    <path fill="#ffffff" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2z" />
                                </svg>
                            </div>
                            <h3 class="mb-3 text-xl md:text-2xl leading-tight font-bold">Begin met bieden!</h3>
                            <p class="text-gray-800 font-medium">Our calendar lets you know what is happening with customer and projects so you</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
