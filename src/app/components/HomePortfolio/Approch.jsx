import React from "react";
import {
  LightBulbIcon,
  PaintBrushIcon,
  BoltIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import '../../../styles/homePage.css';

const Approch = () => {
  const services = [
    {
      number: "01",
      icon: <LightBulbIcon className="w-8 h-8 text-indigo-600" />,
      title: "Strategy & Planning",
      description:
        "We transform your vision into an actionable roadmap through comprehensive research and strategic planning.",
      color: "bg-indigo-100",
    },
    {
      number: "02",
      icon: <PaintBrushIcon className="w-8 h-8 text-pink-600" />,
      title: "Responsive UI/UX",
      description:
        "Our design team crafts beautiful, intuitive interfaces that work flawlessly across all devices.",
      color: "bg-pink-100",
    },
    {
      number: "03",
      icon: <BoltIcon className="w-8 h-8 text-amber-500" />,
      title: "Rapid Prototyping",
      description:
        "We quickly turn concepts into interactive prototypes for immediate feedback and iteration.",
      color: "bg-amber-100",
    },
    {
      number: "04",
      icon: <PuzzlePieceIcon className="w-8 h-8 text-emerald-600" />,
      title: "Development",
      description:
        "Clean, efficient code implementation with modern technologies and best practices.",
      color: "bg-emerald-100",
    },
    {
      number: "05",
      icon: <ArrowPathIcon className="w-8 h-8 text-blue-600" />,
      title: "Testing & Refinement",
      description:
        "Rigorous quality assurance to ensure flawless performance and user experience.",
      color: "bg-blue-100",
    },
    {
      number: "06",
      icon: <ChartBarIcon className="w-8 h-8 text-purple-600" />,
      title: "Launch & Growth",
      description:
        "We don't just deploy - we analyze, optimize, and help your product grow.",
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="lg:py-20 fontPoppins bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mobileHidden">
        <div className="flex flex-row items-center justify-between gap-4 mb-12">
          <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
            Our Approach
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
            6-Step Process
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8 h-full">
                <div
                  className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>

                <div className="flex items-start">
                  <span className="text-5xl font-bold text-white/10 mr-4 -mt-2">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="webHidden max-w-6xl mx-auto px-4 sm:px-6">
         <h1 className="text-6xl textCodeDeploy font-semibold text-gray-400 text-start mb-12">
          Our Approach<br></br>{" "}
          <span className="text-gray-100">6 step of process</span>
        </h1>
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
  );
};

export default Approch;
