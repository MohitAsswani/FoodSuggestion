import React from 'react';
import type { Deal } from '../types';

interface BannerCardProps {
    deal: Deal & { label: string; bg: string; discountTextColor: string; image: string };
}

const BannerCard: React.FC<BannerCardProps> = ({ deal }) => (
    <div className={`flex flex-col-reverse md:flex-row rounded-2xl p-0 ${deal.bg} min-h-[220px] overflow-hidden mb-4 md:mb-0`}>
        <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-32 object-contain md:w-[60%] md:h-auto md:rounded-l-2xl"
        />
        <div className="flex-1 flex flex-col justify-between py-6 px-4 md:py-8 md:pr-1 md:pl-4">
            <div className="flex flex-col items-start">
                <div className="text-heading-2 font-semibold text-heading mb-2 leading-tight">{deal.title}</div>
                <div className={`text-heading-1 font-extrabold leading-none ${deal.discountTextColor}`}>{deal.discount}</div>
            </div>
            <div className="flex flex-col items-start mt-4">
                <div className="text-caption text-muted">{deal.label}</div>
            </div>
        </div>
    </div>
);

export default BannerCard; 