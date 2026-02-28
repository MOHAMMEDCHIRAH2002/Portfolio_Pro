"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    icon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-[var(--accent)] text-[var(--bg)] font-semibold hover:brightness-110 shadow-[0_0_16px_rgba(56,189,248,0.15)] hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]",
    secondary:
        "card-surface-elevated text-[var(--text)] border border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] shadow-[var(--shadow-soft)]",
    ghost:
        "bg-transparent text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]",
    outline:
        "bg-transparent text-[var(--accent)] border border-[rgba(56,189,248,0.2)] hover:border-[rgba(56,189,248,0.4)] hover:bg-[rgba(56,189,248,0.05)]",
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3 text-base gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", size = "md", className = "", icon, children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className={`
          inline-flex items-center justify-center font-medium
          rounded-[var(--radius-md)] cursor-pointer
          transition-all duration-200 ease-out
          focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
                {...(props as React.ComponentProps<typeof motion.button>)}
            >
                {icon && <span className="flex-shrink-0">{icon}</span>}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
export default Button;
