import React from 'react';

import Logo from '../assets/whiteLogo.png';

export default function NavBar(props){

 

    return(
        <header className=" bg-dark-purple sticky pb-10">

            
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Top"
                id="top"
            >
                <div className="w-full py-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/">
                            <img className="h-20 w-auto" src={Logo}  alt="" />
                        </a>
                    </div>
 
                    <div className="ml-10 space-x-4 align-center text-center">
                        


                                <a
                                    className="px-1 text-lg md:text-sm sm:text-sm font-extrabold  text-white rounded transition duration-200   bg-gradient-to-r bg-clip-text  text-transparent
                                    from-purple-400 to-pink-600
            animate-text  "
            href="tel:8881234567"
                                    data-config-id="primary-action"
                                >
                                    <div className="flex">
                                        <div className="font-bold">
                                    <button className='bg-button-purple p-2  rounded transition duration-200   bg-gradient-to-r text-white
                                    from-purple-400 to-pink-600 animate-text lg:text-md md:text-sm sm:text-sm'>
                                        (888) 123-4567
                                            </button>
                                           
                                        </div>
                                    </div>
                                </a>

                          
                    </div>


                </div>
            </nav>
        </header>

    )

}
