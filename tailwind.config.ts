import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'professional-blue': '#3B82F6',
        'carbon-black': '#111827',
        'slate-gray': '#1F2937',
        'action-yellow': '#EAB308',
        'link-blue': '#60A5FA',
        'success-green': '#10B981',
        'warning-red': '#EF4444',
        'neutral-gray': '#6B7280',
        'bg-light': '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'md': '8px',
      },
    },
  },
  plugins: [],
};

export default config;
