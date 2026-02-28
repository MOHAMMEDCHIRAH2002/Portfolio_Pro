"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    /** Extra classes applied to the inner content wrapper (z-10 div) */
    innerClassName?: string;
    hover?: boolean;
    glow?: boolean;
    padding?: "sm" | "md" | "lg" | "none";
}

const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    none: "",
};

export default function Card({
    children,
    className = "",
    innerClassName = "",
    hover = true,
    glow = false,
    padding = "md",
}: CardProps) {
    return (
        <motion.div
            whileHover={
                hover
                    ? {
                        y: -3,
                        transition: { duration: 0.3, ease: [0.2, 0, 0, 1] },
                    }
                    : undefined
            }
            className={`
        relative group
        card-surface
        border border-[var(--border)]
        rounded-[var(--radius-lg)]
        shadow-[var(--shadow-soft)]
        ${paddingClasses[padding]}
        transition-all duration-300 ease-out
        ${hover ? "hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-card)]" : ""}
        ${glow ? "hover:shadow-[var(--glow-accent)] hover:border-[var(--border-accent)]" : ""}
        ${className}
      `}
        >
            {/* Top edge highlight — glass simulation */}
            <div className="absolute inset-x-0 top-0 h-px rounded-t-[var(--radius-lg)] pointer-events-none bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />
            {/* Subtle inner gradient on hover */}
            <div
                className={`absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none transition-opacity duration-300 ${glow
                        ? "bg-gradient-to-br from-[rgba(56,189,248,0.04)] to-transparent opacity-0 group-hover:opacity-100"
                        : "bg-gradient-to-br from-[rgba(255,255,255,0.015)] to-transparent opacity-0 group-hover:opacity-100"
                    }`}
            />
            <div className={`relative z-10 ${innerClassName}`}>{children}</div>
        </motion.div>
    );
}
