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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
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
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10" />
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
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10" />
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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
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
    <main className="relative bg-white">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative max-w-container mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <AnimatedGradientText className="mb-6">
              <span className="text-primary font-semibold">
                ✨ Trusted by D2D Sales Leaders Nationwide
              </span>
            </AnimatedGradientText>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              Add <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">25+ Experienced Salespeople</span> to Your Team in 6 Months
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
              First qualified interviews in <span className="font-semibold text-gray-900">5 days</span>. 
              Guaranteed results or you don't pay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="group px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Book a Strategy Call
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-primary font-semibold rounded-xl border-2 border-primary shadow-md hover:shadow-lg transition-all"
              >
                See How It Works
              </a>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">6,000+ reps hired</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Results guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="py-8 border-y border-gray-100 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-4">TRUSTED BY LEADING D2D COMPANIES</p>
          <Marquee pauseOnHover className="[--duration:20s]">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {item.company[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{item.company}</div>
                  <div className="text-xs text-gray-500">{item.industry}</div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Founder & CEO
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            When Traditional Recruiting <span className="text-red-600">Fails</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p className="text-xl">
              You've posted on Indeed. You've scrolled through 60 applicants who've never knocked a door in their lives. You've sat through a dozen painful interviews with retail workers who "think they'd be good at sales."
            </p>
            
            <p className="text-xl">
              Then you try a traditional recruiter. They send you call center reps, retail managers, and people who happened to work at a company that sells something. <span className="font-semibold text-gray-900">They don't get door-to-door.</span>
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 mt-8">
              <p className="text-xl font-semibold text-gray-900">
                We do. We've hired 6,000+ D2D reps. We know what good looks like because we've done it hundreds of times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Companies Choose Us</h2>
            <p className="text-xl text-gray-600">Everything you need to build your sales team, faster</p>
          </div>
          
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-it-works" className="py-20 md:py-32 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
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
                className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  {idx + 1}
                </div>
                <div className="pt-6">
                  <div className="text-sm font-semibold text-blue-600 mb-2">{step.week}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Recruiting Engine vs. Alternatives
            </h2>
            <p className="text-xl text-gray-600">
              See how we stack up against traditional recruiting and DIY hiring
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 md:py-32 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-container mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
