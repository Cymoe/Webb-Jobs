import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#F5F3EF' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 243, 239, 0.98)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-semibold tracking-tight" style={{ color: '#DC2626', fontFamily: 'Inter, sans-serif' }}>
              Webb Jobs
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-12">Last Updated: September 22, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using Webb Jobs' website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Webb Jobs provides specialized recruitment services for door-to-door (D2D) sales positions. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Job listing and advertising</li>
              <li>Candidate screening and qualification</li>
              <li>Matching candidates with employers</li>
              <li>Interview coordination and scheduling</li>
              <li>Recruiting consulting services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. User Obligations</h2>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">For Job Seekers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information</li>
              <li>Update your information as necessary</li>
              <li>Not misrepresent your qualifications or experience</li>
              <li>Conduct yourself professionally in all interactions</li>
              <li>Not use our services for any unlawful purpose</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">For Employers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate job descriptions and requirements</li>
              <li>Comply with all applicable employment laws</li>
              <li>Not discriminate in hiring practices</li>
              <li>Pay agreed-upon fees in a timely manner</li>
              <li>Treat candidates professionally and respectfully</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. No Guarantee of Employment or Results</h2>
            <p className="text-gray-700 leading-relaxed">
              Webb Jobs does not guarantee that job seekers will receive job offers or that employers will find suitable candidates. While we strive to provide quality matching and recruitment services, hiring decisions are ultimately at the discretion of the employer, and job placement depends on multiple factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Fees and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Employer clients agree to pay the fees as outlined in their service agreement. Fees are typically structured as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>90-day engagement fees</li>
              <li>Advertising and marketing costs</li>
              <li>Any additional agreed-upon services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Job seekers are not charged fees for our placement services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, graphics, logos, and software, is the property of Webb Jobs and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. User-Generated Content</h2>
            <p className="text-gray-700 leading-relaxed">
              By submitting information, resumes, or other content to Webb Jobs, you grant us a non-exclusive license to use, reproduce, and share that content for the purpose of providing our recruitment services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Webb Jobs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, or lost data, arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Webb Jobs from any claims, losses, damages, liabilities, and expenses arising from your use of our services, your violation of these terms, or your violation of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms of Service or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Webb Jobs</strong><br />
              Email: legal@webbjobs.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <Link href="/" className="text-gray-900 hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200" style={{ backgroundColor: '#ECE9E3' }}>
        <div className="max-w-container mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Webb Jobs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
