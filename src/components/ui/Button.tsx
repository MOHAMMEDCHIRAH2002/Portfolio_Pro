"use client";

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// We drop the standard button props in favor of motion props for the button element
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    className?: string;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ href, variant = 'primary', className, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-mono text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group rounded-md";

        const variants = {
            primary: "bg-accent text-black hover:bg-accent-hover box-glow-hover",
            outline: "border border-accent text-accent hover:bg-accent/10",
            ghost: "text-foreground hover:bg-accent/10 hover:text-accent",
        };

        const classes = cn(
            baseStyles,
            variants[variant],
            "h-10 px-6 py-2",
            className
        );

        const innerContent = (
            <>
                <span className="relative z-10 flex items-center">{children}</span>
                {variant === 'primary' && (
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                )}
            </>
        );

        if (href) {
            const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
            return (
                <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={classes}>
                    {innerContent}
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref}
                className={classes}
                whileTap={{ scale: 0.98 }}
                {...(props as any)}
            >
                {innerContent}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
