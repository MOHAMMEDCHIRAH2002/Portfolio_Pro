"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/data/resume";
import { BriefcaseIcon } from "@/components/Icons";

export default function ExperienceSection() {
    return (
        <SectionWrapper
            id="experience"
            title="Experience"
            subtitle="My professional journey across different roles and industries."
        >
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-[var(--border)]" />

                <div className="space-y-6">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="relative flex gap-4"
                        >
                            {/* Timeline dot */}
                            <div className="relative z-10 flex-shrink-0 mt-1">
                                <div
                                    className={`w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center border ${i === 0
                                            ? "bg-[var(--accent-glow)] border-[var(--border-accent)]"
                                            : "bg-[var(--surface)] border-[var(--border)]"
                                        }`}
                                >
                                    <BriefcaseIcon
                                        className={`w-4 h-4 ${i === 0
                                                ? "text-[var(--accent)]"
                                                : "text-[var(--text-muted)]"
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-2">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                                        {exp.role}
                                    </h3>
                                    {exp.type === "freelance" && (
                                        <Badge variant="accent" size="sm">
                                            Freelance
                                        </Badge>
                                    )}
                                    {exp.type === "internship" && (
                                        <Badge variant="outline" size="sm">
                                            Internship
                                        </Badge>
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
                                        <li
                                            key={j}
                                            className="text-sm text-[var(--text-secondary)] leading-relaxed"
                                        >
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                                {exp.stack.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {exp.stack.map((tech) => (
                                            <Badge key={tech} size="sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
