
"use client"
import React, { useEffect, useState } from 'react';

const HomeHeroTwo = () => {
  // Sample image data (replace with your actual image URLs)
  const imageData = [
    { id: 1, src: 'https://d3l8w3klt7yga2.cloudfront.net/banners/1729868735273' },
    { id: 2, src: 'https://d3l8w3klt7yga2.cloudfront.net/banners/1729868735273' },
    { id: 3, src: 'https://d3l8w3klt7yga2.cloudfront.net/banners/1729868735273' },
    { id: 4, src: 'https://d3l8w3klt7yga2.cloudfront.net/banners/1729868735273' },
    { id: 5, src: 'https://d3l8w3klt7yga2.cloudfront.net/banners/1729868735273' },
    { id: 6, src: 'https://d3l8w3klt7yga2.cloudfront.net/banners/1729868735273' },
    { id: 7, src: 'https://d3l8w3klt7yga2.cloudfront.net/banners/1729868735273' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 pt-8">
          Animated Image Gallery
        </h1>
        
        {/* Top section - moving left to right */}
        <div className="relative w-full h-64 mb-20 overflow-hidden rounded-xl shadow-lg">
          <div className="absolute top-0 left-0 flex animate-scroll-left">
            {[...imageData, ...imageData].map((item, index) => (
              <div 
                key={`top-${index}`} 
                className="flex-shrink-0 w-80 h-64 mx-4 relative group overflow-hidden rounded-lg"
              >
                <img 
                  src={item.src} 
                  alt={`Slide ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Image {item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section - moving right to left */}
        <div className="relative w-full h-64 mt-32 overflow-hidden rounded-xl shadow-lg">
          <div className="absolute top-0 left-0 flex animate-scroll-right">
            {[...imageData, ...imageData].map((item, index) => (
              <div 
                key={`bottom-${index}`} 
                className="flex-shrink-0 w-80 h-64 mx-4 relative group overflow-hidden rounded-lg"
              >
                <img 
                  src={item.src} 
                  alt={`Slide ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                  <span className="text-white text-xl font-semibold">Image {item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(calc(-100% / 2)); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 100s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 100s linear infinite;
        }
        
        .animate-scroll-left:hover, 
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HomeHeroTwo;