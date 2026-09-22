import Link from 'next/link';

export default function IncomeDisclaimerPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Income Disclaimer</h1>
        <p className="text-sm text-gray-600 mb-12">Last Updated: September 22, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-gray-900 font-semibold mb-2">
              IMPORTANT NOTICE
            </p>
            <p className="text-gray-700">
              Income figures mentioned on this website are provided for informational purposes only and do not constitute a guarantee of earnings. Individual results will vary based on numerous factors.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. No Income Guarantees</h2>
            <p className="text-gray-700 leading-relaxed">
              Webb Jobs makes no guarantees, representations, or warranties regarding income potential, earnings, or job placement outcomes. Any income figures, salary ranges, or earnings mentioned on our website, in job postings, or in our communications are estimates, examples, or historical data and should not be considered typical or guaranteed results.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Income Variability in D2D Sales</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Door-to-door (D2D) sales positions are typically commission-based or include significant variable compensation components. Your actual income will depend on many factors, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Individual sales performance and closing ability</li>
              <li>Work ethic, dedication, and hours worked</li>
              <li>Market conditions and territory quality</li>
              <li>Product or service being sold</li>
              <li>Seasonal variations and weather conditions</li>
              <li>Economic conditions</li>
              <li>Competition in the market</li>
              <li>Company support, training, and resources</li>
              <li>Prior sales experience and skills</li>
              <li>Local regulations and market dynamics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Employer-Provided Income Information</h2>
            <p className="text-gray-700 leading-relaxed">
              When job postings include salary ranges or income estimates, these figures are provided by the hiring companies, not by Webb Jobs. We do not verify or guarantee the accuracy of employer-provided compensation information. Actual compensation may differ from posted ranges.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Historical and Example Earnings</h2>
            <p className="text-gray-700 leading-relaxed">
              Any references to past earnings, average incomes, or "typical" compensation are based on historical data from previous placements or employer-reported figures. These examples:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Represent individual results that may not be typical</li>
              <li>Cannot predict future results</li>
              <li>May reflect exceptional circumstances or top performers</li>
              <li>Do not account for all variables affecting income</li>
              <li>Should not be relied upon as a guarantee of your potential earnings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Commission-Based Compensation</h2>
            <p className="text-gray-700 leading-relaxed">
              Many D2D sales positions offer commission-based or variable compensation structures. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Income is directly tied to sales performance</li>
              <li>There may be slow periods with little or no income</li>
              <li>Training periods may have reduced or no commission earnings</li>
              <li>Commission structures vary widely by company and product</li>
              <li>Some positions may have draw-against-commission structures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. First-Year Earnings</h2>
            <p className="text-gray-700 leading-relaxed">
              First-year earnings in D2D sales are typically lower than experienced rep earnings due to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Learning curve and skill development period</li>
              <li>Time needed to build pipeline and momentum</li>
              <li>Territory establishment</li>
              <li>Product knowledge acquisition</li>
              <li>Sales technique refinement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Your Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              Before accepting any position:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Verify all compensation details directly with the employer</li>
              <li>Request detailed commission structures in writing</li>
              <li>Understand base salary (if any) vs. commission split</li>
              <li>Ask about average rep earnings and top performer earnings</li>
              <li>Inquire about ramp-up time and typical first-year results</li>
              <li>Understand all costs or fees you may be responsible for</li>
              <li>Review any employment agreement carefully</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Independent Contractor vs. Employee Status</h2>
            <p className="text-gray-700 leading-relaxed">
              Some D2D sales positions are classified as independent contractor roles. Independent contractors:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Are responsible for their own taxes and business expenses</li>
              <li>Do not receive employee benefits</li>
              <li>May have variable income with no guaranteed minimum</li>
              <li>Bear the risk of business expenses exceeding income</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Verify your classification and understand the implications before accepting any position.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Success Requires Effort</h2>
            <p className="text-gray-700 leading-relaxed">
              Success in D2D sales requires significant effort, dedication, persistence, and skill development. High earnings are typically achieved by individuals who:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Work full-time hours consistently</li>
              <li>Continuously improve their sales skills</li>
              <li>Handle rejection and setbacks professionally</li>
              <li>Invest in their professional development</li>
              <li>Maintain high activity levels</li>
              <li>Build strong relationships with customers and teams</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Webb Jobs' Role</h2>
            <p className="text-gray-700 leading-relaxed">
              Webb Jobs is a recruitment agency that connects candidates with employers. We:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Do not employ the sales representatives we place</li>
              <li>Do not control compensation structures or commission rates</li>
              <li>Are not responsible for employer practices or performance</li>
              <li>Do not guarantee job placement or specific income levels</li>
              <li>Cannot guarantee the accuracy of employer-provided information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Questions and Due Diligence</h2>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Research any company before accepting a position</li>
              <li>Ask detailed questions about compensation during interviews</li>
              <li>Request to speak with current sales representatives</li>
              <li>Understand all terms and conditions of employment</li>
              <li>Consult with legal or financial advisors if needed</li>
              <li>Never pay upfront fees for job opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Acknowledgment</h2>
            <p className="text-gray-700 leading-relaxed">
              By using Webb Jobs' services, you acknowledge that you have read and understood this Income Disclaimer and agree that you will not rely on any income claims or estimates as a guarantee of your potential earnings.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Income Disclaimer or need clarification about any income information on our website, please contact us at:
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
