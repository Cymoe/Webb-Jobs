# Quick Setup Guide

## Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Configure Lead Capture (Optional)

**Using Sheet.best (Easiest)**

1. Go to [sheet.best](https://sheet.best/) and sign up
2. Create a Google Sheet with these columns:
   - Timestamp
   - Industry
   - Revenue
   - Sales Strategy
   - Company Name
   - Role
3. Connect your sheet and get the webhook URL
4. Create `.env.local` in the project root:
```env
GOOGLE_SHEETS_WEBHOOK_URL=https://sheet.best/api/sheets/YOUR_SHEET_ID
```

**Using Google Apps Script (Free)**

1. Create a Google Sheet
2. Go to Extensions → Apps Script
3. Paste this code:
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
5. Copy the URL and add to `.env.local`

## Quick Customization

### Change Brand Name
- Edit `app/layout.tsx` (metadata)
- Edit `app/page.tsx` (footer and content)

### Add Your Video
Replace the video placeholder in `app/page.tsx` around line 28 with your embed code:

```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  className="absolute inset-0 w-full h-full"
  allowFullScreen
/>
```

### Modify Quiz Questions
Edit `components/QualificationQuiz.tsx`:
- `industries` array (line 18)
- `revenueRanges` array (line 28)
- `salesStrategies` array (line 39)
- `roles` array (line 47)

### Change Colors
Edit `tailwind.config.ts` to update the color palette.

## Deploy

### Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com)

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or connect your GitHub repo at [netlify.com](https://netlify.com)

### Self-Hosted
```bash
npm run build
npm start
```

## Need Help?

See [README.md](./README.md) for complete documentation.
