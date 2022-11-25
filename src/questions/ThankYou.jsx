import React from 'react';
import Lottie from "lottie-react";
import HomeInsurane from '../assets/HomeInsurance.json';
import "../styles/forms.css";



export default function ThankYou() {
  return (
    <div className="bg-dark-purple pb-10">

<div className="formArea flex items-center  mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
          <div className='justify-center text-center'>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            Congratulations on getting your{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Home Insurnace {' '} 
                </span>
                Quote!
            </h2>

            <div class="flex items-center pt-5 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>
          <p className="pl-2 text-white text-center">
                An Agent Will Be Reaching Out To You Shortly!
               
               
              </p>
              
              
            </div>
            <p className="pl-2 text-white text-center"><br /> Or Call Now</p>
            <button
            type=""
           
            className={`px-6 py-4 max-w-xl  mt-5 text-lg bg-pink-600 hover:shadow-lg text-white rounded transition duration-200`}
            id="zipCodeButton">
            Call Now
          </button>
          </div> <Lottie animationData={HomeInsurane} loop={true} style={{height: '500px'}} />
        
        </div>
      </div>

    


    </div>
  )
}
