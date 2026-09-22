import ContactForm from '@/components/ContactForm';
import ComparisonTable from '@/components/ComparisonTable';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-success/10 text-success text-sm font-semibold rounded-full mb-4">
              Trusted by roofing, solar, and pest control companies across the US
            </span>
          </div>
          <h1 className="mb-6">
            Add <span className="text-primary">25+ Experienced Salespeople</span> to Your Team in the Next 6 Months. Guaranteed.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            First qualified interviews in <span className="font-semibold text-gray-900">5 days</span>. Risk-free model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book a Strategy Call
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-primary font-semibold rounded-lg border-2 border-primary transition-all"
            >
              See How It Works
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>6,000+ reps hired</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Results guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-container mx-auto">
          <h2 className="text-center mb-6">
            When Traditional Recruiting Fails
          </h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-600 mb-6">
              You've posted on Indeed. You've scrolled through 60 applicants. You've sat through a dozen bad interviews. And you still don't have a hire.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Worse, when you try a traditional recruiter, they don't understand door-to-door sales. They send you retail workers who "like people" or call center reps who "can handle rejection." They don't get it because they've never built a D2D team.
            </p>
            <p className="text-lg text-gray-600 font-semibold">
              We have. We've hired 6,000+ door-to-door sales reps for roofing, solar, pest control, and home services companies. We know what good looks like because we've done it.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              From kickoff to qualified interviews in 4 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="mb-3">Week 1: Kickoff</h3>
              <p className="text-gray-600">
                Define your ideal rep profile, build compelling job ads, and launch campaigns across Indeed and Meta. We also build your employer brand content.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="mb-3">Week 2-3: Pipeline</h3>
              <p className="text-gray-600">
                Applications flow in. We screen every candidate, qualify them with your criteria, and run automated follow-up sequences. You never touch a resume.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="mb-3">Week 4: Interviews</h3>
              <p className="text-gray-600">
                Qualified candidates land on your calendar. You focus on the final interview and hire decision. Most clients make their first hire within 40 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Everything Included</h2>
            <p className="text-xl text-gray-600">
              We handle the entire recruiting pipeline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '📝', title: 'Indeed Job Ads', description: 'Professional job postings and Indeed campaign management' },
              { icon: '📱', title: 'Meta Recruitment Ads', description: 'Targeted Facebook and Instagram ads to reach active job seekers' },
              { icon: '📸', title: 'Employer Brand Content', description: 'Social media content that makes your company attractive to top reps' },
              { icon: '✅', title: 'Application Screening', description: 'We review every applicant against your specific criteria' },
              { icon: '💬', title: 'Candidate Qualification', description: 'Phone screens to verify experience, motivation, and fit' },
              { icon: '🤖', title: 'Automated Follow-Up', description: 'Email and SMS sequences that keep candidates engaged' },
              { icon: '📅', title: 'Interview Booking', description: 'Qualified candidates scheduled directly on your calendar' },
              { icon: '📊', title: 'Monthly Reporting', description: 'Transparent metrics on pipeline, conversion, and results' },
            ].map((service, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Specialized recruiting for door-to-door sales teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Roofing Companies', description: 'Storm chasers, insurance reps, and full-cycle sales teams' },
              { name: 'Solar Installers', description: 'Residential solar consultants and energy advisors' },
              { name: 'Window Replacement', description: 'Home improvement reps and remodeling sales teams' },
              { name: 'Pest Control', description: 'Territory managers and recurring service sales reps' },
              { name: 'Fiber / Telecom', description: 'Internet and cable sales reps for residential markets' },
              { name: 'Home Services', description: 'HVAC, security, water treatment, and more' },
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Speed</h3>
              <p className="text-gray-600">First interviews in 5 days while others take weeks</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Full-Service</h3>
              <p className="text-gray-600">We handle the entire pipeline from ad to interview</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Risk-Free</h3>
              <p className="text-gray-600">$20k / 90 days + ad spend, measured on results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">D2D Expertise</h3>
              <p className="text-gray-600">6,000+ door-to-door reps hired and counting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 md:py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Not a Content Agency. Not an Indeed Posting Service. Not an AI Automation Tool.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We run your <span className="font-semibold text-white">complete recruiting engine</span>. End to end.
          </p>
          <p className="text-lg text-gray-400">
            <span className="font-semibold text-white">$20k / 90 days + ad spend</span> · Measured on qualified booked interviews
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Recruiting Engine vs. Alternatives</h2>
            <p className="text-xl text-gray-600">
              See how we compare to traditional recruiting and DIY hiring
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'How much does it cost?',
                answer: 'We charge $20k for 90 days of service plus ad spend (typically $3-5k/month). You only continue if you\'re getting results. No long-term contracts or hidden fees.',
              },
              {
                question: 'Do you guarantee hires?',
                answer: 'We measure success on qualified booked interviews, not hires. The final hiring decision is yours. Most clients make their first hire within 40 days of starting.',
              },
              {
                question: 'How is this different from just posting on Indeed?',
                answer: 'Indeed is one channel. We run Indeed AND Meta ads AND build your employer brand AND screen every applicant AND qualify candidates AND book interviews. You get qualified people on your calendar, not a pile of resumes.',
              },
              {
                question: 'What if we don\'t get results?',
                answer: 'Our model is results-based. If we\'re not delivering qualified interviews, we work with you to fix it or you stop paying. Most traditional recruiters charge 20-30% of salary upfront whether you hire or not.',
              },
              {
                question: 'What industries do you work with?',
                answer: 'We specialize in door-to-door sales teams: roofing, solar, windows, pest control, fiber/telecom, HVAC, home security, and other home services companies.',
              },
              {
                question: 'How fast can you start?',
                answer: 'We can kick off within days of signing. First interviews typically happen within 5 business days of launch.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-16 md:py-24 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Ready to Build Your Sales Team?</h2>
            <p className="text-xl text-gray-600 mb-2">
              Book a free 30-minute strategy call. No pressure, no pitch.
            </p>
            <p className="text-gray-600">
              We'll discuss your hiring goals, current challenges, and whether our recruiting engine is a fit.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-container mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
