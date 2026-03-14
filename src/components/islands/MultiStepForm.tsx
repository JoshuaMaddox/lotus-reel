import { useState } from 'preact/hooks';

const videoTypes = [
  { id: 'corporate', label: 'Corporate Video', icon: '🏢' },
  { id: 'commercial', label: 'Commercial & Ads', icon: '📺' },
  { id: 'social', label: 'Social Media', icon: '📱' },
  { id: 'event', label: 'Event Coverage', icon: '🎪' },
  { id: 'animation', label: 'Animation', icon: '✨' },
  { id: 'other', label: 'Other', icon: '🎬' },
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  'Not sure yet',
];

const timelines = [
  'ASAP (Rush)',
  '1–2 weeks',
  '2–4 weeks',
  '1–2 months',
  '2–3 months',
  'Flexible / No rush',
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    videoType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    description: '',
    source: '',
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Airtable integration — replace with your actual base/table/key
      const AIRTABLE_URL = import.meta.env.PUBLIC_AIRTABLE_URL || '';

      if (AIRTABLE_URL) {
        await fetch(AIRTABLE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: {
              Name: form.name,
              Email: form.email,
              Phone: form.phone,
              Company: form.company,
              'Video Type': form.videoType,
              'Budget Range': form.budget,
              Timeline: form.timeline,
              Description: form.description,
              Source: form.source || 'Website Form',
              Status: 'New',
            },
          }),
        });
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly at hello@lotusreel.com');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div class="text-center py-12">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
        <p class="text-neutral-600 mb-2">We've received your project details.</p>
        <p class="text-neutral-600">Our team will get back to you within <strong>24 hours</strong> with a free quote.</p>
      </div>
    );
  }

  return (
    <div class="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div class="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} class="flex-1">
            <div class={`h-2 rounded-full transition-colors ${s <= step ? 'bg-primary-700' : 'bg-neutral-200'}`} />
            <p class={`text-xs mt-1 ${s <= step ? 'text-primary-700 font-medium' : 'text-neutral-500'}`}>
              {s === 1 ? 'Project Type' : s === 2 ? 'Budget & Timeline' : 'Your Details'}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Video Type */}
        {step === 1 && (
          <div>
            <h3 class="text-xl font-bold text-neutral-900 mb-2">What type of video do you need?</h3>
            <p class="text-neutral-500 mb-6">Select the option that best describes your project.</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {videoTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => updateField('videoType', type.label)}
                  class={`p-4 rounded-lg border-2 text-center transition-all ${
                    form.videoType === type.label
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span class="text-2xl block mb-2">{type.icon}</span>
                  <span class="text-sm font-medium text-neutral-700">{type.label}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => form.videoType && setStep(2)}
              disabled={!form.videoType}
              class="mt-6 w-full py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Budget & Timeline */}
        {step === 2 && (
          <div>
            <h3 class="text-xl font-bold text-neutral-900 mb-2">Budget and timeline</h3>
            <p class="text-neutral-500 mb-6">Help us understand your project scope.</p>

            <label class="block mb-1 text-sm font-medium text-neutral-700">Budget Range</label>
            <select
              value={form.budget}
              onChange={(e) => updateField('budget', (e.target as HTMLSelectElement).value)}
              class="w-full px-4 py-3 border border-neutral-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="">Select a budget range</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            <label class="block mb-1 text-sm font-medium text-neutral-700">Timeline</label>
            <select
              value={form.timeline}
              onChange={(e) => updateField('timeline', (e.target as HTMLSelectElement).value)}
              class="w-full px-4 py-3 border border-neutral-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="">Select your timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <div class="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                class="px-6 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => form.budget && form.timeline && setStep(3)}
                disabled={!form.budget || !form.timeline}
                class="flex-1 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div>
            <h3 class="text-xl font-bold text-neutral-900 mb-2">Tell us about you</h3>
            <p class="text-neutral-500 mb-6">We'll get back to you within 24 hours.</p>

            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block mb-1 text-sm font-medium text-neutral-700">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onInput={(e) => updateField('name', (e.target as HTMLInputElement).value)}
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label class="block mb-1 text-sm font-medium text-neutral-700">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onInput={(e) => updateField('email', (e.target as HTMLInputElement).value)}
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block mb-1 text-sm font-medium text-neutral-700">Phone / Line ID</label>
                <input
                  type="text"
                  value={form.phone}
                  onInput={(e) => updateField('phone', (e.target as HTMLInputElement).value)}
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label class="block mb-1 text-sm font-medium text-neutral-700">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onInput={(e) => updateField('company', (e.target as HTMLInputElement).value)}
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div class="mb-4">
              <label class="block mb-1 text-sm font-medium text-neutral-700">Project Description</label>
              <textarea
                value={form.description}
                onInput={(e) => updateField('description', (e.target as HTMLTextAreaElement).value)}
                rows={4}
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                placeholder="Tell us about your project goals, target audience, and any specific requirements..."
              />
            </div>

            <div class="mb-6">
              <label class="block mb-1 text-sm font-medium text-neutral-700">How did you find us?</label>
              <select
                value={form.source}
                onChange={(e) => updateField('source', (e.target as HTMLSelectElement).value)}
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                <option value="">Select an option</option>
                <option value="Google Search">Google Search</option>
                <option value="ChatGPT / AI">ChatGPT / AI Assistant</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Directory">Directory / Listing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {error && (
              <p class="text-red-600 text-sm mb-4">{error}</p>
            )}

            <div class="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                class="px-6 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={submitting || !form.name || !form.email}
                class="flex-1 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Get Your Free Quote'}
              </button>
            </div>

            <p class="mt-3 text-xs text-neutral-400 text-center">
              Your information is secure and will never be shared. We'll respond within 24 hours.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
