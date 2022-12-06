import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import PhoneInput from "react-phone-number-input/input";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import FadeIn from 'react-fade-in';


function EmailPhone({ postData }) {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  function editPhoneNumber(e){

    let phoneNumber = e.target.value;
    let trim = phoneNumber.trim();

    if(phoneNumber === "" || phoneNumber === null || phoneNumber === undefined){
        toast.error('Please enter a phone number');
        setIsButtonDisabled(true);
        return false;
    }
    if(trim.length === 0 || trim.length < 14){
        toast.error('Please enter the phone number in a correct format');
        setIsButtonDisabled(true);
        return false;
    }
    
     else{
setIsButtonDisabled(false)
        toast.clearWaitingQueue();
      toast.dismiss()
      
     
    }
  }
  

 


function editEmail(e){
    let em = email;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    if(em === "" || em === null || em === undefined || reg.test(em) === false){
        toast.error('Please enter a valid email')
        setIsButtonDisabled(true);
        return false;
    }

    else{
        setIsButtonDisabled(false)
        toast.clearWaitingQueue();
        toast.dismiss()
    }
}

function nextStep(e){

    e.preventDefault();

    let em = email;
    let ph = phone;



    if(em === undefined || ph === undefined){

        setIsButtonDisabled(true);
        toast.error('Please make sure all fields are complete');
        return false
    }
  

    else{

        let tel = phone;
        tel = tel.replace(/\D+/g, "");



        setIsButtonDisabled(false);
      
      //navigate('/thank-you')

    }

}


  // get todays date
  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={99} />
      <FadeIn>

            <ToastContainer limit={1} position="bottom-left" theme="colored" />


      <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
          <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              Lastly, What is your{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Email {' '} 
                </span>
                 & 
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                  {' '}Phone Number
                </span>
              ?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className=" space-y-6 flex flex-col  items-center justify-center">
              <div className="justify-center">
           
             
              <input
                            type="email"
                            name="email"
                            id="email"
                    placeholder="myemail@mail.com"
                    required
                    autoComplete="email"
                            className="w-full mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                   
                            onChange={setEmail}
                            onBlurCapture={editEmail}

                  />


<PhoneInput
                    defaultCountry="US"
                    country="US"
                                        className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                                        id="phone_home"
                                        placeholder="Phone Number"
                                        name="phone_home"
                                        onBlurCapture={editPhoneNumber}
                                        onChange={setPhone}
                                        minLength={14}
                                        maxLength={14}
                                        required={true}
                                    />

                  
                  

                </div>
                
                <p className="text-white w-1/2">
                By clicking "Get My Free Quote" below, I am agreeing to receive text messages from InsurTech Groups and business partners. I provide my signature expressly consenting to recurring contact from Insurtech Groups  or its business partners at the number I provided regarding products or services via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time.<a className="text-button-purple "href="https://www.insurtechgroups.com/terms-conditions"> Terms & conditions</a>  & <a href="https://www.insurtechgroups.com/privacy-policy" className="text-button-purple">Privacy policy</a> apply.

                </p>

              <button
            type="submit"
            disabled={isButtonDisabled}
            className={`px-6 py-4 max-w-xl  mt-5 text-lg bg-pink-600 ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : ""} hover:shadow-lg text-white rounded transition duration-200`}
            id="zipCodeButton"
            onClick={nextStep}>
            Get My Free Quote
          </button>
            </div>

            <LinkWithQuery to="/name">Back</LinkWithQuery>
          </form>
        </div>
      </div>
        <CTA />
        </FadeIn>

    </div>
  );
}

export default EmailPhone;
