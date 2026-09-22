'use client';

import { useEffect } from 'react';

export default function CalendlySection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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

      {/* Calendly Embed */}
      <div 
        className="calendly-inline-widget rounded-xl overflow-hidden shadow-2xl border border-gray-200" 
        data-url="https://calendly.com/YOUR-CALENDLY-USERNAME/30min?hide_gdpr_banner=1&primary_color=dc2626"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>

      {/* Instructions for user */}
      <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>📝 Setup Required:</strong> Replace <code className="bg-yellow-100 px-2 py-1 rounded">YOUR-CALENDLY-USERNAME</code> in <code className="bg-yellow-100 px-2 py-1 rounded">components/CalendlySection.tsx</code> with your actual Calendly username.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Example: <code className="bg-yellow-100 px-2 py-1 rounded">https://calendly.com/myles-webb/30min</code>
        </p>
      </div>
    </div>
  );
}
