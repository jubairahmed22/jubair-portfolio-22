import React from "react";
import "../../../styles/homePage.css";

const HomeContact = () => {
  return (
    <div>
      <div className="z-50 lg:pb-32 bg-transparent w-full py-10 fontPoppins flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 w-full mobileHidden">
          <div className="flex flex-row gap-8">
            {/* Left Side - Get in Touch */}
            <div className="w-full ">
              <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
                Get in touch
              </h1>
              <p className="text-xl italic mt-5 text-gray-300">
                We'd love to hear about your project. Whether it's design,
                development, or strategy, we're ready to help. Let's create
                something great.
              </p>
            </div>

            {/* Right Side - Contact Form Card */}
            <div className="relative  w-full bg-white/5 backdrop-blur-lg border border-white/10 py-6 px-10 rounded-xl hover:border-white/30 transition-all duration-300 group overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send us a message
                </h3>

                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>

                {/* Animated underline */}
              </div>

              {/* Corner accent */}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 w-full webHidden">
          <div className="flex flex-col gap-8">
            {/* Left Side - Get in Touch */}
            <div className="w-full flex flex-col gap-1">
              <h1 className="textHeading italic text-white font-bold whitespace-nowrap">
                Get in touch
              </h1>
              <p className="text-sm font-light text-white">
                We'd love to hear about your project. Whether it's design,
                development, or strategy, we're ready to help. Let's create
                something great.
              </p>
            </div>

            {/* Mobile Only - Contact Form Card */}
            <div className="block md:hidden relative w-full bg-white/5 backdrop-blur-md border border-white/10 py-4 px-5 rounded-lg hover:border-white/30 transition-all duration-300 group overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 text-center">
                  Send us a message
                </h3>

                <form className="space-y-3">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border text-sm bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border text-sm bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email address"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border text-sm bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
