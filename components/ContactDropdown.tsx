'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If we're already on the homepage, just scroll to contact
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with contact hash
      router.push('/#contact');
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="text-sm text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Contact
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-lg shadow-xl border border-gray-200 overflow-hidden"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <a 
            href="/#contact"
            onClick={handleBookCall}
            className="block px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 cursor-pointer"
          >
            <div className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Book Your Free Intro Call
            </div>
            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Partner with us to build your sales team
            </div>
          </a>

          <Link 
            href="/talent-pool"
            className="block px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <div className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join Talent Pool
            </div>
            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Discover your next D2D sales opportunity
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
