"use client"
import React from "react";
import { motion } from "framer-motion";
import '../../../styles/homePage.css'

const eCommerce = () => {
  // Data for E-commerce Solutions
  const solutions = [
    {
      title: "Online Store Development",
      description: "Custom-built e-commerce platforms with intuitive interfaces and seamless shopping experiences.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      color: "cyan"
    },
    {
      title: "Mobile Commerce",
      description: "Optimized shopping experiences for mobile users with responsive designs and app-like functionality.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple options including credit cards, digital wallets, and cryptocurrencies.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Inventory Management",
      description: "Real-time stock tracking, automated reordering, and multi-location inventory synchronization.",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      ),
      color: "green"
    }
  ];

  // Data for Our Services
  const services = [
    {
      title: "Custom E-commerce Development",
      description: "Tailored online stores built from scratch to match your unique business requirements.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    },
    {
      title: "Platform Migration",
      description: "Seamless transition from your current platform to a more powerful e-commerce solution.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
        </svg>
      )
    },
    {
      title: "Headless Commerce",
      description: "Decoupled front-end and back-end for greater flexibility and performance.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
        </svg>
      )
    },
    {
      title: "Marketplace Development",
      description: "Multi-vendor platforms connecting buyers and sellers with advanced commission systems.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      )
    },
    {
      title: "Subscription Models",
      description: "Recurring revenue systems with flexible billing cycles and member management.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Performance Optimization",
      description: "Speed enhancements, SEO improvements, and conversion rate optimization.",
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
      title: "E-commerce Platforms",
      description: "Shopify, WooCommerce, Magento, BigCommerce, custom solutions",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      title: "Frontend Technologies",
      description: "React, Vue.js, Next.js, Tailwind CSS, Web Components",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Backend Systems",
      description: "Node.js, Django, Laravel, .NET, Ruby on Rails",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
      )
    },
    {
      title: "Payment Solutions",
      description: "Stripe, PayPal, Square, Braintree, cryptocurrency",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "Analytics & AI",
      description: "Google Analytics, Mixpanel, recommendation engines, chatbots",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS, Google Cloud, Azure, Docker, Kubernetes",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
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
            E-commerce Development
          </h1>
          <p className="text-xl font-semibold text-white/70">
            Build powerful online stores that convert visitors into loyal customers with our custom e-commerce solutions.
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
            <span className="relative z-10">Get Started</span>
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

        {/* E-commerce Solutions */}
        <div className="rounded-2xl shadow-2xl mb-16">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-${solution.color}-400/30 transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`bg-${solution.color}-500/10 p-3 rounded-lg mr-4`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-blue-100">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="flex my-10 flex-col items-start justify-start gap-4 mb-12">
          <h1 className="text-5xl text-start italic text-white font-bold whitespace-nowrap">
            Our E-commerce Services
          </h1>
        </div>

        <motion.div 
          className="space-y-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-blue-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <div className="space-y-6 text-white mt-16">
          <h1 className="text-5xl text-start italic font-bold">
            E-commerce Technologies We Use
          </h1>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                </div>
                <p className="text-blue-100">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Mobile Only E-commerce Development Page */}
<div className="block md:hidden w-full px-4 py-6 space-y-10 webHidden">

  {/* Hero Section */}
  <div className="flex flex-col gap-3">
    <h1 className="text-3xl italic font-bold text-white">E-commerce Development</h1>
    <p className="text-sm text-white/70">
      Build powerful online stores that convert visitors into loyal customers with our custom e-commerce solutions.
    </p>
    <button
      className="relative rounded-full text-white bg-white/10 hover:bg-white/20 active:bg-white/30 px-6 py-2 border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden group"
    >
      <span className="relative z-10 text-sm font-medium">Get Started</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </div>

  {/* E-commerce Solutions */}
  <div className="space-y-4">
    {solutions.map((solution, index) => (
      <motion.div
        key={index}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-${solution.color}-400/30 transition-all duration-300`}
      >
        <div className="flex items-center mb-2">
          <div className={`bg-${solution.color}-500/10 p-2 rounded-lg mr-3`}>
            {solution.icon}
          </div>
          <h3 className="text-lg font-bold text-white">{solution.title}</h3>
        </div>
        <p className="text-xs text-blue-100">{solution.description}</p>
      </motion.div>
    ))}
  </div>

  {/* Our E-commerce Services */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Our E-commerce Services</h2>
    <div className="space-y-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
        >
          <div className="flex items-center mb-2">
            <div className="bg-blue-500/10 p-2 rounded-lg mr-3">{service.icon}</div>
            <h3 className="text-lg font-bold text-white">{service.title}</h3>
          </div>
          <p className="text-xs text-blue-100">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* E-commerce Technologies */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">E-commerce Technologies We Use</h2>
    <div className="space-y-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
        >
          <div className="flex items-center mb-2">
            <div className="bg-blue-500/10 p-2 rounded-lg mr-3">{tech.icon}</div>
            <h3 className="text-lg font-bold text-white">{tech.title}</h3>
          </div>
          <p className="text-xs text-blue-100">{tech.description}</p>
        </motion.div>
      ))}
    </div>
  </div>

</div>

    </div>
  );
};

export default eCommerce;