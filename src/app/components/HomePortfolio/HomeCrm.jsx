import React from "react";
import "../../../styles/homePage.css";

const HomeCrm = () => {
  return (
    <div>
      <div className="z-50 lg:pb-32 bg-transparent w-full py-10 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 w-full  mobileHidden">
          <div className="flex flex-row items-center justify-between gap-4 mb-12">
            <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
              Custom Dashboard
            </h1>

            <hr className="flex-grow border-t border-gray-600 mx-4" />

            <button className="bg-white rounded-full text-black fontPoppins px-6 py-2 font-semibold whitespace-nowrap">
              View All
            </button>
          </div>

          {/* Added image section */}
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/hero-images/Hero_AI-GS.png"
              alt="Dashboard illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 w-full webHidden">
          <div className="flex flex-row items-center justify-between gap-4 mb-10">
          <h1 className="textHeading italic text-white font-bold whitespace-nowrap">
            Custom Dashboard
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <button className="bg-white rounded-full text-[8px] text-black fontPoppins px-4 py-2 font-semibold whitespace-nowrap">
            View All
          </button>
        </div>

          {/* Added image section */}
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/hero-images/Hero_AI-GS.png"
              alt="Dashboard illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCrm;
