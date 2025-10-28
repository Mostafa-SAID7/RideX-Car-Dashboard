
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

export interface Recommendation {
  id: string;
  title: string;
  reason: string;
  type: 'post' | 'guide';
}

export interface ChatMessagePart {
    text: string;
}

export interface WebSource {
    uri: string;
    title: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: ChatMessagePart[];
  sources?: WebSource[];
}
