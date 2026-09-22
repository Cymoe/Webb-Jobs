import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log('Form submission received:', {
      companyName: data.companyName,
      industry: data.industry,
      name: data.name,
      email: data.email,
      phone: data.phone,
      timestamp: data.timestamp,
    });

    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!googleSheetsWebhookUrl) {
      return NextResponse.json(
        { 
          message: 'Form submitted successfully (no webhook configured)',
          data 
        },
        { status: 200 }
      );
    }

    const response = await fetch(googleSheetsWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed: ${response.statusText}`);
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
