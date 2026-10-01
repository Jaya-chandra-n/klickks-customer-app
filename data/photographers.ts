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
  ['Wedding', 'Pre-Wedding'],
  ['Portrait', 'Fashion'],
  ['Wedding', 'Events'],
  ['Maternity', 'Baby Shoot'],
  ['Wedding', 'Pre-Wedding', 'Portrait'],
  ['Fashion', 'Portrait'],
  ['Events', 'Corporate'],
  ['Birthday', 'Baby Shoot', 'Maternity'],
  ['Wedding', 'Pre-Wedding'],
  ['Events', 'Corporate', 'Fashion'],
  ['Food', 'Corporate'],
  ['Wedding', 'Pre-Wedding', 'Events']
];

export const photographers: Photographer[] = names.map((name, index) => {
  const id = `p${index + 1}`;
  const city = cities[index % cities.length];
  const locList = locationsMap[city] || [city];
  const location = locList[index % locList.length];
  const specs = specialtiesList[index % specialtiesList.length];
  
  const basePrice = 4000 + ((index * 1350) % 22000);
  const hasOffer = index % 3 !== 0; // 2 out of 3 photographers have special offers
  const offer = hasOffer ? offersList[index % offersList.length] : undefined;
  const originalPrice = hasOffer ? Math.round(basePrice * 1.25) : undefined;
  const rating = Number((4.3 + ((index * 7) % 7) * 0.1).toFixed(1));
  const reviewCount = 35 + ((index * 19) % 220);
  const experienceYears = 3 + ((index * 3) % 12);

  const deliverLocs = [city, ...cities.filter(c => c !== city).slice(0, (index % 4) + 1), 'Pan-India Delivery & Shoots'];

  const servicesList: Service[] = specs.map((spec, sIdx) => {
    const srvPrice = Math.round(basePrice * (1 + sIdx * 0.5));
    const srvOrigPrice = hasOffer ? Math.round(srvPrice * 1.2) : undefined;
    return {
      id: `srv_${id}_${sIdx + 1}`,
      name: `${spec} Photography Package`,
      description: `Professional ${spec.toLowerCase()} coverage including high-res edited digital photos, candid shots, color grading, and print-ready deliverables.`,
      duration: sIdx % 2 === 0 ? '4 Hours' : 'Full Day (8 Hours)',
      price: srvPrice,
      originalPrice: srvOrigPrice,
      photographerId: id,
    };
  });

  const portfolio: PortfolioImage[] = Array.from({ length: 8 }).map((_, pIdx) => {
    const category = specs[pIdx % specs.length];
    const seed = (index * 8 + pIdx + 1);
    return {
      id: `port_${id}_${pIdx + 1}`,
      url: `https://picsum.photos/seed/klickks_photo_${seed}/600/800`,
      category,
    };
  });

  return {
    id,
    name,
    avatar: `https://picsum.photos/seed/klickks_avatar_${index + 1}/200/200`,
    coverImage: `https://picsum.photos/seed/klickks_cover_${index + 1}/800/600`,
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
    about: `${name} is a premier studio based in ${city}, specializing in ${specs.join(', ')}. With over ${experienceYears} years of experience in capturing life's grandest celebrations, we pride ourselves on timeless storytelling, vibrant color palettes, and cinematic aesthetics.`,
    experience: `${experienceYears} Years`,
    isAvailableToday: index % 4 === 0,
    isAvailableThisWeek: index % 2 === 0,
    portfolio,
    services: servicesList,
  };
});
