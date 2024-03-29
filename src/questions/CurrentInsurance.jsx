import React from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";

import { currentInsurance } from "../utils/updateFirebase";


function CurrentInsurance() {

  const navigate = useNavigate();


  let buttons = [
    { title: 'State Farm', id: 'State Farm', value: 'State Farm', key: 'State Farm' },
    { title: 'Farmers', id: 'Farmers', value: 'Farmers', key: 'Farmers' },
    { title: 'Gieco', id: 'Gieco', value: 'Gieco', key: 'Gieco' },
    {title: 'Progressive', id: 'Progressive', value: 'Progressive', key: 'Progressive'},
    {title: 'Nationwide', id: 'Nationwide', value: 'Nationwide', key: 'Nationwide'},

    {title: 'Other', id: 'Other', value: 'Other', key: 'Other'},


    
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;



currentInsurance(v)
    navigate('/expired-insurance')

    
  }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={13} />
      

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              Who is your <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Current Policy </span> insured with? 

            </h2>
            
        </div>
        <form className="mt-8 space-y-6">


          
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center">
        {buttons.map((button) => {
                
          return (
                  <div>
                  <button
                    key={button.key}
                    className="chooseButton bg-input-purple hover:shadow-lg hover:shadow-button-purple/50 hover:transition-transform hover:ease-in-out  hover:bg-button-purple hover:border hover:border-button-purple rounded text-white font-bold"
                    data-value={button.value}
                    value={button.value}
                    onClick={nextStep}
                  >
                    <span>{button.title}</span>
                  </button>
                  </div>
                );
              
            })}

            </div>
            <LinkWithQuery to="/insurance-status">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        

      </div>
      
  )

}

export default CurrentInsurance;