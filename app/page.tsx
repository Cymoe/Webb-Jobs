'use client';

import VideoSection from '@/components/VideoSection';
import WebbJobsLogo from '@/components/WebbJobsLogo';
import Marquee from '@/components/ui/marquee';
import Image from 'next/image';

const features = [
  {
    Icon: () => (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    name: "Lightning Fast",
    description: "First qualified interviews in 5 days while others take weeks",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gray-50" />
    ),
  },
  {
    Icon: () => (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    name: "Full Pipeline",
    description: "We handle everything from ads to qualified interviews on your calendar",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gray-50" />
    ),
  },
  {
    Icon: () => (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    name: "Risk-Free Model",
    description: "$20k / 90 days + ad spend. Results-based pricing.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gray-50" />
    ),
  },
  {
    Icon: () => (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    name: "D2D Expertise",
    description: "Years of door-to-door sales recruiting experience",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gray-50" />
    ),
  },
];

const testimonials = [
  { company: "Roofing Co", industry: "Roofing" },
  { company: "Solar Plus", industry: "Solar" },
  { company: "Window Pro", industry: "Windows" },
  { company: "Pest Control Inc", industry: "Pest Control" },
  { company: "Fiber Connect", industry: "Telecom" },
];

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: '#F5F3EF' }}>
      {/* Header - Landing Page Mode (No Navigation) */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-gray-200 shadow-sm" style={{ backgroundColor: 'rgba(245, 243, 239, 0.98)', backdropFilter: 'blur(8px)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <WebbJobsLogo />
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 pt-56 md:pt-64" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Add <span style={{ color: '#DC2626' }}>15+ Experienced Sales Reps</span> to Your Team in the Next 90 Days. <span style={{ color: '#DC2626' }}>Guaranteed.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build, run, and scale your recruiting engine, <span className="font-semibold text-gray-900">automate the pipeline</span>, and fill your calendar with <span className="font-semibold text-gray-900">A-players</span>.
              </p>
              
              <a
                href="#calendar"
                onClick={(e) => {
                  e.preventDefault();
                  const calendarSection = document.getElementById('calendar');
                  if (calendarSection) {
                    calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors mb-6 cursor-pointer"
              >
                Book Your Free Intro Call
              </a>

              <p className="text-sm text-gray-500">
                First interviews in 5 days. Risk-free.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <svg
                className="w-48 h-96 md:w-64 md:h-[32rem]"
                viewBox="0 0 160 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Door - barely cracked open */}
                <path
                  d="M 40 10 L 70 20 L 70 300 L 40 310 Z"
                  fill="#DC2626"
                />
                
                {/* Door edge */}
                <line
                  x1="40"
                  y1="10"
                  x2="40"
                  y2="310"
                  stroke="#991B1B"
                  strokeWidth="3"
                />
                
                {/* Door handle */}
                <circle
                  cx="48"
                  cy="160"
                  r="4"
                  fill="#991B1B"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Marquee - Moved before video */}
      <section className="py-12 border-y border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-500 font-medium">Industries We Serve</p>
        </div>
        <Marquee className="py-4" pauseOnHover>
          {[
            "Roofing",
            "Solar",
            "Replacement Windows",
            "Pest Control",
            "HVAC",
            "Home Security",
            "Water Treatment",
            "Landscaping",
            "Fiber / Telecom",
            "Gas & Electric",
            "Insurance",
            "Home Services",
            "Exterior Remodeling",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="mx-6 px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <span className="text-gray-700 font-medium whitespace-nowrap">
                {industry}
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Video Section - After Industries */}
      <VideoSection />

{/* Founder Section */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder"
                  width={600}
                  height={700}
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
                answer: "We don't guarantee hires initially because hiring depends on your interview process and offer competitiveness. We measure success by qualified interviews booked. Most clients make their first hire within 40 days, and we include a 90-day replacement guarantee for hires made through our process."
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
                answer: "Yes. We operate on 90-day engagements with no long-term contracts. If you need to pause recruiting, just let us know. Most clients continue beyond 90 days because they're consistently hiring, but you're never locked in."
              },
              {
                question: "How many reps can I expect to hire in 90 days?",
                answer: "It varies by market, offer, and interview volume, but our average client hires 3-7 reps in their first 90 days. High-volume clients (with multiple interviewers and competitive offers) often hire 10-15+. We'll discuss realistic expectations on our strategy call."
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
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
