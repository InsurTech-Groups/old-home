import React from 'react';
import Lottie from "lottie-react";
import HomeInsurane from '../assets/HomeInsurance.json';
import "../styles/forms.css";
import Agent from '../assets/agent.jpg'



export default function ThankYou() {


  //TODO:
    // Get timezone and dynamically show

  const time = new Date().toString('en-US', {timeZone: "America/New York"})


  return (
    <div className="bg-dark-purple pb-10">

<div className="formArea flex items-center py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
          <div className='justify-center text-center'>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            Congratulations on getting your{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Home Insurnace {' '} 
                </span>
                Quote
            </h2>

            <p className="text-white text-md mx-auto pt-5">
              An agent will be with you shortly to help you get your quote started.
            </p>

            <div className='pt-10'>
            <Lottie animationData={HomeInsurane} loop={true} style={{height: '500px'}} />
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-button-purple shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">A licensed agent will be with you shortly!</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white">
                Want to talk to an agent faster? Call us and we can help you get quoted today!
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-input-purple px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-50 hover:text-button-purple"
              >
                Call An Agent Now 

                
                
                             </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-1 translate-y-1 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={Agent}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
           
          </div> 
        
        </div>
      </div>

    


    </div>
  )
}
