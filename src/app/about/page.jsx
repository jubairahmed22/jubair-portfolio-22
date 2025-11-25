"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Globe, Target, Award } from "lucide-react";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiXiaomi, SiMongodb, SiMongoose, SiPostgresql } from "react-icons/si";


const team = [
  { name: "Alice Johnson", role: "CEO & Founder", image: "/team/alice.jpg" },
  { name: "Bob Smith", role: "Lead Developer", image: "/team/bob.jpg" },
  { name: "Carol Lee", role: "UI/UX Designer", image: "/team/carol.jpg" },
];

const technologies = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8 } },
};

const AboutUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can integrate email API or backend submission
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-5xl sm:text-4xl text-white italic font-bold">About Us</h1>
        <p className="text-lg sm:text-base text-white/70 max-w-3xl">
          We are a passionate team of developers, designers, and innovators
          committed to delivering cutting-edge digital solutions that transform
          businesses worldwide.
        </p>
        <button className="relative rounded-full text-md font-medium bg-white/10 hover:bg-white/20 active:bg-white/30 cursor-pointer backdrop-blur-2xl text-white px-8 py-3 border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg hover:shadow-xl overflow-hidden group mt-4">
          <span className="relative z-10">Contact Us</span>
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10" initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <div className="flex items-center mb-4"><Globe className="text-blue-500 mr-4" size={24} /><h3 className="text-xl font-bold text-white">Our Mission</h3></div>
          <p className="text-blue-100">To deliver innovative and reliable digital solutions that empower businesses to succeed globally.</p>
        </motion.div>
        <motion.div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10" initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
          <div className="flex items-center mb-4"><Target className="text-blue-500 mr-4" size={24} /><h3 className="text-xl font-bold text-white">Our Vision</h3></div>
          <p className="text-blue-100">To become a leading technology partner known for transforming ideas into exceptional digital experiences.</p>
        </motion.div>
      </div>

      {/* Team Section */}
      {/* <div className="space-y-6 text-white">
        <h2 className="text-4xl sm:text-3xl italic font-bold">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <motion.div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center" initial="offscreen" whileInView="onscreen" viewport={{ once: true }} variants={cardVariants}>
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Technologies Section */}
      <div className="space-y-6 text-white">
        <h2 className="text-4xl sm:text-3xl italic font-bold">Technologies We Use</h2>
        <motion.div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          {technologies.map((tech, idx) => (
            <motion.div key={idx} variants={cardVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3">
              <div className="text-blue-500">{tech.icon}</div>
              <h3 className="text-white font-semibold">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action & Contact Form */}
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-3xl sm:text-2xl italic font-bold text-white">Want to work with us?</h2>
          <p className="text-white/70 max-w-md">Let's discuss your project and create something amazing together.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-3xl mx-auto space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="project" value={formData.project} onChange={handleChange} placeholder="Project Title" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project" className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" required />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300">Send Message</button>
        </form>
      </div>

    </div>
  );
};

export default AboutUsPage;
