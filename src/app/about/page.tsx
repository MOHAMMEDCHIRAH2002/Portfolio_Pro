"use client";

import { resumeData } from '@/data/resume';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Briefcase, GraduationCap, Calendar, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
            >
                <div className="flex items-center space-x-4 mb-8">
                    <span className="h-[2px] w-12 bg-accent"></span>
                    <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground">
                        <span className="text-accent font-mono font-normal">{'//'}</span> System Profile
                    </h1>
                </div>

                <div className="relative p-8 md:p-12 premium-glass rounded-xl border border-border/50 font-sans text-lg text-muted-foreground leading-relaxed">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                    {resumeData.summary}

                    <div className="mt-8 pt-8 border-t border-border/50 flex flex-wrap gap-4">
                        <Button href={resumeData.resumePdf} variant="outline" className="group">
                            <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" /> Export Resume
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Experience Timeline */}
            <Section title="Operational History">
                <div className="relative border-l-2 border-border ml-4 md:ml-6 space-y-16 mt-8">
                    {/* Glowing pulse on the timeline line */}
                    <div className="absolute top-0 bottom-0 -left-[2px] w-[2px] bg-gradient-to-b from-accent/50 via-transparent to-transparent h-32"></div>

                    {resumeData.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-10 md:pl-12"
                        >
                            {/* Timeline node */}
                            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-black border-2 border-accent shadow-[0_0_10px_rgba(0,255,65,0.4)] flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            </div>

                            <div className="premium-glass p-6 md:p-8 rounded-xl border border-border/50 group hover:border-accent/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold font-sans text-foreground group-hover:text-accent transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center mt-2 text-muted-foreground font-mono text-sm">
                                            <Briefcase className="w-4 h-4 mr-2 text-accent/70" /> {job.company}
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0 px-3 py-1 bg-neutral-900 border border-border rounded-full flex items-center shrink-0 w-max font-mono text-xs">
                                        <Calendar className="w-3 h-3 mr-2 text-accent/70" /> {job.period}
                                    </div>
                                </div>
                                <ul className="space-y-3 mt-6">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                            <span className="text-accent mr-3 mt-1.5 flex-shrink-0">▹</span>
                                            <span className="leading-relaxed">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Education */}
            <Section title="Academic Knowledge Base">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 premium-glass border border-border rounded-xl flex flex-col h-full hover:border-accent/40 transition-all font-sans"
                        >
                            <div className="w-12 h-12 bg-neutral-900 border border-border rounded-xl flex items-center justify-center text-accent mb-6 shadow-inner">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{edu.degree}</h3>
                            <div className="text-muted-foreground flex items-center mb-4 text-sm">
                                {edu.institution}
                            </div>
                            <div className="mt-auto pt-4 border-t border-border/50 font-mono text-xs text-muted-foreground flex items-center">
                                <Calendar className="w-3 h-3 mr-2" /> {edu.period}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
