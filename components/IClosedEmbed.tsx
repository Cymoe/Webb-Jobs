'use client';

import { useEffect, useState } from 'react';

interface IClosedEmbedProps {
  url?: string;
  title?: string;
  height?: number;
}

export default function IClosedEmbed({ 
  url = "https://app.iclosed.io/e/Cymoe/audit",
  title = "Free Recruiting Audit",
  height = 620 
}: IClosedEmbedProps) {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.src = 'https://app.iclosed.io/assets/widget.js';
    script.async = true;
    
    script.onload = () => {
      setTimeout(() => setIsWidgetLoaded(true), 500);
    };

    document.head.appendChild(script);

    const timeout = setTimeout(() => {
      setIsWidgetLoaded(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      const existingScript = document.querySelector('script[src="https://app.iclosed.io/assets/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="relative">
      {!isWidgetLoaded && (
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
          style={{ minWidth: '320px', height: `${height}px`, zIndex: 10 }}
        >
          <div className="animate-pulse p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>

            <div className="h-12 bg-gray-300 rounded"></div>

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">Loading form...</p>
            </div>
          </div>
        </div>
      )}

      <div 
        className="iclosed-widget rounded-xl overflow-hidden shadow-2xl border border-gray-200" 
        data-url={url}
        title={title}
        style={{ 
          width: '100%', 
          height: `${height}px`,
          opacity: isWidgetLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      ></div>
    </div>
  );
}
