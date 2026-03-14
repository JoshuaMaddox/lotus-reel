import { useState } from 'preact/hooks';

const videoTypes = [
  { id: 'social', label: 'Social Media Video', base: 700 },
  { id: 'editing', label: 'Video Editing', base: 500 },
  { id: 'drone', label: 'Drone / Aerial', base: 800 },
  { id: 'animation', label: 'Animation & Motion Graphics', base: 1000 },
  { id: 'event', label: 'Event Videography', base: 1200 },
  { id: 'corporate', label: 'Corporate Video', base: 1500 },
  { id: 'commercial', label: 'Commercial / Advertising', base: 3000 },
];

const durations = [
  { id: '30s', label: 'Up to 30 seconds', multiplier: 1 },
  { id: '60s', label: '30–60 seconds', multiplier: 1.3 },
  { id: '2m', label: '1–2 minutes', multiplier: 1.8 },
  { id: '5m', label: '2–5 minutes', multiplier: 2.5 },
  { id: '10m', label: '5–10 minutes', multiplier: 3.5 },
  { id: '10m+', label: '10+ minutes', multiplier: 5 },
];

const complexities = [
  { id: 'simple', label: 'Simple', description: 'Single location, minimal crew', multiplier: 1 },
  { id: 'standard', label: 'Standard', description: 'Multi-scene, professional crew', multiplier: 1.5 },
  { id: 'premium', label: 'Premium', description: 'Multiple locations, talent, VFX', multiplier: 2.2 },
];

export default function PricingCalculator() {
  const [videoType, setVideoType] = useState('');
  const [duration, setDuration] = useState('');
  const [complexity, setComplexity] = useState('');

  const selectedType = videoTypes.find((v) => v.id === videoType);
  const selectedDuration = durations.find((d) => d.id === duration);
  const selectedComplexity = complexities.find((c) => c.id === complexity);

  const canCalculate = selectedType && selectedDuration && selectedComplexity;

  let estimate = { low: 0, high: 0 };
  if (canCalculate) {
    const base = selectedType.base * selectedDuration.multiplier * selectedComplexity.multiplier;
    estimate = {
      low: Math.round(base * 0.85 / 100) * 100,
      high: Math.round(base * 1.25 / 100) * 100,
    };
  }

  return (
    <div class="bg-white rounded-xl border border-neutral-200 p-6 lg:p-8">
      <h3 class="text-xl font-bold text-neutral-900 mb-6">Estimate Your Project Cost</h3>

      <div class="space-y-5">
        <div>
          <label class="block mb-1.5 text-sm font-medium text-neutral-700">Video Type</label>
          <select
            value={videoType}
            onChange={(e) => setVideoType((e.target as HTMLSelectElement).value)}
            class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          >
            <option value="">Select video type</option>
            {videoTypes.map((v) => (
              <option key={v.id} value={v.id}>{v.label} (from ${v.base.toLocaleString()})</option>
            ))}
          </select>
        </div>

        <div>
          <label class="block mb-1.5 text-sm font-medium text-neutral-700">Video Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration((e.target as HTMLSelectElement).value)}
            class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          >
            <option value="">Select duration</option>
            {durations.map((d) => (
              <option key={d.id} value={d.id}>{d.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label class="block mb-1.5 text-sm font-medium text-neutral-700">Production Complexity</label>
          <div class="grid grid-cols-3 gap-3">
            {complexities.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setComplexity(c.id)}
                class={`p-3 rounded-lg border-2 text-center transition-all ${
                  complexity === c.id
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <span class="block text-sm font-semibold text-neutral-900">{c.label}</span>
                <span class="block text-xs text-neutral-500 mt-1">{c.description}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Estimate Result */}
      {canCalculate && (
        <div class="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200 text-center">
          <p class="text-sm text-primary-700 font-medium mb-1">Estimated Project Cost</p>
          <p class="text-3xl font-bold text-primary-800">
            ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
          </p>
          <p class="text-xs text-primary-700 mt-2">
            Approximately {(estimate.low * 35).toLocaleString()} – {(estimate.high * 35).toLocaleString()} THB
          </p>
          <p class="text-xs text-neutral-500 mt-3">This is a rough estimate. Actual pricing depends on specific project requirements.</p>
        </div>
      )}

      <a
        href="/contact/"
        class="mt-6 block w-full text-center py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
      >
        Get an Exact Quote
      </a>
    </div>
  );
}
