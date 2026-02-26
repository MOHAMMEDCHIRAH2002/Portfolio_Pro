"use client";

import { resumeData } from '@/data/resume';
import { Button } from '@/components/ui/Button';
import { ArrowRight, FileText, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPage() {
    // Scaffold date generation for placeholders
    const generateDate = (index: number) => {
        const date = new Date();
        date.setDate(date.getDate() - (index * 14)); // space them out
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 md:mb-24"
            >
                <div className="flex items-center space-x-4 mb-6">
                    <span className="h-[2px] w-12 bg-accent"></span>
                    <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground">
                        <span className="text-accent font-mono font-normal">{'//'}</span> Knowledge Base
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl ml-16 font-mono">
                    Technical documentation, architectural insights, and engineering logs.
                </p>
            </motion.div>

            {/* Articles List */}
            <div className="space-y-6 relative border-l-2 border-border/50 ml-4 md:ml-8 pl-8 md:pl-12">
                <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-accent/40 via-transparent to-transparent h-48 pointer-events-none"></div>

                {resumeData.blogPosts.map((post, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group relative"
                    >
                        {/* Connecting Line & Dot */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-[42px] md:-left-[58px] w-6 md:w-10 h-px bg-border group-hover:bg-accent/50 transition-colors z-0"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 -left-[45px] md:-left-[61px] w-2.5 h-2.5 rounded-full bg-black border border-accent group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(0,255,65,0.6)] transition-all z-10 box-content"></div>

                        <div className="p-6 md:p-8 premium-glass border border-border rounded-xl hover:border-accent/40 transition-colors duration-300 relative overflow-hidden">
                            {/* Hover effect gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                <div className="space-y-3 flex-grow">
                                    <h2 className="text-xl md:text-2xl font-bold font-sans text-foreground group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center text-xs font-mono text-muted-foreground gap-4">
                                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1.5" /> {generateDate(index)}</span>
                                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1.5" /> 5 min read</span>
                                        <span className="flex items-center text-accent/70 px-2 py-0.5 bg-accent/5 rounded-sm border border-accent/10">Technical Log</span>
                                    </div>
                                </div>

                                <div className="shrink-0 mt-4 md:mt-0">
                                    {/* Placeholder Link */}
                                    <Button href="#" variant="ghost" className="h-10 px-4 group/btn border border-transparent hover:border-accent/20">
                                        Read Log <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div className="mt-16 text-center text-muted-foreground font-mono text-sm flex items-center justify-center">
                <FileText className="w-4 h-4 mr-2" /> End of logs.
            </div>
        </div>
    );
}
