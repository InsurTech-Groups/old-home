import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function ZipCode({postData}) {


  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [zipCodeValue, setZipCodeValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const navigate = useNavigate();


  useEffect(() => {

    const apiKey = process.env.REACT_APP_IPAPI_KEY;

    const req = {
      async: true,
      crossDomain: true,
      method: "GET",
      redirect: "follow",
      url: 'https://ipapi.co/json/?' + apiKey,
    }

    $.ajax(req).done(function (res) {

      let zip = res.postal;
      let city = res.city;
      let state = res.region;

      console.log(res)

      setZipCodeValue(zip);
      setCityValue(city);
      setStateValue(state)

    
    })

  }, []);




  function revalidateZipCode(e) {

    let zipCode = e.target.value;

    setIsButtonDisabled(false);

    let zipTrim = zipCode.trim();

    if (zipTrim === "" || zipTrim === null || zipTrim === undefined || zipTrim === 0 || zipTrim < 5 || zipCode === NaN) {
      toast.error("Please enter a valid zip code!");
      setIsButtonDisabled(true);

    }
    else {
      toast.dismiss();
      toast.clearWaitingQueue();
      setIsButtonDisabled(false);

      axios.get("https://ziptasticapi.com/" + zipCode)
        .then((res) => {

          const c = res.data.city;
          const s = res.data.state;
          const z = zipCode;

          setCityValue(c);
          setStateValue(s);
          setZipCodeValue(z);

        })
        .catch((err) => {
          toast.error("Invalid Zip Code");
        })
    }

  }

  function nextStep(e) {

    e.preventDefault();

    let zip = zipCodeValue;

    zip = parseInt(zip);

    if (isButtonDisabled) {
      toast.error("Please enter a valid zip code!");
      return
    }
    else if (isNaN(zip)) {
      toast.error("Please enter a valid zip code!");
      setIsButtonDisabled(true);
      return
      
    }
    else if(zipCodeValue.length < 5){
      toast.error('Please enter a valid zip code!');
      setIsButtonDisabled(true);
      return
    }
    else { 

      updatededProps();
    }

  }

  const updatededProps = () => {

    postData(current => {

      return{
        ...current,
        contact: {
          ...current.contact, 
          city: cityValue,
          state: stateValue,
          zip_code: zipCodeValue
        }
      }
      
    })
    navigate('/insurance-status');

  }

  

 


  return (
    <div className="mt-10">
      <ToastContainer limit={1} position="bottom-left" theme="colored" />


      <form>
        <div>
          <label htmlFor="zipCode" className="sr-only">
            Enter Your Zip Code
          </label>
          <input
            className=" w-full p-3 text-lg font-semibold leading-none text-light-purple bg-input-purple rounded text-white zipInput "
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            pattern="\d*"
                        id="zipCode"
            defaultValue={zipCodeValue}
            onChange={revalidateZipCode}
            minLength={5}
            maxLength={5}
            required
          />

          



          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`px-6 py-4 w-full ripple-bg-blue-200  mt-5 text-lg bg-pink-600 ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : ""} hover:shadow-lg text-white rounded transition duration-200`}
            id="zipCodeButton"
            onClick={nextStep}>
            Start My Quote
          </button>
        </div>
        <p className='text-white font-extrabold text-md pt-2 pb-2' id='location'>Savings Available In <span className=' font-thin bg-gradient-to-r text-lg rounded-lg pl-2 pr-2 from-purple-400 to-pink-600'>{cityValue}, {stateValue} </span></p>
      </form>
    </div>
  )
}
export default ZipCode;