"use client";

import React from "react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";

const Page = () => {
 
 const services = [
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
    title: "Mastering Next.js 15",
    description:
      "A deep dive into server components, turbo caching, and how to build lightning-fast web applications using the latest Next.js features.",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
    title: "Why Responsive Design Still Matters in 2025",
    description:
      "A breakdown of modern UI/UX trends and why mobile-first design remains essential for user retention.",
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
    title: "Build MVPs in Under a Week",
    description:
      "A practical guide to rapid prototyping using React, Tailwind, and Firebase to launch ideas fast.",
  },
  {
    icon: <ServerStackIcon className="w-10 h-10 text-white" />,
    title: "Node.js Architecture for Scalable Apps",
    description:
      "Explore microservices, queues, caching, and best practices for building large distributed systems.",
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-white" />,
    title: "Security Checklist for Modern Developers",
    description:
      "Everything you must implement — from JWT hardening to rate limiting and CSRF protection.",
  },
  {
    icon: <ArrowsPointingOutIcon className="w-10 h-10 text-white" />,
    title: "Front-End Performance Optimization",
    description:
      "How to reduce bundle size, improve TTFB, and achieve 95+ Lighthouse scores consistently.",
  },
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
    title: "The Future of API Development",
    description:
      "REST vs GraphQL vs gRPC — which one should you choose for your next project?",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
    title: "Design Systems That Scale",
    description:
      "How to create a unified component library using Tailwind and Radix UI for teams.",
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
    title: "SEO for Developers",
    description:
      "Technical SEO fundamentals — sitemaps, schema markup, metadata, indexing, and page experience.",
  },
  {
    icon: <ServerStackIcon className="w-10 h-10 text-white" />,
    title: "Deploying Apps Like a Pro",
    description:
      "How to deploy full-stack apps on Vercel, AWS, or Docker with CI/CD pipeline integration.",
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-white" />,
    title: "Authentication Made Simple",
    description:
      "Understanding OAuth, JWTs, sessions, refresh tokens, and securing user data.",
  },
  {
    icon: <ArrowsPointingOutIcon className="w-10 h-10 text-white" />,
    title: "The Art of Clean Code",
    description:
      "Best practices for writing readable, maintainable, and scalable code in large codebases.",
  },
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
    title: "Why TypeScript Dominates 2025",
    description:
      "The real-world benefits of TypeScript and how it prevents bugs before they happen.",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-white" />,
    title: "Ultimate Guide to UX Psychology",
    description:
      "Learn how human behavior, patterns, and perception influence great product design.",
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
    title: "Building High-Conversion Landing Pages",
    description:
      "How to structure landing pages that drive sales, signups, and user engagement.",
  },
];


  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-5xl sm:text-4xl text-white italic font-bold">
          Blogs
        </h1>
        <p className="text-lg sm:text-base text-white/70 max-w-3xl">
          We are a passionate team of developers, designers, and innovators
          committed to delivering cutting-edge digital solutions that transform
          businesses worldwide.
        </p>
     
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              relative group border border-white/10 bg-white/5 backdrop-blur-lg p-6
              rounded-xl transition-all duration-500 overflow-hidden
              hover:border-white/30 hover:shadow-xl hover:shadow-indigo-500/20
              opacity-0 translate-y-6 animate-fade-up
            "
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />

            <div className="relative z-10">
              <div className="p-3 bg-white/10 rounded-lg inline-block mb-4">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition">
                {service.title}
              </h3>

              <p className="text-gray-300 mt-2 group-hover:text-gray-100 transition leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
