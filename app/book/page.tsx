'use client';

import ContactForm from '@/components/ContactForm';

export default function BookPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: '#F5F3EF' }}>
      {/* No Header - Pure Landing Page */}

      {/* Hero Section - Dark & Focused */}
      <section className="relative py-20 md:py-32 px-4" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#F5F3EF' }}>
            Book Your Free 30-Minute Strategy Call
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(245, 243, 239, 0.8)' }}>
            Discover how we can fill your sales pipeline with qualified D2D reps in the next 90 days
          </p>

          {/* What Happens on the Call */}
          <div className="max-w-2xl mx-auto text-left mb-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#F5F3EF' }}>
              On this call, we'll:
            </h2>
            
            <ul className="space-y-4">
              {[
                'Review your current recruiting challenges and hiring goals',
                'Discuss your ideal rep profile and compensation structure',
                'Map out a custom recruiting strategy for your industry',
                'Show you how we can get qualified interviews on your calendar in 5 days',
                'Answer all your questions about our process and pricing'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#DC2626' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg" style={{ color: 'rgba(245, 243, 239, 0.9)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-8 mb-12" style={{ color: 'rgba(245, 243, 239, 0.7)' }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">30-minute consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Minimal Footer - No Links */}
      <footer className="py-8 px-4 border-t border-gray-200" style={{ backgroundColor: '#ECE9E3' }}>
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2">D2D Sales Recruiting</p>
        </div>
      </footer>
    </main>
  );
}
