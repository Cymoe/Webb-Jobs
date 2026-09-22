import Link from 'next/link';

export default function WebbJobsLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Icon - Trending Up for Sales Growth */}
      <div className="relative w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trending up arrow with line chart */}
          <path
            d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
            fill="white"
            fillOpacity="0.95"
          />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex items-baseline gap-0.5">
        <span 
          className="text-2xl font-bold tracking-tight" 
          style={{ 
            color: '#DC2626',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.02em'
          }}
        >
          WEBB
        </span>
        <span 
          className="text-2xl font-bold tracking-tight" 
          style={{ 
            color: '#1F2937',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.02em'
          }}
        >
          JOBS
        </span>
      </div>
    </Link>
  );
}
