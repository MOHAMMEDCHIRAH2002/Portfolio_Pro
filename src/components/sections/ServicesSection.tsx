"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { services } from "@/data/resume";
import { CheckIcon, CodeIcon, CpuIcon, LightbulbIcon } from "@/components/Icons";

const iconMap: Record<string, React.ReactNode> = {
    code: <CodeIcon className="w-5 h-5 text-[var(--accent)]" />,
    cpu: <CpuIcon className="w-5 h-5 text-[var(--accent)]" />,
    lightbulb: <LightbulbIcon className="w-5 h-5 text-[var(--accent)]" />,
};

export default function ServicesSection() {
    return (
        <SectionWrapper
            id="services"
            title="Services"
            subtitle="Productized solutions tailored to your business needs."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {services.map((service, i) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <Card glow className="h-full">
                            <div className="flex flex-col h-full">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--accent-glow)] flex items-center justify-center mb-4">
                                    {iconMap[service.icon] || iconMap.code}
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6 flex-1">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                                        >
                                            <CheckIcon className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Price */}
                                <div className="pt-4 border-t border-[var(--border)]">
                                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                                        {service.price}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
