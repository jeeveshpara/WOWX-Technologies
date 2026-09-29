export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  features: string[];
  benefits: string[];
  timeline: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Business" | "Educational" | "E-Commerce" | "Portfolio" | "Landing Pages" | "Web Apps";
  description: string;
  clientDescription?: string;
  image: string;
  imageUrl?: string;
  tags: string[];
  beforeImage?: string; // Showcase visual change
  afterImage?: string;
  liveUrl?: string;
  timeline: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  bestValue?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceRequired: string;
  message: string;
  date: string;
  status: "new" | "contacted" | "completed";
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}
