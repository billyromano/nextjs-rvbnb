export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  date: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    location: string;
  };
  rating: number;
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}