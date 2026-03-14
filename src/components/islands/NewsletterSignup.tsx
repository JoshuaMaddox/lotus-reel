import { useState } from 'preact/hooks';

interface Props {
  variant?: 'inline' | 'card';
}

export default function NewsletterSignup({ variant = 'inline' }: Props) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Beehiiv integration — replace with actual Beehiiv publication ID and API
      const BEEHIIV_URL = import.meta.env.PUBLIC_BEEHIIV_URL || '';
      if (BEEHIIV_URL) {
        await fetch(BEEHIIV_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      }
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div class={variant === 'card' ? 'p-6 bg-primary-50 rounded-xl border border-primary-200 text-center' : 'text-center'}>
        <p class="font-semibold text-primary-700">You're subscribed! Check your inbox.</p>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div class="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
        <h3 class="text-lg font-bold text-neutral-900 mb-1">Lotus Reel Insider</h3>
        <p class="text-sm text-neutral-600 mb-4">Weekly video production insights. No spam.</p>
        <form onSubmit={handleSubmit} class="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            class="w-full px-4 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            class="w-full py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Subscribing...' : 'Subscribe'}
          </button>
          {error && <p class="text-red-600 text-xs">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        class="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        required
      />
      <button
        type="submit"
        disabled={submitting}
        class="px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {submitting ? 'Subscribing...' : 'Subscribe'}
      </button>
      {error && <p class="text-red-600 text-xs">{error}</p>}
    </form>
  );
}
