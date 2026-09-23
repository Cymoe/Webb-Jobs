import Link from 'next/link';

export default function WebbJobsLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Door logo - cracked open door (no background box) */}
      <svg
        className="w-8 h-10"
        viewBox="0 0 40 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Door - barely cracked open */}
        <path
          d="M 10 2 L 18 4 L 18 76 L 10 78 Z"
          fill="#DC2626"
        />
        
        {/* Door edge */}
        <line
          x1="10"
          y1="2"
          x2="10"
          y2="78"
          stroke="#991B1B"
          strokeWidth="1.5"
        />
        
        {/* Door handle */}
        <circle
          cx="12"
          cy="40"
          r="1.5"
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
