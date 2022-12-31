import React from 'react'
import LandingHeaderPic from "../assets/homeLanding.jpg";

export default function LandingPageVariationTwo() {


  return (
    <div>
      
<section className=" bg-gradient-to-br from-dark-purple 
  to-input-purple background-animate overflow-hidden">

  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center -m-6 pt-32 pb-36">
      <div className="w-full lg:w-1/2 p-6">
        <div className="lg:max-w-xl">
          <p className="mb-8 font-heading max-w-max px-5 py-2.5 uppercase font-semibold text-xs tracking-wider text-white bg-gradient-to-br from-button-purple to-pink-500 rounded-full">Get A Quote In Minutes</p>
          <h1 className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl text-white font-bold">Get a free home insurance quote</h1>
          <p className="mb-9 text-white text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
          <button className="group relative font-heading px-10 py-5 w-full lg:w-auto uppercase text-white text-md font-semibold tracking-px bg-button-purple overflow-hidden rounded-md">
            <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-dark-purple"></div>
            <p className="relative z-10">Get A Free Quote Now</p>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <img className="block mx-auto rounded-lg" src={LandingHeaderPic} alt=""/>
      </div>
    </div>
  </div>
</section>
      
      
<section class="py-36 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto">
      <div class="flex flex-wrap justify-center md:justify-between -m-6 mb-20">
        <div class="w-auto p-6">
          <a class="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800" href="#">
            <p class="mb-2 px-7">Fill Out Our Form</p>
            <div class="h-0.5 bg-gradient-cyan"></div>
          </a>
        </div>
        <div class="w-auto p-6">
          <a class="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800" href="#">
            <p class="mb-2 px-7">Get A Free Quote</p>
            <div class="h-0.5 bg-gray-200"></div>
          </a>
        </div>
        <div class="w-auto p-6">
          <a class="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800" href="#">
            <p class="mb-2 px-7">Start Saving Money</p>
            <div class="h-0.5 bg-gray-200"></div>
          </a>
        </div>
      </div>
      <div class="flex flex-wrap -m-11">
        <div class="w-full md:w-1/2 p-11">
          <img class="mx-auto" src="gradia-assets/images/how-it-works/illustration.png" alt=""/>
        </div>
        <div class="w-full md:w-1/2 p-11">
          <h2 class="mb-6 font-heading font-bold text-5xl text-gray-900">Start with creating a filling out our simple form.</h2>
          <p class="mb-9 text-gray-900 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit justo, sit iaculis ultrices vitae pulvinar tellus. Volutpat, ut lacus tristique blandit ligula.</p>
          <div class="flex flex-wrap -m-2">
            <div class="w-full lg:w-auto p-2">
              <button class="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md">Talk to an agent</button>
            </div>
            <div class="w-full lg:w-auto p-2">
              <button class="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-md">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
