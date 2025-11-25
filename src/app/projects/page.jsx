"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
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
import "../../styles/homePage.css";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category");

  // Fake data for projects
  const projectsData = {
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
        frontend: "Nextjs, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://www.fabrica.com.bd/",
      },
      {
        title: "TEX EDGE AUTOMATION",
        image: taxage,
        desc: "Tex Edge Automation delivers advanced sewing automation solutions to empower garment factories to enhance productivity, quality, and efficiency.",
        frontend: "Nextjs, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://client-2-iota.vercel.app/",
      },
      {
        title: "XUTECH",
        image: xutech,
        desc: "MIRAICBD is a consultancy company website designed as a modern portfolio to showcase services, expertise, and client-focused solutions with a sleek and professional interface.",
        frontend: "Nextjs, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        duration: "2 weeks",
        link: "https://www.xutech.co/",
      },
      {
        title: "JUBAIR AHMED PORTFOLIO",
        image: jubair,
        desc: "MIRAICBD is a consultancy company website designed as a modern portfolio to showcase services, expertise, and client-focused solutions with a sleek and professional interface.",
        frontend: "Nextjs, Tailwind CSS",
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

    // mobile: [
    //   {
    //     title: "TravelMate",
    //     image: furniture,
    //     desc: "Mobile travel booking app.",
    //     frontend: "React Native",
    //     backend: "Express, MongoDB",
    //     duration: "3 months",
    //     link: "https://travelmate.com",
    //   },
    //   {
    //     title: "FoodieApp",
    //     image: furniture,
    //     desc: "Mobile app for ordering food online.",
    //     frontend: "Flutter",
    //     backend: "Firebase",
    //     duration: "2 months",
    //     link: "https://foodieapp.com",
    //   },
    // ],
    // uiux: [
    //   {
    //     title: "UI Kit",
    //     image: furniture,
    //     desc: "Reusable UI component library.",
    //     frontend: "Figma, Tailwind",
    //     backend: "N/A",
    //     duration: "2 weeks",
    //     link: "https://uikit.com",
    //   },
    //   {
    //     title: "DesignX",
    //     image: furniture,
    //     desc: "Creative design system for apps.",
    //     frontend: "Sketch, React",
    //     backend: "N/A",
    //     duration: "1 month",
    //     link: "https://designx.com",
    //   },
    // ],
    // "graphic-design": [
    //   {
    //     title: "LogoCraft",
    //     image: furniture,
    //     desc: "Professional logo design collection.",
    //     frontend: "Illustrator",
    //     backend: "N/A",
    //     duration: "1 week",
    //     link: "https://logocraft.com",
    //   },
    //   {
    //     title: "PosterLab",
    //     image: furniture,
    //     desc: "Creative posters and flyers.",
    //     frontend: "Photoshop",
    //     backend: "N/A",
    //     duration: "2 weeks",
    //     link: "https://posterlab.com",
    //   },
    // ],
  };

  // All category names
  const categories = Object.keys(projectsData);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sync query param with state on page load
  useEffect(() => {
    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    }
  }, [categoryFromQuery]);

  // Get projects to display
  let projectsToShow = [];
  if (selectedCategory === "all") {
    projectsToShow = categories.flatMap((cat) =>
      projectsData[cat].map((p) => ({ ...p, category: cat }))
    );
  } else {
    projectsToShow = projectsData[selectedCategory] || [];
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 min-h-screen text-left text-xl fontPoppins">
      <div className="w-full mobileHidden">
        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 uppercase text-sm cursor-pointer rounded-lg ${
              selectedCategory === "all" ? " text-gray-100" : " text-white"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 uppercase text-sm cursor-pointer rounded-lg  ${
                selectedCategory === cat ? "text-gray-100" : " text-white"
              }`}
            >
              {cat.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {projectsToShow.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {projectsToShow.map((project, idx) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] block"
              >
                {/* Card container */}
                <div className="absolute inset-0">
                  {/* Image that will scroll on hover */}
                  <img
                    src={project.image?.src || "/placeholder.jpg"} // fallback if no image
                    alt={project.title}
                    className="w-full h-auto min-h-full object-cover transition-transform duration-[10000ms] ease-linear group-hover:translate-y-[calc(600px-100%)]"
                    style={{ transform: "translateY(0)" }}
                  />
                </div>

                {/* Overlay with details */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-2xl p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Frontend:</span>{" "}
                    {project.frontend}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Backend:</span>{" "}
                    {project.backend}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Duration:</span>{" "}
                    {project.duration}
                  </p>
                  {selectedCategory === "all" && (
                    <p className="text-xs text-gray-500 mt-1 italic">
                      {project.category.replace("-", " ")}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No projects found.</p>
        )}
      </div>
      <div className="w-full webHidden">
        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-1 mb-4">
          <button
            className={`px-4 py-2 text-sm cursor-pointer rounded-lg ${
              "all" === "all" ? " text-gray-100" : " text-white"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm cursor-pointer rounded-lg capitalize ${
                selectedCategory === cat ? "text-gray-100" : " text-white"
              }`}
            >
              {cat.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {projectsToShow.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {projectsToShow.map((project, idx) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] block"
              >
                {/* Card container */}
                <div className="absolute inset-0">
                  {/* Image that will scroll on hover */}
                  <img
                    src={project.image?.src || "/placeholder.jpg"} // fallback if no image
                    alt={project.title}
                    className="w-full h-auto min-h-full object-cover transition-transform duration-[10000ms] ease-linear group-hover:translate-y-[calc(600px-100%)]"
                    style={{ transform: "translateY(0)" }}
                  />
                </div>

                {/* Overlay with details */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-2xl p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Frontend:</span>{" "}
                    {project.frontend}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Backend:</span>{" "}
                    {project.backend}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Duration:</span>{" "}
                    {project.duration}
                  </p>
                  {selectedCategory === "all" && (
                    <p className="text-xs text-gray-500 mt-1 italic">
                      {project.category.replace("-", " ")}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No projects found.</p>
        )}
      </div>
    </div>
  );
}
