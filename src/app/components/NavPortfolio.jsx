"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import '../../styles/homePage.css';

const NavPortfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 apple-font text-[16px] w-full z-50 relative transition-colors duration-300`}
    >
      {/* Background layer changes on scroll */}
      <div
        className={`absolute inset-0 pointer-events-none z-[-1] transition-all duration-300 ${
          scrolled ? "bg-black/40 backdrop-blur-3xl" : "bg-transparent"
        }`}
      />

      {/* Top Navbar */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
         <Link href="/">
          <div className="text-xl text-gray-200 italic">Jubair Ahmed</div>
         </Link>

          {/* Desktop Menu */}
          <div className="hiddenSm md:flex space-x-6 relative">
            <Link
              href="/"
              className="text-gray-200 hover:text-white duration-300"
            >
              Home
            </Link>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-200 hover:text-white duration-300">
                Services
              </button>
            </div>

            {/* Projects Dropdown Trigger */}
            <div
              // className="relative"
              // onMouseEnter={() => handleMouseEnter("projects")}
              // onMouseLeave={handleMouseLeave}
            >
              <Link href="/projects">
              <button className="text-gray-200 cursor-pointer hover:text-white duration-300">
                Projects
              </button>
              </Link>
            </div>

            <Link
              href="/about"
              className="text-gray-200 hover:text-white duration-300"
            >
              About Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleSidebar} className="md:hidden text-white ml-4">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Services Dropdown */}
      <div
        className={`absolute bg-black/40 backdrop-blur-xl left-0 top-16 w-full z-40 shadow-md transition-all duration-300 ${
          activeDropdown === "services"
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        } md:block`}
        onMouseEnter={() => handleMouseEnter("services")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-6xl mx-auto px-4 text-xl py-6 grid grid-cols-2 gap-6 text-left">
          <Link
            href="/services/web-dev"
            className="text-gray-300 hover:text-white py-1"
          >
            Web Development
          </Link>
          <Link
            href="/services/mobile-dev"
            className="text-gray-300 hover:text-white py-1"
          >
            Mobile Apps
          </Link>
          <Link
            href="/services/crm-dev"
            className="text-gray-300 hover:text-white py-1"
          >
            CRM Development
          </Link>
          <Link
            href="/services/e-commerce"
            className="text-gray-300 hover:text-white py-1"
          >
            E-Commerce Development
          </Link>
          <Link
            href="/services/graphic-design"
            className="text-gray-300 hover:text-white py-1"
          >
            Graphic Design
          </Link>
          <Link
            href="/services/uiux-design"
            className="text-gray-300 hover:text-white py-1"
          >
            UI/UX Design
          </Link>{" "}
        </div>
      </div>

      {/* Projects Dropdown */}
      <div
        className={`absolute bg-black/10 backdrop-blur-xl left-0 top-16 w-full z-40 shadow-md transition-all duration-300 ${
          activeDropdown === "projects"
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        } md:block`}
        onMouseEnter={() => handleMouseEnter("projects")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-6xl mx-auto text-xl px-8 py-6 grid grid-cols-2 gap-6 text-left">
      <Link href="/projects?category=ecommerce" className="text-gray-300 hover:text-white py-1">
        E-commerce
      </Link>
      <Link href="/projects?category=web" className="text-gray-300 hover:text-white py-1">
        Portfolio Website
      </Link>
      <Link href="/projects?category=job-board" className="text-gray-300 hover:text-white py-1">
        Job Board
      </Link>
      <Link href="/projects?category=crm" className="text-gray-300 hover:text-white py-1">
        CRM / Dashboard
      </Link>
      <Link href="/projects?category=gaming" className="text-gray-300 hover:text-white py-1">
        Gaming Platform
      </Link>
      <Link href="/projects?category=mobile" className="text-gray-300 hover:text-white py-1">
        Mobile Apps Projects
      </Link>
      <Link href="/projects?category=uiux" className="text-gray-300 hover:text-white py-1">
        UI/UX
      </Link>
      <Link href="/projects?category=graphic-design" className="text-gray-300 hover:text-white py-1">
        Graphic Design
      </Link>
    </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 bg-black/10 backdrop-blur-xl right-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 text-lg text-white">
          <button onClick={toggleSidebar} className="self-end">
            <X size={24} />
          </button>

          <Link
            href="/"
            onClick={toggleSidebar}
            className="text-gray-200 hover:text-white duration-300 py-2"
          >
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleMobileDropdown("services")}
              className="flex items-center justify-between text-gray-200 hover:text-white duration-300 py-2"
            >
              <span>Services</span>
              {mobileDropdown === "services" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {mobileDropdown === "services" && (
              <div className="ml-4 mt-2 space-y-3">
                <Link
                  href="/services/design"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Graphic Design
                </Link>
                <Link
                  href="/services/design"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  UI/UX Design
                </Link>
                <Link
                  href="/services/web-dev"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/mobile-dev"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Mobile Apps
                </Link>
                <Link
                  href="/services/mobile-dev"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  LMS Development
                </Link>
                <Link
                  href="/services/mobile-dev"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  E-Commerce
                </Link>
                <Link
                  href="/services/cloud"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Cloud Services
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Projects Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleMobileDropdown("projects")}
              className="flex items-center justify-between text-gray-200 hover:text-white duration-300 py-2"
            >
              <span>Projects</span>
              {mobileDropdown === "projects" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {mobileDropdown === "projects" && (
              <div className="ml-4 mt-2 space-y-3">
                <Link
                  href="/projects/portfolio"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Portfolio Website
                </Link>
                <Link
                  href="/projects/mobile"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Mobile Projects
                </Link>
                <Link
                  href="/projects/ai"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  AI Projects
                </Link>
                <Link
                  href="/projects/ecommerce"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  E-commerce
                </Link>
                <Link
                  href="/projects/enterprise"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Enterprise
                </Link>
                <Link
                  href="/projects/startup"
                  onClick={toggleSidebar}
                  className="block text-gray-300 hover:text-white"
                >
                  Startup
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={toggleSidebar}
            className="text-gray-200 hover:text-white duration-300 py-2"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}
    </nav>
  );
};

export default NavPortfolio;
