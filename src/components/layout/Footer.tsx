"use client";

import Link from "next/link";
import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border mt-24 bg-neutral-950/30 relative overflow-hidden">
            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

            <div className="container mx-auto max-w-6xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand & Summary */}
                    <div className="space-y-4 lg:col-span-2">
                        <Link href="/" className="text-2xl font-mono font-bold tracking-tighter flex items-center gap-1">
                            <span className="text-accent">{'>'}</span> CHIRAH
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Premium Full-Stack Developer engineering scalable architectures, elegant interfaces,
                            and robust industrial data integrations.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <motion.a
                                whileHover={{ y: -2, color: "var(--color-accent)" }}
                                href={resumeData.linkedin}
                                className="text-muted-foreground transition-colors p-2 bg-neutral-900/50 rounded-md border border-border"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -2, color: "var(--color-accent)" }}
                                href={resumeData.github !== "[ADD LINK]" ? resumeData.github : "https://github.com"}
                                className="text-muted-foreground transition-colors p-2 bg-neutral-900/50 rounded-md border border-border"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -2, color: "var(--color-accent)" }}
                                href={`mailto:${resumeData.email}`}
                                className="text-muted-foreground transition-colors p-2 bg-neutral-900/50 rounded-md border border-border"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-mono text-foreground font-semibold mb-4 flex items-center">
                            <span className="text-accent mr-2">/</span>Navigation
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-accent hover:underline decoration-accent/30 underline-offset-4 transition-all"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="font-mono text-foreground font-semibold mb-4 flex items-center">
                            <span className="text-accent mr-2">/</span>Reach Out
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-3 mt-0.5 shrink-0 text-accent/70" />
                                <span>{resumeData.location}</span>
                            </li>
                            <li className="flex items-center text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 mr-3 shrink-0 text-accent/70" />
                                <a href={`tel:${resumeData.phone}`} className="hover:text-accent transition-colors">{resumeData.phone}</a>
                            </li>
                            <li className="flex items-center text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 mr-3 shrink-0 text-accent/70" />
                                <a href={`mailto:${resumeData.email}`} className="hover:text-accent transition-colors truncate">{resumeData.email}</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground font-mono">
                        © {currentYear} {resumeData.name}. All rights reserved.
                    </p>
                    <div className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                        System Status: <span className="text-accent flex items-center"><span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-1 border border-accent/50 shadow-[0_0_8px_rgba(0,255,65,0.8)]"></span>ONLINE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
