export interface Service {
  id: string;
  name: string;
  category: string;
  gender: 'men' | 'women' | 'unisex';
  price: number;
  duration: number; // in minutes
  image: string;
  description: string;
  benefits?: string[];
  steps?: string[];
  stylistRecommendation?: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string; // e.g., "8 Years"
  specialty: string[];
  rating: number;
  image: string;
  bio: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'shampoo' | 'conditioner' | 'oil' | 'serum' | 'beard' | 'face' | 'tools';
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  brand: string;
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Booking {
  id: string;
  serviceIds: string[];
  stylistId: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes?: string;
  paymentType: 'deposit' | 'full' | 'pay_at_salon';
  amountPaid: number;
  totalAmount: number;
  status: 'confirmed' | 'pending';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  image: string;
  date: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  type: 'transformation' | 'ambiance' | 'event';
  title: string;
  beforeImage?: string;
  afterImage?: string;
  image: string;
  category: 'men' | 'women' | 'hair' | 'skin' | 'beard';
}
