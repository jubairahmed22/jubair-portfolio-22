import React from "react";
import hrm from "../../../assets/hrm.png";
import rin from "../../../assets/rin.png";
import "../../../styles/homePage.css";
import Link from "next/link";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

const projects = [
  {
    id: 1,
    title: "HR Management System",
    subtitle: "SaaS Platform",
    desc: "A complete HRM platform with payroll, attendance tracking, employee management, and real-time Socket.io features.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    timeline: "4 Months",
    link: "https://hrm-client-lac.vercel.app/",
    image: hrm,
    badge: "Enterprise SaaS",
    label: "Real-time System",
  },
  {
    id: 2,
    title: "RIN Japanese Restaurant",
    subtitle: "Restaurant Management & Payments",
    desc: "A full restaurant ordering and management system for RIN Japanese in Hobart: online pickup and delivery orders, table reservations, and an admin dashboard with POS, floor plans and analytics. Payments run through Square, and paid orders are pushed straight to the Square POS to print kitchen tickets.",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Square API",
      "Socket.io",
      "Redis",
      "Tailwind CSS",
    ],
    timeline: "3 Months",
    link: "https://www.rinjapanese.com.au/",
    image: rin,
    badge: "Restaurant SaaS",
    label: "Square Payments",
  },
];

const HomeHRM = () => {
  return (
    <div className="z-50 lg:pb-32 bg-transparent w-full py-10 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-row items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-5xl italic text-white font-bold whitespace-nowrap">
            SaaS PROJECTS
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <Link href="/projects">
            <button className="bg-white rounded-full text-black fontPoppins text-xs sm:text-base px-4 sm:px-6 py-2 font-semibold whitespace-nowrap">
              View All Projects
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-10 mt-10">
          {projects.map((p, i) => (
            <ProjectShowcaseCard key={p.id} index={i + 1} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHRM;
