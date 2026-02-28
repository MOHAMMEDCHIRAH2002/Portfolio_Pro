"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { profile, navSections } from "@/data/resume";
import Button from "@/components/ui/Button";
import {
    MenuIcon,
    XIcon,
    MailIcon,
    PhoneIcon,
    MapPinIcon,
} from "@/components/Icons";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (id: string) => {
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
    };

    return (
        <>
            {/* Mobile Top Profile Card */}
            <div className="lg:hidden sticky top-0 z-50 glass border-b border-[var(--border)]">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-[var(--border-accent)]">
                            <Image
                                src={profile.photoUrl}
                                alt={profile.name}
                                fill
                                className="object-cover"
                                sizes="40px"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-2)] text-[var(--accent)] text-sm font-bold">
                                {profile.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--text)]">
                                {profile.name}
                            </p>
                            <p className="text-xs text-[var(--accent-text)]">
                                {profile.title}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-[var(--radius-sm)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <XIcon className="w-5 h-5" />
                        ) : (
                            <MenuIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-[var(--border)]"
                        >
                            <div className="px-4 py-4 space-y-1">
                                {navSections.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        onClick={() => handleNavClick(id)}
                                        className="w-full text-left px-3 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] rounded-[var(--radius-sm)] transition-colors cursor-pointer"
                                    >
                                        {label}
                                    </button>
                                ))}

                                <div className="pt-3 space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-[var(--text-faint)]">
                                        <MapPinIcon className="w-3 h-3" />
                                        {profile.location}
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="flex items-center gap-1.5 px-3 py-2 text-xs text-[var(--text-muted)] bg-[var(--surface-2)] rounded-[var(--radius-sm)] border border-[var(--border)]"
                                        >
                                            <MailIcon className="w-3 h-3" />
                                            Email
                                        </a>
                                        <a
                                            href={`tel:${profile.phone.replace(/\s/g, "")}`}
                                            className="flex items-center gap-1.5 px-3 py-2 text-xs text-[var(--text-muted)] bg-[var(--surface-2)] rounded-[var(--radius-sm)] border border-[var(--border)]"
                                        >
                                            <PhoneIcon className="w-3 h-3" />
                                            Call
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sticky Bottom CTA — Mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 glass border-t border-[var(--border)]">
                <Button
                    className="w-full"
                    size="md"
                    onClick={() =>
                        document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Hire Me — Let&apos;s Talk
                </Button>
            </div>
        </>
    );
}
