import ContactForm from '@/components/ContactForm';
import ComparisonTable from '@/components/ComparisonTable';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
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
    description: "6,000+ door-to-door sales reps hired and counting",
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
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 243, 239, 0.98)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 8 2 L 14 4 L 14 44 L 8 46 Z" fill="#DC2626"/>
              <line x1="8" y1="2" x2="8" y2="46" stroke="#991B1B" strokeWidth="1.5"/>
              <circle cx="9.5" cy="24" r="1.5" fill="#991B1B"/>
            </svg>
            <span className="text-xl font-medium tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Rep Engine
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#about" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              How It Works
            </a>
            <a 
              href="#industries" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Industries
            </a>
            <a 
              href="#contact" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 pt-32 md:pt-40" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 text-gray-600 text-sm font-medium mb-6 border-b border-gray-300">
                Door-to-Door Sales Recruiting
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Hire 5 to 50+ Door-to-Door Sales Reps Every Month
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build, run, and scale your recruiting engine. From Indeed and Meta ads to qualified interviews on your calendar.
              </p>
              
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors mb-6"
              >
                Book a Call
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
                  className="w-full h-auto object-cover grayscale-[20%]"
                />
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-6 pb-2 border-b border-gray-300 inline-block">
                Founder
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Built by Someone Who's Actually Hired 6,000+ D2D Reps
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                I'm not a recruiter who Googled "door-to-door sales" yesterday. I've spent years building and scaling D2D teams for roofing, solar, and home services companies.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                I've seen what works and what doesn't. I know the difference between a retail worker who "likes people" and a rep who can actually close on a doorstep.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                This recruiting engine is everything I learned from hiring 6,000+ reps, systematized so you can scale your team without the trial and error.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                <span className="text-sm text-gray-500">6,000+ successful hires</span>
                <div className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent" />
              </div>
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
                We do. We've hired 6,000+ D2D reps. We know what good looks like because we've done it hundreds of times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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

      {/* Final CTA */}
      <section id="contact" className="py-20 md:py-32 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Build Your Sales Team?
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Book a free 30-minute strategy call. No pressure, no pitch.
            </p>
            <p className="text-gray-600">
              We'll discuss your hiring goals and whether our recruiting engine is right for you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200" style={{ backgroundColor: '#ECE9E3' }}>
        <div className="max-w-container mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
