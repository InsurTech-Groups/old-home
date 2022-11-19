import React, { useState } from "react";
import "../styles/LandingPage.css";
import LandingHeaderPic from "../assets/homeLanding.jpg";
import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import ZipCode from '../apis/zipCode'
import FAQ from "../components/faq";

function LandingPage({postData}) {


  const features = [
    {
      name: 'Competitive HOme Rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Getting A Quote Is Fast And Easy',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Get A Quote Within 24 Hours',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: BoltIcon,
    },
  ]


  return (
    <div>
      <main className="lg:relative bg-dark-purple">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Get Your Free</span> <br />
              <span className="block font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Home Insurance Quote
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <ZipCode postData={postData} />
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={LandingHeaderPic}
            alt=""
          />
        </div>
      </main>

      <div className="bg-input-purple py-36">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className=" text-center mb-12 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">Why Choose Us </h1>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name} className='bg-white rounded-xl p-5'>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-button-purple text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-extrabold leading-6 text-dark-purple">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-dark-purple">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      </div>
      <FAQ/>
    </div>
  );
}

export default LandingPage;