import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end md:hidden">
        <div className="w-2/3 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col">
            <button className="self-end mb-6" onClick={onClose} aria-label="Close menu">
                <X size={28} className="text-gray-700" />
            </button>
            <nav className="flex flex-col gap-6 mt-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-lg" onClick={onClose}>Restaurants</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-lg" onClick={onClose}>Deals</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-bold text-lg border-t border-gray-200 pt-4" onClick={onClose}>My orders</a>
            </nav>
        </div>
    </div>
);

export default MobileMenu; 