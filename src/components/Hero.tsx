'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [jhaSuffix, setJhaSuffix] = useState('{ Jha }')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const fullName = "Atul Anand Jha"
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (currentIndex < fullName.length) {
      // Typing phase
      timeoutId = setTimeout(() => {
        setDisplayText(fullName.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      }, 150)
    } else if (!isComplete) {
      // Just finished typing
      setIsComplete(true)
      setShowCursor(false)
      
      // Reset after 5 seconds
      timeoutId = setTimeout(() => {
        setCurrentIndex(0)
        setDisplayText('')
        setIsComplete(false)
        setShowCursor(true)
        // Toggle Jha suffix style
        setJhaSuffix(prev => prev === '{ Jha }' ? '</ Jha >' : '{ Jha }')
      }, 5000)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [currentIndex, isComplete, fullName.length])

  const renderName = () => {
    if (!isComplete) {
      return (
        <>
          {displayText}
          {showCursor && <span className="animate-pulse text-blue-600">|</span>}
        </>
      )
    } else {
      // Split the name to style "Jha" differently
      const parts = displayText.split(' ')
      if (parts.length >= 3) {
        return (
          <span className="relative inline-block">
            {parts[0]} {parts[1]} 
            <span className="relative inline-block ml-2">
              <span className="text-blue-600 font-black bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {parts[2]}
              </span>
              <span className="absolute -top-6 -right-2 text-sm text-purple-500 font-mono whitespace-nowrap">
                {jhaSuffix}
              </span>
            </span>
          </span>
        )
      }
      return displayText
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I&apos;m <span className="text-blue-600">{renderName()}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mt-4 font-medium">
              Senior ML Platform Engineer & AI Systems Architect
            </p>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              I design and build scalable machine learning platforms that power intelligent applications
              at enterprise scale. With years of experience across the entire ML lifecycle, I transform
              data science prototypes into production-ready ML systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <svg 
                width="240" 
                height="240" 
                viewBox="0 0 240 240" 
                className="w-60 h-60 sm:w-72 sm:h-72"
              >
                {/* Developer/Engineer Avatar */}
                <defs>
                  <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdd5ae" />
                    <stop offset="100%" stopColor="#f4c2a1" />
                  </linearGradient>
                  <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d1810" />
                    <stop offset="100%" stopColor="#1a0f0a" />
                  </linearGradient>
                  <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                
                {/* Face */}
                <circle cx="120" cy="100" r="45" fill="url(#skinGradient)" />
                
                {/* Hair */}
                <path d="M 75 80 Q 120 40 165 80 Q 160 60 140 55 Q 120 50 100 55 Q 80 60 75 80" fill="url(#hairGradient)" />
                
                {/* Eyes */}
                <circle cx="105" cy="95" r="3" fill="#2d1810" />
                <circle cx="135" cy="95" r="3" fill="#2d1810" />
                <circle cx="106" cy="94" r="1" fill="white" />
                <circle cx="136" cy="94" r="1" fill="white" />
                
                {/* Eyebrows */}
                <path d="M 100 88 Q 108 85 115 88" stroke="#2d1810" strokeWidth="2" fill="none" />
                <path d="M 125 88 Q 132 85 140 88" stroke="#2d1810" strokeWidth="2" fill="none" />
                
                {/* Nose */}
                <path d="M 118 105 Q 120 108 122 105" stroke="#e5b299" strokeWidth="1" fill="none" />
                
                {/* Smile */}
                <path d="M 110 115 Q 120 125 130 115" stroke="#d1948a" strokeWidth="2" fill="none" />
                
                {/* Neck */}
                <rect x="110" y="140" width="20" height="15" fill="url(#skinGradient)" />
                
                {/* Shirt */}
                <path d="M 90 155 Q 120 150 150 155 L 155 200 Q 120 205 85 200 Z" fill="url(#shirtGradient)" />
                
                {/* Code symbols floating around */}
                <text x="60" y="170" font-family="monospace" font-size="12" fill="#6b7280" opacity="0.6">{'<ML/>'}</text>
                <text x="170" y="130" font-family="monospace" font-size="10" fill="#6b7280" opacity="0.6">{'{}='}</text>
                <text x="180" y="180" font-family="monospace" font-size="8" fill="#6b7280" opacity="0.6">{'()=>'}</text>
                <text x="40" y="120" font-family="monospace" font-size="14" fill="#6b7280" opacity="0.6">{'AI'}</text>
                
                {/* Laptop suggestion */}
                <rect x="95" y="185" width="50" height="30" rx="3" fill="#374151" opacity="0.8" />
                <rect x="98" y="188" width="44" height="24" rx="1" fill="#1f2937" />
                <rect x="116" y="215" width="8" height="3" fill="#374151" />
                <rect x="110" y="218" width="20" height="2" rx="1" fill="#374151" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
