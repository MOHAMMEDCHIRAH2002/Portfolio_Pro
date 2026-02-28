import { education, certifications, skillGroups, languages, experiences } from "@/data/resume";
import { generatePageMetadata } from "@/lib/seo";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import {
    GraduationCapIcon,
    AwardIcon,
    BriefcaseIcon,
} from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
    "About",
    "Learn about Mohammed Chirah's background, education, certifications, and technical skills.",
    "/about"
);

export default function AboutPage() {
    return (
        <div className="pt-12 lg:pt-20 pb-16">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    About Me
                </h1>
                <p className="text-[var(--text-secondary)] text-sm max-w-xl">
                    A detailed look at my experience, education, and technical expertise.
                </p>
                <div className="mt-4 h-[1px] w-12 bg-[var(--accent)] rounded-full" />
            </div>

            {/* Full Timeline */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                    <BriefcaseIcon className="w-4 h-4 text-[var(--accent)]" />
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        Professional Journey
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-[var(--border)]" />
                    <div className="space-y-6">
                        {experiences.map((exp, i) => (
                            <div key={exp.id} className="relative flex gap-4">
                                <div className="relative z-10 flex-shrink-0 mt-1">
                                    <div
                                        className={`w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center border ${i === 0
                                                ? "bg-[var(--accent-glow)] border-[var(--border-accent)]"
                                                : "bg-[var(--surface)] border-[var(--border)]"
                                            }`}
                                    >
                                        <BriefcaseIcon
                                            className={`w-4 h-4 ${i === 0 ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                                                }`}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 pb-2">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                                            {exp.role}
                                        </h3>
                                        {exp.type === "freelance" && (
                                            <Badge variant="accent" size="sm">Freelance</Badge>
                                        )}
                                        {exp.type === "internship" && (
                                            <Badge variant="outline" size="sm">Internship</Badge>
                                        )}
                                    </div>
                                    <p className="text-sm text-[var(--accent-light)] font-medium">
                                        {exp.company}
                                    </p>
                                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                                        {exp.startDate} → {exp.endDate} · {exp.location}
                                    </p>
                                    <ul className="mt-2 space-y-1">
                                        {exp.description.map((desc, j) => (
                                            <li key={j} className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                    {exp.stack.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {exp.stack.map((tech) => (
                                                <Badge key={tech} size="sm">{tech}</Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                    <GraduationCapIcon className="w-4 h-4 text-[var(--accent)]" />
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        Education
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {education.map((edu) => (
                        <Card key={edu.id} padding="sm">
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                                {edu.degree}
                            </h3>
                            <p className="text-sm text-[var(--accent-light)]">{edu.institution}</p>
                            <p className="text-xs text-[var(--text-muted)] mt-1">{edu.field}</p>
                            <p className="text-xs text-[var(--text-muted)]">
                                {edu.startYear} — {edu.endYear}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                    <AwardIcon className="w-4 h-4 text-[var(--accent)]" />
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        Certifications
                    </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="flex items-center gap-3 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)]"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--accent-glow)] flex items-center justify-center">
                                <AwardIcon className="w-4 h-4 text-[var(--accent)]" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[var(--text-primary)]">
                                    {cert.name}
                                </p>
                                <Badge size="sm" variant="accent">{cert.issuer}</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Matrix */}
            <section className="mb-12">
                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skillGroups.map((group) => (
                        <Card key={group.category} padding="sm">
                            <h3 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {group.skills.map((skill) => (
                                    <Badge key={skill} size="md">{skill}</Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Languages */}
            <section>
                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
                    Languages
                </h2>
                <div className="flex gap-4">
                    {languages.map((lang) => (
                        <div
                            key={lang.name}
                            className="px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)]"
                        >
                            <p className="text-sm font-medium text-[var(--text-primary)]">
                                {lang.name}
                            </p>
                            <p className="text-xs text-[var(--text-muted)]">{lang.level}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
