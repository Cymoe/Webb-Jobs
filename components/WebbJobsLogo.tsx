import Link from 'next/link';

export default function WebbJobsLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Icon - Door logo (cracked open door) */}
      <div className="relative w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified door - cracked open */}
          <path
            d="M 8 3 L 12 4 L 12 20 L 8 21 Z"
            fill="white"
          />
          {/* Door edge */}
          <line
            x1="8"
            y1="3"
            x2="8"
            y2="21"
            stroke="#FCA5A5"
            strokeWidth="0.8"
          />
          {/* Door handle */}
          <circle
            cx="9"
            cy="12"
            r="0.8"
            fill="#FCA5A5"
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
