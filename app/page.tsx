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
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 243, 239, 0.98)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center group">
            <span className="text-2xl font-semibold tracking-tight" style={{ color: '#DC2626', fontFamily: 'Inter, sans-serif' }}>
              Webb Jobs
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              How It Works
            </a>
            <a 
              href="/industries" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Industries
            </a>
            <a 
              href="/roles" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Open Roles
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
              <div className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 text-sm font-medium mb-6 rounded-full" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#DC2626' }}></span>
                SPECIALIZED RECRUITING FOR D2D SALES COMPANIES
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Add <span style={{ color: '#DC2626' }}>15+ Experienced Sales Reps</span> to Your Team in the Next 90 Days. <span style={{ color: '#DC2626' }}>Guaranteed.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build, run, and scale your recruiting engine, <span className="font-semibold text-gray-900">automate the pipeline</span>, and fill your calendar with <span className="font-semibold text-gray-900">A-players</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="#featured-roles"
                  className="inline-block px-8 py-4 text-center font-medium rounded transition-colors"
                  style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
                >
                  Browse Open Roles
                </a>
                <a
                  href="#talent-pool"
                  className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 text-center font-medium rounded border-2 border-gray-900 transition-colors"
                >
                  Join Talent Pool
                </a>
              </div>

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

      {/* Industries Marquee */}
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

      {/* Open Roles Section */}
      <section id="featured-roles" className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Featured D2D Sales Roles
            </h2>
            <p className="text-xl text-gray-600">
              Current openings we're actively recruiting for
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Solar",
                title: "Solar Sales Representative",
                company: "Leading Solar Company",
                location: "Phoenix, AZ",
                salary: "$60K-$120K + Commission",
                description: "Residential solar sales. Experienced closers preferred. Avg rep makes $90K+ first year.",
                type: "Full-time"
              },
              {
                category: "Roofing",
                title: "Storm Damage Sales Rep",
                company: "National Roofing Company",
                location: "Dallas, TX",
                salary: "$70K-$150K + Commission",
                description: "Storm season recruiting. Insurance claim experience a plus. Top reps earn $150K+.",
                type: "Full-time"
              },
              {
                category: "Pest Control",
                title: "Pest Control Sales Rep",
                company: "Regional Pest Control",
                location: "Atlanta, GA",
                salary: "$50K-$90K + Commission",
                description: "Year-round residential pest control sales. Full training provided. Avg first-year earnings $65K.",
                type: "Full-time"
              },
              {
                category: "Windows",
                title: "Window Replacement Consultant",
                company: "Home Improvement Leader",
                location: "Denver, CO",
                salary: "$55K-$100K + Commission",
                description: "In-home consultations. Energy efficiency sales. Protected territories available.",
                type: "Full-time"
              },
              {
                category: "Security",
                title: "Home Security Sales Rep",
                company: "Smart Home Security Co",
                location: "Las Vegas, NV",
                salary: "$45K-$85K + Residuals",
                description: "Smart home security systems. Recurring commission structure. High earning potential.",
                type: "Full-time"
              },
              {
                category: "HVAC",
                title: "HVAC Sales Specialist",
                company: "Climate Control Company",
                location: "Houston, TX",
                salary: "$60K-$110K + Commission",
                description: "Residential HVAC replacement sales. Technical knowledge helpful but not required.",
                type: "Full-time"
              }
            ].map((role, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626' }}>
                    {role.category.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900">{role.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{role.company}</p>
                <p className="text-sm text-gray-500 mb-3">📍 {role.location}</p>
                <p className="text-sm font-semibold text-gray-900 mb-3">💰 {role.salary}</p>
                <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                
                <a
                  href="#contact"
                  className="inline-block w-full text-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your ideal role? We're always recruiting for top D2D sales talent.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium rounded transition-colors"
            >
              View All Open Roles
            </a>
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

      {/* Services/What You Get Section */}
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

      {/* Talent Pool Form Section */}
      <section id="talent-pool" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Join Our Talent Pool
            </h2>
            <p className="text-xl text-gray-600">
              Submit your information and we'll match you with high-earning D2D sales opportunities that fit your experience and goals.
            </p>
          </div>
          
          <form action="/api/submit" method="POST" className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Current Location (City, State) *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Phoenix, AZ"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Years of D2D Sales Experience *
              </label>
              <select
                id="experience"
                name="experience"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="">Select experience level</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-2">1-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="industries" className="block text-sm font-medium text-gray-700 mb-2">
                Industries Interested In
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Solar", "Roofing", "Pest Control", "Windows", "Security", "HVAC", "Telecom", "Water Treatment", "Other"].map((industry) => (
                  <label key={industry} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="industries[]"
                      value={industry}
                      className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                    />
                    <span className="text-sm text-gray-700">{industry}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="incomeGoal" className="block text-sm font-medium text-gray-700 mb-2">
                Income Goal *
              </label>
              <select
                id="incomeGoal"
                name="incomeGoal"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="">Select income goal</option>
                <option value="50-75k">$50K - $75K</option>
                <option value="75-100k">$75K - $100K</option>
                <option value="100-150k">$100K - $150K</option>
                <option value="150k+">$150K+</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell Us About Your Background (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Tell us about your D2D sales experience, top achievements, and what you're looking for in your next role..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 font-medium rounded transition-colors"
              style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#B91C1C')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#DC2626')}
            >
              Submit Application
            </button>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              We'll review your information and reach out within 2 business days if there's a match.
            </p>
          </form>
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
