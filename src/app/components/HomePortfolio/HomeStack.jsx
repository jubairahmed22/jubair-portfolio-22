"use client"
import dashboard from '../../../assets/dashboard.png'
import { useRef, useEffect } from 'react'

const HomeStack = () => {
    const boxRef = useRef(null)
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!boxRef.current) return
            
            const { left, top, width, height } = boxRef.current.getBoundingClientRect()
            const x = (e.clientX - left) / width - 0.5
            const y = (e.clientY - top) / height - 0.5
            
            // Apply 3D transformation to the box
            boxRef.current.style.transform = `
                perspective(1000px)
                rotateX(${y * 15}deg)
                rotateY(${-x * 15}deg)
            `
            
            // Update glow position based on mouse
            const glow = boxRef.current.querySelector('.glow-effect')
            if (glow) {
                glow.style.left = `${(x + 0.5) * 100}%`
                glow.style.top = `${(y + 0.5) * 100}%`
            }
        }
        
        const boxElement = boxRef.current
        if (boxElement) {
            boxElement.addEventListener('mousemove', handleMouseMove)
            
            return () => {
                boxElement.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [])

    return (
        <div className='z-50 pb-32 bg-transparent w-full py-10 flex items-center justify-center'>
            <div className='max-w-6xl mx-auto px-4 w-full'>
                {/* 3D Box Container */}
                <div 
                    ref={boxRef}
                    className="relative w-full h-[500px] transition-transform duration-300 transform-style-preserve-3d"
                >
                    {/* Front Face (Main Image) */}
                    <div className="absolute inset-0 bg-white rounded-xl overflow-hidden border-2 border-white/30 shadow-[0_0_30px_10px_rgba(255,255,255,0.3)]">
                        <img 
                            src={dashboard.src} 
                            className="w-full h-full "
                            alt="3D Dashboard"
                        />
                    </div>
                    
                    {/* Right Side */}
                    <div className="absolute right-0 top-0 w-[40px] h-full bg-gray-800/80 transform-origin-right transform-rotate-y-90 translate-z-[-20px] rounded-r-xl" />
                    
                    {/* Bottom Side */}
                    <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gray-700/80 transform-origin-bottom transform-rotate-x-90 translate-z-[-20px] rounded-b-xl" />
                    
                    {/* White Glow Effect */}
                    <div className="glow-effect absolute w-[200px] h-[200px] bg-white/10 rounded-full filter-blur-[50px] pointer-events-none transition-all duration-500" />
                </div>
            </div>
            
            <style jsx global>{`
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .transform-rotate-y-90 {
                    transform: rotateY(90deg);
                }
                .transform-rotate-x-90 {
                    transform: rotateX(90deg);
                }
                .translate-z-[-20px] {
                    transform: translateZ(-20px);
                }
                .filter-blur-[50px] {
                    filter: blur(50px);
                }
            `}</style>
        </div>
    )
}

export default HomeStack