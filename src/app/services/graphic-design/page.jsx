"use client";
import React from "react";
import { motion } from "framer-motion";
import "../../../styles/homePage.css";

const GraphicDesign = () => {
  // Data for Design Solutions
  const solutions = [
    {
      title: "Brand Identity Design",
      description:
        "Comprehensive visual identity systems including logos, color palettes, typography, and brand guidelines.",
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
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          ></path>
        </svg>
      ),
      color: "cyan",
    },
    {
      title: "Print Design",
      description:
        "Stunning business cards, brochures, posters, packaging, and other physical marketing materials.",
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
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          ></path>
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Digital Graphics",
      description:
        "Eye-catching social media graphics, web banners, email templates, and digital advertisements.",
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
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          ></path>
        </svg>
      ),
      color: "indigo",
    },
    {
      title: "Illustration",
      description:
        "Custom illustrations, icons, and infographics to make your content stand out and communicate effectively.",
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
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      ),
      color: "green",
    },
  ];

  // Data for Our Services
  const services = [
    {
      title: "Logo Design",
      description:
        "Memorable and distinctive logos that capture your brand's essence and make a lasting impression.",
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
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          ></path>
        </svg>
      ),
    },
    {
      title: "Brand Guidelines",
      description:
        "Comprehensive manuals that ensure consistent application of your brand across all touchpoints.",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          ></path>
        </svg>
      ),
    },
    {
      title: "Packaging Design",
      description:
        "Innovative packaging solutions that enhance product appeal and create unboxing experiences.",
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
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          ></path>
        </svg>
      ),
    },
    {
      title: "Social Media Graphics",
      description:
        "Platform-optimized visuals that boost engagement and strengthen your social media presence.",
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Presentation Design",
      description:
        "Professional slide decks that communicate your ideas clearly and persuasively.",
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
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Infographics",
      description:
        "Visual storytelling that transforms complex data into engaging, easy-to-understand graphics.",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      ),
    },
  ];

  // Data for Design Tools
  const technologies = [
    {
      title: "Adobe Creative Suite",
      description:
        "Photoshop, Illustrator, InDesign, XD for professional-grade design work",
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
      title: "Digital Illustration",
      description:
        "Procreate, Affinity Designer, CorelDRAW for vector and raster artwork",
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
      title: "UI/UX Tools",
      description:
        "Figma, Sketch, Adobe XD for interface and experience design",
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      title: "3D Design",
      description:
        "Blender, Cinema 4D, Maya for three-dimensional graphics and animation",
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
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          ></path>
        </svg>
      ),
    },
    {
      title: "Typography",
      description:
        "Expert knowledge of typefaces, hierarchy, and responsive typography systems",
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Print Production",
      description:
        "Prepress expertise, color management, and print-ready file preparation",
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
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
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
            Graphic Design
          </h1>
          <p className="text-xl font-semibold text-white/70">
            Transform your brand with stunning visual designs that communicate
            your message and captivate your audience.
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

        {/* Design Solutions */}
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

        {/* Our Services Section */}
        <div className="flex my-10 flex-col items-start justify-start gap-4 mb-12">
          <h1 className="text-5xl text-start italic text-white font-bold whitespace-nowrap">
            Our Design Services
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
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-blue-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <div className="space-y-6 text-white mt-16">
          <h1 className="text-5xl text-start italic font-bold">
            Design Tools & Technologies
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
      {/* Mobile Only Graphic Design Page */}
      <div className="block md:hidden w-full px-4 py-6 space-y-10">
        {/* Hero Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl italic font-bold text-white">
            Graphic Design
          </h1>
          <p className="text-sm text-white/70">
            Transform your brand with stunning visual designs that communicate
            your message and captivate your audience.
          </p>
          <button className="relative rounded-full text-white bg-white/10 hover:bg-white/20 active:bg-white/30 px-6 py-2 border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden group">
            <span className="relative z-10 text-sm font-medium">
              Start Your Project
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Design Solutions */}
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
                <div
                  className={`bg-${solution.color}-500/10 p-2 rounded-lg mr-3`}
                >
                  {solution.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {solution.title}
                </h3>
              </div>
              <p className="text-xs text-blue-100">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Design Services */}
        <div className="space-y-4">
          <h2 className="text-3xl italic font-bold text-white">
            Our Design Services
          </h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <div className="bg-blue-500/10 p-2 rounded-lg mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-blue-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Design Tools & Technologies */}
        <div className="space-y-4">
          <h2 className="text-3xl italic font-bold text-white">
            Design Tools & Technologies
          </h2>
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <div className="bg-blue-500/10 p-2 rounded-lg mr-3">
                    {tech.icon}
                  </div>
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

export default GraphicDesign;
