
import React from 'react';
import { Link } from 'react-router-dom';
import { Post, Guide, Event } from '../types';
import { CommentIcon, UpvoteIcon, StarIcon, SaveIcon, UserIcon, CalendarIcon, LocationIcon } from '../constants';

type CardProps = {
  item: Post | Guide | Event;
  type: 'post' | 'guide' | 'event';
};

const Card: React.FC<CardProps> = ({ item, type }) => {
  const destination = `/${type === 'post' ? 'forum' : type === 'guide' ? 'guides' : 'events'}/${item.id}`;

  const renderContent = () => {
    switch (type) {
      case 'post':
        const post = item as Post;
        return (
          <>
            <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-red">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 font-heading text-white">{post.title}</h3>
                <p className="text-gray-400 mt-2 text-sm h-10 overflow-hidden">{post.excerpt}</p>
            </div>
            <div className="px-6 py-4 bg-metallic-gray/30 flex justify-between items-center text-sm text-gray-400 mt-auto">
                <div className="flex items-center gap-2">
                    <img src={post.author.avatarUrl} alt={post.author.name} className="w-6 h-6 rounded-full" />
                    <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><UpvoteIcon className="w-4 h-4" /> {post.upvotes}</span>
                    <span className="flex items-center gap-1"><CommentIcon className="w-4 h-4" /> {post.comments}</span>
                </div>
            </div>
          </>
        );
      case 'guide':
        const guide = item as Guide;
        return (
          <>
            <img src={guide.imageUrl} alt={guide.title} className="w-full h-40 object-cover" />
             <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-red">{guide.category}</span>
                <h3 className="text-xl font-bold mt-2 font-heading text-white">{guide.title}</h3>
            </div>
            <div className="px-6 py-4 bg-metallic-gray/30 flex justify-between items-center text-sm text-gray-400 mt-auto">
                 <div className="flex items-center gap-2">
                    <img src={guide.author.avatarUrl} alt={guide.author.name} className="w-6 h-6 rounded-full" />
                    <span>{guide.author.name}</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><StarIcon className="w-4 h-4 text-yellow-400" /> {guide.rating}</span>
                    <span className="flex items-center gap-1"><SaveIcon className="w-4 h-4" /> {guide.saves}k</span>
                </div>
            </div>
          </>
        );
      case 'event':
        const event = item as Event;
        return (
            <>
            <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover" />
             <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold font-heading text-white">{event.title}</h3>
                <div className="mt-4 space-y-2 text-gray-400 text-sm">
                    <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-accent-red" /> {event.date}</p>
                    <p className="flex items-center gap-2"><LocationIcon className="w-4 h-4 text-accent-red" /> {event.location}</p>
                    <p className="flex items-center gap-2"><UserIcon className="w-4 h-4 text-accent-red" /> {event.attendees} going</p>
                </div>
            </div>
            <div className="px-6 py-4 text-center text-accent-red font-semibold text-sm">
                View Details
            </div>
          </>
        );
    }
  };

  return (
    <Link to={destination} className="group bg-metallic-gray rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent-red/20 hover:-translate-y-1 transition-all duration-300 flex flex-col border-2 border-transparent hover:border-accent-red/50">
      {renderContent()}
    </Link>
  );
};

export default Card;
