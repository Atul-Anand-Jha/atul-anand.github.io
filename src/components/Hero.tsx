'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const fullName = "Atul Anand"
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (isTyping && currentIndex < fullName.length) {
      // Typing each character
      timeoutId = setTimeout(() => {
        setDisplayedName(fullName.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      }, 150) // Slower typing for better effect
    } else if (isTyping && currentIndex >= fullName.length) {
      // Finished typing, wait then restart
      setShowCursor(false)
      timeoutId = setTimeout(() => {
        setCurrentIndex(0)
        setDisplayedName('')
        setIsTyping(true)
        setShowCursor(true)
      }, 3000) // Wait 3 seconds before restarting
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [currentIndex, isTyping, fullName])

  const renderName = () => {
    return (
      <span className="relative inline-block">
        <span className="text-green-800 font-mono font-bold">
          {displayedName}
          {showCursor && <span className="animate-pulse text-green-800">|</span>}
        </span>
      </span>
    )
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
            <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <div className="w-[19rem] h-[19rem] sm:w-[22rem] sm:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden relative">
                <Image
                  src="/portfolio/profile-picture.png"
                  alt="Atul Anand - ML Platform Engineer"
                  width={416}
                  height={416}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
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
