"use client";

import { resumeData } from '@/data/resume';
import { Button } from '@/components/ui/Button';
import { MapPin, Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-6xl">
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
                        <span className="text-accent font-mono font-normal">{'//'}</span> Initialize Connection
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl ml-16 font-mono">
                    Available for contract work, technical consulting, and full-time opportunities.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Form Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-2 lg:order-1 p-8 md:p-10 premium-glass border border-border rounded-2xl relative"
                >
                    <div className="absolute top-0 right-10 w-32 h-1 bg-accent/80 rounded-b-md shadow-[0_0_15px_rgba(0,255,65,0.6)]"></div>

                    <h2 className="text-2xl font-bold font-sans text-foreground mb-8">Secure Transmission</h2>

                    <form className="space-y-6 flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 group">
                                <label htmlFor="name" className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-focus-within:text-accent transition-colors">Identifier</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-black/50 border-b-2 border-border px-0 py-3 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 font-sans"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label htmlFor="email" className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-focus-within:text-accent transition-colors">Return Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-black/50 border-b-2 border-border px-0 py-3 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 font-sans"
                                    placeholder="john@domain.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label htmlFor="subject" className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-focus-within:text-accent transition-colors">Subject Vector</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-black/50 border-b-2 border-border px-0 py-3 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 font-sans"
                                placeholder="Project Inquiry / Opportunity"
                            />
                        </div>

                        <div className="space-y-2 flex-grow group">
                            <label htmlFor="message" className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-focus-within:text-accent transition-colors">Payload</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full bg-black/50 border-2 border-border rounded-lg px-4 py-3 mt-2 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-muted-foreground/30 font-sans"
                                placeholder="Describe the optimal solution parameters..."
                            ></textarea>
                        </div>

                        <Button type="button" className="w-full group mt-4 h-14 text-base">
                            <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Transmit Payload
                        </Button>
                        <p className="text-xs font-mono text-muted-foreground text-center mt-4">
                            <span className="text-accent">*</span> Note: Form is a UI simulation. Use direct channels below for guaranteed delivery.
                        </p>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="order-1 lg:order-2 flex flex-col justify-center space-y-16 lg:pl-12"
                >
                    <div className="space-y-10">
                        <div className="flex items-start group">
                            <div className="p-4 bg-neutral-900 border border-border rounded-xl text-accent mr-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Base of Operations</h3>
                                <p className="text-foreground font-sans text-lg">{resumeData.location}</p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="p-4 bg-neutral-900 border border-border rounded-xl text-accent mr-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Primary Email</h3>
                                <a href={`mailto:${resumeData.email}`} className="text-foreground font-sans text-lg hover:text-accent transition-colors block">
                                    {resumeData.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="p-4 bg-neutral-900 border border-border rounded-xl text-accent mr-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Direct Line</h3>
                                <a href={`tel:${resumeData.phone}`} className="text-foreground font-sans text-lg hover:text-accent transition-colors block">
                                    {resumeData.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-border/50">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">External Networks</h3>
                        <div className="flex space-x-4">
                            <a
                                href={resumeData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center h-12 px-6 bg-neutral-900 border border-border rounded-full hover:border-accent/50 hover:text-accent group transition-all"
                            >
                                <Linkedin className="w-5 h-5 mr-3 group-hover:text-accent text-muted-foreground transition-colors" />
                                <span className="font-sans font-semibold text-sm">LinkedIn</span>
                            </a>
                            <a
                                href={resumeData.github !== "[ADD LINK]" ? resumeData.github : "https://github.com"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center h-12 px-6 bg-neutral-900 border border-border rounded-full hover:border-accent/50 hover:text-accent group transition-all"
                            >
                                <Github className="w-5 h-5 mr-3 group-hover:text-accent text-muted-foreground transition-colors" />
                                <span className="font-sans font-semibold text-sm">GitHub</span>
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
