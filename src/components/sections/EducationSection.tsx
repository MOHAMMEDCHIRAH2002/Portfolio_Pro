"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { education, certifications } from "@/data/resume";
import { GraduationCapIcon, AwardIcon } from "@/components/Icons";

export default function EducationSection() {
    return (
        <SectionWrapper
            id="education"
            title="Education & Certifications"
            subtitle="Academic background and professional credentials."
        >
            <div className="space-y-8">
                {/* Education */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCapIcon className="w-4 h-4 text-[var(--accent)]" />
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                            Education
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.08 }}
                            >
                                <Card padding="sm" className="h-full">
                                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-sm text-[var(--accent-light)]">
                                        {edu.institution}
                                    </p>
                                    <p className="text-xs text-[var(--text-muted)] mt-1">
                                        {edu.field}
                                    </p>
                                    <p className="text-xs text-[var(--text-muted)] mt-1">
                                        {edu.startYear} — {edu.endYear}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <AwardIcon className="w-4 h-4 text-[var(--accent)]" />
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                            Certifications
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                                <div className="flex items-center gap-3 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] hover:border-[var(--border-accent)] transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-[var(--accent-glow)] flex items-center justify-center flex-shrink-0">
                                        <AwardIcon className="w-4 h-4 text-[var(--accent)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--text-primary)]">
                                            {cert.name}
                                        </p>
                                        <Badge size="sm" variant="accent">
                                            {cert.issuer}
                                        </Badge>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
