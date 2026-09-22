'use client';

export default function VideoSection() {
  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-5xl mx-auto">
        {/* Video Container - No text above */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200" style={{ backgroundColor: '#000000' }}>
          {/* Loom Embed - Responsive 16:9 */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src="https://www.loom.com/embed/c954a298a53c45dfb558460b77a79552?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>

        {/* Supporting Points Below Video */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
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
  );
}
