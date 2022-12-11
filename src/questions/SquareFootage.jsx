import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import $ from "jquery";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import FadeIn from 'react-fade-in';
import { toast } from "react-toastify";
import { size } from "../utils/updateFirebase";


function SquareFootage() {
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const navigate = useNavigate();

  
  const nextStep = (e) => {
    
    if(isButtonDisabled) {
      toast.error('Please select an option')
      return
    }
   
    else {
      navigate('/gender')
    }
  }

  const setSqft = (e) => {

    setIsButtonDisabled(false)
    e.preventDefault();
    let v = e.currentTarget.value;

    let sqft = parseInt(v);


    if (sqft < 100) {
      toast.error("Please enter a valid square footage!");
      setIsButtonDisabled(true)
      return
    }
    if (isNaN(sqft)) {
      toast.error("Please enter a valid square footage");
      setIsButtonDisabled(true)
      return
    }
   else{
    toast.clearWaitingQueue();
    toast.dismiss();
      setIsButtonDisabled(false)
      size(v)
   }
  }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={53} />
      <FadeIn>

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              What is the <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Square Footage </span> of your property? 

            </h2>
            <div class="flex items-center justify-center pt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>
          <p className="pl-2 text-white">
            The minimum is 100 square feet
          </p>
        </div>
        </div>
        <form className="mt-8 space-y-6">

       
        <div className=" space-y-6 flex flex-col  items-center justify-center">
              <div className="justify-center">
            
             
              <input
                            type="text"
                            name="expires"
                            id="expires"
                            placeholder="500"
                    required
                    pattern="\d*"
                            className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                   onChange={setSqft}
                          />

              </div>

              <button
            type="submit"
            disabled={isButtonDisabled}
            className={`px-6 py-4 max-w-xl  mt-5 text-lg bg-pink-600 ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : ""} hover:shadow-lg text-white rounded transition duration-200`}
            id="zipCodeButton"
            onClick={nextStep}>
            Next
          </button>
            </div>
            <LinkWithQuery to="/year-built">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        </FadeIn>

      </div>
      
  )

}

export default SquareFootage;