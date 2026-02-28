interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "accent" | "outline";
    size?: "sm" | "md";
    className?: string;
}

const variantClasses = {
    default:
        "bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]",
    accent:
        "bg-[var(--accent-glow)] text-[var(--accent-light)] border border-[var(--border-accent)]",
    outline:
        "bg-transparent text-[var(--text-muted)] border border-[var(--border)]",
};

const sizeClasses = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
};

export default function Badge({
    children,
    variant = "default",
    size = "sm",
    className = "",
}: BadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center font-mono font-medium
        rounded-[var(--radius-full)]
        whitespace-nowrap
        transition-colors duration-[var(--transition-fast)]
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
