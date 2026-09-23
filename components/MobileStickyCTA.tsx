'use client';

import { useEffect, useState } from 'react';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calendar = document.getElementById('calendar');
    if (!calendar) return;

    const update = () => {
      // Show once the calendar's bottom edge has scrolled above the viewport
      const rect = calendar.getBoundingClientRect();
      setIsVisible(rect.bottom < 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToCalendar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 border-t border-gray-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        backgroundColor: 'rgba(245, 243, 239, 0.98)',
        backdropFilter: 'blur(8px)',
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))',
      }}
      aria-hidden={!isVisible}
    >
      <a
        href="#calendar"
        onClick={scrollToCalendar}
        tabIndex={isVisible ? 0 : -1}
        className="block w-full text-center py-3.5 text-white font-medium rounded shadow-lg"
        style={{ backgroundColor: '#DC2626' }}
      >
        Book Your Free Intro Call
      </a>
    </div>
  );
}
