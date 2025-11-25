"use client";

import React, { useState } from "react";
import '../../../styles/homePage.css';

import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiXiaomi, SiMongodb, SiMongoose, SiPostgresql } from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "ReactJs", icon: <SiReact className="text-cyan-400" /> },
  { name: "Nextjs", icon: <SiNextdotjs className="text-white" /> },
  { name: "Nodejs", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Expressjs", icon: <SiExpress className="text-gray-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MIUI", icon: <SiXiaomi className="text-orange-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
];

const PortfolioSlider = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="bg-transparent  heightClass apple-font ">
      
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-0 mobileHidden">
        {/* Tech Stack - Horizontal scroll on mobile */}
        <div className="flex justify-center items-center pt-8 md:pt-16 overflow-x-auto pb-4">
          <div className="flex flex-row text-white text-sm md:text-lg gap-3 md:gap-5 whitespace-nowrap">
            <h1>JavaScript</h1>
            <h1>TypeScript</h1>
            <h1>ReactJs</h1>
            <h1>Nextjs</h1>
            <h1>Nodejs</h1>
            <h1>Expressjs</h1>
            <h1>Tailwind css</h1>
            <h1>MIUI</h1>
            <h1>Mongodb</h1>
            <h1>Mongoose</h1>
            <h1>PostgreSQL</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-2">
          <h1 className="lg:text-6xl md:text-7xl venite-font font-bold text-center text-white py-6 md:py-10 leading-tight">
            Rapid Development, <br />
            Lasting Impact—Just 1 Week!
          </h1>
          <p className="text-gray-300 font-bold text-base lg:text-2xl text-center mb-8 md:mb-12 px-2 md:px-0">
            I thrive under tight deadlines, delivering high-quality solutions
            without cutting corners. From concept to launch, my streamlined
            process ensures efficiency and excellence—all in 7 days. Fast
            doesn't mean rushed; it means focused, skilled, and results-driven.
          </p>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-row justify-center lg:w-[50%] md:w-[50%] sm:w-full mx-auto items-center gap-4 pb-8 md:pb-0">
            <div className="flex flex-row sm:flex-row justify-center lg:w-[50%] md:w-[50%] sm:w-full mx-auto items-center gap-4 pb-8 md:pb-0">
              <button
                className={`relative overflow-hidden glass-liquid-button font-bold py-3 px-6 rounded-full w-full sm:w-auto transition-all duration-500 ${
                  isDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg"
                }`}
                disabled={isDisabled}
                onClick={() => alert("Scheduled!")}
              >
                <span className="relative z-10">View Projects</span>
                <style jsx>{`
                  .glass-liquid-button {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    position: relative;
                  }

                  .glass-liquid-button:not(:disabled):hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.02);
                  }

                  .glass-liquid-button::before {
                    content: "";
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                      45deg,
                      transparent,
                      rgba(255, 255, 255, 0.1),
                      transparent
                    );
                    transform: rotate(45deg);
                    animation: liquidFlow 3s linear infinite;
                  }

                  @keyframes liquidFlow {
                    0% {
                      transform: rotate(45deg) translate(-30%, -30%);
                    }
                    100% {
                      transform: rotate(45deg) translate(30%, 30%);
                    }
                  }
                `}</style>
              </button>
            </div>
            <div className="flex flex-row sm:flex-row justify-center lg:w-[50%] md:w-[50%] sm:w-full mx-auto items-center gap-4 pb-8 md:pb-0">
              <button className="relative overflow-hidden glass-liquid-outline-button font-bold py-3 px-6 rounded-full w-full sm:w-auto transition-all duration-500 group">
                <span className="relative z-10">Download Resume</span>
                <style jsx>{`
                  .glass-liquid-outline-button {
                    background: transparent;
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    color: rgba(255, 255, 255, 0.9);
                    position: relative;
                  }

                  .glass-liquid-outline-button:hover {
                    color: white;
                    border-color: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
                  }

                  .glass-liquid-outline-button::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                      90deg,
                      transparent,
                      rgba(255, 255, 255, 0.1),
                      transparent
                    );
                    transition: all 0.6s ease;
                  }

                  .glass-liquid-outline-button:hover::before {
                    left: 100%;
                  }

                  .glass-liquid-outline-button::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 9999px;
                    padding: 2px;
                    background: linear-gradient(
                      45deg,
                      rgba(255, 255, 255, 0.3),
                      rgba(255, 255, 255, 0.1),
                      rgba(255, 255, 255, 0.3)
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                      linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                  }
                `}</style>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="px-4 webHidden">
        <h1 className="textHeading pt-20 font-bold text-center text-white leading-tight">
            Rapid Development, <br />
            Lasting Impact—Just 1 Week!
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mt-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center justify-center w-12 h-12 rounded-xl  backdrop-blur-md border  shadow-md hover:shadow-lg cursor-pointer transition-all duration-300"
          >
            <div className="text-2xl">{tech.icon}</div>
            <p className="text-[8px] text-white mt-1 font-medium text-center">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row w-[80%] mx-auto gap-2 items-center mt-10">
  {/* Schedule Button */}
  <div className="flex  flex-row sm:flex-row justify-center sm:w-full mx-auto items-center  pb-6 md:pb-0">
    <button
      className={`relative overflow-hidden glass-liquid-button font-semibold py-2 px-4 rounded-full text-sm sm:text-base w-auto transition-all duration-500 ${
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:shadow-md"
      }`}
      disabled={isDisabled}
      onClick={() => alert("Scheduled!")}
    >
      <span className="relative z-10">View Projects</span>
      <style jsx>{`
        .glass-liquid-button {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          position: relative;
        }

        .glass-liquid-button:not(:disabled):hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.02);
        }

        .glass-liquid-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          animation: liquidFlow 3s linear infinite;
        }

        @keyframes liquidFlow {
          0% {
            transform: rotate(45deg) translate(-30%, -30%);
          }
          100% {
            transform: rotate(45deg) translate(30%, 30%);
          }
        }
      `}</style>
    </button>
  </div>

  {/* Portfolio Button */}
  <div className="flex  flex-row sm:flex-row justify-center lg:w-auto md:w-auto sm:w-full mx-auto items-center  pb-6 md:pb-0">
    <button className="relative overflow-hidden glass-liquid-outline-button font-semibold py-2 px-4 rounded-full text-sm sm:text-base w-auto transition-all duration-500 group">
      <span className="relative z-10">Download Resume</span>
      <style jsx>{`
        .glass-liquid-outline-button {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.5);
          color: rgba(255, 255, 255, 0.9);
          position: relative;
        }

        .glass-liquid-outline-button:hover {
          color: white;
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
        }

        .glass-liquid-outline-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: all 0.6s ease;
        }

        .glass-liquid-outline-button:hover::before {
          left: 100%;
        }

        .glass-liquid-outline-button::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 2px;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.3)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </button>
  </div>
</div>

      
      </div>
    </div>
  );
};

export default PortfolioSlider;
