import QualificationQuiz from '@/components/QualificationQuiz';

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon-black">
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Add <span className="text-action-yellow">25+ Experienced</span>
              <br />
              <span className="text-action-yellow">Salespeople</span> to Your Team in
              <br />
              the Next 6 Months. <span className="text-action-yellow">Guaranteed.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-2">
              We build, run, and scale your content,{' '}
              <span className="font-semibold text-white">automate the pipeline</span>, and fill your calendar
              with <span className="font-semibold text-white">A-players</span>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 rounded-lg overflow-hidden border border-bg-light bg-slate-gray">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-gray to-carbon-black">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-action-yellow rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">
                    Tap for sound 🔊
                  </p>
                  <p className="text-white/40 text-xs mt-2">
                    5:37 video introduction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-slate-gray/30">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm text-professional-blue font-semibold uppercase tracking-wider mb-4">
            For Door-To-Door Sales Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hire 5 to 50+ door-to-door reps
            <br />
            <span className="text-success-green">every month.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything we learned from hiring 6,000+ door-to-door sales reps... is yours to scale.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-gray rounded-lg p-6 border border-bg-light">
              <div className="w-12 h-12 bg-professional-blue/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-professional-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">We Handle Everything</h3>
              <p className="text-white/60 text-sm">
                Indeed + Meta ads + social content → application → qualification → automated follow-up → booked interview
              </p>
            </div>

            <div className="bg-slate-gray rounded-lg p-6 border border-bg-light">
              <div className="w-12 h-12 bg-success-green/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">You Focus on Closing</h3>
              <p className="text-white/60 text-sm">
                We put qualified sales recruits on your calendar. You handle the final interview and hire.
              </p>
            </div>

            <div className="bg-slate-gray rounded-lg p-6 border border-bg-light">
              <div className="w-12 h-12 bg-action-yellow/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-action-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
              <p className="text-white/60 text-sm">
                We measure qualified booked interviews. If we don't deliver, you don't pay.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-gray/50 rounded-lg p-8 border border-professional-blue/30 mb-16">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-professional-blue rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Not a Content Agency. Not an Indeed Agency. Not an AI Agency.</h3>
              <p className="text-white/70">
                <span className="font-semibold text-white">We run your recruiting engine.</span> End to end. $20k / 90 days + ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-professional-blue/10 border border-professional-blue/30 rounded-full mb-6">
            <p className="text-sm text-professional-blue font-medium">
              ✓ 100% MONEY-BACK GUARANTEE
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a Strategy Call
          </h2>
          <p className="text-lg text-white/70">
            Free strategy call. You leave with a growth plan.
          </p>
        </div>

        <QualificationQuiz />
      </section>

      <section className="py-12 px-4 bg-slate-gray/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-gray rounded-lg p-8 border border-bg-light">
            <h3 className="text-2xl font-bold mb-6 text-center">Ideal For:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-success-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/80">
                  <span className="font-semibold text-white">Roofing, Solar, Windows, Pest Control</span> companies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-success-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/80">
                  Teams with <span className="font-semibold text-white">5–50+ reps</span>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-success-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/80">
                  Companies that <span className="font-semibold text-white">constantly need salespeople</span>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-success-green rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/80">
                  Sales leaders ready to <span className="font-semibold text-white">scale aggressively</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-bg-light">
        <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
