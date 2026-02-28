"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { certifications, skillGroups } from "@/data/resume";
import {
    TargetIcon,
    LayersIcon,
    AwardIcon,
    ClockIcon,
} from "@/components/Icons";

const focusAreas = [
    "Full-Stack Web Development",
    "AVEVA PI System Integration",
    "Industrial IoT Solutions",
    "Digital Transformation",
];

const primaryStack = skillGroups
    .flatMap((g) => g.skills)
    .slice(0, 8);

export default function AtAGlanceSection() {
    return (
        <SectionWrapper
            id="at-a-glance"
            title="At a Glance"
            subtitle="A quick overview of what I do and what I bring to the table."
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Focus Areas */}
                <Card glow>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent-glow)] flex items-center justify-center">
                            <TargetIcon className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                            Focus Areas
                        </h3>
                    </div>
                    <ul className="space-y-2">
                        {focusAreas.map((area) => (
                            <li
                                key={area}
                                className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                            >
                                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                                {area}
                            </li>
                        ))}
                    </ul>
                </Card>

                {/* Primary Stack */}
                <Card glow>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent-glow)] flex items-center justify-center">
                            <LayersIcon className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                            Primary Stack
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {primaryStack.map((tech) => (
                            <Badge key={tech} variant="accent" size="md">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </Card>

                {/* Certifications */}
                <Card glow>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent-glow)] flex items-center justify-center">
                            <AwardIcon className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                            Certifications
                        </h3>
                    </div>
                    <ul className="space-y-2">
                        {certifications.map((cert) => (
                            <li key={cert.id} className="text-sm">
                                <span className="text-[var(--text-primary)] font-medium">
                                    {cert.name}
                                </span>
                                <span className="text-[var(--text-muted)] block text-xs mt-0.5">
                                    {cert.issuer}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Card>

                {/* Availability */}
                <Card glow>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--accent-glow)] flex items-center justify-center">
                            <ClockIcon className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                            Availability
                        </h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                            <span className="text-sm text-[var(--accent-light)] font-medium">
                                Open for new projects
                            </span>
                        </div>
                        <div className="text-sm text-[var(--text-secondary)] space-y-1">
                            <p>📍 Casablanca, Morocco</p>
                            <p>🌐 Remote-friendly</p>
                            <p>💼 Freelance & Full-time</p>
                        </div>
                    </div>
                </Card>
            </div>
        </SectionWrapper>
    );
}
