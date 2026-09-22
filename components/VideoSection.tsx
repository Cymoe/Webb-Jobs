'use client';

export default function VideoSection() {
  return (
    <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            See How We Fill Your Pipeline with Qualified D2D Reps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch this 3-minute video to see exactly how our recruiting engine works and why companies choose Webb Jobs over traditional recruiters.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200" style={{ backgroundColor: '#1F2937' }}>
          {/* Loom Embed - Responsive */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.loom.com/embed/YOUR-LOOM-VIDEO-ID?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '16px'
              }}
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

        {/* Setup Instructions */}
        <div className="mt-12 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>📝 Setup Required:</strong> Replace <code className="bg-yellow-100 px-2 py-1 rounded">YOUR-LOOM-VIDEO-ID</code> in <code className="bg-yellow-100 px-2 py-1 rounded">components/VideoSection.tsx</code> with your actual Loom video ID.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Get the ID from your Loom share URL: <code className="bg-yellow-100 px-2 py-1 rounded">loom.com/share/<strong>abc123def456</strong></code>
          </p>
          <p className="text-xs text-gray-600 mt-2">
            <strong>Pro tip:</strong> Record a 2-3 minute video explaining your process, showing your face, and addressing common objections (pricing, timeline, results).
          </p>
        </div>
      </div>
    </section>
  );
}
