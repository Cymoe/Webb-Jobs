import Link from 'next/link';

export default function WebbJobsLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Icon - Door/W symbol */}
      <div className="relative w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 20V4H9L12 8L15 4H20V20H15V12L12 16L9 12V20H4Z"
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
