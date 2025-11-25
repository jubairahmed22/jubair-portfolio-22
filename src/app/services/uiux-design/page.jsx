"use client";
import React from "react";
import { motion } from "framer-motion";
import '../../../styles/homePage.css'

const UIUX = () => {
  // Data for UI/UX Solutions
  const solutions = [
    {
      title: "User Interface Design",
      description:
        "Beautiful, intuitive interfaces that enhance usability and create memorable digital experiences. We focus on visual hierarchy, consistency, and aesthetic appeal.",
      icon: (
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      color: "cyan",
    },
    {
      title: "User Experience Strategy",
      description:
        "Comprehensive UX planning including user flows, information architecture, and interaction design to create seamless product journeys.",
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          ></path>
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Prototyping & Testing",
      description:
        "Interactive prototypes to validate concepts before development, with usability testing to refine the experience.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          ></path>
        </svg>
      ),
      color: "indigo",
    },
    {
      title: "Design Systems",
      description:
        "Scalable design systems with component libraries, style guides, and documentation for consistent product development.",
      icon: (
        <svg
          className="w-6 h-6 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          ></path>
        </svg>
      ),
      color: "green",
    },
  ];

  // Data for Our Process
  const process = [
    {
      title: "Research & Discovery",
      description:
        "User interviews, competitive analysis, and market research to understand needs and opportunities.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
      ),
    },
    {
      title: "Wireframing",
      description:
        "Low-fidelity sketches to establish layout, functionality, and user flows without visual distractions.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Visual Design",
      description:
        "High-fidelity mockups with colors, typography, and visual elements that bring the interface to life.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
      ),
    },
    {
      title: "Prototyping",
      description:
        "Interactive prototypes that simulate the final product for stakeholder feedback and user testing.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      ),
    },
    {
      title: "User Testing",
      description:
        "Validate designs with real users to identify pain points and opportunities for improvement.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Implementation Support",
      description:
        "Collaboration with developers to ensure design fidelity and address technical constraints.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
    },
  ];

  // Data for Design Tools
  const technologies = [
    {
      title: "Figma",
      description:
        "Our primary tool for interface design, prototyping, and collaboration",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          ></path>
        </svg>
      ),
    },
    {
      title: "Adobe XD",
      description: "For high-fidelity prototypes and complex animations",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Sketch",
      description: "For vector-based interface design and symbol libraries",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      ),
    },
    {
      title: "InVision",
      description: "For interactive prototypes and design handoff",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Webflow",
      description: "For no-code prototyping and responsive design testing",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          ></path>
        </svg>
      ),
    },
    {
      title: "Miro",
      description: "For collaborative whiteboarding and user journey mapping",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          ></path>
        </svg>
      ),
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-transparent fontPoppins apple-font py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 mobileHidden">
        {/* Hero Section */}
        <div className="flex flex-col items-start justify-start gap-4 mb-12">
          <h1 className="text-5xl text-start italic text-white font-bold whitespace-nowrap">
            UI/UX Design
          </h1>
          <p className="text-xl font-semibold text-white/70">
            We craft intuitive, beautiful digital experiences that users love.
            Our human-centered approach combines aesthetics with functionality
            to create products that look great and work even better.
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
            <span className="relative z-10">Start Your Project</span>
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

        {/* UI/UX Solutions */}
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
                    <div
                      className={`bg-${solution.color}-500/10 p-3 rounded-lg mr-4`}
                    >
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-blue-100">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Process Section */}
        <div className="flex my-10 flex-col items-start justify-start gap-4 mb-12">
          <h1 className="text-5xl text-start italic text-white font-bold whitespace-nowrap">
            Our Design Process
          </h1>
          <p className="text-xl font-semibold text-white/70">
            A proven methodology that delivers exceptional results at every
            stage
          </p>
        </div>

        <motion.div
          className="space-y-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-blue-100">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <div className="space-y-6 text-white mt-16">
          <div className="flex flex-col items-start justify-start gap-4 mb-12">
            <h1 className="text-5xl text-start italic font-bold">
              Our Design Toolkit
            </h1>
            <p className="text-xl font-semibold text-white/70">
              The industry-standard tools we use to bring your vision to life
            </p>
          </div>

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
      {/* Mobile Only UI/UX Design Page */}
<div className="block md:hidden w-full px-4 py-6 space-y-10 webHidden">

  {/* Hero Section */}
  <div className="flex flex-col gap-3">
    <h1 className="text-3xl italic font-bold text-white">UI/UX Design</h1>
    <p className="text-sm text-white/70">
      We craft intuitive, beautiful digital experiences that users love. Our human-centered approach combines aesthetics with functionality to create products that look great and work even better.
    </p>
    <button
      className="relative rounded-full text-white bg-white/10 hover:bg-white/20 active:bg-white/30 px-6 py-2 border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden group"
    >
      <span className="relative z-10 text-sm font-medium">Start Your Project</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </div>

  {/* UI/UX Solutions */}
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

  {/* Our Design Process */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Our Design Process</h2>
    <p className="text-sm text-white/70">
      A proven methodology that delivers exceptional results at every stage
    </p>

    <div className="space-y-4">
      {process.map((step, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
        >
          <div className="flex items-center mb-2">
            <div className="bg-blue-500/10 p-2 rounded-lg mr-3">{step.icon}</div>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
          </div>
          <p className="text-xs text-blue-100">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Design Toolkit */}
  <div className="space-y-4">
    <h2 className="text-3xl italic font-bold text-white">Our Design Toolkit</h2>
    <p className="text-sm text-white/70">
      The industry-standard tools we use to bring your vision to life
    </p>

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

export default UIUX;
