import { Destination, Experience, Story, Testimonial, PricingTier, FAQItem } from './types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Yosemite National Park',
    location: 'California',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: '2',
    name: 'Grand Canyon',
    location: 'Arizona',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722',
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: '3',
    name: 'Yellowstone',
    location: 'Wyoming',
    image: 'https://images.unsplash.com/photo-1576434795764-7e27901b7af4',
    rating: 4.9,
    reviewCount: 142,
  },
  {
    id: '4',
    name: 'Zion National Park',
    location: 'Utah',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355',
    rating: 4.7,
    reviewCount: 98,
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Mountain Escape',
    description: 'Experience the serenity of mountain camping with stunning views.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    category: 'Mountain',
  },
  {
    id: '2',
    title: 'Beachside Bliss',
    description: 'Park your RV steps away from pristine beaches and ocean views.',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7',
    category: 'Beach',
  },
  {
    id: '3',
    title: 'Desert Adventure',
    description: 'Explore the mystique of desert landscapes under starlit skies.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    category: 'Desert',
  },
];

export const stories: Story[] = [
  {
    id: '1',
    title: 'Cross-Country Family Adventure',
    excerpt: 'How we turned our dream of exploring America into reality.',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7',
    date: '2024-03-15',
  },
  {
    id: '2',
    title: 'Solo Journey Through National Parks',
    excerpt: "Finding solitude and adventure in America's natural wonders",
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a',
    date: '2024-03-10',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    content: 'RVbnb made our family vacation unforgettable. The booking process was seamless, and the RV exceeded our expectations.',
    author: {
      name: 'Emily Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      location: 'Colorado',
    },
    rating: 5,
  },
  {
    id: '2',
    content: 'As first-time RVers, we were nervous, but RVbnb\'s support team was there every step of the way. Highly recommended!',
    author: {
      name: 'David Martinez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      location: 'Texas',
    },
    rating: 5,
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'Weekend Getaway',
    price: 149,
    description: 'Perfect for short trips and weekend adventures',
    features: [
      '3-day minimum rental',
      'Standard insurance coverage',
      '150 miles per day included',
      '24/7 roadside assistance',
    ],
  },
  {
    name: 'Extended Journey',
    price: 129,
    description: 'Ideal for longer trips with better daily rates',
    features: [
      '7-day minimum rental',
      'Premium insurance coverage',
      '200 miles per day included',
      'Campground discounts',
      'Trip planning assistance',
    ],
    popular: true,
  },
  {
    name: 'Monthly Adventure',
    price: 99,
    description: 'Best value for extended travel plans',
    features: [
      '30-day minimum rental',
      'Comprehensive insurance',
      'Unlimited miles',
      'Priority support',
      'Free propane refills',
      'Exclusive campground access',
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'What do I need to rent an RV?',
    answer: 'To rent an RV, you need a valid driver\'s license, be at least 25 years old, and have a clean driving record. We also require a security deposit and proof of insurance.',
  },
  {
    question: 'Is insurance included in the rental price?',
    answer: 'Basic insurance coverage is included in all rentals. Additional coverage options are available for purchase.',
  },
  {
    question: 'How do I pick up and return the RV?',
    answer: 'We offer convenient pickup and drop-off at designated locations. Our team will provide a thorough orientation and walkthrough before your departure.',
  },
  {
    question: 'What if I need assistance during my trip?',
    answer: 'We provide 24/7 roadside assistance for all rentals. Our support team is always available to help with any questions or concerns.',
  },
];