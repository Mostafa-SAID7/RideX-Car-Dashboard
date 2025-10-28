
import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_POSTS, MOCK_GUIDES, MOCK_EVENTS, MOCK_PRODUCTS } from '../constants';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import AiRecommendations from '../components/AiRecommendations';

export const HomePage: React.FC = () => (
  <div className="space-y-12">
    <section className="text-center py-12">
      <h1 className="text-5xl font-bold font-heading text-white">Welcome to AutoHub</h1>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Your one-stop community for everything automotive. Ask questions, read guides, and connect with fellow enthusiasts.</p>
    </section>
    
    <section>
        <h2 className="text-3xl font-bold font-heading text-white mb-6">Featured Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_POSTS.slice(0, 3).map(post => <Card key={post.id} item={post} type="post" />)}
        </div>
    </section>

    <section>
        <h2 className="text-3xl font-bold font-heading text-white mb-6">Popular Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_GUIDES.slice(0, 3).map(guide => <Card key={guide.id} item={guide} type="guide" />)}
        </div>
    </section>

     <section>
        <AiRecommendations topic="beginner car maintenance" />
     </section>
  </div>
);

export const ForumPage: React.FC = () => (
    <div className="space-y-8">
        <h1 className="text-4xl font-bold font-heading text-white">Forum</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_POSTS.map(post => <Card key={post.id} item={post} type="post" />)}
        </div>
    </div>
);

export const GuidesPage: React.FC = () => (
    <div className="space-y-8">
        <h1 className="text-4xl font-bold font-heading text-white">Guides</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_GUIDES.map(guide => <Card key={guide.id} item={guide} type="guide" />)}
        </div>
    </div>
);

export const EventsPage: React.FC = () => (
    <div className="space-y-8">
        <h1 className="text-4xl font-bold font-heading text-white">Upcoming Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_EVENTS.map(event => <Card key={event.id} item={event} type="event" />)}
        </div>
    </div>
);

export const MarketplacePage: React.FC = () => (
    <div className="space-y-8">
        <h1 className="text-4xl font-bold font-heading text-white">Marketplace</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    </div>
);

// A generic detail page for posts, guides, and events
export const DetailPage: React.FC = () => {
    const { type, id } = useParams<{ type: string; id: string }>();

    const findItem = () => {
        if (!type || !id) return null;
        switch (type) {
            case 'forum':
                return MOCK_POSTS.find(p => p.id === id);
            case 'guides':
                return MOCK_GUIDES.find(g => g.id === id);
            case 'events':
                return MOCK_EVENTS.find(e => e.id === id);
            default:
                return null;
        }
    }
    
    const item = findItem();

    if (!item) {
        return <div className="text-center text-white text-2xl">Content not found.</div>;
    }

    return (
        <div className="bg-metallic-gray p-8 rounded-lg max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-heading text-white">{item.title}</h1>
            {'category' in item && <span className="text-sm font-semibold uppercase tracking-wider text-accent-red mt-2 inline-block">{item.category}</span>}
            {'imageUrl' in item && item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover rounded-md my-6" />}
            
            <div className="prose prose-invert max-w-none text-gray-300 mt-6 leading-relaxed">
                <p>{('content' in item && item.content) || ('description' in item && item.description) || 'Details not available.'}</p>
            </div>
            
            <div className="mt-8 border-t border-gray-600 pt-6">
                <AiRecommendations topic={item.title} />
            </div>
        </div>
    );
};
