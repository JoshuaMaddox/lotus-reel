export interface SchemaOrganization {
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  sameAs: string[];
}

export const organizationData: SchemaOrganization = {
  name: 'Lotus Reel',
  url: 'https://lotusreel.com',
  logo: 'https://lotusreel.com/images/logo.svg',
  description: 'Professional video production company in Bangkok, Thailand. Corporate videos, commercials, social media content, event videography, animation, drone footage, and post-production services.',
  email: 'hello@lotusreel.com',
  phone: '+66-XX-XXX-XXXX',
  address: {
    street: 'Bangkok',
    city: 'Bangkok',
    region: 'Bangkok',
    postalCode: '10110',
    country: 'TH',
  },
  sameAs: [
    'https://www.facebook.com/lotusreel',
    'https://www.instagram.com/lotusreel',
    'https://www.youtube.com/@lotusreel',
    'https://www.linkedin.com/company/lotusreel',
    'https://www.tiktok.com/@lotusreel',
  ],
};

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoProductionCompany',
    name: organizationData.name,
    url: organizationData.url,
    logo: organizationData.logo,
    description: organizationData.description,
    email: organizationData.email,
    telephone: organizationData.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organizationData.address.street,
      addressLocality: organizationData.address.city,
      addressRegion: organizationData.address.region,
      postalCode: organizationData.address.postalCode,
      addressCountry: organizationData.address.country,
    },
    sameAs: organizationData.sameAs,
    priceRange: '$$$',
    areaServed: [
      { '@type': 'City', name: 'Bangkok' },
      { '@type': 'Country', name: 'Thailand' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Video Production Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Video Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial & Advertising Video' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Video' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Videography' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Animation & Motion Graphics' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone & Aerial Video' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Editing & Post-Production' } },
      ],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lotus Reel',
    url: 'https://lotusreel.com',
    description: 'Professional video production company in Bangkok, Thailand.',
    publisher: {
      '@type': 'Organization',
      name: 'Lotus Reel',
      url: 'https://lotusreel.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lotusreel.com/blog/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  startingPrice: number;
  currency: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'Lotus Reel',
      url: 'https://lotusreel.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangkok',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.startingPrice,
        priceCurrency: service.currency,
        minPrice: service.startingPrice,
      },
    },
  };
}

export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  authorBio?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || 'https://lotusreel.com/images/og-default.jpg',
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
      ...(article.authorBio ? { description: article.authorBio } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lotus Reel',
      url: 'https://lotusreel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lotusreel.com/images/logo.svg',
      },
    },
  };
}

export function generateAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Lotus Reel',
    },
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '47',
    reviewCount: '47',
  };
}
