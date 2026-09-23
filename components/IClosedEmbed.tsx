'use client';

import { useEffect, useRef, useState } from 'react';

interface IClosedEmbedProps {
  url?: string;
  title?: string;
  height?: number;
}

export default function IClosedEmbed({
  url = 'https://app.iclosed.io/e/Cymoe/vsl-funnel',
  title = 'VSL Funnel',
  height = 620,
}: IClosedEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const WIDGET_SRC = 'https://app.iclosed.io/assets/widget.js';

    if (!document.querySelector(`script[src="${WIDGET_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    // The widget script swaps in an iframe; poll for it to cross-fade the skeleton
    const poll = setInterval(() => {
      if (containerRef.current?.querySelector('iframe')) {
        setIsLoaded(true);
        clearInterval(poll);
      }
    }, 300);

    const timeout = setTimeout(() => {
      clearInterval(poll);
      setIsLoaded(true);
    }, 10000);

    return () => {
      clearInterval(poll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative">
      {!isLoaded && (
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

            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>

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

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">Loading calendar...</p>
            </div>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="iclosed-widget rounded-xl overflow-hidden shadow-2xl border border-gray-200"
        data-url={url}
        title={title}
        style={{
          width: '100%',
          minWidth: '320px',
          height: `${height}px`,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      ></div>
    </div>
  );
}
