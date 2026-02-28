"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navSections } from "@/data/resume";
import {
    SparklesIcon,
    TargetIcon,
    BriefcaseIcon,
    CodeIcon,
    LayersIcon,
    GraduationCapIcon,
    MailIcon,
} from "@/components/Icons";

const sectionIcons: Record<string, React.ReactNode> = {
    hero: <SparklesIcon className="w-4 h-4" />,
    "at-a-glance": <TargetIcon className="w-4 h-4" />,
    projects: <CodeIcon className="w-4 h-4" />,
    experience: <BriefcaseIcon className="w-4 h-4" />,
    services: <LayersIcon className="w-4 h-4" />,
    education: <GraduationCapIcon className="w-4 h-4" />,
    contact: <MailIcon className="w-4 h-4" />,
};

export default function MiniNav() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        navSections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="hidden lg:flex flex-col items-center justify-center fixed right-3 top-0 h-screen w-[var(--mininav-width)] z-40">
            {/* Pill container */}
            <div className="card-surface border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] py-2 px-1.5 flex flex-col items-center gap-1">
                {navSections.map(({ id, label }) => {
                    const isActive = activeSection === id;
                    return (
                        <button
                            key={id}
                            onClick={() => handleClick(id)}
                            className="group relative flex items-center justify-center w-11 h-11 rounded-[var(--radius-sm)] cursor-pointer transition-all duration-200"
                            aria-label={`Go to ${label}`}
                        >
                            {/* Active background */}
                            {isActive && (
                                <motion.div
                                    layoutId="mininav-active"
                                    className="absolute inset-0 rounded-[var(--radius-sm)] bg-[var(--accent-2)] border border-[var(--border-accent)] shadow-[var(--glow-accent)]"
                                    transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
                                />
                            )}

                            {/* Hover background (non-active) */}
                            {!isActive && (
                                <div className="absolute inset-0 rounded-[var(--radius-sm)] bg-transparent group-hover:bg-[var(--surface-2)] transition-colors duration-200" />
                            )}

                            {/* Icon */}
                            <span
                                className={`relative z-10 transition-colors duration-200 ${isActive
                                        ? "text-[var(--accent)]"
                                        : "text-[var(--text-faint)] group-hover:text-[var(--text-muted)]"
                                    }`}
                            >
                                {sectionIcons[id] || <TargetIcon className="w-4 h-4" />}
                            </span>

                            {/* Tooltip */}
                            <span className="absolute right-full mr-3 px-2.5 py-1 text-xs font-medium text-[var(--text)] bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-[var(--radius-sm)] shadow-[var(--shadow-card)] opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                                {label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
