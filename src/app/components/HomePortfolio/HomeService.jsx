import React from "react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import "../../../styles/homePage.css";

const HomeService = () => {
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
  ];

  return (
    <div className=" apple-font lg:py-16 py-8 md:h-[600px]  lg:mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-6xl textCodeDeploy font-semibold text-gray-400 text-start mb-12">
          Code, Deploy, Optimize <br></br>{" "}
          <span className="text-gray-100">End-to-End Development</span>
        </h1>

        <div className="mobileHidden">
          <div className="grid  grid-cols-3 gap-8 pb-20">
            {services.map((service, index) => (
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

                {/* Corner accent */}
              </div>
            ))}
          </div>
        </div>
        <div className="webHidden">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pb-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-3 rounded-md hover:border-white/30 transition-all duration-300 group overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-1.5">
                    <div className="p-1.5 rounded text-white mr-2 shadow-md text-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 group-hover:text-gray-100 transition-colors leading-snug">
                    {service.description}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-1.5 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
