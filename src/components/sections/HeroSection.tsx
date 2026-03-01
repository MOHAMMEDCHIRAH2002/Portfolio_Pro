"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, SparklesIcon } from "@/components/Icons";

export default function HeroSection() {
    return (
        <section id="hero" className="mt-24 ">
            {/* ── Hero background lighting ── */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                {/* Top-left spotlight */}
                <div className="absolute -top-[30%] -left-[15%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.04),transparent_65%)] blur-3xl" />
                {/* Center subtle white ambient */}
                <div className="absolute top-[10%] left-[30%] w-[50%] h-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.012),transparent_70%)] blur-2xl" />
                {/* Bottom-right edge glow */}
                <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.02),transparent_60%)] blur-3xl" />
                {/* Vignette — faint edge darkening */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_40%,var(--bg)_100%)]" />
            </div>

            {/* ── Hero card container with shimmer ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-[var(--radius-lg)] p-8 sm:p-10 group/hero"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 30% -10%, rgba(255,255,255,0.02) 0%, transparent 60%), var(--surface-1)",
                    border: "1px solid var(--border)",
                }}
            >
                {/* Top glass edge */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-[var(--radius-lg)] pointer-events-none bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />
                {/* Light sweep shimmer */}
                <div className="hero-shimmer" />
                {/* Hover glow increase */}
                <div className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none transition-opacity duration-500 opacity-0 group-hover/hero:opacity-100 shadow-[0_0_60px_rgba(56,189,248,0.04)]" />

                <div className="relative z-10 space-y-6">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                        <span className="mono-label inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-medium text-[var(--accent-light)] bg-[var(--accent-glow)] border border-[var(--border-accent)] rounded-[var(--radius-full)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                            Available for Projects
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                        className="space-y-3"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                            <span className="text-[var(--text-primary)]">Building </span>
                            <span className="gradient-text">Digital Solutions</span>
                            <br />
                            <span className="text-[var(--text-primary)]">
                                That Drive Results
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed"
                        >
                            {profile.summary}
                        </motion.p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
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
                </div>
            </motion.div>
        </section>
    );
}
