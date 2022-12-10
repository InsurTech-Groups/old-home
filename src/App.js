import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import moment from 'moment';

import NavBar from "./components/NavBar";
import Footer from './components/Footer'
import LandingPage from "./pages/LandingPage";
import InsuranceStatus from "./questions/InsuranceStatus";
import CurrentInsurance from './questions/CurrentInsurance';
import ExpiredInsurance from "./questions/ExpiredInsurance";
import TypeOfHome from "./questions/TypeOfHome";
import Ownership from "./questions/Ownership";
import BedRooms from "./questions/Bedrooms";
import YearBuilt from "./questions/YearBuilt";
import SquareFootage from "./questions/SquareFootage";
import Gender from "./questions/Gender";
import DOB from './questions/DOB';
import Address from "./questions/Address";
import Claims from './questions/Claims';
import CreditScore from "./questions/CreditScore";
import Name from './questions/Name';
import EmailPhone from "./questions/EmailPhone";
import ThankYou from './questions/ThankYou'
import Confirm from "./questions/Confirm";

export default function App() {


  // useState for post Data that will go into jangle
  const date = moment().format();
  const uA = navigator.userAgent;


  const [postData, setPostData2] = useState({
  
    meta: {
      originally_created: date,
      trusted_form_cert_url: '',
      user_agent: uA,
      landing_page_url: "https://www.home.insurtechgroups.com",
      tcpa_compliant: true,
      tcpa_consent_text: "By clicking Get My Free Quote below, I am agreeing to receive text messages from InsurTech Groups and business partners. I provide my signature expressly consenting to recurring contact from Insurtech Groups or its business partners at the number I provided regarding products or services via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time. Terms & conditions & Privacy policy apply."
    },

    contact: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      ip_address: ""
    },

    data: {
      birth_date: "",
      gender: "",
      marital_status: "",
      properties: [
        {
          // TODO: add any home information we are grabbing here
          property_type: "",
          ownership: "",
          occupancy: "",
          year_built: "",

        }
      ],

      requested_policy: {
        coverage_type: "",
        liability: "",
        deductible: "",
        replacement_cost:""
      },
      
      current_policy: {
        insurance_company: "",
        expiration_date: "",
        coverage_type: "",
      }
    }

  });

  // useEffect(() => {
  //   const stringifiedData = sessionStorage.getItem("main-form-data");

  //   if (stringifiedData) {
  //     const jsonData = JSON.parse(stringifiedData);
  //     setPostData(jsonData);
  //   }
  // }, []);

  // useEffect(() => {
  //   sessionStorage.setItem("main-form-data", JSON.stringify(postData));
  // }, [JSON.stringify(postData)]);

  const setPostData = (obj) => {
    console.table("in app state", postData);
    setPostData2(obj);
  };

  const setPostDataForPage = (data) => {
  
  setPostData((prev) => {
    return { ...prev, ...data };  
  });

  };

  



  return (
    <div>
      <NavBar />

      <Routes>

        <Route
          path="/"
          element={
            <LandingPage
              postData={setPostDataForPage}
              
            />
          }
        />

        <Route
          path='/insurance-status'
          element={
            <InsuranceStatus
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/current-insurance'
          element={
            <CurrentInsurance
              postData={setPostDataForPage}
            />
          }
        />

        
<Route
          path='/expired-insurance'
          element={
            <ExpiredInsurance
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/home-type'
          element={
            <TypeOfHome
              postData={setPostDataForPage}
              sendData={postData}
            />
          }
        />

<Route
          path='/ownership'
          element={
            <Ownership
              postData={setPostDataForPage}
            />
          }
        />
        
        <Route
          path='/bedrooms'
          element={
            <BedRooms
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/year-built'
          element={
            <YearBuilt
              postData={setPostDataForPage}
            />
          }
        />
        <Route
          path='/square-footage'
          element={
            <SquareFootage
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/gender'
          element={
            <Gender
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/dob'
          element={
            <DOB
              postData={setPostDataForPage}
            />
          }
        />

        
<Route
          path='/address'
          element={
            <Address
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/claims'
          element={
            <Claims
              postData={setPostDataForPage}
            />
          }
        />
<Route
          path='/credit'
          element={
            <CreditScore
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/name'
          element={
            <Name
              postData={setPostDataForPage}
            />
          }
        />

        <Route
          
          path='/email-phone'
          element={
            <EmailPhone
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/confirm'
          element={
            <Confirm
              postData={setPostDataForPage}
            />
          }
        />

<Route
          path='/thank-you'
          element={
            <ThankYou
              postData={setPostDataForPage}
            />
          }
        />
        
      </Routes>
      <Footer/>
    </div>
  );
}
