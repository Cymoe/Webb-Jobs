import Link from 'next/link';

export default function WebbJobsLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Icon - Bridge-inspired W (Cisco style) */}
      <div className="relative w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
        <svg
          className="w-7 h-5"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bridge towers and arcs forming W */}
          {/* Left tower */}
          <rect x="2" y="4" width="2.5" height="16" fill="white" rx="0.5"/>
          {/* Left-center tower */}
          <rect x="9" y="2" width="2.5" height="18" fill="white" rx="0.5"/>
          {/* Right-center tower */}
          <rect x="20" y="2" width="2.5" height="18" fill="white" rx="0.5"/>
          {/* Right tower */}
          <rect x="27.5" y="4" width="2.5" height="16" fill="white" rx="0.5"/>
          
          {/* Suspension arcs */}
          <path
            d="M4.25 6C4.25 6 6.5 12 9 12M9 12C9 12 6.5 18 4.25 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M11.25 4C11.25 4 16 14 20.75 14M20.75 14C20.75 14 16 20 11.25 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M22.75 4C22.75 4 25 12 27.75 12M27.75 12C27.75 12 25 18 22.75 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
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
