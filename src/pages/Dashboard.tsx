import React, { useState } from 'react';
import { Search, User, Clock, ShoppingCart, ShoppingBag, Menu, X } from 'lucide-react';
import type { Restaurant, Category } from '../types';
import cupcakeOfferImg from '../assets/images/cupcake_offer_img.png';
import burgerOfferImg from '../assets/images/burger_offer_img.png';
import royalSushiHouseImg from '../assets/images/royal_sushi_house.png';
import burgersAndPizzaImg from '../assets/images/burgers_and_pizza.png';
import ninjaSushiImg from '../assets/images/ninja_sushi.png';
import sushiMasterImg from '../assets/images/sushi_master.png';
import japaneseSushiImg from '../assets/images/japanese_sushi.png';
import kobeImg from '../assets/images/kobe.png';
import CommonInput from '../components/CommonInput';
import BannerCard from '../components/BannerCard';
import RestaurantCard from '../components/RestaurantCard';
import MobileMenu from '../components/MobileMenu';

const Dashboard: React.FC = () => {
    // Multi-select for categories
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Offer banners data
    const deals = [
        {
            id: '1',
            title: 'All deserts',
            discount: '20% OFF',
            image: cupcakeOfferImg,
            label: 'Deserty',
            bg: 'bg-[#F4F6FF]',
            discountTextColor: 'text-primary'
        },
        {
            id: '2',
            title: 'Big Burgers',
            discount: '50% OFF',
            image: burgerOfferImg,
            label: 'Fooddies',
            bg: 'bg-[#FFF6F3]',
            discountTextColor: 'text-orange'
        }
    ];

    const categories: Category[] = [
        { id: 'pizza', name: 'Pizza', icon: '🍕', color: 'bg-orange-100 text-orange-600' },
        { id: 'burger', name: 'Burger', icon: '🍔', color: 'bg-yellow-100 text-yellow-600' },
        { id: 'bbq', name: 'BBQ', icon: '🍖', color: 'bg-red-100 text-red-600' },
        { id: 'sushi', name: 'Sushi', icon: '🍣', color: 'bg-blue-100 text-blue-600' },
        { id: 'vegan', name: 'Vegan', icon: '🥗', color: 'bg-green-100 text-green-600' },
        { id: 'desserts', name: 'Desserts', icon: '🧁', color: 'bg-pink-100 text-pink-600' }
    ];

    const restaurants: Restaurant[] = [
        {
            id: '1',
            name: 'Royal Sushi House',
            image: royalSushiHouseImg,
            rating: 4.8,
            deliveryTime: '30-40 min',
            price: '$32 min sum',
            categories: ['sushi'],
            featured: true,
            badges: ['Sushi']
        },
        {
            id: '2',
            name: 'Burgers & Pizza',
            image: burgersAndPizzaImg,
            rating: 4.6,
            deliveryTime: '40-60 min',
            price: '$24 min sum',
            categories: ['burger', 'pizza'],
            featured: true,
            badges: ['Burger', 'Pizza']
        },
        {
            id: '3',
            name: 'Ninja sushi',
            image: ninjaSushiImg,
            rating: 4.7,
            deliveryTime: '20-40 min',
            price: '$40 min sum',
            categories: ['sushi'],
            badges: ['Sushi']
        },
        {
            id: '4',
            name: 'Sushi master',
            image: sushiMasterImg,
            rating: 4.5,
            deliveryTime: '60-70 min',
            price: '$49 min sum',
            categories: ['sushi'],
            badges: ['Sushi']
        },
        {
            id: '5',
            name: 'Japanese sushi',
            image: japaneseSushiImg,
            rating: 4.9,
            deliveryTime: '30-50 min',
            price: '$104 min sum',
            categories: ['sushi'],
            badges: ['Sushi']
        },
        {
            id: '6',
            name: 'Kobe',
            image: kobeImg,
            rating: 4.3,
            deliveryTime: '20-30 min',
            price: '$57 min sum',
            categories: ['sushi'],
            badges: ['Sushi']
        }
    ];

    // Filter restaurants by selected categories
    const filteredRestaurants = selectedCategories.length === 0
        ? restaurants
        : restaurants.filter(r => r.categories.some(cat => selectedCategories.includes(cat)));

    // Toggle category selection
    const toggleCategory = (id: string) => {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center font-bold text-start text-md leading-tight">
                            <div className="flex flex-col items-center space-x-2">
                                <span className="text-black items-start">Food</span>
                                <span className="text-primary items-start">delivery</span>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-1 max-w-lg mx-8">
                            <CommonInput
                                icon={<Search size={20} className="text-gray-400" />}
                                iconPosition="right"
                                placeholder="Search"
                                containerClassName="w-60"
                                inputClassName=""
                                type="text"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <nav className="hidden md:flex space-x-6">
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-xs">Restaurants</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-xs">Deals</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-xs border-l border-gray-300 pl-2">My orders</a>
                            </nav>
                            <div className="flex items-center space-x-4">
                                <div className="relative bg-primary-50 rounded-2xl w-10 h-10 flex items-center justify-center">
                                    <ShoppingBag size={17} className="text-primary" />
                                    <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-xs shadow">
                                        4
                                    </span>
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <User size={16} className="text-white" />
                                </div>
                                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
                                    <Menu size={24} className="text-gray-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 mb-8">
                    {deals.map((deal) => (
                        <BannerCard key={deal.id} deal={deal} />
                    ))}
                </div>

                <div className="mb-8">
                    <div className="grid grid-cols-3 gap-3 md:flex md:space-x-4 md:overflow-x-auto md:pb-4 md:justify-between">
                        {categories.map((category) => {
                            const selected = selectedCategories.includes(category.id);
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => toggleCategory(category.id)}
                                    className={`flex flex-col items-center p-4 rounded-2xl w-full md:w-[150px] m-0 md:m-2 transition-all border-2 ${selected
                                        ? 'bg-primary-50 border-primary text-primary shadow-lg scale-105'
                                        : 'bg-white border-transparent text-grayDark hover:bg-primary-50 hover:text-primary'}
                                    `}
                                >
                                    <span className="text-2xl mb-2">{category.icon}</span>
                                    <span className="text-xs font-medium">{category.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Nearby restaurants</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                    </div>
                </div>
            </main>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
            )}
        </div>
    );
};

export default Dashboard; 