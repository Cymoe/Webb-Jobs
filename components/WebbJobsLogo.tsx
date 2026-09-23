import Link from 'next/link';

export default function WebbJobsLogo() {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      {/* Door logo - opened door (no background box) */}
      <svg
        className="w-8 h-10"
        viewBox="0 0 40 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Door - opened wider for visibility */}
        <path
          d="M 6 6 L 25 14 L 25 66 L 6 74 Z"
          fill="#DC2626"
        />
        
        {/* Door edge */}
        <line
          x1="6"
          y1="6"
          x2="6"
          y2="74"
          stroke="#991B1B"
          strokeWidth="1.5"
        />
        
        {/* Door handle */}
        <circle
          cx="10"
          cy="40"
          r="1.8"
          fill="#991B1B"
        />
      </svg>
      
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
