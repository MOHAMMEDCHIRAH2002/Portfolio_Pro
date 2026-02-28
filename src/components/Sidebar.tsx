"use client";

import Image from "next/image";
import { profile, skillGroups } from "@/data/resume";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import {
    MailIcon,
    PhoneIcon,
    GithubIcon,
    LinkedinIcon,
    MapPinIcon,
    DownloadIcon,
} from "@/components/Icons";

export default function Sidebar() {
    const allSkills = skillGroups.flatMap((g) => g.skills).slice(0, 12);

    return (
        <aside className="hidden lg:flex w-[var(--sidebar-width)] h-screen fixed left-0 top-0 z-40 p-3 pr-0">
            {/* Premium card container — wraps all sidebar content */}
            <div className="flex flex-col w-full h-full card-surface border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] overflow-y-auto overflow-x-hidden">
                {/* Profile Section */}
                <div className="p-6 pb-4 flex flex-col items-center text-center">
                    {/* Photo */}
                    <div className="relative w-[88px] h-[88px] mb-4 rounded-full overflow-hidden ring-2 ring-[var(--border-accent)] ring-offset-[3px] ring-offset-[var(--surface-1)]">
                        <Image
                            src={profile.photoUrl}
                            alt={profile.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="88px"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                            }}
                        />
                        {/* Fallback initials */}
                        <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-2)] text-[var(--accent)] text-2xl font-bold">
                            {profile.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                    </div>

                    {/* Name & Title */}
                    <h1 className="text-lg font-semibold text-[var(--text)]">
                        {profile.name}
                    </h1>
                    <p className="text-sm text-[var(--accent-text)] font-medium mt-0.5">
                        {profile.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-[var(--text-faint)]">
                        <MapPinIcon className="w-3 h-3" />
                        <span>{profile.location}</span>
                    </div>
                </div>

                <Divider className="mx-5 opacity-60" />

                {/* Contact Quick Actions */}
                <div className="px-5 py-3.5 space-y-1">
                    <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-all duration-200 group"
                    >
                        <MailIcon className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--accent)]" />
                        <span className="truncate">{profile.email}</span>
                    </a>
                    <a
                        href={`tel:${profile.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-all duration-200 group"
                    >
                        <PhoneIcon className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--accent)]" />
                        <span>{profile.phone}</span>
                    </a>
                </div>

                <Divider className="mx-5 opacity-60" />

                {/* Social Links */}
                <div className="px-5 py-3.5 flex justify-center gap-2.5">
                    <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-faint)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-2)] transition-all duration-200"
                    >
                        <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                        href={profile.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-faint)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-2)] transition-all duration-200"
                    >
                        <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                        href={profile.resumeUrl}
                        download
                        aria-label="Download Resume"
                        className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-faint)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] hover:bg-[var(--accent-2)] transition-all duration-200"
                    >
                        <DownloadIcon className="w-4 h-4" />
                    </a>
                </div>

                <Divider className="mx-5 opacity-60" />

                {/* Skills */}
                <div className="px-5 py-3.5 flex-1">
                    <h3 className="text-[11px] font-semibold text-[var(--text-faint)] uppercase tracking-wider mb-3">
                        Skills
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {allSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2.5 py-1 text-[11px] font-medium text-[var(--text-muted)] bg-[var(--surface-2)] border border-[var(--border)] rounded-[var(--radius-full)] hover:border-[var(--border-accent)] hover:text-[var(--accent-text)] transition-all duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="p-5 pt-1">
                    <Button
                        className="w-full"
                        size="md"
                        onClick={() => {
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Start a Project
                    </Button>
                </div>
            </div>
        </aside>
    );
}
