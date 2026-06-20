/**
 * Expected image paths under /public/images/
 * Add files with these names (webp, jpg, jpeg, or png) — site picks them up automatically.
 */
export type ImageSlot = {
  id: string;
  label: string;
  alt: string;
  paths: string[]; // first existing extension wins at build time
};

const ext = ['webp', 'jpg', 'jpeg', 'png'] as const;

function variants(base: string): string[] {
  return ext.map((e) => `${base}.${e}`);
}

export const imageSlots = {
  hero: {
    id: 'hero',
    label: 'Hero',
    alt: 'Studio Grill entertainment hub and garden café, Visakhapatnam',
    paths: variants('/images/hero'),
  },
  theaters: {
    room: {
      id: 'theaters-room',
      label: 'Private theater',
      alt: 'Private 4K theater room at Studio Grill with premium seating',
      paths: variants('/images/theaters/room'),
    },
    gaming: {
      id: 'theaters-gaming',
      label: 'Gaming',
      alt: 'Xbox gaming session in a private theater at Studio Grill',
      paths: variants('/images/theaters/gaming'),
    },
  },
  sports: {
    cricket: {
      id: 'sports-cricket',
      label: 'Box cricket',
      alt: 'Roof-covered box cricket turf at Studio Grill Vizag',
      paths: variants('/images/sports/cricket'),
    },
    pickleball: {
      id: 'sports-pickleball',
      label: 'Pickleball',
      alt: 'Pickleball courts at Studio Grill',
      paths: variants('/images/sports/pickleball'),
    },
    volleyball: {
      id: 'sports-volleyball',
      label: 'Beach volleyball',
      alt: 'Beach volleyball sand court at Studio Grill',
      paths: variants('/images/sports/volleyball'),
    },
  },
  dining: {
    garden: {
      id: 'dining-garden',
      label: 'Garden café',
      alt: 'Outdoor garden dining at Studio Grill Sagar Nagar',
      paths: variants('/images/dining/garden'),
    },
    food: {
      id: 'dining-food',
      label: 'Grill menu',
      alt: 'Indo-American grill dishes at Studio Grill',
      paths: variants('/images/dining/food'),
    },
  },
  packages: {
    celebration: {
      id: 'packages-celebration',
      label: 'Celebration',
      alt: 'Birthday celebration package setup at Studio Grill',
      paths: variants('/images/packages/celebration'),
    },
  },
  visit: {
    exterior: {
      id: 'visit-exterior',
      label: 'Venue exterior',
      alt: 'Studio Grill location near D Cabanna, Sagar Nagar, Visakhapatnam',
      paths: variants('/images/visit/exterior'),
    },
  },
  instagramGrid: [1, 2, 3, 4, 5, 6].map((n) => ({
    id: `instagram-${n}`,
    label: `Instagram ${n}`,
    alt: `Studio Grill on Instagram — photo ${n}`,
    paths: variants(`/images/instagram/${String(n).padStart(2, '0')}`),
  })),
} as const;

/** Flat list for the check script */
export const allSlots: ImageSlot[] = [
  imageSlots.hero,
  imageSlots.theaters.room,
  imageSlots.theaters.gaming,
  imageSlots.sports.cricket,
  imageSlots.sports.pickleball,
  imageSlots.sports.volleyball,
  imageSlots.dining.garden,
  imageSlots.dining.food,
  imageSlots.packages.celebration,
  imageSlots.visit.exterior,
  ...imageSlots.instagramGrid,
];
