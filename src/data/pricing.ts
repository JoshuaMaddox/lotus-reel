export interface PricingTier {
  service: string;
  slug: string;
  startingPrice: number;
  startingPriceTHB: number;
  currency: string;
  description: string;
  includes: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    service: 'Social Media Video',
    slug: 'social-media-video',
    startingPrice: 700,
    startingPriceTHB: 25000,
    currency: 'USD',
    description: 'Short-form videos for TikTok, Instagram Reels, YouTube Shorts.',
    includes: ['1 short-form video (up to 60s)', 'Subtitles included', 'Platform-optimized format', '1 revision round'],
  },
  {
    service: 'Video Editing',
    slug: 'video-editing-post-production',
    startingPrice: 500,
    startingPriceTHB: 18000,
    currency: 'USD',
    description: 'Professional editing and post-production for your existing footage.',
    includes: ['Up to 3-minute edit', 'Color correction', 'Basic sound design', '2 revision rounds'],
  },
  {
    service: 'Drone & Aerial',
    slug: 'drone-aerial-video',
    startingPrice: 800,
    startingPriceTHB: 28000,
    currency: 'USD',
    description: 'Licensed drone operators, 4K/6K aerial footage, permits handled.',
    includes: ['Half-day aerial shoot', 'CAAT-licensed operator', 'Edited highlight reel', 'Raw footage included'],
  },
  {
    service: 'Animation & Motion Graphics',
    slug: 'animation-motion-graphics',
    startingPrice: 1000,
    startingPriceTHB: 35000,
    currency: 'USD',
    description: 'Custom 2D animation, motion graphics, and explainer videos.',
    includes: ['Up to 30-second animation', 'Custom illustration', 'Voice-over included', '2 revision rounds'],
  },
  {
    service: 'Event Videography',
    slug: 'event-videography',
    startingPrice: 1200,
    startingPriceTHB: 42000,
    currency: 'USD',
    description: 'Professional event coverage with highlight reels and full recordings.',
    includes: ['Half-day coverage (4 hrs)', '2-camera setup', '60-90s highlight reel', 'Raw footage available'],
  },
  {
    service: 'Corporate Video',
    slug: 'corporate-video-production',
    startingPrice: 1500,
    startingPriceTHB: 52000,
    currency: 'USD',
    description: 'Company profiles, training videos, internal communications.',
    includes: ['Up to 2-minute video', 'Scriptwriting included', 'Professional crew & equipment', '2 revision rounds'],
  },
  {
    service: 'Commercial & Advertising',
    slug: 'commercial-advertising-video',
    startingPrice: 3000,
    startingPriceTHB: 105000,
    currency: 'USD',
    description: 'TV commercials, digital ads, and brand campaign videos.',
    includes: ['Up to 30-second commercial', 'Concept & storyboard', 'Professional talent casting', '2 revision rounds'],
  },
];

export const pricingFactors = [
  { factor: 'Video Length', description: 'Longer videos require more filming time, editing, and post-production work.' },
  { factor: 'Number of Locations', description: 'Each additional location adds travel time, setup, and potential permit costs.' },
  { factor: 'Crew Size', description: 'Larger productions need more camera operators, lighting technicians, and assistants.' },
  { factor: 'Talent & Actors', description: 'Professional actors, models, and voice-over artists add to the budget.' },
  { factor: 'Post-Production Complexity', description: 'Motion graphics, VFX, 3D animation, and extensive color grading increase costs.' },
  { factor: 'Timeline & Rush Fees', description: 'Expedited timelines may incur rush fees (typically 25-50% surcharge).' },
  { factor: 'Licensing & Music', description: 'Licensed music, stock footage, and commercial usage rights affect pricing.' },
  { factor: 'Deliverables', description: 'Multiple versions (social cuts, different languages, various formats) add editing time.' },
];
