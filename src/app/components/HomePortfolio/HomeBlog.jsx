"use client"

import React, { useState } from "react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "../../../styles/homePage.css";


const HomeBlog = () => {
  const services = [
    {
      icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
      title: "Custom Web Development",
      color: "white",
      description:
        "Tailored solutions built with React, Next.js for blazing fast performance",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
      title: "Responsive UI/UX",
      color: "white",
      description:
        "Pixel-perfect designs that work flawlessly across all devices",
    },
    {
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      title: "Rapid Prototyping",
      color: "white",
      description: "Transform ideas into working prototypes in just 1 week",
    },
    {
      icon: <ServerStackIcon className="w-10 h-10 text-white" />,
      title: "Backend Solutions",
      color: "white",
      description: "Scalable Node.js, Express, and database architectures",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10 text-white" />,
      title: "Secure Applications",
      color: "white",
      description: "Built-in security best practices from day one",
    },
    {
      icon: <ArrowsPointingOutIcon className="w-10 h-10 text-white" />,
      title: "Performance Optimization",
      color: "white",
      description: "Lightning-fast load times and smooth user experiences",
    },
    {
      icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
      title: "API Integration",
      color: "white",
      description: "Seamless integration with third-party APIs and services",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
      title: "Mobile-First Design",
      color: "white",
      description: "Prioritizing mobile experience for modern users",
    },
    {
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
      title: "SEO Optimization",
      color: "white",
      description: "Built-in SEO best practices for better visibility",
    },
    {
      icon: <ServerStackIcon className="w-10 h-10 text-white" />,
      title: "Cloud Deployment",
      color: "white",
      description: "Easy deployment to AWS, Vercel, and other cloud platforms",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleServices = services.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <div className="bg-transparent apple-font lg:py-16 sm:pb-16 ">
      <div className="max-w-6xl mx-auto px-4 mobileHidden">
        <div className=" flex flex-row items-center justify-between gap-4 mb-12">
          <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
            Blogs
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <button className="bg-white rounded-full text-black fontPoppins px-6 py-2 font-semibold whitespace-nowrap">
            View All
          </button>
        </div>
        
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all ${
              currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
          
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServices.map((service, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all duration-300 group overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg text-white mr-4 shadow-md`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                    {service.description}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-4 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 webHidden">
        <div className="flex flex-row items-center justify-between gap-4 ">
          <h1 className="textHeading italic text-white font-bold whitespace-nowrap">
            Blogs
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <button className="bg-white rounded-full text-[8px] text-black fontPoppins px-4 py-2 font-semibold whitespace-nowrap">
            View All
          </button>
        </div>
{/* Mobile Only - Services Slider */}
<div className="block md:hidden relative w-full overflow-hidden">
  {/* Slide Container */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentSlide * 70}%)`, 
      // 1 full card + 1 half (approx 70%)
    }}
  >
    {services.map((service, index) => (
      <div
        key={index}
        className="min-w-[70%] mr-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-white/30 transition-all duration-300 group overflow-hidden"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-3">
            <div className="p-2.5 rounded-lg bg-white/10 text-white mr-3 shadow-inner">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
              {service.title}
            </h3>
          </div>
          <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">
            {service.description}
          </p>
          <div className="mt-3 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation arrows */}
  <button
    onClick={prevSlide}
    disabled={currentSlide === 0}
    className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm ${
      currentSlide === 0 ? "opacity-40 cursor-not-allowed" : ""
    }`}
  >
    <ChevronLeftIcon className="w-6 h-6 text-white" />
  </button>

  <button
    onClick={nextSlide}
    disabled={currentSlide === services.length - 1}
    className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm ${
      currentSlide === services.length - 1 ? "opacity-40 cursor-not-allowed" : ""
    }`}
  >
    <ChevronRightIcon className="w-6 h-6 text-white" />
  </button>

  {/* Slide indicators */}
  <div className="flex justify-center mt-3 space-x-2">
    {services.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2.5 h-2.5 rounded-full transition ${
          index === currentSlide ? "bg-white scale-110" : "bg-white/30"
        }`}
      />
    ))}
  </div>
</div>


      </div>
    </div>
  );
};

export default HomeBlog;