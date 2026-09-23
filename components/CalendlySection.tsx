'use client';

import { useEffect, useState } from 'react';

export default function CalendlySection() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly events
    const checkCalendlyLoaded = setInterval(() => {
      const calendlyWidget = document.querySelector('.calendly-inline-widget iframe');
      if (calendlyWidget) {
        setIsCalendlyLoaded(true);
        clearInterval(checkCalendlyLoaded);
      }
    }, 500);

    return () => {
      document.body.removeChild(script);
      clearInterval(checkCalendlyLoaded);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Ready to Build Your Sales Team?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Book a free 30-minute strategy call. We'll discuss your hiring goals and create a custom recruiting plan.
        </p>
        
        {/* Trust Elements */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">30 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">No commitment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">First interviews in 5 days</span>
          </div>
        </div>
      </div>

      {/* Calendly Embed Container */}
      <div className="relative">
        {/* Loading Skeleton */}
        {!isCalendlyLoaded && (
          <div 
            className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
            style={{ minWidth: '320px', height: '700px', zIndex: 10 }}
          >
            <div className="animate-pulse p-8">
              {/* Header Skeleton */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>

              {/* Meeting Details Skeleton */}
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>

              {/* Calendar Skeleton */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="h-8 bg-gray-200 rounded"></div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(35)].map((_, i) => (
                    <div key={i} className="h-10 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>

              {/* Loading Text */}
              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">Loading calendar...</p>
              </div>
            </div>
          </div>
        )}

        {/* Calendly Embed */}
        <div 
          className="calendly-inline-widget rounded-xl overflow-hidden shadow-2xl border border-gray-200" 
          data-url="https://calendly.com/teannacorvo/1-on-1?hide_gdpr_banner=1&primary_color=dc2626"
          style={{ 
            minWidth: '320px', 
            height: '700px',
            opacity: isCalendlyLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        ></div>
      </div>
    </div>
  );
}
