'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 600px (past hero section)
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 600) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Remove hash from URL so refresh starts at top
      window.history.replaceState(null, '', '/');
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slide-up"
      style={{ maxWidth: 'calc(100vw - 2rem)' }}
    >
      <div 
        className="flex items-center gap-3 px-4 py-3 rounded-lg shadow-2xl border border-gray-800"
        style={{ backgroundColor: '#111827' }}
      >
        {/* Icon */}
        <div 
          className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center"
          style={{ backgroundColor: '#DC2626' }}
        >
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>

        {/* Text */}
        <a 
          href="#contact"
          onClick={handleClick}
          className="text-white text-sm font-semibold hover:opacity-80 transition-opacity whitespace-nowrap cursor-pointer"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Book Free Intro Call
        </a>

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 w-6 h-6 rounded hover:bg-gray-800 flex items-center justify-center transition-colors ml-2"
          aria-label="Close"
        >
          <svg 
            className="w-3 h-3 text-gray-400 hover:text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
