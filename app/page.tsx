'use client';

import VideoSection from '@/components/VideoSection';
import WebbJobsLogo from '@/components/WebbJobsLogo';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: '#F5F3EF' }}>
      {/* Header - Landing Page Mode (No Navigation) */}
      <header className="py-5 px-8 border-b border-gray-200" style={{ backgroundColor: '#F5F3EF' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <WebbJobsLogo />
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative px-4 pt-10 md:pt-14 pb-4 md:pb-6" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 leading-[1.1]">
            Add <span style={{ color: '#DC2626' }}>15+ Experienced Sales Reps</span> to Your Team in the Next 6 Months. <span style={{ color: '#DC2626' }}>Guaranteed.</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            We build, run, and scale your recruiting engine, <span className="font-semibold text-gray-900">automate the pipeline</span>, and fill your calendar with <span className="font-semibold text-gray-900">A-players</span>.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

{/* Founder Section */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/founder.jpg"
                  alt="Myles Webb - Founder of Webb Jobs"
                  width={600}
                  height={700}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div>
              <div className="mb-6 pb-2 border-b border-gray-300 inline-block">
                <span className="text-sm text-gray-500">Founder</span>
                <span className="text-sm text-gray-400 mx-2">•</span>
                <span className="text-sm text-gray-700 font-medium">Myles Webb</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Built by Someone Who's Actually Done This
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                I'm not a recruiter who Googled "door-to-door sales" yesterday. I've spent years building and scaling D2D teams for roofing, solar, and home services companies.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                I've seen what works and what doesn't. I know the difference between a retail worker who "likes people" and a rep who can actually close on a doorstep.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                This recruiting engine is everything I learned from years of hiring and scaling D2D sales teams, systematized so you can build your team without the trial and error.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
            When Traditional Recruiting Fails
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p className="text-xl">
              You've posted on Indeed. You've scrolled through 60 applicants who've never knocked a door in their lives. You've sat through a dozen painful interviews with retail workers who "think they'd be good at sales."
            </p>
            
            <p className="text-xl">
              Then you try a traditional recruiter. They send you call center reps, retail managers, and people who happened to work at a company that sells something. <span className="font-semibold text-gray-900">They don't get door-to-door.</span>
            </p>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-8">
              <p className="text-xl font-semibold text-gray-900">
                We do. We've spent years building D2D sales teams. We know what good looks like because we've done it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Moved before What You Get */}
      <section id="how-it-works" className="py-20 md:py-32 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">From kickoff to qualified interviews in 4 weeks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                week: "Week 1",
                title: "Kickoff",
                description: "Define your ideal rep profile, build compelling job ads, and launch campaigns across Indeed and Meta. We build your employer brand.",
              },
              {
                week: "Week 2-3",
                title: "Pipeline",
                description: "Applications flow in. We screen every candidate, qualify with your criteria, and run automated follow-up. You never touch a resume.",
              },
              {
                week: "Week 4",
                title: "Interviews",
                description: "Qualified candidates land on your calendar. You focus on final interviews. Most clients hire within 40 days.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-8 border-l-2 border-gray-300"
              >
                <div className="text-sm font-medium text-gray-500 mb-2">{step.week}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/What You Get Section - Moved after How It Works */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What You Get
            </h2>
            <p className="text-xl text-gray-600">
              Your complete recruiting engine, managed end-to-end
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Job Ad Strategy & Creation",
                items: [
                  "D2D-specific job descriptions that attract closers, not retail workers",
                  "Compelling employer brand positioning",
                  "Platform-optimized ads for Indeed and Meta"
                ]
              },
              {
                title: "Multi-Channel Sourcing",
                items: [
                  "Indeed campaigns targeting D2D experience",
                  "Meta ads reaching active job seekers",
                  "Continuous optimization based on quality metrics"
                ]
              },
              {
                title: "Screening & Qualification",
                items: [
                  "Custom screening questions for D2D fit",
                  "Phone screens with experienced D2D recruiters",
                  "Background and reference checks"
                ]
              },
              {
                title: "Interview Coordination",
                items: [
                  "Automated scheduling on your calendar",
                  "Candidate prep and confirmation",
                  "Follow-up and feedback loops"
                ]
              },
              {
                title: "Ongoing Pipeline Management",
                items: [
                  "Weekly pipeline reports and metrics",
                  "Continuous candidate nurturing",
                  "Ad spend optimization and tracking"
                ]
              },
              {
                title: "Hiring Support",
                items: [
                  "Offer letter templates and guidance",
                  "Onboarding coordination support",
                  "90-day replacement guarantee"
                ]
              }
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* FAQ Section */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Do you guarantee hires?",
                answer: "Yes. Over a 6-month engagement we guarantee 15+ experienced reps added to your team, and every hire made through our process comes with a 90-day replacement guarantee. Pace depends on your interview process and offer competitiveness, so we track qualified interviews weekly and adjust. Most clients make their first hire within 40 days."
              },
              {
                question: "What if I'm in a rural market or hard-to-recruit area?",
                answer: "We've successfully recruited in markets of all sizes. Our multi-channel approach (Indeed + Meta + targeted social) reaches candidates who aren't actively job searching. We adjust our strategy based on your market dynamics."
              },
              {
                question: "How is this different from posting on Indeed myself?",
                answer: "Three key differences: (1) We write D2D-specific job ads that attract closers, not retail workers. (2) We screen and qualify every candidate before they hit your calendar. (3) We manage the entire pipeline including follow-up, scheduling, and nurturing so you never touch a resume until the final interview."
              },
              {
                question: "What's the time commitment on my end?",
                answer: "Minimal. We need 1-2 hours for the initial kickoff to understand your ideal rep profile. After that, your only job is conducting final interviews with pre-qualified candidates we send your way. Most clients spend 2-3 hours per week on interviews."
              },
              {
                question: "Can I pause or cancel anytime?",
                answer: "Yes. Our guarantee is built around a 6-month engagement, but if you need to pause recruiting at any point, just let us know and we'll pause the pipeline. Most clients continue past 6 months because they're consistently hiring, but you're never locked into anything beyond the initial term."
              },
              {
                question: "How many reps can I expect to hire in 6 months?",
                answer: "Pace varies by market, offer, and interview volume. Most clients hire 3-7 reps in their first 90 days and reach 15+ over the full 6-month engagement. High-volume clients (with multiple interviewers and competitive offers) often move faster. We'll discuss realistic expectations on our strategy call."
              },
              {
                question: "What industries do you NOT work with?",
                answer: "We focus exclusively on D2D sales companies. We don't recruit for inside sales, retail, call centers, or non-sales roles. If your reps knock doors and close deals face-to-face, we're the right fit."
              },
              {
                question: "Do you handle onboarding and training?",
                answer: "No. We focus on recruiting qualified candidates through the interview stage. Once you make an offer, onboarding and training are on you. However, we can provide templates and guidance to help streamline your process."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Terms Section */}
      <section className="py-12 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Guarantee Terms</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            The Webb Jobs growth guarantee is available only to door-to-door sales organizations that (1) apply and are approved, (2) sign a services agreement, and (3) have an active recruiting need for field sales representatives at signing. The guarantee target is 15+ experienced sales representatives successfully recruited and hired within 6 months of program start. If the target is not reached in that window, Webb Jobs will continue providing the contracted services at no additional service fee until it is reached. This service commitment is the exclusive remedy under the guarantee; fees already paid are non-refundable. Each hire made through our process comes with a 90-day replacement guarantee—if a hire does not work out within 90 days, we will replace them at no additional cost. Client results shown in our advertising (including named case studies) reflect those clients' actual, documented experiences and are not typical; your results will vary based on your interview process, offer competitiveness, market conditions, comp structure, and participation in the program. Webb Jobs is a recruiting and marketing systems company; we are not an employer, insurance carrier, or agency, and nothing in our advertising is an offer of employment or income to sales representatives. The initial strategy call is free and carries no obligation.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200" style={{ backgroundColor: '#ECE9E3' }}>
        <div className="max-w-container mx-auto text-center text-gray-600 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="/income-disclaimer" className="hover:text-gray-900 transition-colors">Income Disclaimer</a>
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
          
          {/* Meta Disclaimer - Required for Facebook/Meta Ads */}
          <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
            This site is not a part of the Facebook™ or Meta™ website or Meta™ Inc. Additionally, this site is NOT endorsed by Facebook™ or Meta™ in any way. Results are not typical. Your results will vary based on effort, experience, and market conditions.
          </p>
        </div>
      </footer>

      <MobileStickyCTA />
    </main>
  );
}
