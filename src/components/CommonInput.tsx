import React from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    containerClassName?: string;
    inputClassName?: string;
}

const CommonInput: React.FC<CommonInputProps> = ({
    icon,
    iconPosition = 'left',
    containerClassName = '',
    inputClassName = '',
    ...props
}) => {
    return (
        <div className={`relative flex items-center ${containerClassName}`}>
            {icon && iconPosition === 'left' && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
            )}
            <input
                {...props}
                className={`w-full pl-${icon && iconPosition === 'left' ? '10' : '4'} pr-${icon && iconPosition === 'right' ? '10' : '4'} py-2 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${inputClassName}`}
            />
            {icon && iconPosition === 'right' && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2">{icon}</span>
            )}
        </div>
    );
};

export default CommonInput; 