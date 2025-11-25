import React from "react";
import '../../../styles/homePage.css';


const HomeDeliverInfo = () => {
  return (
    <div className="z-50 lg:h-[400px] flex justify-center items-center bg-transparent border-y w-full border-gray-700 py-10 fontPoppins">
      <div className="max-w-6xl mx-auto px-4 mobileHidden">
        <div className="flex flex-row justify-between gap-10">
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-white text-4xl font-semibold">
              10X Faster Delivery
            </h1>
            <p className="text-lg font-light text-white">
              Our world-class engineers leverage cutting-edge AI to deliver
              solutions 10X faster without compromising quality.
            </p>
          </div>
          <div className="w-full text-white  p-6 rounded-xl shadow-xl">
            <div className="flex flex-row md:flex-row items-center justify-between gap-6">
              {/* Projects */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-yellow-300 bg-white/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-lg font-bold">20+</span>
                  <span className="font-medium">Projects</span>
                </div>
              </div>

              {/* UI Design */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-pink-300 bg-white/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-xl font-bold">Best</span>
                  <span className="font-medium">UI Design</span>
                </div>
              </div>

              {/* Development */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-green-300 bg-white/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-xl font-bold">Best</span>
                  <span className="font-medium">Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 webHidden">
        <div className="flex flex-col justify-between gap-3">
          <div className="w-full flex flex-col gap-1">
            <h1 className="textHeading italic text-white font-bold whitespace-nowrap">
              10X Faster Delivery
            </h1>
            <p className="text-sm font-light text-white">
              Our world-class engineers leverage cutting-edge AI to deliver
              solutions 10X faster without compromising quality.
            </p>
          </div>
{/* Mobile Only */}
<div className="block md:hidden w-full text-white px-4">
  <div className="grid grid-cols-3 gap-3 w-full">
    {/* Projects */}
    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 shadow-md w-full">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-yellow-300 mb-2 shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h3 className="text-sm font-bold">20+</h3>
      <p className="text-xs text-white/70">Projects</p>
    </div>

    {/* UI Design */}
    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 shadow-md w-full">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-pink-300 mb-2 shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </div>
      <h3 className="text-sm font-bold">Best</h3>
      <p className="text-xs text-white/70">UI Design</p>
    </div>

    {/* Development */}
    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 shadow-md w-full">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-green-300 mb-2 shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
      <h3 className="text-sm font-bold">Best</h3>
      <p className="text-xs text-white/70">Development</p>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default HomeDeliverInfo;
