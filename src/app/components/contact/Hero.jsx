import React from 'react'

const Hero = () => {
    return (
        <div class="relative py-20 xl:pt-16 xl:pb-24">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap items-center">
                    <div class="w-full lg:w-1/2 mb-20 lg:mb-0">
                        <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-navy font-medium uppercase rounded-9xl">Header</span>
                        <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-coolGray-900 font-bold tracking-tight">Contacteer ons nu, bekijk wat er mogelijk is</h1>
                        <p class="mb-8 text-lg md:text-xl leading-7 text-coolGray-500 font-medium">Wacht niet! contacteer ons nu</p>
                        <ul>
                            <li class="mb-6 flex items-center">
                                <svg class="w-6 h-6 text-gray-800 dark:text-navy" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                                </svg>

                                <p class="text-lg md:text-xl leading-7 text-coolGray-500 font-medium">Lorem ipsum dolor sit amet, consectetur adipisng.</p>
                            </li>
                            <li class="mb-6 flex items-center">
                                <svg class="w-6 h-6 text-gray-800 dark:text-navy" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                                </svg>                                <p class="text-lg md:text-xl leading-7 text-coolGray-500 font-medium">Suspendisse mollis tincidunt</p>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-gray-800 dark:text-navy" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                                </svg>                                <p class="text-lg md:text-xl leading-7 text-coolGray-500 font-medium">Praesent varius justo vel justo pulvinar</p>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="flex flex-col items-center p-10 xl:px-24 xl:pb-12 bg-white lg:max-w-xl lg:ml-auto rounded-4xl shadow-2xl" data-np-autofill-form-type="register" data-np-checked="1" data-np-watching="1">
                            <img class="relative -top-2 -mt-16 mb-6 h-16" src="flex-ui-assets/logos/flex-circle-green.svg" alt="" />
                            <h2 class="mb-4 text-2xl md:text-3xl text-coolGray-900 font-bold text-center">Join our community</h2>
                            <h3 class="mb-7 text-base md:text-lg text-coolGray-500 font-medium text-center">Start your free trial</h3>
                            <label class="mb-4 flex flex-col w-full"></label>
                            <div class="flex items-center mb-4 w-full text-xs text-coolGray-400">
                                <div class="flex-1 h-px bg-coolGray-100"></div>
                                <div class="flex-1 h-px w-24 bg-coolGray-100"></div>
                            </div>
                            <p class="text-sm text-coolGray-400 font-medium text-center"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero
