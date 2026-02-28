"use client";

import Image from "next/image";
import { useState } from "react";
import { profile, skillGroups, languages } from "@/data/resume";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
    MailIcon,
    PhoneIcon,
    GithubIcon,
    LinkedinIcon,
    MapPinIcon,
    DownloadIcon,
} from "@/components/Icons";

// ── Availability dot ──────────────────────────────────────────────────────────
function AvailableDot() {
    return (
        <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
    );
}

// ── Small section label ───────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[9.5px] font-bold text-[var(--text-faint)] uppercase tracking-[0.12em] mb-2">
            {children}
        </p>
    );
}

export default function Sidebar() {
    const [imgError, setImgError] = useState(false);

    return (
        <aside className="hidden lg:flex w-[var(--sidebar-width)] h-screen fixed left-0 top-0 z-40 p-3 pr-0">
            {/*
             * Outer wrapper: flex-col, NO overflow (sidebar itself doesn't scroll).
             * Gap between cards: 12px.
             */}
            <div className="flex flex-col w-full h-full gap-3 overflow-hidden">

                {/* ═══════════════════════════════════════════════════════════
                    CARD 1 — Profile
                    Avatar · Name · Role · Summary
                ════════════════════════════════════════════════════════════ */}
                <Card hover glow padding="md" className="shrink-0">
                    <div className="flex flex-col items-center text-center">

                        {/* Avatar with accent ring */}
                        <div className="relative w-[80px] h-[80px] mb-3.5 rounded-full overflow-hidden
                                        ring-2 ring-[var(--border-accent)] ring-offset-[3px]
                                        ring-offset-[var(--surface-1)]">
                            {/* Initials fallback — always rendered beneath the image */}
                            <div className="absolute inset-0 flex items-center justify-center
                                            bg-[var(--surface-2)] text-[var(--accent)] text-xl font-bold">
                                {profile.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            {/* Photo — hidden via state when it 404s so Next.js never re-requests */}
                            {!imgError && (
                                <Image
                                    src={profile.photoUrl}
                                    alt={profile.name}
                                    fill
                                    className="object-cover relative z-10"
                                    priority
                                    sizes="80px"
                                    onError={() => setImgError(true)}
                                />
                            )}
                        </div>

                        {/* Name */}
                        <h1 className="text-[15px] font-bold text-[var(--text)] leading-snug tracking-tight">
                            {profile.name}
                        </h1>

                        {/* Role */}
                        <p className="text-[11px] font-semibold text-[var(--accent-text)] mt-0.5 tracking-wide">
                            {profile.title}
                        </p>


                    </div>
                </Card>

                {/* ═══════════════════════════════════════════════════════════
                    CARD 2 — Info
                    Location · Availability · Contact · Languages
                ════════════════════════════════════════════════════════════ */}
                <Card hover padding="sm" className="shrink-0">
                    <div className="space-y-2.5">

                        {/* Location */}
                        <div className="flex items-center gap-2.5 text-[11px] text-[var(--text-muted)]">
                            <MapPinIcon className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                            <span>{profile.location}</span>
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-2.5 text-[11px] text-[var(--text-muted)]">
                            <span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                                <AvailableDot />
                            </span>
                            <span>Available for Projects</span>
                        </div>

                        {/* Email */}
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center gap-2.5 text-[11px] text-[var(--text-muted)]
                                       hover:text-[var(--accent-text)] transition-colors duration-200 group"
                        >
                            <MailIcon className="w-3.5 h-3.5 text-[var(--text-faint)] group-hover:text-[var(--accent)] shrink-0 transition-colors duration-200" />
                            <span className="truncate">{profile.email}</span>
                        </a>

                        {/* Phone */}
                        <a
                            href={`tel:${profile.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-2.5 text-[11px] text-[var(--text-muted)]
                                       hover:text-[var(--accent-text)] transition-colors duration-200 group"
                        >
                            <PhoneIcon className="w-3.5 h-3.5 text-[var(--text-faint)] group-hover:text-[var(--accent)] shrink-0 transition-colors duration-200" />
                            <span>{profile.phone}</span>
                        </a>

                        {/* Divider + Languages */}
                        <div className="pt-2.5 border-t border-[var(--border)]">
                            <Label>Languages</Label>
                            <div className="flex flex-wrap gap-1.5">
                                {languages.map((lang) => (
                                    <span
                                        key={lang.name}
                                        className="inline-flex items-center gap-1 px-2.5 py-1
                                                   text-[10px] font-medium text-[var(--text-muted)]
                                                   bg-[var(--surface-2)] border border-[var(--border)]
                                                   rounded-[var(--radius-full)]
                                                   hover:border-[var(--border-accent)] hover:text-[var(--accent-text)]
                                                   transition-all duration-200 cursor-default"
                                    >
                                        {lang.name}
                                        <span className="text-[var(--border-strong)]">·</span>
                                        <span className="text-[var(--text-faint)]">{lang.level}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>

                {/* ═══════════════════════════════════════════════════════════
                    CARD 3 — Skills  (fills remaining height; inner scroll)
                    Uses inline card-surface instead of <Card> so we can use
                    flex-1 + min-h-0 + overflow-hidden layout.
                ════════════════════════════════════════════════════════════ */}
                <div
                    className="relative group shrink-0
                               card-surface border border-[var(--border)] rounded-[var(--radius-lg)]
                               shadow-[var(--shadow-soft)] hover:border-[var(--border-strong)]
                               hover:shadow-[var(--shadow-card)] transition-all duration-300
                               p-4"
                >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none
                                    bg-gradient-to-br from-[rgba(148,163,184,0.025)] to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Header */}
                    <div className="relative z-10 mb-3">
                        <Label>Skills</Label>
                    </div>

                    {/* All skills — no scroll */}
                    <div className="relative z-10 space-y-3">
                        {skillGroups.map((group) => (
                            <div key={group.category}>
                                <p className="text-[9px] font-bold text-[var(--text-faint)]
                                              uppercase tracking-[0.14em] mb-1.5 opacity-80">
                                    {group.category}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-[3px] text-[10px] font-medium
                                                       text-[var(--text-muted)] bg-[var(--surface-2)]
                                                       border border-[var(--border)] rounded-[var(--radius-full)]
                                                       hover:border-[var(--border-accent)] hover:text-[var(--accent-text)]
                                                       transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════════════
                    CARD 4 — Social Icons + CTA
                ════════════════════════════════════════════════════════════ */}
                <Card hover={false} padding="sm" className="shrink-0">

                    {/* Social icon row */}
                    <div className="flex justify-center gap-2.5 mb-3.5">
                        {[
                            { href: profile.linkedinUrl, label: "LinkedIn",       icon: <LinkedinIcon className="w-3.5 h-3.5" />, external: true  },
                            { href: profile.githubUrl,   label: "GitHub",         icon: <GithubIcon   className="w-3.5 h-3.5" />, external: true  },
                            { href: profile.resumeUrl,   label: "Download Resume", icon: <DownloadIcon className="w-3.5 h-3.5" />, external: false, download: true },
                        ].map(({ href, label, icon, external, download }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                {...(download ? { download: true } : {})}
                                className="flex items-center justify-center w-9 h-9 rounded-full
                                           border border-[var(--border)] text-[var(--text-faint)]
                                           hover:text-[var(--accent)] hover:border-[var(--border-accent)]
                                           hover:bg-[var(--accent-2)]
                                           hover:shadow-[0_0_14px_rgba(56,189,248,0.12)]
                                           transition-all duration-200"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* CTA button */}
                    <Button
                        className="w-full"
                        size="sm"
                        onClick={() => {
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Start a Project
                    </Button>
                </Card>

            </div>
        </aside>
    );
}

