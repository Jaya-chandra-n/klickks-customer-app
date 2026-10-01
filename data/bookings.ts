export type Booking = {
  id: string;
  bookingId: string;
  photographerId: string;
  photographerName: string;
  photographerAvatar: string;
  serviceName: string;
  servicePrice: number;
  travelFee: number;
  platformFee: number;
  totalAmount: number;
  date: string;
  time: string;
  location: string;
  eventName: string;
  eventNotes: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  paymentStatus: 'paid' | 'pending' | 'refunded';
  paymentMethod: string;
  createdAt: string;
};

export const initialBookings: Booking[] = [
  // UPCOMING BOOKINGS
  {
    id: 'b1',
    bookingId: 'KX-892014',
    photographerId: 'p1',
    photographerName: 'Arjun Photography',
    photographerAvatar: 'https://picsum.photos/seed/photographer1/200/200',
    serviceName: 'Grand Wedding Coverage',
    servicePrice: 25000,
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 25500,
    date: '2026-10-18',
    time: '10:00 AM',
    location: 'Palace Grounds, Bangalore',
    eventName: 'Rahul & Priya Wedding',
    eventNotes: 'Traditional rituals + candid wedding photography.',
    status: 'upcoming',
    paymentStatus: 'paid',
    paymentMethod: 'UPI / GPay',
    createdAt: '2026-09-20T10:00:00Z'
  },
  {
    id: 'b2',
    bookingId: 'KX-892015',
    photographerId: 'p3',
    photographerName: 'Pixel Stories by Rahul',
    photographerAvatar: 'https://picsum.photos/seed/photographer3/200/200',
    serviceName: 'Sunset Pre-Wedding Session',
    servicePrice: 18000,
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 18500,
    date: '2026-10-28',
    time: '04:30 PM',
    location: 'Marine Drive, Mumbai',
    eventName: 'Vikram & Neha Pre-Wedding',
    eventNotes: 'Cinematic drone shots and golden hour couple portraits.',
    status: 'upcoming',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    createdAt: '2026-09-25T14:30:00Z'
  },
  {
    id: 'b3',
    bookingId: 'KX-892016',
    photographerId: 'p2',
    photographerName: 'Meera Studios',
    photographerAvatar: 'https://picsum.photos/seed/photographer2/200/200',
    serviceName: 'Birthday & Event Photography',
    servicePrice: 12000,
    travelFee: 500,
    platformFee: 500,
    totalAmount: 12000,
    date: '2026-11-05',
    time: '06:00 PM',
    location: 'Jubilee Hills Club, Hyderabad',
    eventName: 'Ananya 1st Birthday Shoot',
    eventNotes: 'Decor shoot, cake cutting, and family group portraits.',
    status: 'upcoming',
    paymentStatus: 'paid',
    paymentMethod: 'UPI / PhonePe',
    createdAt: '2026-09-28T09:15:00Z'
  },

  // COMPLETED BOOKINGS
  {
    id: 'b4',
    bookingId: 'KX-781920',
    photographerId: 'p7',
    photographerName: 'Aditya Photography',
    photographerAvatar: 'https://picsum.photos/seed/photographer7/200/200',
    serviceName: 'Corporate Gala & Award Night',
    servicePrice: 15000,
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 15500,
    date: '2026-09-22',
    time: '05:00 PM',
    location: 'JW Marriott, Senapati Bapat Road, Pune',
    eventName: 'Tech Summit Award Ceremony',
    eventNotes: 'Stage award captures and keynote speech photography.',
    status: 'completed',
    paymentStatus: 'paid',
    paymentMethod: 'Net Banking',
    createdAt: '2026-09-01T11:00:00Z'
  },
  {
    id: 'b5',
    bookingId: 'KX-781921',
    photographerId: 'p10',
    photographerName: 'Ananya Photo Studio',
    photographerAvatar: 'https://picsum.photos/seed/photographer10/200/200',
    serviceName: 'Fashion & Model Lookbook',
    servicePrice: 14000,
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 14500,
    date: '2026-09-12',
    time: '11:30 AM',
    location: 'Bandra West Studio, Mumbai',
    eventName: 'Autumn Collection Fashion Shoot',
    eventNotes: 'High fashion studio lighting and editorial portraits.',
    status: 'completed',
    paymentStatus: 'paid',
    paymentMethod: 'UPI / GPay',
    createdAt: '2026-08-20T16:45:00Z'
  },
  {
    id: 'b6',
    bookingId: 'KX-781922',
    photographerId: 'p4',
    photographerName: 'Priya Captures',
    photographerAvatar: 'https://picsum.photos/seed/photographer4/200/200',
    serviceName: 'Maternity Outdoor Session',
    servicePrice: 8000,
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 8500,
    date: '2026-08-28',
    time: '08:00 AM',
    location: 'ECR Beach Resort, Chennai',
    eventName: 'Sneha Maternity Portrait',
    eventNotes: 'Beach sunrise shoot with pastel flowy gowns.',
    status: 'completed',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    createdAt: '2026-08-10T12:00:00Z'
  },

  // CANCELLED BOOKINGS
  {
    id: 'b7',
    bookingId: 'KX-654321',
    photographerId: 'p5',
    photographerName: 'Vikram Lens Art',
    photographerAvatar: 'https://picsum.photos/seed/photographer5/200/200',
    serviceName: 'Destination Pre-Wedding Shoot',
    servicePrice: 45000,
    travelFee: 5000,
    platformFee: 1000,
    totalAmount: 50000,
    date: '2026-09-05',
    time: '07:30 AM',
    location: 'Baga Beach & Fort Aguada, Goa',
    eventName: 'Goa Destination Shoot',
    eventNotes: 'Cancelled due to monsoon weather warning. Full refund issued.',
    status: 'cancelled',
    paymentStatus: 'refunded',
    paymentMethod: 'Net Banking',
    createdAt: '2026-08-01T09:15:00Z'
  },
  {
    id: 'b8',
    bookingId: 'KX-654322',
    photographerId: 'p8',
    photographerName: 'Roshni Moments',
    photographerAvatar: 'https://picsum.photos/seed/photographer8/200/200',
    serviceName: 'Baby Shoot & Naming Ceremony',
    servicePrice: 6000,
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 6500,
    date: '2026-08-15',
    time: '10:00 AM',
    location: 'Banjara Hills, Hyderabad',
    eventName: 'Baby Vihaan Naming Ceremony',
    eventNotes: 'Rescheduled by family.',
    status: 'cancelled',
    paymentStatus: 'refunded',
    paymentMethod: 'UPI / Paytm',
    createdAt: '2026-07-25T15:20:00Z'
  },
  {
    id: 'b9',
    bookingId: 'KX-654323',
    photographerId: 'p6',
    photographerName: 'Nisha Creative Studio',
    photographerAvatar: 'https://picsum.photos/seed/photographer6/200/200',
    serviceName: 'Outdoor Portrait & Headshots',
    servicePrice: 7000,
    travelFee: 1000,
    platformFee: 500,
    totalAmount: 7500,
    date: '2026-08-02',
    time: '04:00 PM',
    location: 'Lodhi Garden, Delhi',
    eventName: 'Personal Headshot Session',
    eventNotes: 'Cancelled by customer.',
    status: 'cancelled',
    paymentStatus: 'refunded',
    paymentMethod: 'UPI / GPay',
    createdAt: '2026-07-15T18:00:00Z'
  }
];
