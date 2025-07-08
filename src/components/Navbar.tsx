'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Portfolio
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/#skills" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Skills
              </Link>
              <Link href="/#projects" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/bucket-list" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Bucket List
              </Link>
              <Link href="/#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/#about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/#skills" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Skills
            </Link>
            <Link href="/#projects" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Projects
            </Link>
            <Link href="/bucket-list" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Bucket List
            </Link>
            <Link href="/#contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
