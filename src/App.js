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

export default function App() {


  // useState for post Data that will go into jangle
  const date = moment().format();
  const uA = navigator.userAgent;


  const [postData, setPostData2] = useState({
  
    
      originally_created: date,
      lead_id_code: "4xyz78b9-0cdc-43a7-98ea-2b680a5313a2",
      trusted_form_cert_url: "https://cert.trustedform.com/f886071...",
      user_agent: uA,
      landing_page_url: "https://www.home.insurtechgroups.com",
      tcpa_compliant: true,
      tcpa_consent_text: "I agree to receive to be contacted by phone or email.",
   

  
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      ip_address: "",
   

   
      birth_date: "",
      gender: "",
      marital_status: "",
      
          property_type: "",
          ownership: "",
          occupancy: "",
       

    
        coverage_type: "",
        liability: "",
        deductible: "",
        replacement_cost:"",
   
      
  
        insurance_company: "",
        expiration_date: "",
        coverage_type: "",

    

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
    console.log("in app state", postData);
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

      </Routes>
      <Footer/>
    </div>
  );
}
