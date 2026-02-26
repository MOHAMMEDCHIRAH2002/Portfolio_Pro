"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "border-border/50 premium-glass py-3"
                    : "border-transparent bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-mono font-bold tracking-tighter hover:text-accent transition-colors flex items-center gap-1 group"
                >
                    <span className="text-accent group-hover:animate-pulse">{'>'}</span> CHIRAH
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-1">
                    {links.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-mono transition-colors",
                                    isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-accent/10 rounded-md border border-accent/20"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        );
                    })}

                    {/* Hire Me CTA Desktop */}
                    <Link
                        href="/contact"
                        className="ml-4 px-4 py-2 text-sm font-mono font-semibold bg-accent text-black rounded-md hover:bg-accent-hover transition-colors box-glow-hover"
                    >
                        Hire Me
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-muted-foreground hover:text-accent p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-0 right-0 border-b border-border premium-glass"
                    >
                        <nav className="flex flex-col p-4 space-y-2">
                            {links.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "px-4 py-3 rounded-md text-sm font-mono",
                                            isActive
                                                ? "bg-accent/10 text-accent border border-accent/20"
                                                : "text-muted-foreground hover:bg-neutral-900/50 hover:text-foreground"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-4 py-3 text-center text-sm font-mono font-semibold bg-accent text-black rounded-md"
                            >
                                Hire Me
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
