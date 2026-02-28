"use client";

import { useState } from "react";
import { profile } from "@/data/resume";
import Button from "@/components/ui/Button";
import {
    SendIcon,
    MailIcon,
    PhoneIcon,
    LinkedinIcon,
    GithubIcon,
    MapPinIcon,
} from "@/components/Icons";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
            formState.subject || "New Project Inquiry"
        )}&body=${encodeURIComponent(
            `Hi Mohammed,\n\nMy name is ${formState.name}.\n\nBudget range: ${formState.budget}\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
        )}`;
        window.open(mailtoUrl, "_blank");
    };

    return (
        <div className="pt-12 lg:pt-20 pb-16">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    Get in Touch
                </h1>
                <p className="text-[var(--text-secondary)] text-sm max-w-xl">
                    Have a project in mind or just want to say hello? I&apos;d love to
                    hear from you.
                </p>
                <div className="mt-4 h-[1px] w-12 bg-[var(--accent)] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Form */}
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="c-name" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
                                    Name
                                </label>
                                <input
                                    id="c-name"
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="c-email" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
                                    Email
                                </label>
                                <input
                                    id="c-email"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="c-subject" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
                                    Subject
                                </label>
                                <input
                                    id="c-subject"
                                    type="text"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors"
                                    placeholder="Project inquiry"
                                />
                            </div>
                            <div>
                                <label htmlFor="c-budget" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
                                    Budget Range
                                </label>
                                <select
                                    id="c-budget"
                                    value={formState.budget}
                                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors"
                                >
                                    <option value="">Select budget</option>
                                    <option value="< $1,000">&lt; $1,000</option>
                                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                    <option value="$10,000+">$10,000+</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="c-message" className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                id="c-message"
                                required
                                rows={6}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project, goals, and timeline..."
                            />
                        </div>
                        <Button type="submit" size="lg" icon={<SendIcon className="w-4 h-4" />}>
                            Send Message
                        </Button>
                    </form>
                </div>

                {/* Direct Contact */}
                <div className="space-y-4">
                    <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)]">
                        <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                            Direct Contact
                        </h2>
                        <div className="space-y-4">
                            <a
                                href={`mailto:${profile.email}`}
                                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] flex items-center justify-center group-hover:bg-[var(--accent-glow)] transition-colors">
                                    <MailIcon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--text-muted)]">Email</p>
                                    <p className="truncate">{profile.email}</p>
                                </div>
                            </a>
                            <a
                                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] flex items-center justify-center group-hover:bg-[var(--accent-glow)] transition-colors">
                                    <PhoneIcon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--text-muted)]">Phone</p>
                                    <p>{profile.phone}</p>
                                </div>
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
                                <div>
                                    <p className="text-xs text-[var(--text-muted)]">LinkedIn</p>
                                    <p>mohammed-chirah</p>
                                </div>
                            </a>
                            <a
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors group"
                            >
                                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] flex items-center justify-center group-hover:bg-[var(--accent-glow)] transition-colors">
                                    <GithubIcon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--text-muted)]">GitHub</p>
                                    <p>MOHAMMEDCHIRAH2002</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)]">
                        <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                            <MapPinIcon className="w-4 h-4 text-[var(--text-muted)]" />
                            <div>
                                <p className="font-medium text-[var(--text-primary)]">Based in</p>
                                <p>{profile.location}</p>
                                <p className="text-xs text-[var(--text-muted)] mt-1">Remote-friendly</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-[var(--accent-glow)] border border-[var(--border-accent)] rounded-[var(--radius-lg)]">
                        <p className="text-sm text-[var(--accent-light)] font-medium mb-1">
                            Typical response time
                        </p>
                        <p className="text-xs text-[var(--text-secondary)]">
                            I usually respond within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
