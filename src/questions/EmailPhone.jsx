import React, { useState } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import PhoneInput from "react-phone-number-input/input";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { emailphone } from "../utils/updateFirebase";
import { postDataToJangle } from "../utils/postDataToJangle";
import axios from "axios";

function EmailPhone() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [areBothValid, setAreBothValid] = useState(0);
  const navigate = useNavigate();

  function editPhoneNumber(e) {
    let phoneNumber = document.getElementById("phone_home").value;
    let trim = phoneNumber.trim();

    if (
      phoneNumber === "" ||
      phoneNumber === null ||
      phoneNumber === undefined
    ) {
      toast.error("Please enter a phone number");
      setIsButtonDisabled(true);
      return false;
    } else {
      setIsButtonDisabled(false);
      toast.clearWaitingQueue();
      setPhone(phoneNumber);
      toast.dismiss();
    }
  }

  function editEmail(e) {
    let em = e.target.value;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (em === "" || em === null || em === undefined) {
      toast.error("Please enter a valid email");
      setIsButtonDisabled(true);

      return false;
    } else {
      setIsButtonDisabled(false); 
      toast.clearWaitingQueue();
      toast.dismiss();
      setEmail(em); 
    }
  }

  function nextStep(e) {
    e.preventDefault();

    let em = email;
    let ph = phone;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (em === undefined || ph === undefined) {
      setIsButtonDisabled(true);
      toast.error("Please make sure all fields are complete");
      return false;
    }
    if (!reg.test(em)) {
      toast.error("Please enter a valid email");
      setIsButtonDisabled(true);
      return false;
    }
    if (phone.length === 0 || phone.length < 14) {
      toast.error("Please enter the phone number in a correct format");
      setIsButtonDisabled(true);
      return false;
    } else {
      let tel = phone;
      tel = tel.replace(/\D+/g, "");
      setIsButtonDisabled(false);

      emailphone(em, ph);

      console.log("checking email");
      checkEmail(em);
      console.log("email was success, checking phone now");
      checkPhone(phone);
      console.log("phone was success, posting to jangle now");

      localStorage.setItem("done", "yes");

      if (isButtonDisabled) {
        return;
      } else {
        console.log("IM POSTING");
        postDataToJangle();
        navigate("/confirm");
      }
    }
  }

  const checkEmail = (em) => {
    axios
      .get(
        `https://emailvalidation.abstractapi.com/v1/?api_key=9a7f85375faa421ba7e1d959415f40ed&email=${em}`
      )
      .then((response) => {
        let data = response.data;
        if (
          data.deliverability === "UNDELIVERABLE" ||
          data.deliverability === "UNKNOWN"
        ) {
          console.log("email wrong");

          setIsButtonDisabled(true);
          return false;
        }
        if (data.is_valid_format === false) {

          console.log("email wrong");
          setIsButtonDisabled(true);
          return false;
        }
        if (data.is_disposable_email === true) {
          setIsButtonDisabled(true);
          console.log("email wrong");
          return false;
        } else {
          toast.dismiss();
          console.log("success");
          toast.clearWaitingQueue();
          console.log("email right");

          // buttonDisabled(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return console.log("ended");

   
  };

  const checkPhone = (tel) => {
    axios
      .get(
        `https://phonevalidation.abstractapi.com/v1/?api_key=75f89b138e344044ab0f3cd7ef56af67&phone=1${tel}`
      )
      .then((response) => {
        let data = response.data;

        if (data.valid) {
          setIsButtonDisabled(true);
          return;
        }
        if (data.code !== "US") {
          setIsButtonDisabled(true);
          return;
        } else {
          toast.dismiss();
          toast.clearWaitingQueue();
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return console.log("phone valid");
  };
  // get todays date
  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={99} />
      
        <ToastContainer limit={1} position="bottom-left" theme="colored" />

        <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
          <div className="m-w-1/2 space-y-8">
            <div>
              <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
                Lastly, What is your{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                  Email{" "}
                </span>
                &
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                  {" "}
                  Phone Number
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
                    onChange={editEmail}
                  />

                  <PhoneInput
                    defaultCountry="US"
                    country="US"
                    className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                    id="phone_home"
                    placeholder="Phone Number"
                    name="phone_home"
                    onChange={editPhoneNumber}
                    autoComplete="none"
                  />
                </div>

               
                <p className="text-white lg:w-1/2 md:w-full sm:w-full">
                By clicking, “Get My Free Quote” below, I am providing my consent for Insurtech Groups and its service providers, Aktify and BoomAI, to use automated technology, including calls, texts, prerecorded messages and emails, to contact me about insurance offers at the number and email provided even if my number is on a corporate, state or national do not call list. This consent is not required to make a purchase.  Clicking the button below constitutes your electronic signature. <a
                    className="text-button-purple "
                    href="https://www.insurtechgroups.com/terms-conditions"
                  >
                    {" "}
                    Terms & conditions
                  </a>{" "} and <a
                    href="https://www.insurtechgroups.com/privacy-policy"
                    className="text-button-purple"
                  >
                    Privacy policy
                  </a>{" "} apply. Msg & data rates may apply. Text “stop” to unsubscribe.
 

                </p>

                <button
                  type="submit"
                  disabled={isButtonDisabled}
                  className={`px-6 py-4 max-w-xl  mt-5 text-lg bg-pink-600 ${
                    isButtonDisabled
                      ? "cursor-not-allowed disabled:opacity-75  bg-input-purple"
                      : ""
                  } hover:shadow-lg text-white rounded transition duration-200`}
                  id="zipCodeButton"
                  onClick={nextStep}
                >
                  Get My Free Quote
                </button>
              </div>

              <LinkWithQuery to="/name">Back</LinkWithQuery>
            </form>
          </div>
        </div>
        <CTA />
      
    </div>
  );
}

export default EmailPhone;
