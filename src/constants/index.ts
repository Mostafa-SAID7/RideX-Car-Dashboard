
import React from 'react';
import { Post, Guide, Event, Product } from './types';

// Icons - Re-exported as components for easy use
export const CommentIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>;
export const UpvoteIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" /></svg>;
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>;
export const SaveIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.5 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>;
export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" /></svg>;
export const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
export const WandIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.622-3.385m-5.043.025a15.998 15.998 0 01-3.388-1.621m7.543 8.342a15.998 15.998 0 00-3.388-1.621m-4.5 3.385a15.998 15.998 0 01-1.622-3.385m3.388 1.621a15.998 15.998 0 013.388-1.621m-7.543 8.342a15.998 15.998 0 01-3.388-1.62z" /></svg>;
export const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.05 1.05 0 01-1.485 0l-3.72-3.72a2.112 2.112 0 01-1.98-2.193v-4.286c0-.97.616-1.813 1.5-2.097m6.025 0a48.49 48.49 0 00-6.025 0m6.025 0a48.49 48.49 0 01-6.025 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>;
export const CarIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h14.625c.621 0 1.125.504 1.125 1.125V18.75m-17.25 0v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-1.5-9l-3-6m0 0l-3 6m3-6v6m0 0h6m-6 0H6" /></svg>;
export const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" /></svg>;

// Mock Data
export const MOCK_POSTS: Post[] = [
  {
    id: 'post-1',
    category: 'DIY & Maintenance',
    title: 'Beginner\'s Guide to Changing Your Own Oil',
    excerpt: 'Save money and learn a fundamental skill. Our step-by-step guide makes your first oil change a breeze.',
    author: { name: 'Alex Johnson', avatarUrl: 'https://i.pravatar.cc/40?u=alex' },
    upvotes: 125,
    comments: 42,
    content: "Changing your own oil is a simple process that can save you a lot of money over time. This guide will walk you through it step-by-step. You'll need a wrench, an oil filter wrench, a drain pan, new oil, and a new oil filter. First, warm up the car to get the oil flowing. Then, locate the drain plug..."
  },
  {
    id: 'post-2',
    category: 'Modifications',
    title: 'Top 5 Entry-Level Mods for a Sportier Feel',
    excerpt: 'Want to enhance your driving experience without breaking the bank? Check out these 5 modifications for better handling and sound.',
    author: { name: 'Ben Carter', avatarUrl: 'https://i.pravatar.cc/40?u=ben' },
    upvotes: 230,
    comments: 88,
    content: "If you're looking to add a little excitement to your daily drive, these five modifications are a great place to start. 1. Upgraded Tires. 2. Performance Air Intake. 3. Cat-back Exhaust System. 4. Lowering Springs. 5. Strut Tower Brace."
  },
  {
    id: 'post-3',
    category: 'Troubleshooting',
    title: 'What\'s That Noise? Decoding Common Car Sounds',
    excerpt: 'Squealing, grinding, or clunking? Learn to identify common car noises and what they might mean before you visit the mechanic.',
    author: { name: 'Chloe Davis', avatarUrl: 'https://i.pravatar.cc/40?u=chloe' },
    upvotes: 95,
    comments: 31,
    content: "Cars communicate through sounds. A high-pitched squeal when braking usually means your brake pads are worn. A grinding noise could indicate a more serious brake issue. A clunking sound when going over bumps might point to a problem with your suspension."
  },
];

export const MOCK_GUIDES: Guide[] = [
  {
    id: 'guide-1',
    category: 'Performance Tuning',
    title: 'ECU Flashing vs. Piggyback Tuners: Which is Right for You?',
    imageUrl: 'https://images.unsplash.com/photo-1553523824-16c81a17e434?q=80&w=800&auto=format&fit=crop',
    author: { name: 'Maria Garcia', avatarUrl: 'https://i.pravatar.cc/40?u=maria' },
    rating: 4.8,
    saves: 2.1,
    content: "When it comes to tuning your car's engine, two popular options are ECU flashing and piggyback tuners. An ECU flash directly modifies the software on your car's Engine Control Unit. A piggyback tuner intercepts signals from sensors and modifies them before they reach the ECU. Let's break down the pros and cons of each..."
  },
  {
    id: 'guide-2',
    category: 'Detailing',
    title: 'The Ultimate Guide to a Show-Winning Car Wash',
    imageUrl: 'https://images.unsplash.com/photo-1605152321419-685d1a585721?q=80&w=800&auto=format&fit=crop',
    author: { name: 'Sam Rivera', avatarUrl: 'https://i.pravatar.cc/40?u=sam' },
    rating: 4.9,
    saves: 3.5,
    content: "A proper car wash is more than just soap and water. This guide covers the two-bucket method, choosing the right soaps and mitts, proper drying techniques, and applying a protective wax or sealant for that long-lasting shine."
  },
  {
    id: 'guide-3',
    category: 'Wheels & Tires',
    title: 'How to Choose the Right Wheels for Your Car',
    imageUrl: 'https://images.unsplash.com/photo-1581458212431-78a7f3d29a5a?q=80&w=800&auto=format&fit=crop',
    author: { name: 'David Chen', avatarUrl: 'https://i.pravatar.cc/40?u=david' },
    rating: 4.7,
    saves: 1.8,
    content: "Choosing new wheels involves more than just style. You need to understand bolt patterns, offset, width, and diameter. This guide explains these key measurements to ensure you get a perfect, rub-free fitment."
  },
];

export const MOCK_EVENTS: Event[] = [
    {
      id: 'event-1',
      title: 'AutoHub Monthly Cars & Coffee',
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e6a71d0ca43?q=80&w=800&auto=format&fit=crop',
      date: 'Saturday, October 26, 2024 @ 8:00 AM',
      location: 'Central City Park',
      attendees: 150,
      description: 'Join us for our monthly gathering of car enthusiasts. All makes and models are welcome. Grab a coffee, chat with fellow owners, and see some amazing vehicles.'
    },
    {
      id: 'event-2',
      title: 'Mountain Run 2024',
      imageUrl: 'https://images.unsplash.com/photo-1503736334956-4c898e391668?q=80&w=800&auto=format&fit=crop',
      date: 'Sunday, November 10, 2024 @ 9:00 AM',
      location: 'North Mountain Scenic Route',
      attendees: 45,
      description: 'A spirited drive through the beautiful North Mountain roads. This is a curated driving event for experienced drivers. Limited spots available.'
    }
];

export const MOCK_PRODUCTS: Product[] = [
    { id: 'prod-1', name: 'Premium Microfiber Towel Set (12-pack)', imageUrl: 'https://images.unsplash.com/photo-1607604314185-1d6b0a7f1a3a?q=80&w=800&auto=format&fit=crop', price: 24.99, rating: 4.8, reviewCount: 1204 },
    { id: 'prod-2', name: 'Advanced Ceramic Coating Kit', imageUrl: 'https://images.unsplash.com/photo-1628330594389-c43936998643?q=80&w=800&auto=format&fit=crop', price: 79.99, rating: 4.7, reviewCount: 876 },
    { id: 'prod-3', name: 'High-Performance Engine Oil (5 Quart)', imageUrl: 'https://images.unsplash.com/photo-1624455806659-86c3170a41f6?q=80&w=800&auto=format&fit=crop', price: 45.50, rating: 4.9, reviewCount: 2311 },
    { id: 'prod-4', name: 'Digital Tire Pressure Gauge', imageUrl: 'https://images.unsplash.com/photo-1616422285437-d2c61a1564d6?q=80&w=800&auto=format&fit=crop', price: 15.95, rating: 4.6, reviewCount: 3109 },
];
