"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { profile } from "@/data/resume";
import {
    SendIcon,
    MailIcon,
    PhoneIcon,
    LinkedinIcon,
    MapPinIcon,
} from "@/components/Icons";

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Build mailto link as fallback
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
            formState.subject || "New Project Inquiry"
        )}&body=${encodeURIComponent(
            `Hi Mohammed,\n\nMy name is ${formState.name}.\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
        )}`;
        window.open(mailtoUrl, "_blank");
    };

    return (
        <SectionWrapper
            id="contact"
            title="Let's Work Together"
            subtitle="Have a project in mind? I'd love to hear about it."
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:col-span-3"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState({ ...formState, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({ ...formState, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider"
                            >
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                value={formState.subject}
                                onChange={(e) =>
                                    setFormState({ ...formState, subject: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors"
                                placeholder="Project inquiry"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                value={formState.message}
                                onChange={(e) =>
                                    setFormState({ ...formState, message: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full sm:w-auto"
                            icon={<SendIcon className="w-4 h-4" />}
                        >
                            Send Message
                        </Button>
                    </form>
                </motion.div>

                {/* Direct Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="md:col-span-2 space-y-4"
                >
                    <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)]">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                            Direct Contact
                        </h3>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] flex items-center justify-center group-hover:bg-[var(--accent-glow)] transition-colors">
                                    <MailIcon className="w-4 h-4" />
                                </div>
                                <span className="truncate">{profile.email}</span>
                            </a>
                            <a
                                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] flex items-center justify-center group-hover:bg-[var(--accent-glow)] transition-colors">
                                    <PhoneIcon className="w-4 h-4" />
                                </div>
                                <span>{profile.phone}</span>
                            </a>
                            <a
                                href={profile.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] flex items-center justify-center group-hover:bg-[var(--accent-glow)] transition-colors">
                                    <LinkedinIcon className="w-4 h-4" />
                                </div>
                                <span>LinkedIn</span>
                            </a>
                            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] flex items-center justify-center">
                                    <MapPinIcon className="w-4 h-4" />
                                </div>
                                <span>{profile.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-[var(--accent-glow)] border border-[var(--border-accent)] rounded-[var(--radius-lg)]">
                        <p className="text-sm text-[var(--accent-light)] font-medium mb-1">
                            Prefer a quick call?
                        </p>
                        <p className="text-xs text-[var(--text-secondary)]">
                            Send me an email and I&apos;ll reply with available time slots.
                        </p>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
