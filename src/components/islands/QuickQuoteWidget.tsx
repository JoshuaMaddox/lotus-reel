import { useState } from 'preact/hooks';

export default function QuickQuoteWidget() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY || '';

      if (!WEB3FORMS_KEY) {
        throw new Error('Form not configured');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quick Quote Request — ${form.name}`,
          cc: 'crsproductions.info@gmail.com',
          from_name: 'Lotus Reel Website',
          name: form.name,
          email: form.email,
          message: form.message,
          source: 'Quick Quote Widget',
        }),
      });

      if (!response.ok) throw new Error('Submit failed');

      setSubmitted(true);
    } catch {
      // Silently handle — user can use contact page as fallback
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div class="fixed bottom-4 right-4 z-40 bg-white rounded-xl shadow-2xl border border-neutral-200 p-6 w-80">
        <p class="text-center font-semibold text-neutral-900">Thank you! We'll be in touch.</p>
        <button onClick={() => { setSubmitted(false); setOpen(false); setForm({ name: '', email: '', message: '' }); }}
          class="mt-3 w-full py-2 text-sm text-neutral-500 hover:text-neutral-700">Close</button>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        class="fixed bottom-4 right-4 z-40 bg-primary-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-primary-800 transition-all hover:scale-105 flex items-center gap-2 font-semibold text-sm"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Quick Quote
      </button>
    );
  }

  return (
    <div class="fixed bottom-4 right-4 z-40 bg-white rounded-xl shadow-2xl border border-neutral-200 w-80">
      <div class="flex items-center justify-between p-4 border-b border-neutral-100">
        <h3 class="font-semibold text-neutral-900">Quick Quote</h3>
        <button onClick={() => setOpen(false)} class="text-neutral-400 hover:text-neutral-600">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit} class="p-4 space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onInput={(e) => setForm((p) => ({ ...p, name: (e.target as HTMLInputElement).value }))}
          class="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onInput={(e) => setForm((p) => ({ ...p, email: (e.target as HTMLInputElement).value }))}
          class="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
        <textarea
          placeholder="Tell us about your project..."
          value={form.message}
          onInput={(e) => setForm((p) => ({ ...p, message: (e.target as HTMLTextAreaElement).value }))}
          rows={3}
          class="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
        />
        <button
          type="submit"
          disabled={submitting}
          class="w-full py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50"
        >
          {submitting ? 'Sending...' : 'Send Quote Request'}
        </button>
      </form>
    </div>
  );
}
