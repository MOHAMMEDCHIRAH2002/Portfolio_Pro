"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/resume";
import Badge from "@/components/ui/Badge";
import { ExternalLinkIcon } from "@/components/Icons";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function ProjectsPage() {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const filtered = activeTag
        ? projects.filter((p) => p.tags.includes(activeTag))
        : projects;

    return (
        <div className="pt-12 lg:pt-20 pb-16">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-[var(--text)] mb-2">
                    Projects
                </h1>
                <p className="text-[var(--text-muted)] text-sm max-w-xl">
                    A collection of projects I&apos;ve built across industries — from
                    industrial IoT to full-stack web applications.
                </p>
                <div className="mt-4 h-[1px] w-12 bg-[var(--accent)] rounded-full" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
                <button
                    onClick={() => setActiveTag(null)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-[var(--radius-full)] border transition-all cursor-pointer ${activeTag === null
                            ? "bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]"
                            : "bg-[var(--surface-1)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--border-strong)]"
                        }`}
                >
                    All
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-[var(--radius-full)] border transition-all cursor-pointer ${activeTag === tag
                                ? "bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]"
                                : "bg-[var(--surface-1)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--border-strong)]"
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <AnimatePresence mode="popLayout">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {filtered.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={`/projects/${project.slug}`}>
                                <div className="group card-surface border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)] overflow-hidden hover:border-[var(--border-accent)] hover:shadow-[var(--glow-accent)] transition-all duration-300 hover:-translate-y-0.5">
                                    {/* Image Placeholder */}
                                    <div className="relative h-44 bg-[var(--surface-2)] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-2)] to-transparent" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-5xl font-bold text-[var(--text-faint)] opacity-20 tracking-wider">
                                                {project.title.slice(0, 2).toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--surface-1)] to-transparent" />
                                        <div className="absolute inset-0 bg-[var(--accent-3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="px-4 py-2 bg-[var(--surface-1)]/90 backdrop-blur-sm rounded-[var(--radius-md)] text-sm font-medium text-[var(--accent-text)] border border-[var(--border-accent)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[var(--shadow-card)]">
                                                View Details →
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h2 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent-text)] transition-colors">
                                                    {project.title}
                                                </h2>
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
                                        <div className="flex gap-1.5 mt-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="accent" size="sm">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
}
