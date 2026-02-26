import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-neutral-900 text-accent border border-accent/30 box-glow ${className}`}>
            {children}
        </span>
    );
};
