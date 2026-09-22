import Link from 'next/link';
import ContactDropdown from '@/components/ContactDropdown';

export default function RolesPage() {
  const roles = [
    {
      category: "Solar",
      title: "Solar Sales Representative",
      company: "Leading Solar Company",
      location: "Phoenix, AZ",
      salary: "$60K-$120K + Commission",
      description: "Residential solar sales. Experienced closers preferred. Average rep makes $90K+ first year. Full training on solar technology, financing options, and consultation process.",
      type: "Full-time",
      requirements: ["1+ years D2D sales experience", "Valid driver's license", "Own transportation"]
    },
    {
      category: "Roofing",
      title: "Storm Damage Sales Rep",
      company: "National Roofing Company",
      location: "Dallas, TX",
      salary: "$70K-$150K + Commission",
      description: "Storm season recruiting. Insurance claim experience a plus. Top reps earn $150K+. Work storm-damaged areas and help homeowners navigate insurance claims.",
      type: "Full-time",
      requirements: ["2+ years roofing or insurance sales", "Strong negotiation skills", "Willing to travel"]
    },
    {
      category: "Pest Control",
      title: "Pest Control Sales Rep",
      company: "Regional Pest Control",
      location: "Atlanta, GA",
      salary: "$50K-$90K + Commission",
      description: "Year-round residential pest control sales. Full training provided. Average first-year earnings $65K. Protected territories and recurring revenue structure.",
      type: "Full-time",
      requirements: ["High school diploma", "Sales experience preferred", "Clean driving record"]
    },
    {
      category: "Windows",
      title: "Window Replacement Consultant",
      company: "Home Improvement Leader",
      location: "Denver, CO",
      salary: "$55K-$100K + Commission",
      description: "In-home consultations for energy-efficient window replacements. Protected territories available. Company leads provided plus self-generated opportunities.",
      type: "Full-time",
      requirements: ["Sales experience required", "Home improvement knowledge a plus", "Professional appearance"]
    },
    {
      category: "Security",
      title: "Home Security Sales Rep",
      company: "Smart Home Security Co",
      location: "Las Vegas, NV",
      salary: "$45K-$85K + Residuals",
      description: "Smart home security systems. Recurring commission structure with residual income. High earning potential. Full product training and demo equipment provided.",
      type: "Full-time",
      requirements: ["1+ years sales experience", "Tech-savvy", "Strong communication skills"]
    },
    {
      category: "HVAC",
      title: "HVAC Sales Specialist",
      company: "Climate Control Company",
      location: "Houston, TX",
      salary: "$60K-$110K + Commission",
      description: "Residential HVAC replacement sales. Technical knowledge helpful but not required - full training provided. Work with warm leads from marketing campaigns.",
      type: "Full-time",
      requirements: ["Sales experience", "Customer service skills", "Self-motivated"]
    },
    {
      category: "Fiber/Telecom",
      title: "Fiber Internet Sales Rep",
      company: "Fiber Network Provider",
      location: "Austin, TX",
      salary: "$50K-$95K + Bonuses",
      description: "High-speed fiber internet sales. Fast-growing territory with new construction focus. Uncapped commission potential and performance bonuses.",
      type: "Full-time",
      requirements: ["Sales experience", "Tech comfortable", "Valid driver's license"]
    },
    {
      category: "Water Treatment",
      title: "Water Filtration Consultant",
      company: "Water Solutions Company",
      location: "Orlando, FL",
      salary: "$55K-$105K + Commission",
      description: "In-home water quality testing and filtration system sales. Full training on water chemistry and product line. Company leads and marketing support.",
      type: "Full-time",
      requirements: ["Sales background", "Consultative approach", "Problem-solving skills"]
    },
    {
      category: "Roofing",
      title: "Retail Roofing Sales Rep",
      company: "Roofing Services Inc",
      location: "Nashville, TN",
      salary: "$65K-$130K + Commission",
      description: "Retail roofing sales for residential replacements. Year-round opportunities. Company-provided leads plus self-generation. Top performers promoted to team lead roles.",
      type: "Full-time",
      requirements: ["2+ years roofing sales", "Strong closing skills", "Industry knowledge"]
    }
  ];

  return (
    <main className="relative" style={{ backgroundColor: '#F5F3EF' }}>
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 243, 239, 0.98)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-semibold tracking-tight" style={{ color: '#DC2626', fontFamily: 'Inter, sans-serif' }}>
              Webb Jobs
            </span>
          </Link>
          
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
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Industries
            </Link>
            <Link 
              href="/roles" 
              className="text-sm text-gray-900 hover:text-gray-900 transition-colors font-medium"
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
              Book a Call
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-4 pt-40 md:pt-48" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F5F3EF' }}>
              Discover High-Earning D2D Sales Jobs at Growing Companies
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto" style={{ color: 'rgba(245, 243, 239, 0.8)' }}>
              Webb Jobs is a specialized D2D sales recruitment agency connecting top sales talent with leading companies across Solar, Roofing, Pest Control, HVAC, and more. Explore active, pre-vetted D2D sales opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#roles-grid"
                className="inline-block px-8 py-4 text-center font-medium rounded-lg transition-colors"
                style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
              >
                Browse Open Roles
              </a>
              <a
                href="/talent-pool"
                className="inline-block px-8 py-4 text-center font-medium rounded-lg border-2 transition-colors"
                style={{ borderColor: '#F5F3EF', color: '#F5F3EF' }}
              >
                Join Talent Pool
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section id="roles-grid" className="py-20 px-4" style={{ backgroundColor: '#F5F3EF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Featured D2D Sales Jobs & Open Roles
            </h2>
            <p className="text-lg text-gray-600">
              Active positions across Solar, Roofing, Pest Control, HVAC, and more
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626' }}>
                    {role.category.toUpperCase()}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-2 text-gray-900">{role.title}</h2>
                <p className="text-sm text-gray-600 mb-1">{role.company}</p>
                <p className="text-sm text-gray-500 mb-3">📍 {role.location}</p>
                <p className="text-sm font-semibold text-gray-900 mb-4">💰 {role.salary}</p>
                <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Requirements:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {role.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="/#contact"
                  className="inline-block w-full text-center px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded transition-colors"
                >
                  Apply for This Role
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Don't See Your Ideal Role?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always recruiting top D2D sales talent. Submit your information and we'll match you with opportunities that fit your experience and income goals.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors"
          >
            Submit Your Resume
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
