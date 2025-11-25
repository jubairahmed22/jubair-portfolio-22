import React from "react";
import ube from "../../../assets/ubeheross.png";
import "../../../styles/homePage.css";
import Link from "next/link";

const HomeGaming = () => {
  // Array of furniture items (you can replace with your actual data)
  const furnitureItems = [
    {
      id: 1,
      name: "Ube Hero",
      image: ube,
      link: "https://ubehero.vercel.app/",
    },
    // { id: 2, name: "Bedroom", image: furniture },
    // { id: 3, name: "Dining Room", image: furniture },
    // { id: 4, name: "Dining Room", image: furniture },
  ];

  return (
    <div className="z-50 lg:pb-32 bg-transparent w-full py-10 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full mobileHidden">
        <div className="flex flex-row items-center justify-between gap-4">
          <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
            Gaming Platform
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <Link href="/projects">
            <button className="bg-white rounded-full text-black fontPoppins px-6 py-2 font-semibold whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 mt-10">
          {furnitureItems.map((item) => (
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
                  className="w-full h-auto min-h-full object-cover transition-transform duration-3000 ease-in-out group-hover:translate-y-[calc(600px-100%)]"
                  style={{ transform: "translateY(0)" }}
                />
              </div>
              {/* Overlay with title */}
              {/* Overlay with title */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] block"
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="webHidden w-full px-4">
        <div className="flex flex-row items-center justify-between gap-4 ">
          <h1 className="textHeading italic text-white font-bold whitespace-nowrap">
            Gaming Platform
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />

          <Link href="/projects">
            <button className="bg-white rounded-full text-[8px] text-black fontPoppins px-4 py-2 font-semibold whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10">
          {furnitureItems.map((item) => (
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
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] block"
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeGaming;
