"use client"
import dashboard from '../../../assets/dashboard.png'
import { useRef, useEffect } from 'react'

const HomeUiUx = () => {
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
        <div className="z-50 pb-32 bg-transparent w-full py-10 flex items-center justify-center">
            <div className=" px-4 w-full">
                <div className="flex max-w-6xl mx-auto flex-row items-center justify-between gap-4">
                    <h1 className="text-5xl italic text-white font-bold whitespace-nowrap">
                        Create your custom prototype with UIUX
                    </h1>

                    {/* <hr className="flex-grow border-t border-gray-600 mx-4" />

                    <button className="bg-white rounded-full text-black fontPoppins px-6 py-2 font-semibold whitespace-nowrap">
                        View All
                    </button> */}
                </div>
                
                {/* Video Section */}
                <div className="max-w-6xl mx-auto px-4 w-full mt-10 ">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto rounded-xl shadow-lg"
                    >
                        <source src="https://cdn.dribbble.com/userupload/15158653/file/original-6770ea165a041444c094cf60b32ccc80.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                
            
            </div>
        </div>
    )
}

export default HomeUiUx