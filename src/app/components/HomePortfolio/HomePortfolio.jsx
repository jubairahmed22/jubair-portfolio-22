import React from "react";
import cover from "../../../assets/e-commerce-banner.png";

const HomePortfolio = () => {
  return (
    <div className="relative w-full h-full fontPoppins ">
      {/* Background image */}
      <img
        src={cover.src}
        alt="E-commerce banner"
        className="w-full h-full object-cover"
      />

      {/* Text overlay - centered at top */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-8">
        <div>
          <h1 className="text-white text-center text-6xl font-semibold mt-5">
            <span className="">Create Your</span> Online Store
          </h1>
          <p className="text-2xl font-semibold text-gray-200 text-center mt-5">
            Ready to start selling online? <br></br> Create your store,
            customize your brand, <br></br>and reach customers
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePortfolio;
