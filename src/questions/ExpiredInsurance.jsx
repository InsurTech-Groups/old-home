import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import $ from "jquery";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";



function ExpiredInsurance() {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  const nextStep = (e) => {
    e.preventDefault();
    let v = e.currentTarget.value;

    setIsButtonDisabled(false)

    console.log(v)
  };

  return (
    <div className="bg-dark-purple pb-10">
            <ToastContainer limit={1} position="bottom-left" theme="colored" />

      <Banner setProgress={20} />

      <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="w-1/2 space-y-8">
          <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              When does your current policy{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Expire
              </span>
              ?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className=" space-y-6 flex flex-col  items-center justify-center">
              <div className="justify-center">
                <input
                  className="p-3 mb-10  text-2xl font-semibold  bg-input-purple rounded text-white carat-button-purple text-center "
                  type="date"
                  name="expires"
                  placeholder="01/05/2023"
                  min="01/01/2022"
                  max="12/31/2024"
                  id="expires"
                  onChange={() => {
                    setIsButtonDisabled(false)
                    nextStep()

                  }}
                  required
                />
              </div>

              <button
            type="submit"
            disabled={isButtonDisabled}
            className={`px-6 py-4 w-sm ripple-bg-blue-200  mt-5 text-lg bg-pink-600 ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : ""} hover:shadow-lg text-white rounded transition duration-200`}
            id="zipCodeButton"
            onClick={nextStep}>
            Next
          </button>
            </div>

            <LinkWithQuery to="/current-insurance">Back</LinkWithQuery>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
}

export default ExpiredInsurance;
