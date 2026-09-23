'use client';

import Script from 'next/script';
import CalendlyEmbed from './CalendlyEmbed';

const MEDIA_ID = 'akuxvqjmmf';

export default function VideoSection() {
  return (
    <>
      {/* Wistia Player Scripts - Load Once */}
      <Script 
        src="https://fast.wistia.com/player.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="https://fast.wistia.com/embed/akuxvqjmmf.js" 
        strategy="afterInteractive"
      />
      
      <section className="pt-6 md:pt-8 pb-16 md:pb-20 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-5xl mx-auto">
          {/* Video Container - No text above */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200" style={{ backgroundColor: '#000000' }}>
            {/* Wistia Embed - Optimized for Marketing & Analytics */}
            <style dangerouslySetInnerHTML={{
              __html: `
                wistia-player[media-id='${MEDIA_ID}']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${MEDIA_ID}/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top: 56.25%;
                }
              `
            }} />
            {/* Plain embed: autoplay / sound / play-button behavior is configured in the Wistia dashboard */}
            <div
              dangerouslySetInnerHTML={{
                __html: `<wistia-player media-id="${MEDIA_ID}" aspect="1.7777777777777777" style="width: 100%; height: auto;"></wistia-player>`
              }}
            />
          </div>

        {/* Inline Calendar - Zero Friction Booking */}
        <div id="calendar" className="mt-16 scroll-mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Select a Time That Works for You
            </h3>
            <p className="text-gray-600">
              30 minutes • No commitment • First interviews in 5 days
            </p>
          </div>
          <CalendlyEmbed height={700} />
        </div>

        {/* Supporting Points Below Video */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">First Interviews in 5 Days</h3>
            <p className="text-gray-600">Our multi-channel approach fills your calendar fast while others take weeks</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Pre-Qualified Candidates</h3>
            <p className="text-gray-600">We screen for D2D experience so you only interview real closers</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">90-Day Guarantee</h3>
            <p className="text-gray-600">If a hire doesn't work out in 90 days, we'll replace them at no cost</p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
