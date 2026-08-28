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

