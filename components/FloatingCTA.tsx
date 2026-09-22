'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slide-up"
      style={{ maxWidth: 'calc(100vw - 2rem)' }}
    >
      <div 
        className="flex items-center gap-4 px-6 py-4 rounded-lg shadow-2xl border border-gray-800"
        style={{ backgroundColor: '#111827' }}
      >
        {/* Icon */}
        <div 
          className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center"
          style={{ backgroundColor: '#DC2626' }}
        >
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1">
          <Link 
            href="#contact"
            className="text-white font-semibold hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Book Your Free Intro Call
          </Link>
          <p className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
            First interviews in 5 days
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 w-8 h-8 rounded hover:bg-gray-800 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg 
            className="w-4 h-4 text-gray-400 hover:text-white" 
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
