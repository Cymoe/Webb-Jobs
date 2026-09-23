'use client';

import Script from 'next/script';
import IClosedEmbed from './IClosedEmbed';

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
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Apply To Have Us <span style={{ color: '#DC2626' }}>Build<br className="hidden md:block" /> Your Recruiting Engine.</span>
          </h2>
          <IClosedEmbed height={700} />
        </div>

      </div>
    </section>
    </>
  );
}
