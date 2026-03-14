export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  // General
  { category: 'General', question: 'What video production services does Lotus Reel offer?', answer: 'Lotus Reel offers comprehensive video production services including corporate video, commercials & advertising, social media content, event videography, animation & motion graphics, drone & aerial video, and video editing & post-production. We handle everything from concept to final delivery.' },
  { category: 'General', question: 'Where is Lotus Reel based?', answer: 'Lotus Reel is based in Bangkok, Thailand. We serve clients throughout Bangkok and greater Thailand, including Phuket, Chiang Mai, Pattaya, and other locations. We also work with international clients on productions in Southeast Asia.' },
  { category: 'General', question: 'Do you work with international clients?', answer: 'Yes, a significant portion of our clients are international companies, agencies, and organizations operating in Thailand or Southeast Asia. Our team is fully bilingual (English/Thai) and experienced with international production standards and workflows.' },
  { category: 'General', question: 'What industries do you serve?', answer: 'We work across many industries including technology, hospitality & tourism, real estate, healthcare, F&B, finance, education, manufacturing, and NGOs. Our diverse experience helps us understand different audiences and objectives.' },
  { category: 'General', question: 'Can you handle large-scale productions?', answer: 'Yes. While we excel at lean, efficient productions, we also have the network and experience to scale up for large commercial shoots, multi-day productions, and projects requiring large crews, multiple locations, and specialized equipment.' },

  // Pricing
  { category: 'Pricing', question: 'How much does video production cost in Bangkok?', answer: 'Video production in Bangkok starts from approximately 18,000 THB (~$500) for basic video editing, and ranges up to 500,000+ THB ($14,000+) for large-scale commercial productions. Most of our projects fall in the 50,000–200,000 THB ($1,400–$5,700) range. We provide transparent pricing and free quotes for every project.' },
  { category: 'Pricing', question: 'Is video production cheaper in Bangkok than other cities?', answer: 'Yes. Bangkok offers significant cost advantages compared to cities like Singapore, Hong Kong, Sydney, or Western cities — typically 40–60% lower for equivalent quality. This is due to lower crew rates, studio costs, and living expenses, while maintaining access to world-class talent and equipment.' },
  { category: 'Pricing', question: 'Do you require a deposit?', answer: 'Yes, we typically require a 50% deposit to begin production, with the remaining 50% due upon delivery of the final video. For larger projects, we can arrange milestone-based payment schedules.' },
  { category: 'Pricing', question: 'Are there any hidden costs?', answer: 'No. We believe in full transparency. Our quotes include all production costs — crew, equipment, editing, music licensing, and deliverables. Any potential additional costs (e.g., talent fees, special permits, travel) are clearly outlined upfront.' },
  { category: 'Pricing', question: 'Do you offer packages or retainer rates?', answer: 'Yes, we offer monthly retainer packages for clients needing regular content production (e.g., ongoing social media video). Retainer clients receive priority scheduling and discounted rates — typically 15–25% below our standard project pricing.' },

  // Process
  { category: 'Process', question: 'What is the typical production timeline?', answer: 'Timelines vary by project type: simple social media videos can be done in 1–2 weeks, corporate videos take 3–6 weeks, and commercials take 4–10 weeks. We always discuss timeline during our initial consultation and set clear milestones.' },
  { category: 'Process', question: 'How does the production process work?', answer: 'Our process follows five stages: (1) Discovery & brief, (2) Concept development & scripting, (3) Pre-production planning, (4) Production/filming, and (5) Post-production & delivery. You receive updates and approval checkpoints at each stage.' },
  { category: 'Process', question: 'How many revisions do I get?', answer: 'All our packages include two rounds of revisions. We find this is sufficient for most projects when combined with our thorough brief and approval process. Additional revisions can be arranged at an hourly rate.' },
  { category: 'Process', question: 'What if I only need editing, not filming?', answer: 'Absolutely — we offer standalone editing and post-production services. Many clients come to us with footage they\'ve already shot and need professionally edited, color graded, and polished.' },
  { category: 'Process', question: 'Can you work with our existing brand guidelines?', answer: 'Yes, and we encourage it. We work within your brand guidelines for colors, fonts, tone of voice, and visual style. If you don\'t have established guidelines, we can help develop them as part of the creative process.' },

  // Technical
  { category: 'Technical', question: 'What cameras and equipment do you use?', answer: 'We use cinema-grade equipment including Sony FX6, Canon C70, and RED Komodo cameras. Our kit includes professional lighting (Aputure, ARRI), wireless audio systems (Sennheiser, DJI), gimbals (DJI RS4 Pro), drones (DJI Inspire 3), and a full grip and electric package.' },
  { category: 'Technical', question: 'What resolution do you film in?', answer: 'We film in 4K as standard, with 6K and 8K options available for projects requiring higher resolution. All footage is captured in professional codecs (ProRes, RAW) for maximum quality in post-production.' },
  { category: 'Technical', question: 'What editing software do you use?', answer: 'Our editing suite includes Adobe Premiere Pro, DaVinci Resolve (for color grading), Adobe After Effects (for motion graphics and VFX), and Cinema 4D (for 3D animation). We also use professional audio tools for sound design and mixing.' },
  { category: 'Technical', question: 'What file formats do you deliver?', answer: 'We deliver in whatever formats you need — MP4 (H.264/H.265), ProRes, MOV, and platform-specific formats. We also provide multiple versions optimized for YouTube, social media, broadcast, and web embedding.' },
  { category: 'Technical', question: 'Can you deliver raw footage?', answer: 'Yes, raw footage delivery can be included in your package or added for an additional fee. We deliver via cloud storage or physical hard drive, depending on project size.' },

  // Location & Logistics
  { category: 'Location & Logistics', question: 'Can you film anywhere in Thailand?', answer: 'Yes, we film throughout Thailand — Bangkok, Phuket, Chiang Mai, Koh Samui, Pattaya, Hua Hin, and beyond. We handle all logistics including travel, accommodation, and local permits. We also undertake productions in neighboring countries across Southeast Asia.' },
  { category: 'Location & Logistics', question: 'Do you help with filming permits in Bangkok?', answer: 'Yes, we handle all necessary filming permits. This includes permits for public locations, government properties, temples, and drone operations. Our local knowledge ensures smooth, hassle-free productions.' },
  { category: 'Location & Logistics', question: 'What about filming during rainy season?', answer: 'Bangkok\'s rainy season (June–October) features afternoon showers that typically clear within 1–2 hours. We schedule outdoor shoots for morning hours and have contingency plans for weather delays. Indoor shoots are unaffected.' },
  { category: 'Location & Logistics', question: 'Do you provide studio space?', answer: 'We work with several partner studios in Bangkok for shoots requiring controlled environments — green screen, product photography, interviews, and more. Studio rental costs are quoted separately based on your project needs.' },
];
