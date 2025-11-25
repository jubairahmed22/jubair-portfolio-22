// app/DynamicLayout.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import NavInfo from './components/NavbarInfo'
import "../styles/globals.css";
import Footer from "./components/Footer"
import NavPortfolio from './components/NavPortfolio';

export default function DynamicLayout({ children }) {
  const pathname = usePathname()
  const [videoLoaded, setVideoLoaded] = useState(false)
  const youtubeId = '99XGx_BKO_I' // Extracted from your URL

  useEffect(() => {
    // Set a timeout as a fallback in case the onLoad event doesn't fire
    const fallbackTimer = setTimeout(() => {
      setVideoLoaded(true)
    }, 4000) // 4 seconds fallback

    return () => clearTimeout(fallbackTimer)
  }, [])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  if (pathname?.startsWith('/admin')) {
    return <>{children}</>
  }

  if (pathname?.startsWith('/dashboard')) {
    return <>{children}</>
  }

  return (
    <div className='relative min-h-screen bg-black/100'>
      {/* YouTube Video Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
            onLoad={handleVideoLoad}
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl"></div>
      </div>
      
      {/* Loading Screen */}
      {!videoLoaded && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black">
          <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative flex items-center justify-center">
        {/* White J logo */}
        <span className="text-white text-6xl font-bold z-10 animate-pulse ">J</span>

        {/* Rounded circular loader */}
        <div className="absolute w-24 h-24 border-4 border-white/20 rounded-full"></div>
        <div className="absolute w-24 h-24 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
        </div>
      )}
      
      {/* Content - Only shown after video loads */}
      <div className={`relative z-10 transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {videoLoaded && (
          <>
            <NavPortfolio />
            <main className="">
              {children}
            </main>
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}