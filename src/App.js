import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import InsuranceStatus from "./questions/InsuranceStatus";
import CurrentInsurance from "./questions/CurrentInsurance";
import ExpiredInsurance from "./questions/ExpiredInsurance";
import TypeOfHome from "./questions/TypeOfHome";
import Ownership from "./questions/Ownership";
import BedRooms from "./questions/Bedrooms";
import YearBuilt from "./questions/YearBuilt";
import SquareFootage from "./questions/SquareFootage";
import Gender from "./questions/Gender";
import DOB from "./questions/DOB";
import Address from "./questions/Address";
import Claims from "./questions/Claims";
import CreditScore from "./questions/CreditScore";
import Name from "./questions/Name";
import EmailPhone from "./questions/EmailPhone";
import ThankYou from "./questions/ThankYou";
import Confirm from "./questions/Confirm";


export default function App() {
  return (
    <div>
      <NavBar />
      <ToastContainer limit={1} position="bottom-left" theme="colored" />

      <Routes>
        <Route path="/" element={<LandingPage />} />


        <Route path="/insurance-status" element={<InsuranceStatus />} />

        <Route path="/current-insurance" element={<CurrentInsurance />} />

        <Route path="/expired-insurance" element={<ExpiredInsurance />} />

        <Route path="/home-type" element={<TypeOfHome />} />

        <Route path="/ownership" element={<Ownership />} />

        <Route path="/bedrooms" element={<BedRooms />} />

        <Route path="/year-built" element={<YearBuilt />} />
        <Route path="/square-footage" element={<SquareFootage />} />

        <Route path="/gender" element={<Gender />} />

        <Route path="/dob" element={<DOB />} />

        <Route path="/address" element={<Address />} />

        <Route path="/claims" element={<Claims />} />
        <Route path="/credit" element={<CreditScore />} />

        <Route path="/name" element={<Name />} />

        <Route path="/email-phone" element={<EmailPhone />} />

        <Route path="/confirm" element={<Confirm />} />

        <Route path="/thank-you" element={<ThankYou />} />


        <Route path="/insurance-status" element={<InsuranceStatus />} />

        <Route path="/current-insurance" element={<CurrentInsurance />} />

        <Route path="/expired-insurance" element={<ExpiredInsurance />} />

        <Route path="/home-type" element={<TypeOfHome />} />

        <Route path="/ownership" element={<Ownership />} />

        <Route path="/bedrooms" element={<BedRooms />} />

        <Route path="/year-built" element={<YearBuilt />} />
        <Route path="/square-footage" element={<SquareFootage />} />

        <Route path="/gender" element={<Gender />} />

        <Route path="/dob" element={<DOB />} />

        <Route path="/address" element={<Address />} />

        <Route path="/claims" element={<Claims />} />
        <Route path="/credit" element={<CreditScore />} />

        <Route path="/name" element={<Name />} />

        <Route path="/email-phone" element={<EmailPhone />} />

        <Route path="/confirm" element={<Confirm />} />

        <Route path="/thank-you" element={<ThankYou />} />

      </Routes>
      <Footer />
    </div>
  );
}
