"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, SparklesIcon } from "@/components/Icons";

export default function HeroSection() {
    return (
        <section id="hero" className="pt-12 lg:pt-24 pb-16 scroll-mt-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
            >
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-[var(--accent-light)] bg-[var(--accent-glow)] border border-[var(--border-accent)] rounded-[var(--radius-full)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                        Available for Projects
                    </span>
                </motion.div>

                {/* Headline */}
                <div className="space-y-3">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                        <span className="text-[var(--text-primary)]">Building </span>
                        <span className="gradient-text">Digital Solutions</span>
                        <br />
                        <span className="text-[var(--text-primary)]">
                            That Drive Results
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                        {profile.summary}
                    </p>
                </div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex flex-wrap gap-3 pt-2"
                >
                    <Button
                        size="lg"
                        icon={<SparklesIcon className="w-4 h-4" />}
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Start a Project
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        icon={<ArrowRightIcon className="w-4 h-4" />}
                        onClick={() =>
                            document
                                .getElementById("projects")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        View My Work
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
