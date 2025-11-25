"use client"
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "./motion";
import '../../../styles/homePage.css'

const WebDevPage = () => {
  // Data for Web Development Solutions
  const solutions = [
    {
      title: "E-Commerce Solutions",
      description: "Custom online stores with secure payment gateways and optimized shopping experiences.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      color: "cyan"
    },
    {
      title: "Portfolio Sites",
      description: "Creative showcases for your skills, achievements, and professional projects.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Web Applications",
      description: "Scalable apps for startups and enterprises using modern technology stacks.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "CMS Development",
      description: "Easy-to-manage platforms with WordPress, Strapi, or custom content solutions.",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      ),
      color: "green"
    }
  ];

  // Data for Our Services
  const services = [
    {
      title: "E-commerce Platforms",
      description: "Robust online stores with secure payments and smooth checkout experiences.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "Business Websites",
      description: "Professional, responsive sites that boost brand identity and trust.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: "Portfolio & Personal Websites",
      description: "Showcase skills, achievements, and creativity with modern designs.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )
    },
    {
      title: "Web Applications",
      description: "Scalable, high-performance apps for startups and enterprises.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Content Management Systems",
      description: "Easy-to-manage platforms using WordPress, Strapi, or custom solutions.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      )
    },
    {
      title: "Custom Web Solutions",
      description: "Tailored features and designs that match unique business requirements.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    }
  ];

  // Data for Technologies
  const technologies = [
    {
      title: "Frontend",
      description: "React.js, Next.js, Tailwind CSS, Bootstrap",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Backend",
      description: "Node.js, Express.js",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
      )
    },
    {
      title: "Databases",
      description: "MongoDB, PostgreSQL, Firebase",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      )
    },
    {
      title: "Cloud & Hosting",
      description: "Vercel, Netlify, Hostinger",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      )
    },
    {
      title: "Version Control",
      description: "Git, GitHub",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "APIs & Integrations",
      description: "REST API, GraphQL, Stripe, sslcommerz, Bkash",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
   <div className="bg-transparent fontPoppins apple-font py-16 min-h-screen">
  <div className="max-w-6xl mx-auto px-4 mobileHidden">
    {/* Hero Section */}
    <div className="flex flex-col items-start justify-start gap-4 mb-12">
      <h1 className="text-5xl text-start italic text-white font-bold whitespace-nowrap">
        Web Development
      </h1>
      <p className="text-xl font-semibold text-white/70">
        Developing innovative and reliable digital solutions for businesses worldwide.
      </p>
      <button
        className="
          relative
          rounded-full 
          text-md 
          font-medium
          bg-white/10 
          hover:bg-white/20 
          active:bg-white/30
          cursor-pointer 
          backdrop-blur-2xl 
          text-white
          px-8 
          py-3
          border 
          border-white/20
          hover:border-white/40
          transition-all
          duration-300
          ease-in-out
          focus:outline-none
          focus:ring-2
          focus:ring-white/50
          shadow-lg
          hover:shadow-xl
          overflow-hidden
          group
        "
      >
        <span className="relative z-10">Explore Projects</span>
        <span
          className="
            absolute 
            inset-0 
            bg-gradient-to-r 
            from-white/10 
            to-white/5 
            opacity-0 
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        ></span>
      </button>
    </div>

    {/* Web Development Solutions */}
    <div className="rounded-2xl shadow-2xl mb-16">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-${solution.color}-400/30 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`bg-${solution.color}-500/10 p-3 rounded-lg mr-4`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{solution.title}</h3>
              </div>
              <p className="text-blue-100">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Our Services Section */}
    <div className="flex my-10 flex-col items-start justify-start gap-4 mb-12">
      <h1 className="text-5xl text-start italic text-white font-bold whitespace-nowrap">
        Our Services
      </h1>
    </div>

    <div className="space-y-6 text-white">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>
            <p className="text-blue-100">{service.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Technologies Section */}
    <div className="space-y-6 text-white mt-16">
      <h1 className="text-5xl text-start italic font-bold">
        Technologies We Use
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{tech.title}</h3>
            </div>
            <p className="text-blue-100">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* Mobile Only Web Development Page */}
<div className="block md:hidden w-full px-4 py-6 space-y-10 webHidden">

  {/* Hero Section */}
  <div className="flex flex-col gap-3">
    <h1 className="text-3xl italic font-bold text-white">Web Development</h1>
    <p className="text-sm text-white/70">
      Developing innovative and reliable digital solutions for businesses worldwide.
    </p>
    <button
      className="relative rounded-full text-white bg-white/10 hover:bg-white/20 active:bg-white/30 px-6 py-2 border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden group"
    >
      <span className="relative z-10 text-sm font-medium">Explore Projects</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </div>

  {/* Web Development Solutions */}
  <div className="space-y-4">
    {solutions.map((solution, index) => (
      <div
        key={index}
        className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-${solution.color}-400/30 transition-all duration-300`}
      >
        <div className="flex items-center mb-2">
          <div className={`bg-${solution.color}-500/10 p-2 rounded-lg mr-3`}>
            {solution.icon}
          </div>
          <h3 className="text-lg font-bold text-white">{solution.title}</h3>
        </div>
        <p className="text-xs text-blue-100">{solution.description}</p>
      </div>
    ))}
  </div>

  {/* Our Services Section */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Our Services</h2>
    <div className="space-y-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
        >
          <div className="flex items-center mb-2">
            <div className="bg-blue-500/10 p-2 rounded-lg mr-3">{service.icon}</div>
            <h3 className="text-lg font-bold text-white">{service.title}</h3>
          </div>
          <p className="text-xs text-blue-100">{service.description}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Technologies Section */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Technologies We Use</h2>
    <div className="space-y-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
        >
          <div className="flex items-center mb-2">
            <div className="bg-blue-500/10 p-2 rounded-lg mr-3">{tech.icon}</div>
            <h3 className="text-lg font-bold text-white">{tech.title}</h3>
          </div>
          <p className="text-xs text-blue-100">{tech.description}</p>
        </div>
      ))}
    </div>
  </div>

</div>

</div>
  );
};

export default WebDevPage;