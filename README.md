# Webb Jobs - D2D Recruiting Engine Landing Page

A modern, conversion-optimized landing page for a door-to-door sales recruiting engine. Built with Next.js, TypeScript, and Tailwind CSS, featuring a multi-step qualification quiz and Google Sheets integration.

## Features

- **Modern Design System**: Dark theme with professional blue and action yellow accents
- **Multi-Step Qualification Quiz**: Interactive form flow that qualifies leads through:
  - Industry selection (Roofing, Solar, Windows, Pest Control, etc.)
  - Revenue bracket
  - Current sales strategy assessment
  - Company details and role
- **Responsive Design**: Mobile-first approach that works on all devices
- **Google Sheets Integration**: Automatic lead submission to spreadsheets
- **SEO Optimized**: Built with Next.js for excellent search engine performance
- **Fast Performance**: Optimized for speed with modern web technologies

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (primary), JetBrains Mono (data/numbers)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Cymoe/Webb-Jobs.git
cd Webb-Jobs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Google Sheets webhook (see below)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Google Sheets Integration Setup

### Option 1: Using Sheet.best (Recommended - Easy Setup)

1. Go to [Sheet.best](https://sheet.best/)
2. Sign up for a free account
3. Create a new Google Sheet with these column headers:
   - `Timestamp`
   - `Industry`
   - `Revenue`
   - `Sales Strategy`
   - `Company Name`
   - `Role`
4. Connect your sheet to Sheet.best
5. Copy the webhook URL provided
6. Add it to your `.env.local` file:
```
GOOGLE_SHEETS_WEBHOOK_URL=https://sheet.best/api/sheets/YOUR_SHEET_ID
```

### Option 2: Using Google Apps Script (Free)

1. Create a new Google Sheet
2. Go to Extensions → Apps Script
3. Replace the default code with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.industry,
    data.revenue,
    data.salesStrategy,
    data.companyName,
    data.role
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as Web App (Execute as: Me, Access: Anyone)
5. Copy the deployment URL
6. Add it to your `.env.local` file

### Option 3: Airtable

1. Create an Airtable base with appropriate fields
2. Get your API key and base ID from Airtable
3. Use a service like Zapier or Make.com to create a webhook
4. Add the webhook URL to `.env.local`

## Design System

The landing page uses a psychology-driven design system optimized for B2B sales:

### Colors
- **Professional Blue** (#3B82F6): Interactive elements, trust
- **Action Yellow** (#EAB308): Primary CTAs, completion
- **Success Green** (#10B981): Progress indicators
- **Carbon Black** (#111827): Base background
- **Slate Gray** (#1F2937): Cards, secondary backgrounds

### Typography
- **Headers**: Inter, 700 weight
- **Body Text**: Inter, 400 weight
- **Data/Numbers**: JetBrains Mono, 500 weight

### Components
- **Border Radius**: 8px (modern, rounded aesthetic)
- **Button Height**: 40px
- **Transitions**: 150ms ease for interactions

## Project Structure

```
/workspace
├── app/
│   ├── api/
│   │   └── submit/
│   │       └── route.ts       # Form submission API endpoint
│   ├── globals.css            # Global styles and design system
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Main landing page
├── components/
│   └── QualificationQuiz.tsx  # Multi-step form component
├── public/                    # Static assets
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json               # Dependencies
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variable: `GOOGLE_SHEETS_WEBHOOK_URL`
5. Deploy

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add environment variable in Netlify dashboard
7. Deploy

### Self-Hosted

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Customization

### Update Brand Name
Edit `app/layout.tsx` and `app/page.tsx` to change "Webb Jobs" to your brand name.

### Modify Quiz Questions
Edit `components/QualificationQuiz.tsx` to customize:
- Industries list
- Revenue ranges
- Sales strategy options
- Form fields

### Change Colors
Edit `tailwind.config.ts` to update the color scheme.

### Add Video
Replace the placeholder in `app/page.tsx` with your actual video embed code (YouTube, Vimeo, or self-hosted).

## Lead Management

All form submissions include:
- Timestamp
- Industry
- Revenue bracket
- Current sales strategy
- Company name
- Role

You can:
- View leads in your Google Sheet in real-time
- Set up email notifications when new leads come in
- Connect to your CRM via Zapier or Make.com
- Export data for analysis

## Performance Optimization

The landing page is optimized for:
- **Fast Loading**: Minimal JavaScript, optimized assets
- **SEO**: Server-side rendering with Next.js
- **Mobile Performance**: Responsive design, touch-optimized
- **Conversion**: Psychology-driven UI patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and confidential.

## Support

For issues or questions, please open an issue in the GitHub repository or contact the development team.
