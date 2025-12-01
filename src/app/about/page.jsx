"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Target } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiXiaomi,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "ReactJs", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MIUI", icon: <SiXiaomi className="text-orange-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

export default function AboutUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-5xl sm:text-4xl text-white italic font-bold">
          About Us
        </h1>
        <p className="text-lg sm:text-base text-white/70 max-w-3xl">
          We are a passionate team of developers, designers, and innovators
          committed to delivering cutting-edge digital solutions that transform
          businesses worldwide.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-center mb-4">
            <Globe className="text-blue-500 mr-4" size={24} />
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
          </div>
          <p className="text-blue-100">
            To deliver innovative and reliable digital solutions that empower
            businesses to succeed globally.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-center mb-4">
            <Target className="text-blue-500 mr-4" size={24} />
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
          </div>
          <p className="text-blue-100">
            To become a leading technology partner known for transforming ideas
            into exceptional digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Work Experience Section */}
      <div className="space-y-6 text-white">
        <h2 className="text-4xl sm:text-3xl italic font-bold">
          Work Experience
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Nexttech ITC */}
          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white">
              Nexttech ITC
            </h3>
            <p className="text-blue-300 mt-1">Full-Stack Developer (6 Months)</p>
            <p className="text-white/70 mt-3 text-sm">
              Worked as a React & Node.js developer focused on building dynamic,
              fast, and scalable applications for global and local clients.
            </p>
          </motion.div>

          {/* Ademize Solutions */}
          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white">
              Ademize Solutions
            </h3>
            <p className="text-blue-300 mt-1">Full-Stack Developer (Present)</p>
            <p className="text-white/70 mt-3 text-sm">
              Currently working as a full-stack engineer using TypeScript,
              Next.js, Express.js, Stripe, and PostgreSQL/MongoDB. Contributing
              to advanced, production-level applications.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Technologies Section */}
      <div className="space-y-6 text-white">
        <h2 className="text-4xl sm:text-3xl italic font-bold">
          Technologies We Use
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3"
            >
              <div className="text-blue-500 text-xl">{tech.icon}</div>
              <h3 className="text-white font-semibold">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl sm:text-2xl italic font-bold text-white">
            Want to work with us?
          </h2>
          <p className="text-white/70 max-w-md">
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-3xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Project Title"
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project"
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-blue-500 h-32"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
