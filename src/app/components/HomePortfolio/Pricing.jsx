"use client";

import React, { useState } from "react";
import "../../../styles/homePage.css";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly"); // monthly | project

  return (
    <div className="lg:py-20 fontPoppins bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobileHidden">

        {/* Header */}
        <div className="flex flex-row items-center justify-between gap-4 mb-12">
          <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
            Our Pricing
          </h1>
          <hr className="flex-grow border-t border-gray-600 mx-4" />
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-10 gap-4">
          <span className={`text-lg ${billing === "monthly" ? "text-white" : "text-gray-400"}`}>
            Monthly
          </span>

          <div
            className="flex w-20 h-8 rounded-full bg-[#4A2C91] p-1 cursor-pointer relative"
            onClick={() =>
              setBilling(billing === "monthly" ? "project" : "monthly")
            }
          >
            <div
              className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                billing === "project" ? "translate-x-12" : ""
              }`}
            ></div>
          </div>

          <span className={`text-lg ${billing === "project" ? "text-white" : "text-gray-400"}`}>
            Project Based
          </span>
        </div>

        {/* PRICING GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">

          {billing === "monthly" ? (
            <>
              {/* STARTER MONTHLY */}
              <div className="bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] p-8 rounded-2xl shadow-xl text-white border border-gray-800">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span>🟣</span> Starter
                </h2>

                <p className="text-4xl font-bold mt-4">
                  $39<span className="text-lg font-normal">/month</span>
                </p>

                <p className="text-gray-400 mt-4 mb-6">
                  For small teams starting with automation & dashboards.
                </p>

                {/* <button className="w-full bg-[#131313] hover:bg-black text-white py-3 rounded-xl border border-gray-700 transition">
                  Choose this plan
                </button> */}

                <ul className="mt-6 space-y-3 text-gray-200">
                  <li>✓ 3 automated workflows</li>
                  <li>✓ Basic analytics dashboard</li>
                  <li>✓ Email support</li>
                  <li>✓ Up to 3 integrations</li>
                  <li>✓ Monthly health check</li>
                </ul>
              </div>

              {/* PROFESSIONAL MONTHLY */}
              <div className="bg-gradient-to-b from-[#1D0F40] via-[#2A155B] to-[#0D071A] p-8 rounded-2xl shadow-xl text-white border border-purple-700 relative">
                <span className="absolute top-4 right-4 bg-gray-800 px-3 py-1 rounded-full text-xs">
                  Popular
                </span>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  ⚡ Professional
                </h2>
                <p className="text-4xl font-bold mt-4">
                  $89<span className="text-lg font-normal">/month</span>
                </p>

                <p className="text-gray-300 mt-4 mb-6">
                  For growing businesses that need automation & dashboards.
                </p>

                {/* <button className="w-full bg-[#7F4CFF] hover:bg-[#6A3DE6] text-white py-3 rounded-xl transition">
                  Choose this plan
                </button> */}

                <ul className="mt-6 space-y-3 text-gray-200">
                  <li>✓ 10 workflow automations</li>
                  <li>✓ Sales & marketing tools</li>
                  <li>✓ Advanced analytics & reports</li>
                  <li>✓ Priority support</li>
                  <li>✓ Up to 10 integrations</li>
                </ul>
              </div>

              {/* ENTERPRISE MONTHLY */}
              <div className="bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] p-8 rounded-2xl shadow-xl text-white border border-gray-800">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  👑 Enterprise
                </h2>

                <p className="text-4xl font-bold mt-4">Custom</p>

                <p className="text-gray-400 mt-4 mb-6">
                  Full automation, AI, analytics & team support.
                </p>

                {/* <button className="w-full bg-[#131313] hover:bg-black text-white py-3 rounded-xl border border-gray-700 transition">
                  Schedule a call
                </button> */}

                <ul className="mt-6 space-y-3 text-gray-200">
                  <li>✓ Unlimited automations</li>
                  <li>✓ AI-powered tools & pipelines</li>
                  <li>✓ Dedicated project manager</li>
                  <li>✓ 24/7 VIP support</li>
                  <li>✓ Unlimited integrations</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {/* PROJECT-BASED — WEB APP */}
              <div className="bg-gradient-to-b from-[#161616] to-[#0F0F0F] p-8 rounded-2xl shadow-xl text-white border border-gray-800">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  💻 MERN / NEXT.JS Web App
                </h2>

                <p className="text-4xl font-bold mt-4">$1,200+</p>

                <p className="text-gray-400 mt-4 mb-6">
                  Full-stack MERN or Next.js web application development.
                </p>

                {/* <button className="w-full bg-[#131313] hover:bg-black text-white py-3 rounded-xl border border-gray-700 transition">
                  Get quote
                </button> */}

                <ul className="mt-6 space-y-3 text-gray-200">
                  <li>✓ Modern UI/UX</li>
                  <li>✓ Node.js Backend + API</li>
                  <li>✓ MongoDB / PostgreSQL database</li>
                  <li>✓ JWT/Auth integration</li>
                  <li>✓ Deployment included</li>
                </ul>
              </div>

              {/* PROJECT-BASED — SAAS */}
              <div className="bg-gradient-to-b from-[#1D0F40] via-[#2A155B] to-[#0D071A] p-8 rounded-2xl shadow-xl text-white border border-purple-700 relative">
                <span className="absolute top-4 right-4 bg-gray-800 px-3 py-1 rounded-full text-xs">
                  Best Value
                </span>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  🚀 SaaS Platform Development
                </h2>

                <p className="text-4xl font-bold mt-4">$2,500+</p>

                <p className="text-gray-300 mt-4 mb-6">
                  Build a scalable SaaS product with full authentication,
                  billing, admin dashboard & APIs.
                </p>
{/* 
                <button className="w-full bg-[#7F4CFF] hover:bg-[#6A3DE6] text-white py-3 rounded-xl transition">
                  Get quote
                </button> */}

                <ul className="mt-6 space-y-3 text-gray-200">
                  <li>✓ Next.js + Node backend</li>
                  <li>✓ Stripe subscriptions</li>
                  <li>✓ PostgreSQL / MongoDB</li>
                  <li>✓ Admin dashboard included</li>
                  <li>✓ Multi-role user system</li>
                </ul>
              </div>

              {/* PROJECT-BASED — ECOMMERCE */}
              <div className="bg-gradient-to-b from-[#161616] to-[#0F0F0F] p-8 rounded-2xl shadow-xl text-white border border-gray-800">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  🛒 E-Commerce Platform
                </h2>

                <p className="text-4xl font-bold mt-4">$1,800+</p>

                <p className="text-gray-400 mt-4 mb-6">
                  Custom e-commerce with admin, coupons, stock, orders.
                </p>

                {/* <button className="w-full bg-[#131313] hover:bg-black text-white py-3 rounded-xl border border-gray-700 transition">
                  Get quote
                </button> */}

                <ul className="mt-6 space-y-3 text-gray-200">
                  <li>✓ Product, category, orders</li>
                  <li>✓ Stripe / PayPal / SSLCommerz</li>
                  <li>✓ Admin dashboard included</li>
                  <li>✓ MongoDB or PostgreSQL</li>
                  <li>✓ SEO-optimized frontend</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
