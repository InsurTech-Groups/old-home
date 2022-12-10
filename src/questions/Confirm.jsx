import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import Sending from "../assets/Confirm.json";
import { useNavigate } from 'react-router';


const Confirm = () => {


  const navigate = useNavigate();

  

  useEffect(() => {

    //set time out function that lasts 3 seconds
    setTimeout(() => {
     
      navigate('/thank-you')
    } 
    , 3000)
    
  }, [])
  


  return (
    <div>
 <div className="bg-input-purple ">

<section className="py-8 w-full mx-auto" id='lottie'>
  <div className="container px-4 mx-auto">
    <div className="py-5 bg-button-purple lg:w-1/2 md:w-full sm:w-full mx-auto overflow-hidden rounded-lg">
      <div className="flex flex-wrap align-middle">
        <div className="w-full md:w-full px-6 md:pl-12 lg:pr-0 text-center m-auto">
          <h3 className="mb-2 lg:text-4xl sm:text-lg font-medium text-white text-center">
            <span data-config-id="header-p2">We are submitting your form...</span>
          </h3>
          <p className="lg:text-xl sm:text-sm font-medium text-blue-100 text-center justify-center" data-config-id="desc">Please wait while we match you with an agent!</p>
        </div>

      </div>
    </div>

    <Lottie animationData={Sending} loop={true} className="lottie" />

  </div>

</section>




</div>

      
    </div>
  );
}

export default Confirm;
