import React from "react";
import nexttech from "../../../assets/nexttechss.png";
import miraicbd from "../../../assets/miracbdss.png";
import jubair from "../../../assets/jubair-portfolio.png";
import xutech from "../../../assets/xutech.png";
import fabrica from "../../../assets/fabrica.png";
import taxage from "../../../assets/taxage.png";
import "../../../styles/homePage.css";
import next from "next";
import Link from "next/link";

const HomePortfolioWebsiteDemo = () => {
  // Array of furniture items (you can replace with your actual data)
  const furnitureItems = [
    {
      id: 1,
      name: "Fabrica",
      image: fabrica,
      link: "https://www.fabrica.com.bd/",
    },
    {
      id: 2,
      name: "taxage solutions",
      image: taxage,
      link: "https://client-2-iota.vercel.app/",
    },
    {
      id: 3,
      name: "Jubair Ahmed",
      image: jubair,
      link: "https://www.xutech.co/",
    },
    {
      id: 4,
      name: "Xutech",
      image: xutech,
      link: "https://jubair-ahmed.vercel.app/",
    },
    {
      id: 5,
      name: "Nexttech itc",
      image: nexttech,
      link: "https://miraicbd.com/",
    },
    {
      id: 6,
      name: "Miracbd",
      image: miraicbd,
      link: "https://www.nexttechitc.com/",
    },
  ];

  return (
    <div className="z-50 lg:pb-32  bg-transparent w-full  flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full mobileHidden">
        <div className="flex flex-row items-center justify-between gap-4">
          <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
            Portfolio
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <Link href="/projects">
            <button className="bg-white rounded-full text-black fontPoppins px-6 py-2 font-semibold whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
          {furnitureItems.map((item) => (
            <a
              href={furnitureItems[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] block"
            >
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg shadow-lg h-[600px]"
              >
                {/* Card container */}
                <div className="absolute inset-0">
                  {/* Image that will scroll on hover */}
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="w-full h-auto min-h-full object-cover transition-transform duration-[10000ms] ease-linear group-hover:translate-y-[calc(600px-100%)]"
                    style={{ transform: "translateY(0)" }}
                  />
                </div>
                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="webHidden w-full px-4">
        <div className="flex flex-row items-center justify-between gap-4 ">
          <h1 className="textHeading italic text-white font-bold whitespace-nowrap">
            Portfolio
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <Link href="/projects">
            <button className="bg-white rounded-full text-[8px] text-black fontPoppins px-4 py-2 font-semibold whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10">
          {furnitureItems.reverse().map((item) => (
            <a
              href={furnitureItems[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] block"
            >
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg shadow-lg h-[600px]"
              >
                <div className="absolute inset-0">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="w-full h-auto min-h-full object-cover transition-transform duration-[1000ms] ease-linear group-hover:translate-y-[calc(600px-100%)]"
                    style={{ transform: "translateY(0)" }}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePortfolioWebsiteDemo;
