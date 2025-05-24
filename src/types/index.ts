export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  categories: string[];
  category?: string;
  featured?: boolean;
  badges?: string[];
  price?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color?: string;
}

export interface Deal {
  id: string;
  title: string;
  discount: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
} 