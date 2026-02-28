import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/resume";
import { generatePageMetadata } from "@/lib/seo";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/Icons";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return generatePageMetadata(
        project.title,
        project.description,
        `/projects/${slug}`
    );
}

export default async function ProjectCaseStudy({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <div className="pt-12 lg:pt-20 pb-16">
            {/* Back */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-8"
            >
                ← Back to Projects
            </Link>

            {/* Header */}
            <div className="mb-10">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="accent" size="sm">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mt-2 mb-2">
                    {project.title}
                </h1>
                <p className="text-sm text-[var(--accent-light)] font-medium">
                    Client: {project.client}
                </p>
            </div>

            {/* Screenshot Placeholder */}
            <div className="relative h-64 sm:h-80 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] mb-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />
                <div className="text-center z-10">
                    <p className="text-sm text-[var(--text-muted)]">[ADD SCREENSHOTS]</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                        Add project screenshots to public/projects/{project.slug}/
                    </p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    {/* Overview */}
                    <section>
                        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                            Overview
                        </h2>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {project.longDescription}
                        </p>
                    </section>

                    {/* Problem */}
                    <section>
                        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                            The Problem
                        </h2>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {project.problem}
                        </p>
                    </section>

                    {/* Solution */}
                    <section>
                        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                            The Solution
                        </h2>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {project.solution}
                        </p>
                    </section>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    {/* Tech Stack */}
                    <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)]">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                                <Badge key={tech} size="md">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)]">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                            Links
                        </h3>
                        <div className="space-y-2 text-sm">
                            <p className="text-[var(--text-muted)]">
                                Live: {project.liveUrl}
                            </p>
                            <p className="text-[var(--text-muted)]">
                                GitHub: {project.githubUrl}
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="p-5 bg-[var(--accent-glow)] border border-[var(--border-accent)] rounded-[var(--radius-lg)]">
                        <p className="text-sm text-[var(--accent-light)] font-medium mb-2">
                            Interested in a similar project?
                        </p>
                        <Link href="/#contact">
                            <Button
                                size="sm"
                                icon={<ArrowRightIcon className="w-3.5 h-3.5" />}
                            >
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
