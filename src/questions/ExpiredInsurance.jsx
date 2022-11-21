import React, { useState, useEffect, Fragment } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import FadeIn from 'react-fade-in';



function ExpiredInsurance({postData}) {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  const navigate = useNavigate();

  let exp;


  const nextStep = (e) => {

    e.preventDefault();
    
    exp = document.getElementById('expires').value;

    console.log('click')
    navigate('/home-type')
  
  };

  function sDOB(e) {
    console.log(e.target.value);

    let v = e.target.value;
  

    let year = v.slice(6, 10);

    // make year a number
    year = parseInt(year);

    console.log(year)
    toast.clearWaitingQueue();

    if (year < 2022 || year > 2024) {
     toast.error("Please enter a valid year");
    }
    // if v isnt the length of 10 toast.error
    if (v.length !== 10) {
      toast.error("Please enter a valid date");
    }
    else {
      exp = v;
      setIsButtonDisabled(false);
    }

  }

  useEffect(() => {
    var date = document.getElementById("expires");

    function checkValue(str, max) {
      if (str.charAt(0) !== "0" || str == "00") {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str =
          num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
            ? "0" + num
            : num.toString();
      }
      return str;
    }

    date.addEventListener("input", function (e) {
      this.type = "text";
      var input = this.value;
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
      var values = input.split("/").map(function (v) {
        return v.replace(/\D/g, "");
      });
      if (values[0]) values[0] = checkValue(values[0], 12);
      if (values[1]) values[1] = checkValue(values[1], 31);
      var output = values.map(function (v, i) {
        return v.length == 2 && i < 2 ? v + " / " : v;
      });
      this.value = output.join("").substr(0, 14);
    });

    date.addEventListener("blur", function (e) {
      this.type = "text";
      var input = this.value;
      var values = input.split("/").map(function (v, i) {
        return v.replace(/\D/g, "");
      });
      var output = "";

      if (values.length == 3) {
        var year =
          values[2].length !== 4
            ? parseInt(values[2]) + 2000
            : parseInt(values[2]);
        var month = parseInt(values[0]) - 1;
        var day = parseInt(values[1]);
        var d = new Date(year, month, day);
        if (!isNaN(d)) {
          document.getElementById("expires").innerText = d.toString();
          var dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
          output = dates
            .map(function (v) {
              v = v.toString();
              return v.length == 1 ? "0" + v : v;
            })
            .join("/");
        }
      }
      this.value = output;
    });
  }, []);

  // get todays date
  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={10} />
      <FadeIn>

            <ToastContainer limit={1} position="bottom-left" theme="colored" />


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
                            type="text"
                            name="expires"
                            id="expires"
                            placeholder="MM/DD/YYYY"
                            required
                            className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                    onChange={() => {
                      toast.clearWaitingQueue();
                  }}
                    onBlurCapture={sDOB}
                          />

              </div>

              <button
            type="submit"
            disabled={isButtonDisabled}
            className={`px-6 py-4 max-w-xl  mt-5 text-lg bg-pink-600 ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : ""} hover:shadow-lg text-white rounded transition duration-200`}
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
        </FadeIn>

    </div>
  );
}

export default ExpiredInsurance;
