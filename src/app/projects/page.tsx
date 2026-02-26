"use client";

import { useState } from 'react';
import { resumeData } from '@/data/resume';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
    const [filter, setFilter] = useState<string>('All');

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(resumeData.projects.flatMap(p => p.category)))];

    const filteredProjects = filter === 'All'
        ? resumeData.projects
        : resumeData.projects.filter(p => p.category.includes(filter));

    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-6xl w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 md:mb-24"
            >
                <div className="flex items-center space-x-4 mb-6">
                    <span className="h-[2px] w-12 bg-accent"></span>
                    <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground">
                        <span className="text-accent font-mono font-normal">{'//'}</span> Systems Gallery
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl ml-16 font-mono">
                    A collection of engineered architectures, platforms, and integrations.
                </p>
            </motion.div>

            {/* Filters */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-wrap gap-3 mb-12"
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 rounded-md font-mono text-sm transition-all duration-300 ${filter === cat
                                ? 'bg-accent text-black font-semibold box-glow shadow-md shadow-accent/20'
                                : 'bg-neutral-900/50 text-muted-foreground hover:bg-neutral-800 hover:text-foreground border border-border pb-2'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="w-full py-24 text-center text-muted-foreground font-mono">
                    <span className="text-accent">{'>'}</span> No systems matching filter "{filter}" found.
                </div>
            )}
        </div>
    );
}
