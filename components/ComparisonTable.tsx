export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
              Feature
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-primary border-b border-gray-200 bg-primary/5">
              Our Recruiting Engine
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">
              Traditional Recruiter
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">
              DIY / In-House
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              Time to First Interview
            </td>
            <td className="px-6 py-4 text-center text-sm bg-primary/5">
              <span className="font-semibold text-primary">5 days</span>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              15-21 days
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              7-15 days
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              Average Time to Hire
            </td>
            <td className="px-6 py-4 text-center text-sm bg-primary/5">
              <span className="font-semibold text-primary">30-45 days</span>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              60-90 days
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              45-90 days
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              D2D Sales Expertise
            </td>
            <td className="px-6 py-4 text-center text-sm bg-primary/5">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-success rounded-full">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div className="mt-1 text-xs text-gray-600">6,000+ D2D reps hired</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              <span className="text-gray-400">Varies</span>
              <div className="mt-1 text-xs text-gray-500">Most are generalists</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              <span className="text-gray-400">Limited</span>
              <div className="mt-1 text-xs text-gray-500">Depends on your network</div>
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              Full Pipeline Management
            </td>
            <td className="px-6 py-4 text-center text-sm bg-primary/5">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-success rounded-full">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div className="mt-1 text-xs text-gray-600">Ads → Screen → Book</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <div className="mt-1 text-xs text-gray-500">Sourcing only</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <div className="mt-1 text-xs text-gray-500">You do everything</div>
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              Your Time Required
            </td>
            <td className="px-6 py-4 text-center text-sm bg-primary/5">
              <span className="font-semibold text-primary">Hours</span>
              <div className="mt-1 text-xs text-gray-600">Final interviews only</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              Days
              <div className="mt-1 text-xs text-gray-500">Screening + interviews</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              Weeks
              <div className="mt-1 text-xs text-gray-500">Post, screen, interview</div>
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              Cost Structure
            </td>
            <td className="px-6 py-4 text-center text-sm bg-primary/5">
              <span className="font-semibold text-primary">$20k / 90 days</span>
              <div className="mt-1 text-xs text-gray-600">+ ad spend</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              20-30% of salary
              <div className="mt-1 text-xs text-gray-500">Often with retainer</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              Salary + benefits
              <div className="mt-1 text-xs text-gray-500">+ opportunity cost</div>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              Risk
            </td>
            <td className="px-6 py-4 text-center text-sm bg-primary/5">
              <span className="font-semibold text-success">Zero</span>
              <div className="mt-1 text-xs text-gray-600">Results-based pricing</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              <span className="text-orange-600">Medium</span>
              <div className="mt-1 text-xs text-gray-500">Retainer at risk</div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-600">
              <span className="text-red-600">High</span>
              <div className="mt-1 text-xs text-gray-500">Time & bad hires</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
