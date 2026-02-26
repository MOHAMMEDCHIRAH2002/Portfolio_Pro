"use client";

import { resumeData } from '@/data/resume';
import { Section } from '@/components/ui/Section';
import { MonitorSmartphone, Code2, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const defaultServices = [
    {
        icon: MonitorSmartphone,
        title: "Full-Stack Web Development",
        description: "End-to-end development of modern, responsive web applications prioritizing user experience and scalable architectures.",
        packages: [
            "React / Next.js Frontends",
            "Node.js / Express Backends",
            "MongoDB / SQL Databases",
            "Authentication & Security"
        ],
        price: "Starting at $1,500" // Placeholders
    },
    {
        icon: Code2,
        title: "API Integration & Development",
        description: "Designing and building robust RESTful APIs. Seamlessly connecting decoupled systems and migrating legacy data.",
        packages: [
            ".NET / Spring Boot",
            "Database Design & Migration",
            "Real-time Sockets (SignalR/Ws)",
            "Third-party API Integrations"
        ],
        price: "Starting at $1,000" // Placeholders
    },
    {
        icon: Factory,
        title: "Industrial Data Solutions",
        description: "Specialized engineering for industrial contexts using AVEVA PI System. Centralizing operational data for real-time monitoring.",
        packages: [
            "PI AF Configuration",
            "PI Data Archive Management",
            "Event Frames & Alerts",
            "Custom Dashboarding"
        ],
        price: "Custom Quote" // Placeholders
    }
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-6xl w-full">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-24 text-center max-w-3xl mx-auto"
            >
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-mono tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2"></span>
                    Available for Contracts
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-foreground mb-6">
                    Engineering <span className="text-accent italic">Exceptional</span> Systems
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    From bespoke web platforms to complex industrial data integrations. I deliver robust solutions tailored to your operational needs.
                </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                {defaultServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="premium-glass border border-border rounded-2xl flex flex-col overflow-hidden group hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 relative"
                        >
                            {/* Top Accent Line */}
                            <div className="h-1 w-full bg-border group-hover:bg-accent transition-colors duration-500"></div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="w-14 h-14 bg-neutral-900 border border-border rounded-xl flex items-center justify-center text-accent mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold font-sans text-foreground mb-4">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.packages.map((item, i) => (
                                        <div key={i} className="flex items-start text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-neutral-950/50 mt-auto border-t border-border/50 flex items-center justify-between">
                                <span className="font-mono text-sm text-muted-foreground">
                                    {service.price}
                                </span>
                                <Button href="/contact" variant="ghost" className="p-0 h-auto hover:bg-transparent group/btn">
                                    Inquire <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Process */}
            <Section title="Delivery Workflow">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 bg-neutral-950/40 p-8 md:p-12 border border-border rounded-2xl premium-glass relative overflow-hidden">
                    {/* Background line connecting steps on Desktop */}
                    <div className="hidden md:block absolute top-[88px] left-[10%] right-[10%] h-px bg-border z-0"></div>

                    {[
                        { step: "01", title: "Discovery", desc: "Analyzing requirements & data structures." },
                        { step: "02", title: "Architecture", desc: "Designing system boundaries & UI/UX." },
                        { step: "03", title: "Execution", desc: "Agile development phase." },
                        { step: "04", title: "Delivery", desc: "Testing, deployment & handover." }
                    ].map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center p-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-black border border-accent flex items-center justify-center text-accent font-mono font-bold text-xl mb-6 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                                {phase.step}
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">{phase.title}</h4>
                            <p className="text-sm text-muted-foreground">{phase.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
