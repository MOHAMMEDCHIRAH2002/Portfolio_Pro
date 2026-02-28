import Link from "next/link";
import { services } from "@/data/resume";
import { generatePageMetadata } from "@/lib/seo";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
    CheckIcon,
    CodeIcon,
    CpuIcon,
    LightbulbIcon,
    ArrowRightIcon,
} from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
    "Services",
    "Premium web development, AVEVA PI System integration, and technical consulting services.",
    "/services"
);

const iconMap: Record<string, React.ReactNode> = {
    code: <CodeIcon className="w-6 h-6 text-[var(--accent)]" />,
    cpu: <CpuIcon className="w-6 h-6 text-[var(--accent)]" />,
    lightbulb: <LightbulbIcon className="w-6 h-6 text-[var(--accent)]" />,
};

const process = [
    {
        step: "01",
        title: "Discovery",
        description:
            "We discuss your goals, requirements, and constraints to define the scope.",
    },
    {
        step: "02",
        title: "Proposal",
        description:
            "I deliver a clear proposal with timeline, milestones, and transparent pricing.",
    },
    {
        step: "03",
        title: "Development",
        description:
            "Iterative development with regular check-ins to keep you in the loop.",
    },
    {
        step: "04",
        title: "Delivery",
        description:
            "Final review, testing, deployment, and handoff with documentation.",
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-12 lg:pt-20 pb-16">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    Services
                </h1>
                <p className="text-[var(--text-secondary)] text-sm max-w-xl">
                    Tailored solutions for your business. From full-stack development to
                    industrial system integration.
                </p>
                <div className="mt-4 h-[1px] w-12 bg-[var(--accent)] rounded-full" />
            </div>

            {/* Service Packages */}
            <section className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {services.map((service) => (
                        <Card key={service.id} glow className="h-full">
                            <div className="flex flex-col h-full">
                                <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[var(--accent-glow)] flex items-center justify-center mb-5">
                                    {iconMap[service.icon] || iconMap.code}
                                </div>
                                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                                    {service.title}
                                </h2>
                                <p className="text-sm text-[var(--text-secondary)] mb-5">
                                    {service.description}
                                </p>
                                <ul className="space-y-2.5 mb-6 flex-1">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                                        >
                                            <CheckIcon className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-[var(--border)]">
                                    <span className="text-sm text-[var(--text-muted)]">
                                        {service.price}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="mb-16">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-8">
                    How I Work
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {process.map((step) => (
                        <div
                            key={step.step}
                            className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)]"
                        >
                            <span className="text-2xl font-bold text-[var(--accent)]">
                                {step.step}
                            </span>
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] mt-3 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-12 px-6 bg-[var(--accent-glow)] border border-[var(--border-accent)] rounded-[var(--radius-lg)]">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                    Ready to Start Your Project?
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
                    Let&apos;s discuss your requirements and find the best solution for
                    your business.
                </p>
                <Link href="/contact">
                    <Button size="lg" icon={<ArrowRightIcon className="w-4 h-4" />}>
                        Get in Touch
                    </Button>
                </Link>
            </section>
        </div>
    );
}
