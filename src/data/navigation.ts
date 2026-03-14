export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Corporate Video', href: '/services/corporate-video-production/' },
      { label: 'Commercial & Ads', href: '/services/commercial-advertising-video/' },
      { label: 'Social Media Video', href: '/services/social-media-video/' },
      { label: 'Event Videography', href: '/services/event-videography/' },
      { label: 'Animation & Motion Graphics', href: '/services/animation-motion-graphics/' },
      { label: 'Drone & Aerial', href: '/services/drone-aerial-video/' },
      { label: 'Video Editing', href: '/services/video-editing-post-production/' },
    ],
  },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav = {
  services: [
    { label: 'Corporate Video', href: '/services/corporate-video-production/' },
    { label: 'Commercial & Ads', href: '/services/commercial-advertising-video/' },
    { label: 'Social Media Video', href: '/services/social-media-video/' },
    { label: 'Event Videography', href: '/services/event-videography/' },
    { label: 'Animation & Motion Graphics', href: '/services/animation-motion-graphics/' },
    { label: 'Drone & Aerial', href: '/services/drone-aerial-video/' },
    { label: 'Video Editing', href: '/services/video-editing-post-production/' },
  ],
  company: [
    { label: 'About Us', href: '/about/' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  resources: [
    { label: 'Pricing Guide', href: '/pricing/' },
    { label: 'Video Production Process', href: '/blog/video-production-process-brief-to-final/' },
    { label: 'Bangkok Filming Locations', href: '/blog/bangkok-filming-locations/' },
    { label: 'Video Production Cost Guide', href: '/blog/video-production-cost-bangkok-2026/' },
  ],
};
