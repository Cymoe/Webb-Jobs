import Link from 'next/link';

export default function PrivacyPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-12">Last Updated: September 22, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you interact with Webb Jobs, we may collect the following information:
            </p>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Personal Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Location (city, state)</li>
              <li>Employment history and D2D sales experience</li>
              <li>Resume and professional background</li>
              <li>Income goals and salary expectations</li>
              <li>Industry preferences</li>
              <li>Information submitted through contact forms and talent pool applications</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Automatically Collected Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring URLs and navigation patterns</li>
              <li>Operating system and screen resolution</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Cookie-Based Identification</h3>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party visitor identification services that identify anonymous website visitors using cookie-based tracking and match them to publicly available contact information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Third-Party Tools & Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party tools that may collect or process your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Vercel:</strong> Website hosting and analytics</li>
              <li><strong>Google Sheets:</strong> Form submission data storage</li>
              <li><strong>Meta Pixel (Facebook):</strong> Conversion tracking and ad optimization</li>
              <li><strong>Google Analytics:</strong> Website traffic analysis</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Each of these services has its own privacy policy governing how they handle your data. We encourage you to review their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Review and respond to your application or inquiry</li>
              <li>Contact you about job opportunities (via phone, text, or email)</li>
              <li>Match you with appropriate D2D sales positions</li>
              <li>Deliver our recruiting services and fulfill your engagement</li>
              <li>Improve our advertising targeting and website experience</li>
              <li>Send relevant communications about our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Employers:</strong> We share candidate profiles with potential D2D sales employers for job matching purposes</li>
              <li><strong>Advertising Platforms:</strong> We share conversion data (e.g., application submissions, call bookings) with Meta (Facebook/Instagram) and Google for ad optimization and retargeting</li>
              <li><strong>Service Providers:</strong> Third-party tools listed above that help us operate our business</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or legal process</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>We do not sell your personal information to third parties.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>SMS / Text Messaging Data:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the text message services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Cookies & Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to improve your experience, analyze traffic, and serve targeted advertisements. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and track conversions (Meta Pixel)</li>
              <li><strong>Analytics Cookies:</strong> Used to understand how visitors interact with our website</li>
              <li><strong>Identification Cookies:</strong> Used by visitor identification services to match anonymous visitors with publicly available data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can manage cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. SMS / Text Messaging</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will never sell, rent, loan, trade, lease, or otherwise transfer for profit any phone numbers or personal information collected through SMS opt-in to any third party. You may opt out at any time by replying <strong>STOP</strong>. For help, reply <strong>HELP</strong> or contact support@webbjobs.com.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. SMS Opt-In & Messaging Details</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you submit an application on our website or provide your phone number, you may be asked to provide consent to receive SMS text messages from Webb Jobs. Here is how our SMS program works:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>How you opt in:</strong> By checking the SMS consent checkboxes on our opt-in form and submitting the form, you are opting in to receive text messages from us.</li>
              <li><strong>Types of messages:</strong> You may receive application status updates, interview reminders, job opportunity notifications, and (if you consent separately) marketing messages about new positions and career tips.</li>
              <li><strong>Message frequency:</strong> Message frequency varies. You may receive several messages per week during active job searches, and periodic messages thereafter.</li>
              <li><strong>Opting out:</strong> You can opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation and no further messages will be sent. Reply <strong>HELP</strong> for assistance.</li>
              <li><strong>No purchase required:</strong> Consent to receive SMS messages is not a condition of using our services.</li>
              <li><strong>Rates:</strong> Message and data rates may apply depending on your mobile carrier and plan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We take the security of your personal data seriously and implement reasonable administrative, technical, and physical safeguards to protect it, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Encryption:</strong> Data transmitted between your browser and our servers is encrypted using SSL/TLS protocols.</li>
              <li><strong>Access Controls:</strong> Access to personal data is restricted to authorized personnel who need it to perform their job functions.</li>
              <li><strong>Secure Storage:</strong> Personal data is stored on secure, access-controlled servers provided by our hosting and CRM providers.</li>
              <li><strong>Third-Party Security:</strong> We use reputable third-party services (Vercel, Google Sheets) that maintain their own security certifications and practices.</li>
              <li><strong>Regular Review:</strong> We periodically review our data collection and storage practices to ensure they remain appropriate.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              While no method of transmission or storage is 100% secure, we strive to use commercially acceptable means to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Deletion:</strong> Request that we delete your personal data</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Correction:</strong> Request corrections to inaccurate personal data</li>
              <li><strong>Do Not Sell (California residents):</strong> Under the CCPA, you may request that we do not sell your personal information</li>
              <li><strong>GDPR Rights (EU residents):</strong> You have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, email us at privacy@webbjobs.com. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal data for as long as necessary to fulfill the purposes described in this policy, or as required by law. If you request deletion, we will remove your data within 30 days, except where we are legally required to retain it.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children. If we learn that we have collected data from a minor, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your data rights, contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Webb Jobs</strong><br />
              Email: privacy@webbjobs.com<br />
              Support: support@webbjobs.com
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
