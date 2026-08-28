// ─────────────────────────────────────────────
// Car Marketplace Types
// ─────────────────────────────────────────────

export interface Car {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceDecimal: string;
  rating: number;
  imageUrl: string;
  category: CarCategory;
  deals?: number;
  seats?: number;
  hotspots?: Hotspot[];
}

export type CarCategory = 'Crossover' | 'Sedan' | 'Wagon' | 'Electric' | 'SUV';

export interface Hotspot {
  label: string;
  position: 'top-right' | 'bottom-left';
}

export interface AnalyticsCard {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  trend?: string;
  trendLabel?: string;
  chartData?: number[];
  accentWidth?: string;
}

// ─────────────────────────────────────────────
// Navigation Types
// ─────────────────────────────────────────────

export interface NavItem {
  label: string;
  path: string;
}

// ─────────────────────────────────────────────
// Legacy Community Types (kept for reference)
// ─────────────────────────────────────────────

export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: Author;
  upvotes: number;
  comments: number;
  content: string;
}

export interface Guide {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  author: Author;
  rating: number;
  saves: number;
  content: string;
}

export interface Event {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
}
