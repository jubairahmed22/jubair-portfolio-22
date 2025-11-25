"use client"
import React from "react";
import { motion } from "framer-motion";
import '../../../styles/homePage.css'

const CRMDEV = () => {
  // Data for CRM Solutions
  const solutions = [
    {
      title: "Sales Automation",
      description: "Streamline your sales process with automated lead tracking, deal management, and pipeline visualization.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      color: "cyan"
    },
    {
      title: "Customer Support",
      description: "Enhance customer service with ticketing systems, knowledge bases, and multi-channel support integration.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Marketing Automation",
      description: "Automate campaigns, track customer engagement, and personalize marketing efforts at scale.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Analytics & Reporting",
      description: "Gain actionable insights with custom dashboards, sales forecasts, and performance metrics.",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      color: "green"
    }
  ];

  // Data for Our Services
  const services = [
    {
      title: "Custom CRM Development",
      description: "Tailored CRM solutions designed specifically for your business processes and workflows.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    },
    {
      title: "CRM Integration",
      description: "Seamless integration with your existing ERP, accounting, email, and other business systems.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      )
    },
    {
      title: "Cloud-Based CRM",
      description: "Secure, scalable CRM solutions hosted in the cloud for anytime, anywhere access.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      )
    },
    {
      title: "Mobile CRM",
      description: "CRM applications optimized for mobile devices to keep your team productive on the go.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "CRM Migration",
      description: "Expert assistance in migrating from legacy systems to modern CRM platforms.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      )
    },
    {
      title: "CRM Training & Support",
      description: "Comprehensive training programs and ongoing support for your team.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      )
    }
  ];

  // Data for Technologies
  const technologies = [
    {
      title: "CRM Platforms",
      description: "Salesforce, HubSpot, Microsoft Dynamics, Zoho, SugarCRM",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: "Development Frameworks",
      description: "ASP.NET, Laravel, Django, Ruby on Rails, Node.js",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      title: "Database Systems",
      description: "SQL Server, MySQL, PostgreSQL, MongoDB, Oracle",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      )
    },
    {
      title: "Integration Tools",
      description: "Zapier, MuleSoft, Dell Boomi, Workato, custom APIs",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      title: "AI & Analytics",
      description: "Machine learning, predictive analytics, NLP, Power BI, Tableau",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      title: "Security & Compliance",
      description: "GDPR, HIPAA, SOC 2, encryption, role-based access control",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
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
            CRM Development
          </h1>
          <p className="text-xl font-semibold text-white/70">
            Transform your customer relationships with custom CRM solutions designed to streamline operations and boost sales.
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
            <span className="relative z-10">Request Demo</span>
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

        {/* CRM Solutions */}
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
            Our CRM Services
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
            CRM Technologies We Use
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
      {/* Mobile Only CRM Development Page */}
<div className="block md:hidden w-full px-4 py-6 space-y-10 webHidden">

  {/* Hero Section */}
  <div className="flex flex-col gap-3">
    <h1 className="text-3xl italic font-bold text-white">CRM Development</h1>
    <p className="text-sm text-white/70">
      Transform your customer relationships with custom CRM solutions designed to streamline operations and boost sales.
    </p>
    <button
      className="relative rounded-full text-white bg-white/10 hover:bg-white/20 active:bg-white/30 px-6 py-2 border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden group"
    >
      <span className="relative z-10 text-sm font-medium">Request Demo</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </div>

  {/* CRM Solutions */}
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

  {/* Our CRM Services */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Our CRM Services</h2>
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

  {/* CRM Technologies */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">CRM Technologies We Use</h2>
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

export default CRMDEV;