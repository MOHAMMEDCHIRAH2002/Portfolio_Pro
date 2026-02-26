"use client";

import Link from 'next/link';
import { Project } from '@/data/resume';
import { Badge } from './Badge';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative h-full rounded-xl premium-glass border-border overflow-hidden flex flex-col hover:border-accent/40 transition-colors"
        >
            {/* Glow Effect behind the card on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full p-6 relative z-10">

                {/* Top bar */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.category.map(cat => (
                            <span key={cat} className="text-[10px] uppercase font-mono tracking-wider text-accent border border-accent/20 bg-accent/5 px-2 py-1 rounded-sm">
                                {cat}
                            </span>
                        ))}
                    </div>
                    <motion.div
                        className="text-muted-foreground group-hover:text-accent p-2 -m-2 rounded-full group-hover:bg-accent/10 transition-colors"
                        whileHover={{ rotate: 15 }}
                    >
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl md:text-2xl font-bold font-sans text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                {/* Stack */}
                <div className="mt-auto pt-4 border-t border-border/50">
                    <h4 className="text-xs font-mono text-muted-foreground mb-3 opacity-70">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech} className="text-xs py-0 px-2 bg-black/40 border-black">{tech}</Badge>
                        ))}
                        {project.techStack.length > 4 && (
                            <span className="text-xs text-muted-foreground font-mono flex items-center ml-1">+{project.techStack.length - 4}</span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
