import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { built } from "../utils/updateFirebase";



function YearBuilt() {

  

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [year, setYear] = useState('')


  const navigate = useNavigate();



  const nextStep = (e) => {

    e.preventDefault();

    let currentYear = new Date().getFullYear();

    
    if (year < 1900 || year > currentYear) {
      toast.error("Please enter a valid year");
      setIsButtonDisabled(true);
      return
    }
    if (year.length < 4) {
      toast.error('Please Enter A Valid Year')
       setIsButtonDisabled(true);
       return

    }
    else{

     
      built(year)
  

      navigate('/square-footage')
    }

  
  };

  const sYear = (e) => {
    let currentYear = new Date().getFullYear();
    toast.clearWaitingQueue();
    toast.dismiss();

    let v = e.target.value;

   
  
    // make year a number
    let year = parseInt(v)

    setYear(year)

    
    // if v isnt the length of 10 toast.error
   
     if (isNaN(v)) {
       toast.error("Please enter a number!");
       setIsButtonDisabled(true);
return
      }
    else {
      setIsButtonDisabled(false);
    }

  }



  // get todays date
  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={46} />
      

            <ToastContainer limit={1} position="bottom-left" theme="colored" />


      <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
          <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              In What Year Was Your{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
              Property Built
              </span>
              ?
              </h2>
       

              <div class="flex items-center justify-center pt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>
          <p className="pl-2 text-white">
            Estimates are okay!
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
                            placeholder="YYYY"
                    required
                    pattern="\d*"
                            className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                    
                    onChange={sYear}
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

            <LinkWithQuery to="/bedrooms">Back</LinkWithQuery>
          </form>
        </div>
      </div>
        <CTA />
        

    </div>
  );
}

export default YearBuilt;
