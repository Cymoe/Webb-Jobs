import Link from 'next/link';
import ContactDropdown from '@/components/ContactDropdown';
import WebbJobsLogo from '@/components/WebbJobsLogo';

export default function TalentPoolPage() {
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
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
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
      <section className="relative py-20 md:py-32 px-4 pt-32 md:pt-40" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 text-sm font-medium mb-6 rounded-full" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#DC2626' }}></span>
              JOIN OUR TALENT NETWORK
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Join Our Talent Pool
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Submit your information and we'll match you with high-earning D2D sales opportunities that fit your experience and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
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
              className="w-full px-8 py-4 font-medium rounded transition-colors hover:opacity-90"
              style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
            >
              Submit Application
            </button>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              We'll review your information and reach out within 2 business days if there's a match.
            </p>
          </form>
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
