import React, { useState } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { updateExpiredInsurance } from "../utils/updateFirebase";



function ExpiredInsurance() {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [expInsurance, setExpInsurance] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [dayValue, setDayValue] = useState('');


  const navigate = useNavigate();

  let exp;


  const nextStep = (e) => {

    e.preventDefault();
    
    exp = document.getElementById('expires').value;

    let value = expInsurance;

    if(expInsurance.length < 10){
      setIsButtonDisabled(true);
      toast.error('Please enter a valid date');
      return
    }

    else{
     

      updateExpiredInsurance(yearValue, monthValue, dayValue)
      navigate('/home-type')
    }  
  
  };




  const validationExpiration = (input) => {


    let v = input;


    let year = v.slice(6, 10);
    let day = v.slice(0, 2);
    let month = v.slice(3, 5);

    setYearValue(year);
    setMonthValue(month);
    setDayValue(day);

    // make year a number
    year = parseInt(year);

    toast.clearWaitingQueue();

    if (year < 2023 || year > 2024) {
      toast.error("Please enter a valid year");
      setIsButtonDisabled(true);
      return;
    }
    if (v.length !== 10) {
      toast.error("Please enter a valid date");
      setIsButtonDisabled(true)
      return;

    }
    else {
      exp = v;
      setIsButtonDisabled(false);
    }

  }

  const dateInputvalidate = (e) => {

    var date = document.getElementById("expires");
    toast.clearWaitingQueue();
    toast.dismiss();

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

      setIsButtonDisabled(false)
      this.type = "text";
      var input = this.value;
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
      var values = input.split("/").map(function (v) {
        return v.replace(/\D/g, "");
      });
      if (values[0]) values[0] = checkValue(values[0], 12);
      if (values[1]) values[1] = checkValue(values[1], 31);
      var output = values.map(function (v, i) {
        return v.length == 2 && i < 2 ? v + "/" : v;
      });
      this.value = output.join("").substr(0, 14);
    });

    date.addEventListener("blur", function (e) {
      setIsButtonDisabled(false)
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
      setIsButtonDisabled(false)

      setExpInsurance(input)

      validationExpiration(input);
    });
  }
   

 
  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={20} />
      

            <ToastContainer limit={1} position="bottom-left" theme="colored" />


      <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
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
                            name="exp"
                            id="expires"
                    placeholder="MM/DD/YYYY"
                    pattern="\d*"
                            required
                            className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  onChange={(e) => validationExpiration(e)}
                  onKeyDown={dateInputvalidate}
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

            <LinkWithQuery to="/insurance-status">Back</LinkWithQuery>
          </form>
        </div>
      </div>
        <CTA />
        

    </div>
  );
}

export default ExpiredInsurance;
