'use client';

import { useState } from 'react';

interface QuizData {
  industry: string;
  revenue: string;
  salesStrategy: string;
  companyName: string;
  role: string;
}

const industries = [
  'Roofing',
  'Replacement Windows',
  'Solar',
  'Fiber / Telecom',
  'Gas / Electric',
  'Pest Control',
  'Insurance',
  'Other',
];

const revenueRanges = [
  'Under $500K',
  '$500K – $1M',
  '$1M – $3M',
  '$3M – $5M',
  '$5M – $10M',
  '$10M – $25M',
  '$25M – $50M',
  '$50M+',
];

const salesStrategies = [
  'Our primary sales strategy',
  'A secondary strategy we run actively',
  'Something we\'re exploring / thinking about',
  'We don\'t knock doors, but run a comparable direct-sales approach',
];

const roles = ['Owner', 'Executive / VP', 'Sales Manager', 'Other'];

export default function QualificationQuiz() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<QuizData>({
    industry: '',
    revenue: '',
    salesStrategy: '',
    companyName: '',
    role: '',
  });

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleSelect = (field: keyof QuizData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsComplete(true);
      } else {
        alert('There was an error submitting your information. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.industry !== '';
      case 1:
        return formData.revenue !== '';
      case 2:
        return formData.salesStrategy !== '';
      case 3:
        return formData.companyName !== '' && formData.role !== '';
      default:
        return false;
    }
  };

  if (isComplete) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="bg-slate-gray rounded-lg p-8 md:p-12 border border-bg-light text-center">
          <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg text-white/60 mb-2">
            We've received your information.
          </p>
          <p className="text-white/60">
            Our team will review your details and reach out within 24 hours to discuss how we can help you build your recruiting engine.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-slate-gray rounded-lg p-6 md:p-12 border border-bg-light">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={handleBack}
              className="text-white/60 hover:text-white transition-colors"
              disabled={step === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-white/60">
              {step + 1} / {totalSteps}
            </span>
            <button
              onClick={() => setStep(0)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="w-full bg-bg-light rounded-full h-1">
            <div
              className="bg-professional-blue h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {step === 0 && (
          <div>
            <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Question {step + 1} of {totalSteps}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What industry are you in?</h2>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <button
                  key={industry}
                  onClick={() => {
                    handleSelect('industry', industry);
                    setTimeout(handleNext, 300);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg border transition-all ${
                    formData.industry === industry
                      ? 'bg-professional-blue/20 border-professional-blue'
                      : 'bg-bg-light border-bg-light hover:border-professional-blue/50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-white/40 mr-4 font-mono">{index + 1}</span>
                    <span className="text-white">{industry}</span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6">Press 1 - {industries.length} to choose</p>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Question {step + 1} of {totalSteps}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What's your company's annual revenue?</h2>
            <div className="space-y-3">
              {revenueRanges.map((range, index) => (
                <button
                  key={range}
                  onClick={() => {
                    handleSelect('revenue', range);
                    setTimeout(handleNext, 300);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg border transition-all ${
                    formData.revenue === range
                      ? 'bg-professional-blue/20 border-professional-blue'
                      : 'bg-bg-light border-bg-light hover:border-professional-blue/50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-white/40 mr-4 font-mono">{index + 1}</span>
                    <span className="text-white">{range}</span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6">Press 1 - {revenueRanges.length} to choose</p>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Question {step + 1} of {totalSteps}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How does door-to-door fit into your <span className="underline">current</span> sales strategy?
            </h2>
            <div className="space-y-3">
              {salesStrategies.map((strategy, index) => (
                <button
                  key={strategy}
                  onClick={() => {
                    handleSelect('salesStrategy', strategy);
                    setTimeout(handleNext, 300);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg border transition-all ${
                    formData.salesStrategy === strategy
                      ? 'bg-professional-blue/20 border-professional-blue'
                      : 'bg-bg-light border-bg-light hover:border-professional-blue/50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-white/40 mr-4 font-mono">{index + 1}</span>
                    <span className="text-white">{strategy}</span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6">Press 1 - {salesStrategies.length} to choose • ← back</p>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Question {step + 1} of {totalSteps}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What company are you with?</h2>
            
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={(e) => handleSelect('companyName', e.target.value)}
                  className="w-full px-6 py-4 bg-bg-light border border-bg-light rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-professional-blue transition-colors"
                />
              </div>

              <div>
                <p className="text-white/80 mb-3">And your role there?</p>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => handleSelect('role', role)}
                      className={`px-6 py-3 rounded-lg border transition-all ${
                        formData.role === role
                          ? 'bg-professional-blue/20 border-professional-blue'
                          : 'bg-transparent border-professional-blue/60 hover:border-professional-blue'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className={`w-full py-4 rounded-lg font-medium text-black transition-all ${
                  canProceed() && !isSubmitting
                    ? 'bg-action-yellow hover:bg-action-yellow/90'
                    : 'bg-neutral-gray/30 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Continue
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-white/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free strategy call</span>
              <span className="mx-2">•</span>
              <span>For door-to-door teams</span>
              <span className="mx-2">•</span>
              <span>6,000+ reps hired</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
