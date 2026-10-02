export type PortfolioImage = {
  id: string;
  url: string;
  category: 'Wedding' | 'Pre-Wedding' | 'Portrait' | 'Events' | 'Fashion' | 'Maternity' | 'Birthday' | 'Baby Shoot' | 'Corporate' | 'Food';
};

export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  photographerId: string;
};

export type Photographer = {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  location: string;
  city: string;
  specialties: string[];
  startingPrice: number;
  originalPrice?: number;
  offerTag?: string;
  offerDescription?: string;
  deliverLocations?: string[];
  about: string;
  experience: string;
  isAvailableToday: boolean;
  isAvailableThisWeek: boolean;
  portfolio: PortfolioImage[];
  services: Service[];
};

const cities = [
  'Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 
  'Pune', 'Goa', 'Jaipur', 'Kolkata', 'Ahmedabad', 'Kochi', 'Chandigarh'
];

const locationsMap: Record<string, string[]> = {
  'Bangalore': ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Jayanagar'],
  'Mumbai': ['Bandra West', 'Juhu', 'South Mumbai', 'Andheri West', 'Powai'],
  'Delhi NCR': ['South Extension', 'Saket', 'DLF Phase 5 Gurgaon', 'Noida Sector 62', 'Connaught Place'],
  'Hyderabad': ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Madhapur', 'Kondapur'],
  'Chennai': ['Nungambakkam', 'Anna Nagar', 'T. Nagar', 'Adyar', 'Velachery'],
  'Pune': ['Koregaon Park', 'Baner', 'Viman Nagar', 'Kalyani Nagar', 'Aundh'],
  'Goa': ['Panaji', 'Calangute', 'Margao', 'Candolim', 'Anjuna'],
  'Jaipur': ['C-Scheme', 'Vaishali Nagar', 'Malviya Nagar', 'Raja Park'],
  'Kolkata': ['Park Street', 'Salt Lake Sector 5', 'Ballygunge', 'New Town'],
  'Ahmedabad': ['SG Highway', 'Bodakdev', 'Satellite', 'Navrangpura'],
  'Kochi': ['Fort Kochi', 'Marine Drive', 'Kakkanad', 'Edappally'],
  'Chandigarh': ['Sector 17', 'Sector 35', 'Mohali Phase 7', 'Panchkula Sector 5'],
};

const names = [
  'Arjun Photography', 'Meera Studios', 'Pixel Stories by Rahul', 'Priya Captures', 'Vikram Lens Art',
  'Nisha Creative Studio', 'Aditya Photography', 'Roshni Moments', 'Karthik Visuals', 'Ananya Photo Studio',
  'Royal Canvas by Dev', 'Siddharth Weddings', 'Kavya Frame Works', 'Rohan Shutter & Film', 'Pooja Heritage Lens',
  'Golden Hour by Kabir', 'Shreya Event Captures', 'Aarav Candid Stories', 'Divya Fashion Studio', 'Varun Cinematic Lens',
  'Eternal Bliss Photography', 'Sneha Baby Shoots', 'Tanvi Maternity Magic', 'Rajesh Commercial Arts', 'Gautam Food & Product Studio',
  'Signature Wedding Films', 'Ritika Portrait Lab', 'Aakash Skies Drone & Lens', 'Bhakti Moments', 'Tarun Destination Wedding Co.',
  'Starlight Lens Studio', 'Urban Frame Collective', 'Pranav Royal Shutter', 'Isha Vignettes', 'Deepak Fine Art Photography',
  'Sanjana Velvet Stories', 'Yash Cinematic Craft', 'Radhika Glow Studio', 'Manish Photography', 'Neel Essence Lens',
  'Simran Wedding Dreams', 'Alok Event Visuals', 'Kirti Sunshine Frames', 'Harsh Urban Moments', 'Trisha Magic Lens',
  'Venkatesh South Weddings', 'Anish Portrait Studio', 'Bhavna Baby & Kids', 'Chetan Fashion Lens', 'Dhruv Shuttercraft',
  'Esha Glamour Films', 'Farhan Creative Frames', 'Geeta Family Lens', 'Hemant Drone Visuals', 'Inder Vintage Studios',
  'Jash Wedding Chronicle', 'Komal Blossom Photography', 'Lalit Spectrum Lens', 'Monal Heritage Stories', 'Nikhil Apex Captures',
  'Omkara Wedding Films', 'Payal Moments Co.', 'Qureshi Fashion House', 'Rhea Blissful Frames', 'Sahil Shutter Tales',
  'Tushar Epic Lens', 'Urvashi Style Studio', 'Vivek Candid Expressions', 'Waseem Luxury Weddings', 'Zoya Dream Visuals'
];

const offersList = [
  { tag: '20% OFF', desc: 'Flat 20% discount on full-day booking packages this month!' },
  { tag: 'FLAT ₹5,000 OFF', desc: 'Get ₹5,000 instant discount on complete wedding photography & videography.' },
  { tag: 'FREE Pre-Wedding', desc: 'Book a 2-day wedding package and get a complimentary pre-wedding shoot!' },
  { tag: 'FLAT ₹3,000 OFF', desc: 'Flat ₹3,000 off on all portrait & maternity shoot bookings.' },
  { tag: 'FREE Drone Shoot', desc: 'Complimentary 4K aerial drone coverage included with every event package.' },
  { tag: 'Early Bird 15% OFF', desc: 'Book 30 days in advance to unlock 15% early bird discount.' },
  { tag: 'Festive Special', desc: 'Complimentary premium photobook album + 2 mini albums.' },
  { tag: '10% OFF Weekdays', desc: 'Enjoy 10% lower rates for shoots scheduled Monday to Thursday.' },
  { tag: 'FLAT ₹8,000 OFF', desc: 'Mega discount on destination wedding packages anywhere in India.' },
  { tag: 'Complimentary Album', desc: 'Includes a luxurious hardbound leather photobook valued at ₹6,000.' },
  { tag: '15% OFF Maternity', desc: 'Special discount package for maternity and newborn baby shoots.' },
  { tag: 'FLAT ₹2,500 Cashback', desc: 'Get instant cashback credited after completing your shoot review.' }
];

const specialtiesList: Array<Array<'Wedding' | 'Pre-Wedding' | 'Portrait' | 'Events' | 'Fashion' | 'Maternity' | 'Birthday' | 'Baby Shoot' | 'Corporate' | 'Food'>> = [
  ['Wedding', 'Pre-Wedding', 'Events'],
  ['Portrait', 'Fashion', 'Corporate'],
  ['Wedding', 'Events', 'Pre-Wedding'],
  ['Maternity', 'Baby Shoot', 'Birthday'],
  ['Wedding', 'Pre-Wedding', 'Portrait'],
  ['Fashion', 'Portrait', 'Events'],
  ['Events', 'Corporate', 'Food'],
  ['Birthday', 'Baby Shoot', 'Maternity'],
  ['Wedding', 'Pre-Wedding', 'Corporate'],
  ['Events', 'Corporate', 'Fashion'],
  ['Food', 'Corporate', 'Portrait'],
  ['Wedding', 'Pre-Wedding', 'Events', 'Portrait']
];

// Rich Diverse Event & Package Template Pool
const eventTemplates = [
  {
    name: 'Grand Wedding & Reception Coverage',
    desc: 'Full-day traditional + candid wedding coverage, 4K cinematic film, traditional album, and aerial 4K drone shots.',
    duration: 'Full Day (12 Hours)',
    priceMultiplier: 4.5,
  },
  {
    name: 'Destination Pre-Wedding Love Story',
    desc: 'Romantic outdoor location shoot, 3 outfit changes, 60 color-graded photos, and a 2-minute cinematic teaser video.',
    duration: '1 Full Day (8 Hours)',
    priceMultiplier: 2.8,
  },
  {
    name: 'Sangeet & Mehendi Night Celebration',
    desc: 'Vibrant candid & traditional coverage of Sangeet dance performances, Mehendi rituals, and family group portraits.',
    duration: '6 Hours',
    priceMultiplier: 2.2,
  },
  {
    name: 'Candid Haldi & Pool Party Shoot',
    desc: 'High-energy candid photography, slow-motion video reels, and splash-proof action captures.',
    duration: '4 Hours',
    priceMultiplier: 1.6,
  },
  {
    name: 'Creative Outdoor & Studio Portrait Shoot',
    desc: 'Individual high-end retouched portraits, multiple lighting setups, 20 high-res digital deliverables.',
    duration: '2 Hours',
    priceMultiplier: 1.0,
  },
  {
    name: 'High-Fashion & Model Portfolio Shoot',
    desc: 'Editorial fashion portfolio with professional studio lighting, makeup styling guidance, and commercial rights.',
    duration: '4 Hours',
    priceMultiplier: 2.5,
  },
  {
    name: 'Corporate Annual Summit & Gala Night',
    desc: 'Keynote speakers, VIP awards ceremony, networking sessions, and instant high-res photo portal for attendees.',
    duration: '6 Hours',
    priceMultiplier: 3.0,
  },
  {
    name: 'Executive LinkedIn & Headshot Session',
    desc: 'Crisp corporate headshots with custom studio backdrop options and same-day digital delivery.',
    duration: '1.5 Hours',
    priceMultiplier: 0.9,
  },
  {
    name: 'Maternity Glow & Couple Keepsake',
    desc: 'Serene maternity session featuring gown props, romantic lighting, and 25 edited digital photos.',
    duration: '3 Hours',
    priceMultiplier: 1.8,
  },
  {
    name: 'Newborn Baby & Family Memory Session',
    desc: 'Safe, temperature-controlled newborn props, cozy wraps, and heart-melting family portraits.',
    duration: '3 Hours',
    priceMultiplier: 1.7,
  },
  {
    name: 'First Birthday & Cake Smash Extravaganza',
    desc: 'Complete coverage of birthday party decorations, cake cutting, party games, plus a fun cake smash studio session.',
    duration: '4 Hours',
    priceMultiplier: 1.5,
  },
  {
    name: 'Gourmet Food & Culinary Menu Shoot',
    desc: 'Food styling assistance, macro culinary shots, social media reels, and high-res print menu graphics.',
    duration: '4 Hours',
    priceMultiplier: 2.0,
  }
];

export const photographers: Photographer[] = names.map((name, index) => {
  const id = `p${index + 1}`;
  const city = cities[index % cities.length];
  const locList = locationsMap[city] || [city];
  const location = locList[index % locList.length];
  const specs = specialtiesList[index % specialtiesList.length];
  
  const basePrice = 4000 + ((index * 1350) % 22000);
  const hasOffer = index % 3 !== 0;
  const offer = hasOffer ? offersList[index % offersList.length] : undefined;
  const originalPrice = hasOffer ? Math.round(basePrice * 1.25) : undefined;
  const rating = Number((4.3 + ((index * 7) % 7) * 0.1).toFixed(1));
  const reviewCount = 35 + ((index * 19) % 220);
  const experienceYears = 3 + ((index * 3) % 12);

  const deliverLocs = [city, ...cities.filter(c => c !== city).slice(0, (index % 4) + 1), 'Pan-India Delivery & Shoots'];

  // Generate 4 to 6 diverse services for each photographer
  const numServices = 4 + (index % 3); // 4, 5, or 6 services per photographer
  const servicesList: Service[] = Array.from({ length: numServices }).map((_, sIdx) => {
    const tmplIndex = (index + sIdx) % eventTemplates.length;
    const tmpl = eventTemplates[tmplIndex];
    const srvPrice = Math.round(basePrice * tmpl.priceMultiplier);
    const srvOrigPrice = hasOffer ? Math.round(srvPrice * 1.25) : undefined;

    return {
      id: `srv_${id}_${sIdx + 1}`,
      name: tmpl.name,
      description: tmpl.desc,
      duration: tmpl.duration,
      price: srvPrice,
      originalPrice: srvOrigPrice,
      photographerId: id,
    };
  });

  // All categories pool for rich portfolio gallery
  const allCategories: PortfolioImage['category'][] = [
    'Wedding', 'Pre-Wedding', 'Portrait', 'Events', 'Fashion', 
    'Maternity', 'Birthday', 'Baby Shoot', 'Corporate', 'Food'
  ];

  // Generate 18 rich portfolio images across photographer specialties and general categories
  const portfolio: PortfolioImage[] = Array.from({ length: 18 }).map((_, pIdx) => {
    // Alternate between photographer specialties and general categories
    const category = pIdx < specs.length * 3 
      ? specs[pIdx % specs.length]
      : allCategories[(index + pIdx) % allCategories.length];

    const width = pIdx % 3 === 0 ? 400 : 500;
    const height = pIdx % 3 === 0 ? 500 : 400;
    const seed = `klickks_shoot_${id}_${pIdx + 1}_${category.toLowerCase()}`;

    return {
      id: `port_${id}_${pIdx + 1}`,
      url: `https://picsum.photos/seed/${seed}/${width}/${height}`,
      category,
    };
  });

  return {
    id,
    name,
    avatar: `https://picsum.photos/seed/klickks_avatar_${index + 1}/150/150`,
    coverImage: `https://picsum.photos/seed/klickks_cover_${index + 1}/480/320`,
    rating,
    reviewCount,
    location: `${location}, ${city}`,
    city,
    specialties: specs,
    startingPrice: basePrice,
    originalPrice,
    offerTag: offer?.tag,
    offerDescription: offer?.desc,
    deliverLocations: deliverLocs,
    about: `${name} is a top-tier studio based in ${city}, specializing in ${specs.join(', ')}. With over ${experienceYears} years of experience in capturing Indian grand celebrations and milestone events, our team excels at candid storytelling, 4K cinematic reels, and timeless color-graded photography.`,
    experience: `${experienceYears} Years`,
    isAvailableToday: index % 4 === 0,
    isAvailableThisWeek: index % 2 === 0,
    portfolio,
    services: servicesList,
  };
});
