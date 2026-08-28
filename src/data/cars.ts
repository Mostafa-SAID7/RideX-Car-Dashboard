import { Car, NavItem, AnalyticsCard } from '../types';

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', path: '/' },
  { label: 'Buy', path: '/buy' },
  { label: 'Sell', path: '/sell' },
  { label: 'Rent', path: '/rent' },
];

// ─────────────────────────────────────────────
// Featured Car
// ─────────────────────────────────────────────

export const FEATURED_CAR: Car = {
  id: 'tesla-model-y',
  name: 'Tesla Model Y',
  subtitle: 'Fully electric Crossover',
  price: '$71',
  priceDecimal: '999',
  rating: 4.9,
  imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=900',
  category: 'Crossover',
  deals: 71,
  seats: 6,
  hotspots: [
    { label: 'Carbon', position: 'top-right' },
    { label: 'Vibranium', position: 'bottom-left' },
  ],
};

// ─────────────────────────────────────────────
// Top Selling Cars
// ─────────────────────────────────────────────

export const TOP_SELLING_CARS: Car[] = [
  {
    id: 'ford-bmax',
    name: 'Ford B-Max',
    subtitle: 'Compact Crossover',
    price: '$32',
    priceDecimal: '31.112',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400',
    category: 'Crossover',
  },
  {
    id: 'volvo-ex30',
    name: 'Volvo Ex30',
    subtitle: 'Electric SUV',
    price: '$43',
    priceDecimal: '71.223',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400',
    category: 'Electric',
  },
];

// ─────────────────────────────────────────────
// Car Categories
// ─────────────────────────────────────────────

export const CAR_CATEGORIES = ['Crossover', 'Sedan', 'Wagon'] as const;

// ─────────────────────────────────────────────
// Analytics Cards
// ─────────────────────────────────────────────

export const ANALYTICS_CARDS: AnalyticsCard[] = [
  {
    id: 'revenue-insights',
    title: 'Revenue Insights',
    subtitle: '17.09.25',
    value: '$210,317.72',
    accentWidth: '60%',
  },
  {
    id: 'sales-trends',
    title: 'Sales Trends',
    subtitle: '17.09.25-21.09.25',
    value: '+51,31%',
    trend: '+51,31%',
    trendLabel: '/ in a week',
    chartData: [40, 60, 45, 80, 55, 90, 70, 100, 65, 85],
    accentWidth: '55%',
  },
];

export const COMPLETED_PAYMENT = {
  id: 'BN412345',
  value: '$41,369.87',
  accentWidth: '40%',
};
