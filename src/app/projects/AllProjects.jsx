"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

// Asset imports
import miraicbd from "../../assets/miracbdss.png";
import nexttech from "../../assets/nexttechss.png";
import ubehero from "../../assets/ubeheross.png";
import tutortree from "../../assets/tutortreess.png";
import mycolorevent from "../../assets/mycoloreventss.png";
import bookforest from "../../assets/bookforestss.png";
import serin from "../../assets/serinss.png";
import xutech from "../../assets/xutech.png";
import jubair from "../../assets/jubair-portfolio.png";
import taxage from "../../assets/taxage.png";
import fabrica from "../../assets/fabrica.png";
import hrm from "../../assets/hrm.png"; 

import "../../styles/homePage.css";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category");

  const projectsData = {
    saas: [
      {
        title: "ENVERIA HRM",
        image: hrm,
        desc: "A comprehensive Human Resource Management system featuring real-time attendance tracking, payroll automation, and employee lifecycle management with Socket.io integration.",
        frontend: "Next.js, React, Tailwind CSS",
        backend: "Node.js, Express, MongoDB, Socket.io",
        duration: "4 months",
        link: "https://hrm-client-lac.vercel.app/",
        credentials: [
          { role: "Super-Admin", user: "jubairahmed060@gmail.com", pass: "jubairahmed060" },
          { role: "Admin", user: "ademize360@gmail.com", pass: "ademize360" },
          { role: "Employee", user: "nafis.ais.bup@gmail.com", pass: "nafis.ais.bup" },
        ],
      },
    ],
    ecommerce: [
      {
        title: "SERIN",
        image: serin,
        desc: "SERIN is a modern cosmetics e-commerce website where customers can browse beauty products, add items to their cart, and complete purchases through a secure checkout system.",
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "1 month",
        link: "https://www.serinbeautyshop.com",
      },
      {
        title: "BOOK FOREST",
        image: bookforest,
        desc: "Jubair Ahmed is an online bookstore that allows users to explore a wide range of books, purchase them easily, and enjoy a smooth browsing and checkout experience.",
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "1 month",
        link: "https://www.bookforest.net",
      },
      {
        title: "MY COLOR EVENT",
        image: mycolorevent,
        desc: "MY COLOR EVENT is an event management platform designed to help users plan, organize, and book events seamlessly with a user-friendly interface and efficient backend support.",
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "1 month",
        link: "https://www.mycolorevents.com/",
      },
    ],
    web: [
      {
        title: "FABRICA",
        image: fabrica,
        desc: "We deliver premium aluminum & glass solutions — waterproof, noise-reducing, eco-friendly, and built to last.",
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://www.fabrica.com.bd/",
      },
      {
        title: "TEX EDGE AUTOMATION",
        image: taxage,
        desc: "Tex Edge Automation delivers advanced sewing automation solutions to empower garment factories to enhance productivity, quality, and efficiency.",
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://client-2-iota.vercel.app/",
      },
      {
        title: "XUTECH",
        image: xutech,
        desc: "XUTECH is a consultancy company website designed as a modern portfolio to showcase services, expertise, and client-focused solutions with a sleek and professional interface.",
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://www.xutech.co/",
      },
      {
        title: "JUBAIR AHMED PORTFOLIO",
        image: jubair,
        desc: "Personal developer portfolio designed to showcase skills, experience, and custom software solutions with a clean, high-performance interface.",
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://jubair-ahmed.vercel.app/",
      },
      {
        title: "MIRAICBD",
        image: miraicbd,
        desc: "MIRAICBD is a consultancy company website designed as a modern portfolio to showcase services, expertise, and client-focused solutions with a sleek and professional interface.",
        frontend: "React.js, Firebase, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://miraicbd.com/",
      },
      {
        title: "NEXTTECHITC",
        image: nexttech,
        desc: "NEXTTECH ITC is an IT course-selling platform built with engaging animations and a smooth user experience, providing students with easy access to tech courses and training programs.",
        frontend: "React, Framer Motion",
        backend: "Node.js, Express, MongoDB",
        duration: "1 month",
        link: "https://www.nexttechitc.com/",
      },
    ],
    "job-board": [
      {
        title: "Tutor Tree",
        image: tutortree,
        desc: "Tutor Tree is an online job portal that connects students with qualified tutors and helps teachers find tutoring opportunities through advanced search and filtering features.",
        frontend: "React, Framer Motion",
        backend: "Node.js, Express, MongoDB",
        duration: "2 months",
        link: "https://66f2b09a38f9aa0084e219af--magical-souffle-89638e.netlify.app/",
      },
    ],
    gaming: [
      {
        title: "UBE HERO",
        image: ubehero,
        desc: "UBE HERO is a competitive gaming platform where players can join tournaments, track performance, and engage in exciting challenges with a modern and interactive interface.",
        frontend: "Next.js, SCSS, Tailwind CSS, NextAuth",
        backend: "PostgreSQL",
        duration: "2 months",
        link: "https://ubehero.vercel.app/",
      },
    ],
  };

  const categories = Object.keys(projectsData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    }
  }, [categoryFromQuery, categories]);

  let projectsToShow = [];
  if (selectedCategory === "all") {
    projectsToShow = categories.flatMap((cat) =>
      projectsData[cat].map((p) => ({ ...p, category: cat }))
    );
  } else {
    projectsToShow = projectsData[selectedCategory] || [];
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen fontPoppins text-left">
      {/* Category Navigation Menu */}
      <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-12">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-5 py-2.5 uppercase tracking-wide text-xs md:text-sm font-medium cursor-pointer rounded-xl transition-all duration-300  ${
            selectedCategory === "all"
              ? "text-white shadow-lg"
              : "bg-transparent text-gray-400 border-gray-800 hover:text-white hover:border-gray-600"
          }`}
        >
          All Projects
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 uppercase tracking-wide text-xs md:text-sm font-medium cursor-pointer rounded-xl transition-all duration-300 ${
              selectedCategory === cat
                ? "text-white shadow-lg"
                : "bg-transparent text-gray-400 border-gray-800 hover:text-white hover:border-gray-600"
            }`}
          >
            {cat.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {projectsToShow.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {projectsToShow.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row w-full h-auto min-h-[480px] bg-zinc-950/40 border border-zinc-800/60 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl hover:border-zinc-700/80 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.03)]"
            >
              {/* Right Side: Showcase Image with hover vertical scrolling */}
              <div className="relative w-full md:w-1/2 h-[420px] md:h-auto min-h-[380px] overflow-hidden bg-zinc-900 border-t md:border-t-0 md:border-l border-zinc-800/80 order-1 md:order-2">
                <div className="absolute inset-0 select-none">
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    placeholder="blur"
                    className="w-full h-auto min-h-full object-top object-cover transition-transform duration-[7000ms] ease-in-out group-hover:translate-y-[calc(-100%+380px)] md:group-hover:translate-y-[calc(-100%+480px)]"
                  />
                </div>
              </div>

              {/* Left Side: Content Area */}
              <div className="flex flex-col justify-between w-full md:w-1/2 p-6 sm:p-8 md:p-10 z-10 order-2 md:order-1">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3 block">
                    {project.category ? project.category.replace("-", " ") : "Overview"}
                  </span>
                  
                  <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-4 group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-6">
                    {project.desc}
                  </p>

                  {/* Enhanced Demo Credentials Section */}
                  {project.credentials && (
                    <div className="mb-6 p-4 bg-zinc-900/80 border border-zinc-700/50 rounded-xl space-y-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Demo Access Details</span>
                      </div>
                      
                      <div className="grid gap-3">
                        {project.credentials.map((cred, i) => (
                          <div key={i} className="group/cred text-[11px] leading-tight">
                            <p className="text-zinc-500 font-bold mb-1 uppercase tracking-tighter">{cred.role}</p>
                            <div className="bg-black/40 p-2 rounded border border-zinc-800/50 group-hover/cred:border-zinc-600 transition-colors">
                              <p className="text-zinc-300 select-all font-mono break-all cursor-text">
                                <span className="text-zinc-600 mr-1 italic">Email:</span>{cred.user}
                              </p>
                              <p className="text-zinc-300 select-all font-mono mt-1 cursor-text">
                                <span className="text-zinc-600 mr-1 italic">Pass:</span>{cred.pass}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="border-t border-zinc-800/80 pt-5 space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-medium">Frontend</span>
                      <span className="text-zinc-300 font-normal">{project.frontend}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-medium">Backend</span>
                      <span className="text-zinc-300 font-normal">{project.backend}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 font-medium">Timeframe</span>
                      <span className="text-zinc-300 font-normal">{project.duration}</span>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 bg-white text-black font-bold rounded-lg text-sm transition-transform active:scale-95 hover:bg-zinc-200"
                  >
                    View Live Site
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-zinc-500 text-lg">No projects available in this category.</p>
        </div>
      )}
    </div>
  );
}