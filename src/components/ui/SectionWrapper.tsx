"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
    id: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export default function SectionWrapper({
    id,
    title,
    subtitle,
    children,
    className = "",
}: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id={id}
            ref={ref}
            className={`py-[var(--space-3xl)] scroll-mt-8 ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {title && (
                    <div className="mb-[var(--space-xl)]">
                        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-[var(--text-muted)] text-sm max-w-lg">
                                {subtitle}
                            </p>
                        )}
                        <div className="mt-4 h-[1px] w-12 bg-[var(--accent)] rounded-full" />
                    </div>
                )}
                {children}
            </motion.div>
        </section>
    );
}
