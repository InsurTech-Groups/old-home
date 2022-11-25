import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import $ from "jquery";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import FadeIn from 'react-fade-in';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";

function Address({postData}) {

  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [addressValue, setAddressValue] = useState('');
  const [bottomText, setBottomText] = useState()
  const apiKey = process.env.REACT_APP_GOOGLEAPIKEY;

  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

    navigate('/credit')

    
  }

  function isEdit(){

    let address = document.getElementById('address').value;
    let trim = address.trim();
    if(address === "" || address === null || address === undefined || trim.length === 0 || trim.length <= 4){
        setIsButtonDisabled(true)
    }
    else{
        setIsButtonDisabled(false)
        setAddressValue(addressValue)
        if (addressValue == undefined ){
            setAddressValue("123 Main Street")
        }else{
            setAddressValue(addressValue)
        }
    }
}

  function handleSubmit(e){

    e.preventDefault()
    const address = document.getElementById('address').value;
    const addStr = address.split(' ').join('+');
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + addStr + "&key=" + apiKey ).then((res) => {
        const json = res.data;
        const results = json.status
        if (results == "ZERO_RESULTS"){
            toast.error('Please Enter A Valid Address');
            setIsButtonDisabled(true)
        }
        else{
            toast.clearWaitingQueue();
            toast.dismiss()
           
        navigate('/name')
            
        }
    })


    if(isButtonDisabled){
        toast.error('Please enter a valid address');
        return false
    }
 }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={20} />
      <ToastContainer limit={1} position="bottom-left" theme="colored" />

      <FadeIn>

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              What is your current <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Address</span>? 

            </h2>
            
        </div>
        <form className="mt-8 space-y-6">


          
        <div className=" leading-5 ">

                            <Autocomplete
                                    apiKey="AIzaSyChTcMUCY9Zw3j00st0uKkqTz0RGlOpea8"
                                    className="appearance-none p-3  text-lg font-semibold leading-none bg-input-purple rounded text-white h-16 w-full text-center"
                                    id="address"
                  name="address"
                  defaultValue={addressValue}
                  type="text"
                                    label="address"
                                    autoComplete="street-address"
                                    placeholder="Enter your address..."
                  onChange={isEdit}
                  
                                    required={true}
                                    onBlur={setAddressValue}
                                    onPlaceSelected = {
                                        (place) => {

                                            const address = place.address_components.reduce((seed, { long_name, types }) => {
                                                types.forEach(t => {
                                                    seed[t] = long_name;
                                                });

                                                return seed;
                                            }, {});

                                          let streetNumber =  address.street_number;
                                          let route = address.route;
                                          let locality = address.locality;
                                          let state = address.administrative_area_level_1;

                                          if (typeof streetNumber === 'undefined') {
                                            let string = route;
                                            setAddressValue(string);
                                          } else {
                                            let string = streetNumber + " " + route;
                                            setAddressValue(string);
                                          }

                                          let botttomText = locality + ", " + state;
                                          setBottomText(botttomText)
                                          setIsButtonDisabled(false)

                                    }}
                                   options= {{
                                       componentRestrictions: {country: "us"},
                                       types: ["address"],
                                       fields: ["address_components", "geometry", "icon", "name"],
                                }}

                />
                <p className="text-white text-center justify-center pt-2">{bottomText}</p>

                <button
            type="submit"
            disabled={isButtonDisabled}
            className={`px-6 py-4 mt-5 text-lg justify-center text-center w-full bg-pink-600 ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : ""} hover:shadow-lg text-white rounded transition duration-200`}
            id="zipCodeButton"
            onClick={nextStep}>
            Next
          </button>

              </div>
              
             
              <LinkWithQuery to="/current-policy">Back</LinkWithQuery>
              

        </form>
      </div>
      </div>
        <CTA />
        </FadeIn>

      </div>
      
  )

}

export default Address;