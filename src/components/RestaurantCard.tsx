import React from 'react';
import type { Restaurant } from '../types';
import { Clock, ShoppingCart } from 'lucide-react';

interface RestaurantCardProps {
    restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer border border-gray-100">
        <div className="relative">
            <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary-100 transition-colors z-10">
                <ShoppingCart size={18} className="text-primary" />
            </button>
            <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-40 object-cover rounded-t-2xl"
            />
            {restaurant.featured && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-5 py-2 rounded-bl-2xl">
                    FEATURED
                </span>
            )}
        </div>
        <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2 text-heading-2">{restaurant.name}</h3>
            <div className="flex items-center justify-start text-sm text-grayDark mb-3">
                <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="w-1 h-1 mx-2 bg-grayDark rounded-full"></div>
                <span>{restaurant.price}</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {restaurant.badges?.map((badge, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full"
                    >
                        {badge}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default RestaurantCard; 