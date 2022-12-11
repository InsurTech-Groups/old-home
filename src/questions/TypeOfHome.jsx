import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import $ from "jquery";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import FadeIn from 'react-fade-in';
import { homeTpye } from "../utils/updateFirebase";


function TypeOfHome() {

  const navigate = useNavigate();


  let buttons = [
    {title: 'Single Family', id: 'Single Family', value: 'Single Family', key: 'Single Family'},
    {title: 'Multi Family', id: 'Multi Family', value: 'Multi Family', key: 'Multi Family'},
    { title: 'Apartment', id: 'Apartment', value: 'Apartment', key: 'Apartment' },
    { title: 'Condominuim', id: 'Condominuim', value: 'Condominuim', key: 'Condominuim' },
    { title: 'Town Home', id: 'Town Home', value: 'Town Home', key: 'Town Home' },
    { title: 'Mobile Home', id: 'Mobile Home', value: 'Mobile Home', key: 'Mobile Home' },
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

  
    homeTpye(v)


    navigate('/ownership')
  }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={26} />
      <FadeIn>

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              What Kind Of <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Home </span> are you insuring? 

            </h2>
            
        </div>
        <form className="mt-8 space-y-6">


          
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center">
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
            <LinkWithQuery to="/expired-insurance">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        </FadeIn>

      </div>
      
  )

}

export default TypeOfHome;