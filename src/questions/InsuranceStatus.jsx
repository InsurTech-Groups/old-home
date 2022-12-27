import React from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import {LinkWithQuery} from '../components/BackButton'
;
import { noInsurance } from "../utils/updateFirebase";

function InsuranceStatus() {

  const navigate = useNavigate();


  let buttons = [
		{title: 'Yes', id: 'Yes', value: 'Yes', key: 'Yes'},
    {title: 'No', id: 'No', value: 'No', key: 'No'},
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

    if(v === 'Yes'){

      navigate('/current-insurance')
    }
    else {
      
      let company = 'None'
      let expires = 'None'

    

      noInsurance(company, expires)


      navigate('/home-type')
    }
  }
  
  return (
    
      
    <div className="bg-dark-purple pb-10">
      
      <Banner setProgress={6} />

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              Do you have an existing <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">insurance policy </span> for your property?

            </h2>
            
        </div>
        <form className="mt-8 space-y-6">


          
        <div className="flex flex-wrap items-center justify-center">
        {buttons.map((button) => {
                
                return (
                  <button
                    key={button.key}
                    className="chooseButton bg-input-purple hover:shadow-lg hover:shadow-button-purple/50 hover:transition-transform hover:ease-in-out  hover:bg-button-purple hover:border hover:border-button-purple rounded text-white font-bold"
                    data-value={button.value}
                    value={button.value}
                    onClick={nextStep}
                  >
                    <span>{button.title}</span>
                  </button>
                );
              
            })}

            </div>
            <LinkWithQuery to="/">Back</LinkWithQuery>
        </form>
        </div>
       

      </div>
      
        <CTA />
        
      </div>
      
  )

}

export default InsuranceStatus;