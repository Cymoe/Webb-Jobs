import Link from 'next/link';
import ContactDropdown from '@/components/ContactDropdown';
import WebbJobsLogo from '@/components/WebbJobsLogo';

export default function RolesPage() {
  const roles = [
    {
      category: "Solar",
      title: "Solar Sales Representative",
      company: "Leading Solar Company",
      location: "Phoenix, AZ",
      salary: "$60K-$120K",
      type: "Full-time",
      postedDays: 2
    },
    {
      category: "Roofing",
      title: "Storm Damage Sales Rep",
      company: "National Roofing Company",
      location: "Dallas, TX",
      salary: "$70K-$150K",
      type: "Full-time",
      postedDays: 3
    },
    {
      category: "Pest Control",
      title: "Pest Control Sales Rep",
      company: "Regional Pest Control",
      location: "Atlanta, GA",
      salary: "$50K-$90K",
      type: "Full-time",
      postedDays: 5
    },
    {
      category: "Windows",
      title: "Window Replacement Consultant",
      company: "Home Improvement Leader",
      location: "Denver, CO",
      salary: "$55K-$100K",
      type: "Full-time",
      postedDays: 4
    },
    {
      category: "Security",
      title: "Home Security Sales Rep",
      company: "Smart Home Security Co",
      location: "Las Vegas, NV",
      salary: "$45K-$85K",
      type: "Full-time",
      postedDays: 1
    },
    {
      category: "HVAC",
      title: "HVAC Sales Specialist",
      company: "Climate Control Company",
      location: "Houston, TX",
      salary: "$60K-$110K",
      type: "Full-time",
      postedDays: 7
    },
    {
      category: "Fiber/Telecom",
      title: "Fiber Internet Sales Rep",
      company: "Fiber Network Provider",
      location: "Austin, TX",
      salary: "$50K-$95K",
      type: "Full-time",
      postedDays: 6
    },
    {
      category: "Water Treatment",
      title: "Water Filtration Consultant",
      company: "Water Solutions Company",
      location: "Orlando, FL",
      salary: "$55K-$105K",
      type: "Full-time",
      postedDays: 8
    },
    {
      category: "Roofing",
      title: "Retail Roofing Sales Rep",
      company: "Roofing Services Inc",
      location: "Nashville, TN",
      salary: "$65K-$130K",
      type: "Full-time",
      postedDays: 4
    },
    {
      category: "Solar",
      title: "Commercial Solar Consultant",
      company: "Enterprise Solar Solutions",
      location: "San Diego, CA",
      salary: "$80K-$140K",
      type: "Full-time",
      postedDays: 2
    },
    {
      category: "HVAC",
      title: "HVAC Territory Manager",
      company: "Climate Solutions Group",
      location: "Miami, FL",
      salary: "$70K-$120K",
      type: "Full-time",
      postedDays: 5
    },
    {
      category: "Security",
      title: "Smart Home Sales Specialist",
      company: "SecureLife Technologies",
      location: "Remote (US)",
      salary: "$50K-$95K",
      type: "Full-time",
      postedDays: 3
    }
  ];

  const categories = ["All", "Solar", "Roofing", "Pest Control", "Windows", "HVAC", "Security", "Fiber/Telecom", "Water Treatment"];

  return (
    <main className="relative" style={{ backgroundColor: '#F5F3EF' }}>
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-gray-200 shadow-sm" style={{ backgroundColor: 'rgba(245, 243, 239, 0.98)', backdropFilter: 'blur(8px)' }}>
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
              Book Call
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 pt-40 md:pt-48" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 text-gray-900 leading-tight">
            Find the best D2D sales jobs, curated for closers
          </h1>
          
          <ul className="text-lg text-gray-700 space-y-3 mb-10 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Apply to high-earning D2D sales opportunities with a single profile.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Connect directly with hiring managers at growing companies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400">•</span>
              <span>Find Solar, Roofing, Pest Control, HVAC roles and more — only vetted D2D positions.</span>
            </li>
          </ul>
          
          <a
            href="#jobs-list"
            className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors"
          >
            Find a job
          </a>
          
          <p className="mt-6 text-gray-600">
            Already work with Webb Jobs? <a href="/talent-pool" className="underline hover:text-gray-900">Browse privately</a>
          </p>
        </div>
      </section>

      {/* Jobs List */}
      <section id="jobs-list" className="py-16 px-4" style={{ backgroundColor: '#F5F3EF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            D2D Sales jobs added recently
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-gray-300">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  cat === "All" 
                    ? "text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Job Listings */}
          <div className="space-y-6">
            {roles.map((role, idx) => (
              <div key={idx} className="flex items-center gap-6 py-6 border-b border-gray-200 hover:bg-white hover:px-6 hover:mx-[-24px] hover:rounded-lg transition-all">
                {/* Company Logo Placeholder */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xl">
                  {role.company.charAt(0)}
                </div>
                
                {/* Job Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {role.company}
                    </h3>
                    <span className="text-sm text-gray-500">
                      (about {role.postedDays} {role.postedDays === 1 ? 'day' : 'days'} ago)
                    </span>
                  </div>
                  <a 
                    href="/#contact" 
                    className="text-lg font-medium hover:underline"
                    style={{ color: '#3B82F6' }}
                  >
                    {role.title}
                  </a>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-600">
                    <span>{role.type}</span>
                    <span>•</span>
                    <span>{role.category}</span>
                    <span>•</span>
                    <span>{role.salary}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                
                {/* Apply Button */}
                <a
                  href="/#contact"
                  className="flex-shrink-0 px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded transition-colors"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-gray-200" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Get personalized job recommendations
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Don't see your ideal role? Join our talent pool and we'll match you with opportunities that fit your experience.
          </p>
          <Link
            href="/talent-pool"
            className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors"
          >
            Join Talent Pool
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200" style={{ backgroundColor: '#ECE9E3' }}>
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/income-disclaimer" className="hover:text-gray-900 transition-colors">Income Disclaimer</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
