import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import $ from "jquery";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import FadeIn from 'react-fade-in';


function BedRooms({postData}) {

  const navigate = useNavigate();


  let buttons = [
    { title: '1', id: '1', value: '1', key: '1' },
    { title: '2', id: '2', value: '2', key: '2' },
    { title: '3', id: '3', value: '3', key: '3' },
    { title: '4', id: '4', value: '4', key: '4' },
    { title: '5', id: '5', value: '5', key: '5' },
    { title: '6+', id: '6', value: '6', key: '6' },
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

    postData({
      ...postData,
      properties: [
        {
          occupancy: v
        }
      ]
    })

    navigate('/year-built')

    
  }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={40} />
      <FadeIn>

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
             How Many <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Bedrooms </span> does your property have? 

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
            <LinkWithQuery to="/ownership">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        </FadeIn>

      </div>
      
  )

}

export default BedRooms;