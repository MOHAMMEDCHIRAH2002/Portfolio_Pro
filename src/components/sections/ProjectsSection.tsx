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
                            <div className="group relative card-surface border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)] overflow-hidden hover:border-[var(--border-accent)] hover:shadow-[var(--glow-accent)] transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
                                {/* Project Image / Placeholder */}
                                <div className="relative h-48 bg-[var(--surface-2)] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-2)] to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-5xl font-bold text-[var(--text-faint)] opacity-20 select-none tracking-wider">
                                            {project.title.slice(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                    {/* Bottom gradient for readability */}
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--surface-1)] to-transparent" />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-[var(--accent-3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-[var(--surface-1)]/90 backdrop-blur-sm rounded-[var(--radius-md)] text-sm font-medium text-[var(--accent-text)] border border-[var(--border-accent)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[var(--shadow-card)]">
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
