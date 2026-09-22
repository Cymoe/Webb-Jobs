import Link from 'next/link';

export default function WebbJobsLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Icon - Bold W lettermark (Y Combinator style) */}
      <div className="relative w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Solid, geometric W */}
          <path
            d="M2 4L4.5 4L6.5 14L9 7L11.5 14L14 7L16.5 14L18.5 4L21 4L18 20L15 20L12 10L9 20L6 20L2 4Z"
            fill="white"
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
