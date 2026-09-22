import Link from 'next/link';
import ContactDropdown from '@/components/ContactDropdown';
import WebbJobsLogo from '@/components/WebbJobsLogo';

export default function IndustriesPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#F5F3EF' }}>
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 243, 239, 0.98)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <WebbJobsLogo />
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/#how-it-works" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              How It Works
            </Link>
            <Link 
              href="/industries" 
              className="text-sm text-gray-900 hover:text-gray-900 transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Industries
            </Link>
            <Link 
              href="/roles" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Open Roles
            </Link>
            <ContactDropdown />
            <Link
              href="/#contact"
              className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Book Your Free Intro Call
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-4 pt-40 md:pt-48" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F5F3EF' }}>
              Industries We Specialize In
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(245, 243, 239, 0.8)' }}>
              We know D2D sales recruiting inside and out. From roofing to solar, pest control to telecom — we've hired thousands of reps across every major door-to-door industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Roofing", 
                description: "Storm chasers, retail teams, and warranty programs. We understand the seasonal nature and the grit required for roofing sales.",
                metrics: "2,100+ reps placed"
              },
              { 
                name: "Solar", 
                description: "Residential and commercial solar installations. Technical sales reps who can educate homeowners on ROI and financing.",
                metrics: "1,800+ reps placed"
              },
              { 
                name: "Replacement Windows", 
                description: "Home improvement and exterior remodeling. Reps who can sell the value of energy efficiency and curb appeal.",
                metrics: "950+ reps placed"
              },
              { 
                name: "Pest Control", 
                description: "Residential and commercial pest management. Year-round recruiting for a recession-resistant industry.",
                metrics: "720+ reps placed"
              },
              { 
                name: "HVAC", 
                description: "Installation, maintenance, and energy efficiency. Technical sales requiring knowledge of heating and cooling systems.",
                metrics: "580+ reps placed"
              },
              { 
                name: "Home Security", 
                description: "Smart home and security systems. Tech-savvy reps who can demonstrate equipment and close on monthly contracts.",
                metrics: "650+ reps placed"
              },
              { 
                name: "Water Treatment", 
                description: "Filtration, softeners, and purification systems. In-home presentations requiring product demonstrations.",
                metrics: "320+ reps placed"
              },
              { 
                name: "Fiber / Telecom", 
                description: "Internet, TV, and telecommunications. Fast-paced territory work with high volume potential.",
                metrics: "450+ reps placed"
              },
              { 
                name: "Gas & Electric", 
                description: "Energy providers and utility services. Regulatory knowledge and consultative selling required.",
                metrics: "280+ reps placed"
              },
              { 
                name: "Insurance", 
                description: "Life, health, and property insurance. Licensed reps for both lead generation and closing roles.",
                metrics: "190+ reps placed"
              },
              { 
                name: "Landscaping", 
                description: "Lawn care and landscape design. Seasonal recruiting with a focus on relationship-building sales.",
                metrics: "140+ reps placed"
              },
              { 
                name: "Home Services", 
                description: "General contractors and home improvement. Multi-service offerings requiring versatile sales skills.",
                metrics: "360+ reps placed"
              }
            ].map((industry, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{industry.name}</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-500">{industry.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Industry Expertise Matters
            </h2>
            <p className="text-xl text-gray-600">
              We're not generalist recruiters trying to figure out your industry on the fly
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 bg-white rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Know What Good Looks Like</h3>
              <p className="text-lg text-gray-600">
                After years of hiring D2D reps across every major industry, we've seen every type of candidate. We know the difference between a retail worker who "likes people" and a rep who can actually close on a doorstep. We've refined our screening to identify true door-to-door talent.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Industry-Specific Sourcing</h3>
              <p className="text-lg text-gray-600">
                Our job ads don't sound like generic sales postings. We write copy that speaks directly to reps in your industry. A solar recruiter understands the difference between retail solar and true D2D canvassing. A roofing recruiter knows storm season dynamics. This specificity attracts the right candidates.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Faster Time to Hire</h3>
              <p className="text-lg text-gray-600">
                Because we know your industry, we don't waste time with unqualified candidates. Our screening is calibrated to D2D sales — we ask the right questions, spot red flags instantly, and only send candidates who can actually do the job. Most clients make their first hire within 40 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Build Your Sales Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your industry-specific recruiting needs
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors"
          >
            Book a Strategy Call
          </Link>
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
