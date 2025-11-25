"use client"

import React, { useState, useEffect } from 'react';
import img1 from '../../../assets/my-color-event-dash/1.png';
import img2 from '../../../assets/my-color-event-dash/2.png';
import img3 from '../../../assets/my-color-event-dash/3.png';
import img4 from '../../../assets/my-color-event-dash/4.png';
import img5 from '../../../assets/my-color-event-dash/5.png';
import img6 from '../../../assets/my-color-event-dash/6.png';
import img7 from '../../../assets/my-color-event-dash/7.png';
import img8 from '../../../assets/my-color-event-dash/8.png';
import img9 from '../../../assets/my-color-event-dash/9.png';
import img10 from '../../../assets/my-color-event-dash/10.png';

const HomeMyColor = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    const images = [
        img1, img2, img3, img4, img5, 
        img6, img7, img8, img9, img10
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        let intervalId;
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                nextSlide();
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [isAutoPlaying, currentIndex]);

    return (
        <div className="" style={{ 
            position: 'relative', 
            maxWidth: '1000px', 
            margin: '0 auto',
            padding: '40px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '30px',
                color: '#333',
                fontSize: '28px',
                fontWeight: '600'
            }}>
                My Color Event Dashboard
            </h2>
            
            <div style={{
                position: 'relative',
                height: '500px',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            transition: 'opacity 0.7s ease-in-out',
                            opacity: index === currentIndex ? 1 : 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px'
                        }}
                        aria-hidden={index !== currentIndex}
                    >
                        <img 
                            src={image.src} 
                            alt={`Dashboard screenshot ${index + 1}`} 
                            style={{ 
                                width: 'auto',
                                height: 'auto',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                borderRadius: '4px'
                            }} 
                            loading="lazy"
                        />
                    </div>
                ))}

                <button 
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '12px',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <button 
                    onClick={nextSlide}
                    aria-label="Next slide"
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '12px',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
                gap: '15px'
            }}>
                <button 
                    onClick={prevSlide}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        backgroundColor: '#4a6bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a5bef'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a6bff'}
                >
                    Previous
                </button>
                
                <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        backgroundColor: isAutoPlaying ? '#ff4a4a' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        transition: 'background-color 0.2s'
                    }}
                >
                    {isAutoPlaying ? 'Pause' : 'Play'}
                </button>
                
                <button 
                    onClick={nextSlide}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        backgroundColor: '#4a6bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a5bef'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a6bff'}
                >
                    Next
                </button>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                gap: '8px'
            }}>
                {images.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? '#4a6bff' : '#ddd',
                            cursor: 'pointer',
                            border: 'none',
                            padding: '0',
                            transition: 'background-color 0.2s, transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                ))}
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '15px',
                color: '#666',
                fontSize: '14px'
            }}>
                Slide {currentIndex + 1} of {images.length}
            </div>
        </div>
    );
};

export default HomeMyColor;