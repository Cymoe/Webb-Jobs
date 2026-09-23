'use client';

import { useRef, useState } from 'react';
import Script from 'next/script';
import CalendlyEmbed from './CalendlyEmbed';

const MEDIA_ID = 'akuxvqjmmf';

// Subset of the Wistia web component API we rely on
type WistiaPlayerElement = HTMLElement & {
  currentTime: number;
  muted: boolean;
  play: () => Promise<void>;
};

export default function VideoSection() {
  const playerWrapRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Restart from the beginning with sound, then dismiss the overlay
  const startWithSound = () => {
    const player = playerWrapRef.current?.querySelector('wistia-player') as WistiaPlayerElement | null;
    if (player) {
      player.currentTime = 0;
      player.muted = false;
      void player.play();
    }
    setHasStarted(true);
  };

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
                @keyframes vsl-pulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.55); }
                  70% { box-shadow: 0 0 0 18px rgba(220, 38, 38, 0); }
                }
              `
            }} />
            {/*
              autoplay + muted: plays silently on load without Wistia's native
              "Click for sound" badge. big-play-button + controls hidden so our
              overlay is the only UI until the viewer taps in.
            */}
            <div
              ref={playerWrapRef}
              dangerouslySetInnerHTML={{
                __html: `<wistia-player media-id="${MEDIA_ID}" aspect="1.7777777777777777" autoplay muted big-play-button="false" controls-visible-on-load="false" player-color="dc2626" style="width: 100%; height: auto;"></wistia-player>`
              }}
            />

            {/* Custom overlay: big play button + tap-for-sound, Brand Operator style */}
            {!hasStarted && (
              <button
                type="button"
                onClick={startWithSound}
                aria-label="Play video with sound"
                className="absolute inset-0 z-10 w-full h-full cursor-pointer bg-transparent border-0 p-0 group"
              >
                {/* Tap for sound pill */}
                <span className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 text-white text-sm font-medium font-sans backdrop-blur-sm">
                  Tap for sound
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05A4.47 4.47 0 0016.5 12zM14 3.23v2.06a7 7 0 010 13.42v2.06A9 9 0 0014 3.23z" />
                  </svg>
                </span>

                {/* Big play button */}
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-16 md:w-28 md:h-20 rounded-2xl shadow-2xl transition-transform duration-200 group-hover:scale-105"
                  style={{ backgroundColor: '#DC2626', animation: 'vsl-pulse 2.2s ease-out infinite' }}
                >
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </span>
              </button>
            )}
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
