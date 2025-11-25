import React from "react";
import serinPhone from "../../../assets/serinphone.png";
import serinTab from "../../../assets/serintab.png";
import '../../../styles/homePage.css';

const HomeResponsive = () => {
  // Array of furniture items (you can replace with your actual data)
  const furnitureItems = [
    { id: 1, name: "Serin Phone Version", image: serinPhone },
    // { id: 1, name: "Living Room", image: serinTab },
    // { id: 2, name: "Bedroom", image: furniture },
    // { id: 3, name: "Dining Room", image: furniture },
    // { id: 4, name: "Dining Room", image: furniture },
  ];
  const furnitureItemsTab = [
    { id: 1, name: "Serin Tab Version", image: serinTab },
    // { id: 1, name: "Living Room", image: serinTab },
    // { id: 2, name: "Bedroom", image: furniture },
    // { id: 3, name: "Dining Room", image: furniture },
    // { id: 4, name: "Dining Room", image: furniture },
  ];

  return (
    <div className="z-50 lg:pb-32 bg-transparent w-full py-10 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full mobileHidden">
        <div className="flex flex-row items-center justify-between gap-4">
          <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
            Make perfectly responsive
          </h1>

          <hr className="flex-grow border-t border-gray-600 mx-4" />
          {/* 
          <button className="bg-white rounded-full text-black fontPoppins px-6 py-2 font-semibold whitespace-nowrap">
            View All
          </button> */}
        </div>

        <div className="flex flex-row gap-5 mt-10">
          <div className="w-full ">
            {furnitureItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-[40px] shadow-xl w-[400px] h-[700px] border-[14px] border-white/20 bg-black"
                style={{
                  boxShadow:
                    "0 30px 60px -10px rgba(0, 0, 0, 0.3), 0 18px 36px -18px rgba(0, 0, 0, 0.33)",
                }}
              >
                {/* Screen area with dynamic island-inspired top notch */}
                <div className="absolute inset-0 rounded-[26px] overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[20px] bg-gray-600 rounded-full z-20"></div>

                  {/* Scrollable image with smooth animation */}
                  <img
                    src={item.image.src}
                    alt={item.name}
                     className="w-full h-auto min-h-full object-cover transition-transform duration-[10000ms] ease-linear group-hover:translate-y-[calc(600px-100%)]"
  style={{ transform: "translateY(0)" }}

                  />

                  {/* iOS-style bottom bar indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/30 rounded-full"></div>
                </div>

                {/* Action button inspired by iOS */}
                <div className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 z-10">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>

                {/* Gradient overlay with title (iOS-style typography) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-12">
                  <h3
                    className="text-white text-2xl font-semibold tracking-tight"
                    style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-white/80 text-sm mt-1"
                    style={{ fontFamily: "'SF Pro Text', sans-serif" }}
                  >
                    Swipe to explore
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            {furnitureItemsTab.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-[40px] shadow-xl w-[650px] h-[500px] border-[14px] border-white/20 bg-black"
                style={{
                  boxShadow:
                    "0 30px 60px -10px rgba(0, 0, 0, 0.3), 0 18px 36px -18px rgba(0, 0, 0, 0.33)",
                }}
              >
                {/* Screen area with dynamic island-inspired top notch */}
                <div className="absolute inset-0 rounded-[26px] overflow-hidden">
                  {/* Dynamic Island */}

                  {/* Scrollable image */}
                  <img
                    src={item.image.src}
                    alt={item.name}
                      className="w-full h-auto min-h-full object-cover transition-transform duration-[10000ms] ease-linear group-hover:translate-y-[calc(600px-100%)]"
  style={{ transform: "translateY(0)" }}
                  />

                  {/* iOS-style bottom bar indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/30 rounded-full"></div>
                </div>

                {/* Action button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 z-10">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>

                {/* Gradient overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-12">
                  <h3
                    className="text-white text-2xl font-semibold tracking-tight"
                    style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-white/80 text-sm mt-1"
                    style={{ fontFamily: "'SF Pro Text', sans-serif" }}
                  >
                    Swipe to explore
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="webHidden w-full px-4">
        
       <div className="flex flex-col md:flex-row gap-8  items-start md:items-center">
  {/* Heading Section */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
    <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold italic leading-tight tracking-tight">
      <span className="text-gray-400">Make Website</span> <br className="md:hidden" /> perfectly  responsive
    </h1>
  </div>

  {/* Cards Section */}
  <div className="w-full flex flex-wrap gap-6 justify-center md:justify-start">
    {furnitureItems.map((item) => (
      <div
        key={item.id}
        className="relative group overflow-hidden rounded-[16px] shadow-2xl w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[260px] bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:border-white/30"
        style={{
          boxShadow:
            "0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 10px 20px -10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Screen area */}
        <div className="absolute inset-0 rounded-[16px] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[25px] h-[6px] bg-gray-700/80 rounded-full z-20"></div>

          {/* Scrollable image */}
          <img
            src={item.image.src}
            alt={item.name}
            className="w-full h-full object-cover "
          />

          {/* Bottom indicator */}
          {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[40px] h-[4px] bg-white/40 rounded-full"></div> */}
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md z-20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>

        {/* Gradient overlay with text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pt-10 pb-3">
          <h3
            className="text-white text-sm md:text-base font-semibold truncate"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            {item.name}
          </h3>
          <p
            className="text-white/70 text-xs md:text-sm"
            style={{ fontFamily: "'SF Pro Text', sans-serif" }}
          >
            Swipe to explore
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
};

export default HomeResponsive;
