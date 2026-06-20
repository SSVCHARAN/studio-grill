/**
 * Zexa Events — site configuration
 * Update phone, WhatsApp, menu prices, and app URLs when client confirms.
 */

export const site = {
  name: 'Zexa Events',
  shortName: 'Zexa',
  tagline: 'Premium entertainment hub, events venue & Indo-American garden café',
  city: 'Visakhapatnam',
  description:
    'Private 4K theaters, sports arena, Indo-American dining, and celebration packages by Zexa Events in Sagar Nagar, Vizag.',
  url: 'https://zexaevents.in',
  instagram: 'https://www.instagram.com/zexa.hq/',
  instagramHandle: '@zexa.hq',
  email: 'zexabuilds@gmail.com',
  hours: '10:30 AM – 10:30 PM daily',
  hoursShort: '10:30 AM – 10:30 PM',
  costForTwo: '₹800',
  costForTwoNote: 'approximate, varies by order',
} as const;

export const contact = {
  /** Primary — update with verified business number */
  phone: '+917337036740',
  phoneDisplay: '+91 7337036740',
  /** Backup numbers from public listings — verify with client */
  phoneAlt: ['+919666637481'],
  whatsapp: '917337036740',
} as const;

export const address = {
  line1: 'Opposite D Cabanna',
  line2: 'Sagar Nagar (Yendada)',
  city: 'Visakhapatnam',
  state: 'Andhra Pradesh',
  pin: '530045',
  full: 'Opposite D Cabanna, Sagar Nagar (Yendada), Visakhapatnam, Andhra Pradesh 530045',
  landmark: 'Opposite D Cabanna',
  mapsQuery: 'Zexa+Events+Sagar+Nagar+Visakhapatnam',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.0!2d83.35!3d17.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU3R1ZGlvIEdyaWxs!5e0!3m2!1sen!2sin!4v1',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Zexa+Events+Opposite+D+Cabanna+Sagar+Nagar+Visakhapatnam',
} as const;

/** App store links — set when verified; hidden in UI when empty */
export const appLinks = {
  ios: '' as string,
  android: '' as string,
  /** Deep link scheme if app supports it */
  deepLinkTheater: '',
  deepLinkFood: '',
} as const;

export const trust = {
  noFoodColoring: true,
  noMsg: true,
  trustLine: 'No food coloring · No MSG (tasting salt)',
} as const;

export const theaters = {
  roomCount: 4,
  capacityMin: 4,
  capacityMax: 40,
  rooms: [
    { id: 'room-1', name: 'Zexa Room 1', capacity: '4–12', bestFor: 'Couples & small groups' },
    { id: 'room-2', name: 'Zexa Room 2', capacity: '8–20', bestFor: 'Friends & family' },
    { id: 'room-3', name: 'Zexa Room 3', capacity: '12–30', bestFor: 'Birthdays & gatherings' },
    { id: 'room-4', name: 'Zexa Room 4', capacity: '20–40', bestFor: 'Corporate & large parties' },
  ],
  tech: ['4K laser projection', 'Dolby Atmos Q-SYS audio'],
  comfort: ['Premium custom comforters', 'Rockers', 'Dim ambient lighting'],
  content: ['Netflix, Aha & major OTT platforms', 'Xbox gaming sessions'],
  ottLogos: ['Netflix', 'Prime Video', 'Disney+ Hotstar', 'Aha', 'Sony LIV'],
} as const;

export const sports = {
  items: [
    {
      id: 'box-cricket',
      title: 'Box Cricket',
      description:
        "Vizag's largest roof-covered box cricket turf — play rain or shine with full coverage.",
      details: ['Roof-covered turf', 'Equipment on request', 'Ideal for teams & leagues'],
    },
    {
      id: 'pickleball',
      title: 'Pickleball',
      description: 'Two dedicated pickleball courts for casual and competitive play.',
      details: ['2 courts', 'Beginner-friendly', 'Book by slot'],
    },
    {
      id: 'volleyball',
      title: 'Beach Volleyball',
      description: 'Open sand volleyball zone for groups and weekend matches.',
      details: ['Sand court', 'Outdoor atmosphere', 'Great for events'],
    },
  ],
} as const;

export const menu = {
  sections: [
    {
      id: 'kebabs',
      title: 'Starters & Kebabs',
      items: [
        { name: 'Angara Murgh Kebab', note: 'Signature smoky chicken' },
        { name: 'Cheesy Malai Chicken Kebab', note: 'Creamy, mild spice' },
        { name: 'Honey Chilli Garlic Paneer Strips', note: 'Vegetarian favorite' },
      ],
    },
    {
      id: 'pasta',
      title: 'Pasta & Italian',
      items: [
        { name: 'Ravioli Cottage Cheese Pasta', note: 'Stuffed ravioli, rich sauce' },
        { name: 'Chicken Lasagna', note: 'Layered, hearty bake' },
      ],
    },
    {
      id: 'pizza',
      title: 'Pizzas & Comfort',
      items: [{ name: 'BBQ Paneer Pizza', note: 'Smoky paneer, house BBQ' }],
    },
    {
      id: 'indian',
      title: 'Indian Mains',
      items: [
        { name: 'Andhra Chicken Kheema Pulao', note: 'Regional spice-forward' },
        { name: 'Biryani', note: 'Classic house preparation' },
      ],
    },
  ],
  orderPaths: [
    { title: 'Dine-in', description: 'Indoor seating and large outdoor garden café.' },
    { title: 'In-theater dining', description: 'Full menu served to your private screening room.' },
    { title: 'Takeaway', description: 'Call or WhatsApp ahead for pickup.' },
  ],
} as const;

export const packages = {
  tiers: [
    {
      id: 'pearl',
      name: 'Pearl',
      from: 1999,
      includes: ['Private theater access', 'Basic décor', 'Food options'],
    },
    {
      id: 'silver',
      name: 'Silver',
      from: 3499,
      includes: ['Enhanced décor', 'Theater + celebration setup', 'Expanded food choices'],
    },
    {
      id: 'gold',
      name: 'Gold',
      from: 5999,
      includes: ['Premium theater experience', 'Full decoration package', 'Curated food & beverages'],
    },
    {
      id: 'movie-time',
      name: 'Movie Time',
      from: 1600,
      includes: ['Focused private screening slot', 'Ideal for movie nights'],
    },
  ],
  addons: [
    { id: 'fog', name: 'Fog Entry', priceNote: 'Priced on inquiry' },
    { id: 'bubble', name: 'Bubble Entry', priceNote: 'Priced on inquiry' },
    { id: 'cold-fire', name: 'Cold Fire pyrotechnics', priceNote: 'Priced on inquiry' },
  ],
  combos: [
    { title: 'Theater + Dinner', description: 'Book a screening and pre-order your favorite grill menu.' },
    { title: 'Turf + BBQ', description: 'Sports slot followed by outdoor garden dining.' },
    { title: 'Gold + Fog Entry', description: 'Premium celebration with dramatic entrance add-on.' },
  ],
} as const;

export const whyScg = [
  { title: '4K + Dolby Atmos', text: 'Laser projection with Q-SYS surround in every private room.' },
  { title: 'In-theater dining', text: 'Full restaurant menu delivered to your seat while you watch.' },
  { title: 'Rain-proof cricket', text: "Vizag's largest roof-covered box cricket turf." },
  { title: 'Clean kitchen policy', text: 'No food coloring and no MSG (tasting salt).' },
] as const;

export const experiences = [
  {
    href: '#theaters',
    title: 'Private Theaters & Gaming',
    description: '4 rooms, 4K laser, OTT streaming & Xbox.',
    accent: 'theater',
  },
  {
    href: '#sports',
    title: 'Sports Arena',
    description: 'Box cricket, pickleball & beach volleyball.',
    accent: 'sports',
  },
  {
    href: '#dining',
    title: 'Dining & Menu',
    description: 'Indo-American grill, garden café & indoor seating.',
    accent: 'dining',
  },
  {
    href: '#packages',
    title: 'Celebrations',
    description: 'Pearl, Silver, Gold & Movie Time packages.',
    accent: 'packages',
  },
] as const;

export const faq = [
  {
    category: 'Theaters',
    items: [
      {
        q: 'Can we bring outside food?',
        a: 'Outside food is generally not permitted; enjoy the full in-theater menu from our kitchen.',
      },
      {
        q: 'How long is a typical slot?',
        a: 'Standard slots are shared when you book via WhatsApp or the app. Extended slots may be available on request.',
      },
      {
        q: 'Do we use our own OTT login?',
        a: 'You can stream from major OTT platforms — confirm account/login details when booking.',
      },
      {
        q: 'Is Xbox gaming available?',
        a: 'Yes, Xbox sessions can be booked. Mention gaming when you message us on WhatsApp.',
      },
    ],
  },
  {
    category: 'Sports',
    items: [
      {
        q: 'Is box cricket playable in rain?',
        a: 'Yes — our roof-covered turf is designed for rain-or-shine play.',
      },
      {
        q: 'How do I book a turf or court?',
        a: 'WhatsApp us with sport, date, time, and number of players for the fastest confirmation.',
      },
    ],
  },
  {
    category: 'Dining',
    items: [
      {
        q: 'What is the approximate cost for two?',
        a: 'Most guests spend around ₹800 for two, depending on menu choices.',
      },
      {
        q: 'Can I pre-order food for my screening?',
        a: 'Absolutely — pre-order via WhatsApp or order live to your theater room.',
      },
    ],
  },
  {
    category: 'Packages',
    items: [
      {
        q: 'What is included in Pearl, Silver, and Gold?',
        a: 'Each tier includes theater access, décor, and food options at different levels. Full line-item lists are confirmed at booking.',
      },
      {
        q: 'Can I add Fog Entry or Cold Fire?',
        a: 'Yes — Fog Entry, Bubble Entry, and Cold Fire pyrotechnics are optional add-ons.',
      },
    ],
  },
  {
    category: 'Payments & refunds',
    items: [
      {
        q: 'What is the cancellation policy?',
        a: 'Cancellation and refund terms depend on package and slot type. Confirm policy when you pay your deposit.',
      },
      {
        q: 'Is there a minimum spend for private rooms?',
        a: 'Some slots or packages may include minimum F&B requirements — we will confirm before payment.',
      },
    ],
  },
  {
    category: 'Visit',
    items: [
      {
        q: 'What are your timings?',
        a: 'We are open 10:30 AM to 10:30 PM daily.',
      },
      {
        q: 'Where are you located?',
        a: 'Opposite D Cabanna, Sagar Nagar (Yendada), Visakhapatnam.',
      },
    ],
  },
] as const;

export const instagramHighlights = [
  { label: 'Theaters', href: site.instagram },
  { label: 'Sports', href: site.instagram },
  { label: 'Food', href: site.instagram },
  { label: 'Packages', href: site.instagram },
  { label: 'Visit', href: '/visit' },
] as const;

/** WhatsApp deep links with pre-filled messages */
export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contact.whatsapp}?text=${encoded}`;
}

export const waMessages = {
  book: `Hi Zexa Events! I'd like to book an experience on [date] for [number] guests. Please share available slots.`,
  theater: `Hi! I'd like to book a private theater on [date] for [guests] guests. OTT/Gaming: [Netflix/Xbox/etc].`,
  sports: `Hi! I'd like to book a sports slot — Sport: [box cricket/pickleball/volleyball], Date: [date], Time: [time], Players: [count].`,
  food: `Hi! I'd like to place a food order — [dine-in / takeaway / in-theater]. Items: [list]. Time: [time].`,
  event: `Hi! I'm planning a celebration — Package: [Pearl/Silver/Gold/Movie Time], Date: [date], Guests: [count], Add-ons: [Fog/Bubble/Cold Fire if any].`,
  corporate: `Hi! I'm interested in a corporate or bulk booking at Zexa Events. Event type: [details], Date: [date], Guests: [count].`,
  general: `Hi Zexa Events! I have a question about [topic].`,
} as const;

export const policies = {
  privacy: `Zexa Events ("we"), owned and operated by Charan and Pavan, respects your privacy. This site may use analytics to improve performance. When you contact us via WhatsApp, phone, or forms, we use your information only to respond to enquiries and process bookings. We do not sell personal data.`,
  terms: `Bookings for private theaters, sports slots, and celebration packages operated by Zexa Events (owned by Charan and Pavan) are subject to availability and confirmed payment terms shared at booking. Deposits may be non-refundable depending on package type. No-show policies apply. Outside food is not permitted in theater rooms unless agreed in writing.`,
  refund: `Refund eligibility depends on cancellation timing and package tier. Contact us on WhatsApp or phone with your booking reference for refund requests. Processing times vary by payment method.`,
} as const;
