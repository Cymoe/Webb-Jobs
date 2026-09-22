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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the Webb Jobs website and any associated services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our website or engage our services. These terms constitute a legally binding agreement between you and Webb Jobs ("Company," "we," "us," or "our"). Where you engage us under a signed agreement or order form, that agreement governs the specific scope, fees, and terms of your engagement, and these Terms of Service apply to the extent they are not inconsistent with it.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Webb Jobs is a business-to-business recruiting service specializing in door-to-door (D2D) sales positions across multiple industries including Roofing, Solar, Windows, Pest Control, HVAC, Security, and other home services sectors. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Job listing and advertising across multiple channels (Indeed, Meta, and social media)</li>
              <li>Candidate sourcing, screening, and qualification</li>
              <li>Application management and automated follow-up</li>
              <li>Interview scheduling and coordination</li>
              <li>Talent pool management for ongoing recruiting needs</li>
              <li>Recruiting strategy and consulting services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The specific deliverables and scope for your engagement are defined in your signed agreement or order form. We do not guarantee any specific number of hires, candidate quality, or business outcomes. See our Income Disclaimer for more details.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By engaging our services, you agree to pay the fees outlined in your signed agreement or order form, which may include an upfront amount, a monthly retainer, advertising costs, or a combination thereof. All payments are processed securely through our authorized payment processors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your engagement includes recurring or installment payments, you are responsible for all scheduled payments for the committed term (typically 90 days) regardless of whether you continue to actively use the deliverables or recruit candidates.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Job Seekers:</strong> Candidates are not charged fees for our placement services. Employers pay all recruitment fees.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Except where your signed agreement or order form states otherwise, all fees are non-refundable. By engaging our services, you acknowledge that you have reviewed the scope of the engagement, asked any questions you needed to ask during your discovery call, and made an informed decision to proceed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You agree that no refund will be issued for any reason, including but not limited to lack of time to participate, change of mind, failure to implement the recruiting process, market conditions, or candidate availability. We reserve the right to issue refunds at our sole discretion in exceptional circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. No Guarantee of Hires or Results</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Webb Jobs does not guarantee that employers will successfully hire candidates or that job seekers will receive job offers. While we strive to provide qualified candidates and quality matching services, hiring decisions are ultimately at the discretion of the employer, and successful placement depends on multiple factors beyond our control, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Market conditions and candidate availability</li>
              <li>Employer interview and selection processes</li>
              <li>Compensation and offer competitiveness</li>
              <li>Job seeker qualifications and interview performance</li>
              <li>Industry-specific factors and seasonal trends</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Results depend on your own business, market conditions, and numerous factors outside our control. See our Income Disclaimer for additional information about D2D sales income variability.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Client Responsibilities</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">For Employers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As an employer client, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Provide accurate information during the application and onboarding process</li>
              <li>Provide accurate job descriptions, compensation details, and requirements</li>
              <li>Provide timely access, approvals, and information reasonably required for us to deliver the engagement</li>
              <li>Conduct yourself professionally in all communications with our team and candidates</li>
              <li>Comply with all applicable employment laws and regulations in your jurisdiction</li>
              <li>Not discriminate in hiring practices based on protected characteristics</li>
              <li>Take full responsibility for your own hiring decisions, offers, and results</li>
              <li>Respond promptly to qualified candidate interviews and scheduling</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">For Job Seekers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a job seeker, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information about your experience and qualifications</li>
              <li>Update your information as necessary</li>
              <li>Not misrepresent your qualifications, experience, or work history</li>
              <li>Conduct yourself professionally in all interactions with employers and our team</li>
              <li>Attend scheduled interviews or provide advance notice of cancellation</li>
              <li>Not use our services for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. SMS Program & Messaging</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By opting in to receive SMS messages from Webb Jobs, you agree to the following:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Message types:</strong> You may receive text messages related to application status updates, interview scheduling and reminders, job opportunity notifications, recruiting updates, and (with separate consent) marketing messages about new positions and career resources.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Frequency:</strong> Message frequency varies. During active job searches or recruiting campaigns, you may receive multiple messages per week. Marketing messages are sent periodically.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Opt-out:</strong> You can cancel the SMS service at any time. Just text "STOP" to the number you received messages from. After you send the SMS message "STOP", we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Costs:</strong> As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Support:</strong> If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at support@webbjobs.com.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>No condition of purchase:</strong> Consent to receive SMS messages is not required as a condition of using our services or applying for jobs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Carrier liability:</strong> Carriers are not liable for delayed or undelivered messages.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>Privacy:</strong> If you have any questions regarding privacy, please read our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, software, templates, and recruiting processes, is the proprietary intellectual property of Webb Jobs and is protected by copyright and trademark laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Employer clients are granted a limited, non-transferable, non-exclusive license to use recruiting materials provided as part of their engagement for the internal operation of their own business for the duration of their engagement. You may not reproduce, distribute, resell, share, or publicly display these proprietary materials without prior written consent.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By submitting information, resumes, or other content to Webb Jobs, you grant us a non-exclusive license to use, reproduce, and share that content for the purpose of providing our recruitment services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Age Restriction</h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years of age to use this website, apply for services, engage any services, submit a job application, or consent to receive SMS messages from Webb Jobs. By using our services or submitting an application, you represent and warrant that you are at least 18 years old. If we learn that someone under 18 has submitted personal information or engaged our services, we will terminate access and delete the data promptly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Webb Jobs, its owner, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, including but not limited to loss of profits, revenue, data, business opportunities, or failure to hire candidates.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our total liability to employer clients shall not exceed the amount you paid for the engagement. You acknowledge that recruiting results depend on your own business, market conditions, candidate availability, and numerous factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Webb Jobs from any claims, losses, damages, liabilities, and expenses arising from your use of our services, your violation of these terms, your violation of any rights of another party, or your employment practices and hiring decisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend your engagement and access to our services at any time, with or without cause, including for violations of these terms, non-payment, misuse of our materials, or conduct we deem harmful to other users or our business, subject to the terms of your signed agreement or order form. In the event of termination for cause, no refund will be issued.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Virginia, United States of America. Any disputes arising from these terms or your use of our services shall be resolved in the courts located in the State of Virginia.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">15. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms of Service, contact us at support@webbjobs.com.
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
