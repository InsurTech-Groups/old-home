import React from 'react';

import Logo from '../assets/logo.png';

export default function NavBar(props){

 

    return(
        <header className="bg-white sticky">

            
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
                                    className="block px-1 py-1 text-lg font-extrabold  text-white rounded transition duration-200   bg-gradient-to-r bg-clip-text  text-transparent
                                    from-purple-400 to-pink-600
            animate-text  "
                                    href="#medicare-nav"
                                    data-config-id="primary-action"
                                >
                                    <div className="flex">
                                        <div className="font-bold">
                                            <h4 className="lg:text-3xl md:text-xl">
                    

                        (888) 123-4567


                      
                                            </h4>
                                            <p className="hidden text-sm md:block">
                                                Monday - Friday 8am - 5pm EST
                                            </p>
                                        </div>
                                    </div>
                                </a>

                          
                    </div>


                </div>
            </nav>
        </header>

    )

}
