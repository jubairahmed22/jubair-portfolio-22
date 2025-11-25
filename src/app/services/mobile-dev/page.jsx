"use client"
import React from "react";
import { motion } from "framer-motion";
import '../../../styles/homePage.css'


const MobileDev = () => {
  // Data for Mobile App Development Solutions
  const solutions = [
    {
      title: "E-Commerce Apps",
      description: "Custom mobile stores with secure payment gateways, product catalogs, and seamless checkout experiences.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      color: "cyan"
    },
    {
      title: "Social Media Apps",
      description: "Engaging platforms for networking, content sharing, and community building with real-time features.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Enterprise Apps",
      description: "Custom business solutions for workflow automation, data management, and team collaboration.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "On-Demand Service Apps",
      description: "Platforms connecting service providers with customers for delivery, transportation, and more.",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      ),
      color: "green"
    }
  ];

  // Data for Our Services
  const services = [
    {
      title: "iOS App Development",
      description: "Native iOS apps built with Swift and SwiftUI for optimal performance on Apple devices.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Android App Development",
      description: "Native Android applications using Kotlin and Jetpack Compose for superior user experiences.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      )
    },
    {
      title: "Cross-Platform Apps",
      description: "Single codebase solutions with Flutter and React Native for iOS and Android.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces and seamless user experiences tailored to your audience.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      )
    },
    {
      title: "App Maintenance",
      description: "Ongoing support, updates, and performance optimization for existing applications.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      )
    },
    {
      title: "API Integration",
      description: "Seamless connection with third-party services and backend systems.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  // Data for Technologies
  const technologies = [
    {
      title: "Mobile Frameworks",
      description: "Flutter, React Native, SwiftUI, Jetpack Compose",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Programming Languages",
      description: "Dart, Swift, Kotlin, JavaScript",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      title: "Backend Integration",
      description: "Firebase, Node.js, GraphQL, REST APIs",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      )
    },
    {
      title: "State Management",
      description: "Provider, Bloc, Redux, Riverpod",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      )
    },
    {
      title: "Testing Tools",
      description: "JUnit, XCTest, Espresso, Mockito",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "DevOps & CI/CD",
      description: "Fastlane, GitHub Actions, Bitrise, App Center",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
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
            Mobile App Development
          </h1>
          <p className="text-xl font-semibold text-white/70">
            Building innovative and high-performance mobile applications for iOS and Android platforms.
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
            <span className="relative z-10">Explore Apps</span>
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

        {/* Mobile App Development Solutions */}
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
            Our Mobile Services
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
            Mobile Technologies We Use
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
      {/* Mobile Only Mobile App Development Page */}
<div className="block md:hidden w-full px-4 py-6 space-y-10 webHidden">

  {/* Hero Section */}
  <div className="flex flex-col gap-3">
    <h1 className="text-3xl italic font-bold text-white">Mobile App Development</h1>
    <p className="text-sm text-white/70">
      Building innovative and high-performance mobile applications for iOS and Android platforms.
    </p>
    <button
      className="relative rounded-full text-white bg-white/10 hover:bg-white/20 active:bg-white/30 px-6 py-2 border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden group"
    >
      <span className="relative z-10 text-sm font-medium">Explore Apps</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </div>

  {/* Mobile App Development Solutions */}
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

  {/* Our Mobile Services Section */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Our Mobile Services</h2>
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

  {/* Mobile Technologies Section */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Mobile Technologies We Use</h2>
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

export default MobileDev;