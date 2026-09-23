'use client';

import { useEffect, useState } from 'react';

interface CalendlyEmbedProps {
  url?: string;
  height?: number;
}

export default function CalendlyEmbed({ 
  url = "https://calendly.com/teannacorvo/1-on-1",
  height = 700 
}: CalendlyEmbedProps) {
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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      clearInterval(checkCalendlyLoaded);
    };
  }, []);

  return (
    <div className="relative">
      {/* Loading Skeleton */}
      {!isCalendlyLoaded && (
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
          style={{ minWidth: '320px', height: `${height}px`, zIndex: 10 }}
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
        data-url={`${url}?hide_gdpr_banner=1&primary_color=dc2626`}
        style={{ 
          minWidth: '320px', 
          height: `${height}px`,
          opacity: isCalendlyLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      ></div>
    </div>
  );
}
