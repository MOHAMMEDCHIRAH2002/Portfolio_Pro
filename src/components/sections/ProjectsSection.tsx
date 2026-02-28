"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/data/resume";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/Icons";

const featured = projects.filter((p) => p.featured);

export default function ProjectsSection() {
    return (
        <SectionWrapper
            id="projects"
            title="Featured Projects"
            subtitle="Selected work showcasing my expertise across different domains."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {featured.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <Link href={`/projects/${project.slug}`}>
                            <div className="group relative card-surface-luxury border border-[var(--border)] rounded-[20px] shadow-[var(--shadow-card)] overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(56,189,248,0.06)]">
                                {/* Top edge highlight — glass */}
                                <div className="absolute inset-x-0 top-0 h-px z-10 pointer-events-none bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />
                                {/* Project Image / Placeholder */}
                                <div className="relative h-48 bg-[var(--surface-2)] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-3)] to-transparent" />
                                    {/* Soft spotlight */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(255,255,255,0.03),transparent_70%)]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-5xl font-bold text-[var(--text-faint)] opacity-15 select-none tracking-wider">
                                            {project.title.slice(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                    {/* Bottom gradient for readability */}
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--surface-1)] to-transparent" />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-[rgba(56,189,248,0.04)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-[var(--surface-1)]/90 backdrop-blur-sm rounded-[var(--radius-md)] text-sm font-medium text-[var(--accent-text)] border border-[rgba(255,255,255,0.08)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[var(--shadow-card)]">
                                            View Case Study →
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent-text)] transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-[var(--text-faint)] mt-0.5">
                                                {project.client}
                                            </p>
                                        </div>
                                        <ExternalLinkIcon className="w-4 h-4 text-[var(--text-faint)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.stack.map((tech) => (
                                            <Badge key={tech} size="sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* View All Projects */}
            <div className="mt-8 text-center">
                <Link href="/projects">
                    <Button variant="outline" icon={<ArrowRightIcon className="w-4 h-4" />}>
                        View All Projects
                    </Button>
                </Link>
            </div>
        </SectionWrapper>
    );
}
