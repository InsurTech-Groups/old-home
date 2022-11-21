import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import $ from "jquery";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import {LinkWithQuery} from '../components/BackButton'
import FadeIn from 'react-fade-in';

function Ownership({postData}) {

  const navigate = useNavigate();

  //get value of property type from props passed


  let buttons = [
		{title: 'Own', id: 'Own', value: 'Own', key: 'Own'},
    { title: 'Rent', id: 'Rent', value: 'Rent', key: 'Rent' },
    {title: 'Financing', id: 'Financing', value: 'Financing', key: 'Financing'},
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

   //navigate('/')
    

  }
  
  return (
    
      
    <div className="bg-dark-purple pb-10">
      <FadeIn>
      <Banner setProgress={10} />

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              Do you <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">own or rent </span>?

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
        </FadeIn>
      </div>
      
  )

}

export default Ownership;